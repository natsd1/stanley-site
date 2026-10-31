/** Post types and helpers that are safe to use in client components (no fs). */

export const categories = [
  "DeFi & Yield",
  "Stablecoins",
  "Web3 Growth",
  "Community",
  "Gaming",
  "X Growth",
  "Content",
  "Field Notes",
] as const;
export type Category = (typeof categories)[number];

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  /** YYYY-MM-DD, or "" if unknown */
  date: string;
  category: Category;
  /** minutes; 0 = unknown */
  readingTime: number;
  sample: boolean;
  featured?: boolean;
  /** Published elsewhere: the card links straight to the original */
  external?: { url: string; source: string };
};

export const formatDate = (iso: string) =>
  iso
    ? new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : "";

export const postHref = (p: PostMeta) => p.external?.url ?? `/insights/${p.slug}`;
