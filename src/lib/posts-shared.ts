/** Post types and helpers that are safe to use in client components (no fs). */

export const categories = [
  "Web3 Growth",
  "Social Strategy",
  "Community",
  "X Growth",
  "Content",
  "Field Notes",
] as const;
export type Category = (typeof categories)[number];

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: Category;
  readingTime: number;
  sample: boolean;
};

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
