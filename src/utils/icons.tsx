import {
  BadgeIndianRupee,
  BookOpenCheck,
  FileCheck2,
  Handshake,
  LineChart,
  Receipt,
  ShieldCheck,
  UserCheck,
  Zap,
  Circle,
  type LucideProps,
} from 'lucide-react';

/**
 * ICON REGISTRY
 * Only the icons actually referenced by name in data files (services.ts, home.ts)
 * live here. This keeps lucide-react tree-shakeable — importing `* as LucideIcons`
 * pulls in the entire ~1500-icon library and was previously the single largest
 * contributor to bundle size.
 *
 * Adding a new dynamic icon? Import it above and register it below.
 */
const iconRegistry: Record<string, React.ComponentType<LucideProps>> = {
  BadgeIndianRupee,
  BookOpenCheck,
  FileCheck2,
  Handshake,
  LineChart,
  Receipt,
  ShieldCheck,
  UserCheck,
  Zap,
};

export const Icon = ({ name, ...props }: { name: string } & LucideProps) => {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    if (import.meta.env.DEV) {
      console.warn(
        `[Icon] "${name}" is not registered in iconRegistry (src/utils/icons.tsx). Add it there.`
      );
    }
    return <Circle {...props} />;
  }

  return <IconComponent {...props} />;
};
