import type { tvsg, VariantProps } from '#lib/utils';

import * as React from 'react';

type TSlotFn<TGroup extends ReturnType<typeof tvsg>> = ((props?: Omit<VariantProps<TGroup['use']>, 'children'>) => Record<keyof TGroup['slots'], string>) & TGroup['use'];
type TSlotGroup<TGroup extends ReturnType<typeof tvsg>> = TGroup & { use: TSlotFn<TGroup> };

type TSlotNames<TGroup extends ReturnType<typeof tvsg>> = {
  [K in keyof TGroup['slots'] & string]: TGroup['slots'][K] extends ReturnType<typeof defineSlotGroup<infer T extends ReturnType<typeof tvsg>>> ? `${K}.${TSlotNames<T>}` | K : K;
}[keyof TGroup['slots'] & string];

const Slot = <TGroup extends ReturnType<typeof tvsg>>(_props: { children: React.ReactNode; name: TSlotNames<TGroup> }) => null;
const isSlot = <TGroup extends ReturnType<typeof tvsg>>(child: React.ReactNode): child is React.ReactElement<React.ComponentProps<typeof Slot<TGroup>>> => React.isValidElement(child) && child.type === Slot;
const mapSlots = <TGroup extends ReturnType<typeof tvsg>>(children: React.ReactNode[]) => {
  const slots = new Map<(keyof TGroup['slots'] & string) | number, React.ReactNode>();
  for (const child of children) {
    if (isSlot<TGroup>(child)) {
      const slot = child.props.name.replace(/^(\w+)\..*/, '$1');
      const name = child.props.name.replace(/^\w+\.?/, '');
      if (name) slots.set(slot, [slots.get(slot) || [], { ...child, props: { ...child.props, name } }].flat());
      else slots.set(slot, [slots.get(slot) || [], child.props.children].flat());
    } else slots.set(children.indexOf(child), child);
  }
  return slots;
};
const renderSlots = <TGroup extends ReturnType<typeof tvsg>>(slots: React.ReactNode, components: Omit<TGroup['slots'], 'Root'>, classNames: Record<keyof TGroup['slots'], string>) =>
  mapSlots([slots].flat())
    .entries()
    .toArray()
    .map(([key, children]) => (typeof key === 'number' ? children : components[key]({ children, className: classNames[key] })));

export const defineSlotGroup = <TGroup extends ReturnType<typeof tvsg>>(group: TSlotGroup<TGroup>) => {
  const { Root, ...slots } = group.slots as TGroup['slots'];
  function SlotGroup({ children, ...props }: VariantProps<TGroup['use']> & { children?: React.ReactNode }) {
    const classNames = group.use(props);
    return <Root className={classNames.Root}>{...renderSlots(children, slots, classNames)}</Root>;
  }

  SlotGroup.Slot = Slot<TGroup>;
  return SlotGroup;
};
