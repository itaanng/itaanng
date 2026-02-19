import type * as cssv from 'css-variants';

import { cv, cx, scv } from 'css-variants';
import { twMerge } from 'tailwind-merge';

export type VariantProps<V extends ReturnType<typeof cv | typeof scv>> = V extends ReturnType<typeof tv> ? Exclude<Parameters<V>[0], undefined> : Parameters<V>[0];
export type VariantSlots<V extends ReturnType<typeof scv>> = keyof ReturnType<V>;

// ClasName resolver
export const cn: typeof cx = (...args) => twMerge(cx(...args));
// Basic component variant's styling & schema definition
export const tv = <T extends cssv.ClassVariantRecord>(config: cssv.ClassVariantDefinition<T>) => Object.assign(cv<T>({ ...config, classNameResolver: cn }), { config });
// Slotted component variant's styling & schema definition
export const tvs = <const S extends string, const T extends cssv.SlotClassVariantRecord<S> | undefined>(config: cssv.SlotClassVariantDefinition<S, T>) => Object.assign(scv({ ...config, classNameResolver: cn }), { config });

type GSlotComponent<TProps extends GSlotComponentProps = GSlotComponentProps> = (props: TProps) => React.ReactNode;
type GSlotComponentProps = { children?: React.ReactNode; className?: string };
type GSlotRecord = Record<string, GSlotComponent> & { Root: GSlotComponent };
type GSlotVariants<S extends GSlotRecord> = cssv.SlotClassVariantRecord<keyof S & string>;
export const tvsg = <const S extends GSlotRecord, const T extends GSlotVariants<S> | undefined>({ slots, variants }: { slots: S; variants?: T }) => ({
  // extend: <const ES extends GSlots, const ET extends GSlotVariants<ES & S> | undefined>(extended: { slots: ES; variants?: ET }) =>
  //   tvsgs<ES & S, ET & T>({ slots: { ...slots, ...extended.slots }, variants: { ...(variants || {}), ...(extended.variants || {}) } as ET & T }),
  slots,
  use: tvs({ slots: Object.keys(slots) as (keyof S & string)[], variants }),
});
