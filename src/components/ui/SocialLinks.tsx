import clsx from "clsx";
import { site } from "@/lib/site";
import { TelegramIcon, XIcon } from "./Icons";

export function SocialLinks({ className, withLabels = false }: { className?: string; withLabels?: boolean }) {
  const items = [
    { href: site.links.x, label: "X", handle: `@${site.handle}`, Icon: XIcon },
    { href: site.links.telegram, label: "Telegram", handle: site.links.telegramHandle, Icon: TelegramIcon },
  ];
  return (
    <ul className={clsx("flex items-center gap-2", className)}>
      {items.map(({ href, label, handle, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "inline-flex items-center gap-2.5 rounded-full border border-line-strong text-sm text-muted transition-colors hover:border-accent hover:text-accent",
              withLabels ? "py-2 pl-3 pr-4" : "size-10 justify-center",
            )}
          >
            <Icon className="size-4" />
            {withLabels ? <span>{handle}</span> : <span className="sr-only">{label}: {handle}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
