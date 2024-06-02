import { Setting } from '@/config';
import { cn } from '@/utils';
import { icons as lucideIcons } from 'lucide-react';

interface LucideIconMap {
  [key: string]: React.ComponentType<{ size: number }>;
}

/* @ts-expect-error: this is works */
const icons: LucideIconMap = lucideIcons;

interface Props {
  name: string;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = Setting.defaultIconSize, className = '' }: Props) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return (
    <div className={cn('text-foreground', className)}>
      <LucideIcon size={size} />
    </div>
  );
};
