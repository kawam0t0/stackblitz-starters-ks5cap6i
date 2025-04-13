import * as React from 'react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          'group relative inline-flex items-center justify-center overflow-hidden px-8 py-3 font-light uppercase tracking-wider transition-all duration-500',
          {
            'bg-gradient-to-r from-red-600 to-red-700 text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/20':
              variant === 'default',
            'border border-white/50 text-white hover:border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10':
              variant === 'outline',
            'text-white hover:text-red-600': variant === 'ghost',
            'text-sm': size === 'default',
            'text-xs px-4 py-2': size === 'sm',
            'text-base px-10 py-4': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        {variant === 'default' && (
          <>
            <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-0"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute top-0 right-0 w-8 h-8 bg-white/10 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-700"></span>
          </>
        )}
        {variant === 'outline' && (
          <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
        )}
      </button>
    );
  }
);
PremiumButton.displayName = 'PremiumButton';

export { PremiumButton };
