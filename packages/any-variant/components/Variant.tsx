import { cn, type tv } from '#lib/utils';
import type { ClassVariantFnProps, ClassVariantRecord } from 'css-variants';

// const Variant = <TDef extends ReturnType<typeof tv>>(_props: { children: React.ReactNode }) => null;
type FC<TProps> = (props: TProps) => React.ReactElement<TProps>;

type TVariantProps<T extends ClassVariantRecord, TProps> = ClassVariantFnProps<T> & Omit<TProps, keyof T>;
function defineVariant<T extends ClassVariantRecord, TProps>(Root: FC<TProps> & FC<TVariantProps<T, TProps>>, use: ReturnType<typeof tv<T>>, mock: TVariantProps<T, TProps>): FC<TVariantProps<T, TProps>>;
function defineVariant<T extends ClassVariantRecord, TProps>(Root: FC<TProps> & FC<Partial<TVariantProps<T, TProps>>>, use: ReturnType<typeof tv<T>>, mock?: Partial<TVariantProps<T, TProps>>): FC<Partial<TVariantProps<T, TProps>>>;
function defineVariant<T extends ClassVariantRecord, TProps>(Root: FC<TProps> & FC<Partial<TVariantProps<T, TProps>>>, use: ReturnType<typeof tv<T>>, mock: Partial<TVariantProps<T, TProps>> = {}) {
  const { props: defaults } = Root({ ...(use.config.defaultVariants || {}), ...mock });

  return function Variant(props: Partial<TVariantProps<T, TProps>>) {
    const ui = {} as ClassVariantFnProps<T>;
    for (const key in use.config.variants) ui[key] = props[key] || defaults[key]! || mock[key]!;

    return <Root {...defaults} {...props} className={cn(defaults.className, use(ui), props.className)} />;
  };
}

export { defineVariant };
