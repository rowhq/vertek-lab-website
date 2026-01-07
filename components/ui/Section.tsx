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
  // Light theme variants (Webisoft style)
  const variantClasses = {
    default: 'bg-white text-black',
    dark: 'bg-[#f5f5f5] text-black',
    cream: 'bg-[#fafafa] text-black',
    accent: 'bg-accent text-black',
    elevated: 'bg-[#f0f0f0] text-black',
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
