import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils.js';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative overflow-hidden rounded-lg border border-off-white/10 bg-graphite', className)}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative flex flex-col gap-1 p-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-sm font-medium text-medium-gray', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('relative p-4 pt-0', className)} {...props} />
);
CardContent.displayName = 'CardContent';

/**
 * Glow sutil em Signal Blue, posicionado atrás do conteúdo do card — mesma
 * técnica da referência visual (gradiente de destaque desvanecendo até
 * transparente), só que na cor de acento oficial da marca em vez de verde.
 */
export function CardGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-signal-blue/20 to-transparent',
        className
      )}
    />
  );
}
