import { defineVariant } from '@itaanng/any-variant/components/Variant';
import { tv } from '@itaanng/any-variant/lib/utils';
import { Slot } from 'radix-ui';

export const tvButton = tv({
  base: 'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:ring-[3px]',
  defaultVariants: { size: 'md', variant: 'primary' },
  variants: {
    block: { true: 'flex' },
    size: {
      lg: ['rounded-xl text-base font-semibold', 'h-10 has-[>svg:only-child]:w-10 [&_svg:not([class*="size-"])]:size-6 [&_svg:not([class*="size-"]):only-child]:size-8', 'px-6 has-[>svg:not(:only-child)]:px-4', 'gap-2.5 underline-offset-8'],
      md: ['rounded-lg text-sm', 'h-9 has-[>svg:only-child]:w-9 [&_svg:not([class*="size-"])]:size-4 [&_svg:not([class*="size-"]):only-child]:size-5', 'px-4 has-[>svg:not(:only-child)]:px-3', 'gap-2 underline-offset-4'],
      sm: ['rounded-md text-sm', 'h-8 has-[>svg:only-child]:w-8 [&_svg:not([class*="size-"])]:size-3 [&_svg:not([class*="size-"]):only-child]:size-4', 'px-3 has-[>svg:not(:only-child)]:px-2.5', 'gap-1.5 underline-offset-2'],
    },
    variant: {
      primary: 'border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary border-2',
      secondary: 'border-secondary bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary border-2',
      destructive: 'bg-destructive hover:bg-destructive/75 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white',
      ghost: 'text-accent-foreground hover:bg-accent hover:text-foreground dark:hover:bg-accent/90',
      link: 'data-[active=true]:decoration-primary text-accent-foreground hover:text-foreground hover:decoration-foreground/15 grow-0 underline decoration-transparent decoration-2',
      outline: 'border-accent text-muted-foreground disabled:text-muted-foreground hover:bg-muted border-2 shadow-xs disabled:border-transparent',
    },
  },
});

export const Button = defineVariant(({ asChild, ...props }: React.ComponentProps<'button'> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot.Root : 'button';

  return <Comp className='inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&>svg]:shrink-0' data-slot='button' {...props} />;
}, tvButton);
