import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'cream' | 'accent' | 'elevated';
  size?: 'default' | 'large' | 'xlarge';
}

export function Section({
  id,
  children,
  className,
  variant = 'default',
  size = 'default',
}: SectionProps) {
  // Dark theme variants (Xapo Bank style)
  const variantClasses = {
    default: 'bg-bg text-white',
    dark: 'bg-bg-dark text-white',
    cream: 'bg-bg-card text-white',
    accent: 'bg-accent text-white',
    elevated: 'bg-bg-elevated text-white',
  };

  const sizeClasses = {
    default: 'py-24 md:py-32',
    large: 'py-32 md:py-40',
    xlarge: 'py-40 md:py-48',
  };

  return (
    <section
      id={id}
      className={cn(
        'mx-auto w-full scroll-mt-24',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">{children}</div>
    </section>
  );
}
