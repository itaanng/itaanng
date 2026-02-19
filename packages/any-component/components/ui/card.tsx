import { cn } from '@itaanng/any-variant/lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('bg-card text-card-foreground ring-foreground/10 flex flex-col gap-4 overflow-hidden rounded-sm py-4 shadow-sm transition-all hover:shadow-xl dark:shadow-black/50', className)} data-slot='card' {...props} />;
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('col-[2/3] [*:has(>&)]:grid [*:has(>&)]:grid-cols-[1fr_auto] [*:has(>&)]:gap-4 [*:has(>&)>*:not(&)]:col-[1/2]', className)} data-slot='card-action' {...props} />;
}

function CardAvatar({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('col-[1/2] [&+*]:col-[2/3] [*:has(>&)]:grid [*:has(>&)]:grid-cols-[auto_1fr] [*:has(>&)]:gap-4 [*:has(>&)>*:not(&,&+*)]:col-span-full', className)} data-slot='card-avatar' {...props} />;
}

function CardBackground({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('overflow-hidden [&,&>img]:absolute [&,&>img]:inset-0 [&,&>img]:size-full [&>img]:object-cover [*:has(&)]:relative', className)} data-slot='card-background' {...props} />;
}

function CardBadge({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex w-max gap-4', className)} data-slot='card-badge' {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('px-4', className)} data-slot='card-content' {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('text-muted-foreground prose max-w-full', className)} data-slot='card-description' {...props} />;
}

function CardExcerpt({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('text-accent-foreground prose prose-sm max-w-full', className)} data-slot='card-excerpt' {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('px-4 [.border-t]:pt-4', className)} data-slot='card-footer' {...props} />;
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('px-4 [.border-b]:pb-4', className)} data-slot='card-header' {...props} />;
}

function CardSubtitle({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('text-lg leading-tight font-medium', className)} data-slot='card-subtitle' {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('text-xl leading-none font-semibold', className)} data-slot='card-title' {...props} />;
}

// export { Card, CardAction, CardAvatar, CardContent, CardDescription, CardExcerpt, CardFooter, CardHeader, CardBackground, CardTitle };
export { CardDescription as Description, CardExcerpt as Excerpt, CardSubtitle as Subtitle, CardTitle as Title };
export { CardAction as Action, CardAvatar as Avatar, CardBackground as Background, CardBadge as Badge };
export { CardContent as Content, CardFooter as Footer, CardHeader as Header, Card as Root };
