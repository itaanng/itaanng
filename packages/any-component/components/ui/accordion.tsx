'use client';

import type * as React from 'react';

import { cn } from '@itaanng/any-variant/lib/utils';
import { ChevronDownIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionContent({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return <AccordionPrimitive.Content className={cn('data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden pt-0 pb-4 text-sm', className)} data-slot='accordion-content' {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn('border-b last:border-b-0', className)} data-slot='accordion-item' {...props} />;
}

function AccordionTrigger({ children, className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none',
        'focus-visible:border-ring focus-visible:ring-ring/50 hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      data-slot='accordion-trigger'
      {...props}
    >
      {children}
      <ChevronDownIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  );
}

function AccordionHeader({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Header>) {
  return <AccordionPrimitive.Header className={cn('flex', className)} {...props} />;
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
