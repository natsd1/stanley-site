export const site = {
  name: "Stanley",
  handle: "DeFi_Senseii",
  title: "Social Media Manager | Web3 Growth & Community",
  shortTitle: "Web3 Growth & Community",
  description:
    "Stanley is a social media manager for Web3, crypto and emerging tech. X growth, content strategy and community development that turns timelines into users.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // Contact form inbox (Formspree). Override with NEXT_PUBLIC_FORM_ENDPOINT if needed.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/mvkkwadq",
  links: {
    x: "https://x.com/DeFi_Senseii",
    telegram: "https://t.me/Defi_senseii",
    telegramHandle: "@Defi_senseii",
  },
  // Drop a portrait at /public/images/stanley.jpg and set this to "/images/stanley.jpg".
  portrait: "/images/stanley.jpg" as string | null,
  // Set to false when you're fully booked.
  available: true,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
