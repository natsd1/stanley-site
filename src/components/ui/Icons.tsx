import {
  Compass,
  Megaphone,
  PenLine,
  Rocket,
  TrendingUp,
  Type,
  Users,
  type LucideProps,
} from "lucide-react";

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z" />
    </svg>
  );
}

export function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.94 4.3 18.9 19.04c-.23 1.02-.83 1.27-1.68.79l-4.64-3.42-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.74 8.63-7.8c.38-.33-.08-.52-.58-.19L7.11 13.04 2.52 11.6c-1-.31-1.02-1 .21-1.48L20.66 3.2c.83-.31 1.56.19 1.28 1.1Z" />
    </svg>
  );
}

const map = {
  megaphone: Megaphone,
  trending: TrendingUp,
  pen: PenLine,
  users: Users,
  rocket: Rocket,
  type: Type,
  compass: Compass,
} as const;

export type IconName = keyof typeof map;

export function ServiceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = map[name];
  return <Icon strokeWidth={1.4} aria-hidden="true" {...props} />;
}
