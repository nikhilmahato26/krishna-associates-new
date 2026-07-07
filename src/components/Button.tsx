import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'white' | 'outline-white';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
  href?: never;
  to?: never;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLink extends BaseProps {
  href: string;
  to?: never;
  external?: boolean;
  onClick?: () => void;
}

interface ButtonAsRouterLink extends BaseProps {
  to: string;
  href?: never;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink;

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800 shadow-[var(--shadow-soft)]',
  outline:
    'border border-ink-200 text-ink-800 hover:border-brand-500 hover:text-brand-700 bg-white',
  ghost:
    'text-ink-700 hover:text-brand-700 hover:bg-brand-50',
  white:
    'bg-white text-brand-700 hover:bg-brand-50 hover:text-brand-800 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]',
  'outline-white':
    'border border-white/30 text-white hover:bg-white hover:text-brand-700 bg-white/10 backdrop-blur-[2px]',
};

const sizeStyles: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[15px] px-5 py-2.5',
  lg: 'text-base px-6 py-3',
};

export const Button = (props: ButtonProps) => {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className,
    fullWidth,
  } = props;

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className,
  );

  // Router link
  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  // External link
  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        onClick={props.onClick}
        target={props.external ? '_blank' : undefined}
        rel={props.external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  // Regular button — strip our custom props before spreading onto the DOM element
  const {
    variant: _variant,
    size: _size,
    fullWidth: _fullWidth,
    className: _className,
    children: _childrenProp,
    ...buttonProps
  } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};
