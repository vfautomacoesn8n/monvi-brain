import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils.js';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-off-white/15 bg-deep-graphite px-3 py-2 text-sm text-off-white placeholder:text-medium-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';
