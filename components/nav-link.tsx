import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  active?: boolean;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, href, active, children, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn(
          'text-white text-sm uppercase tracking-widest transition-all duration-300 relative group overflow-hidden',
          {
            'text-red-600': active,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 group-hover:text-red-600 transition-colors duration-300">
          {children}
        </span>
        <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        <span className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </Link>
    );
  }
);
NavLink.displayName = 'NavLink';

export { NavLink };
