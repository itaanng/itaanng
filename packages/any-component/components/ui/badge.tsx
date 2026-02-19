import type * as React from 'react';

import { tv } from '@itaanng/any-variant/lib/utils';
import { Slot } from 'radix-ui';
import { defineVariant } from '@itaanng/any-variant/components/Variant';

export const tvBadge = tv({
  base: 'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-2 focus-visible:ring-[3px]',
  defaultVariants: { size: 'md', variant: 'primary' },
  variants: {
    size: {
      lg: ['rounded-lg text-sm font-medium', 'gap-2.5 px-2.5 py-0.75 underline-offset-8 [&_svg:not([class*="size-"])]:size-4'],
      md: ['rounded-md text-xs', 'gap-2 px-2 py-0.5 underline-offset-4 [&_svg:not([class*="size-"])]:size-3'],
      sm: ['rounded-sm text-xs', 'gap-1.5 px-1.5 py-0.25 underline-offset-2 [&_svg:not([class*="size-"])]:size-2'],
    },
    variant: {
      destructive: 'border-destructive bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white',
      outline: 'text-secondary border-secondary bg-secondary-foreground [a&]:hover:bg-secondary/90 [a&]:hover:text-secondary-foreground',
      primary: 'border-primary bg-primary text-primary-foreground [a&]:hover:bg-primary-foreground [a&]:hover:text-primary',
      secondary: 'border-primary bg-secondary text-secondary-foreground [a&]:hover:bg-secondary-foreground [a&]:hover:text-secondary',
    },
  },
});

export const Badge = defineVariant(({ asChild, ...props }: React.ComponentProps<'span'> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot.Root : 'span';

  return <Comp className='inline-flex w-fit max-w-full shrink-0 items-center justify-center gap-1 overflow-hidden text-clip whitespace-nowrap transition-all' data-slot='badge' {...props} />;
}, tvBadge);
