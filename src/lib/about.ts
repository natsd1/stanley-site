/**
 * About page content. Edit freely.
 * Timeline: add a `period` (e.g. "2023 — 2024") to any entry and it will show up.
 * Entries are listed in the order below; reorder them to match your real chronology.
 */
export const experience: {
  project: string;
  role: string;
  period?: string;
  slug?: string;
  points: string[];
}[] = [
  {
    project: "OdinBot",
    role: "Growth & Operations Lead",
    slug: "odinbot",
    points: [
      "Grew X from 23 to 4,600+ followers",
      "Built a 16,000-member Discord, peaking at 10,000 active users",
      "Growth campaigns, content, memes, Spaces and product launches",
      "Project acquired by Cielo Finance",
    ],
  },
  {
    project: "Axxel",
    role: "Social Media / Growth",
    slug: "axxel",
    points: ["Daily X content and engagement", "Product education and positioning for a trading terminal"],
  },
  {
    project: "SocialFun",
    role: "Social Content & Distribution",
    slug: "socialfun",
    points: ["Social content distribution", "Short-form content and creator-focused growth"],
  },
  {
    project: "FluxPoint",
    role: "Community Manager",
    slug: "fluxpoint",
    points: ["Community management for a Web3 gaming project on Cardano", "Player engagement and team ↔ community communication"],
  },
  {
    project: "Konoha",
    role: "Community & Web3 Education",
    slug: "konoha",
    points: ["Helped onboard and educate 500+ African Web3 beginners", "Community development and education"],
  },
];

export const strengths = [
  "Social media management",
  "X (Twitter) growth",
  "Content strategy",
  "Community development",
  "Organic audience growth",
  "Copywriting",
  "Memes & internet culture",
  "Community engagement",
  "Campaign execution",
  "Growth strategy",
  "Brand positioning",
  "Social analytics",
];

export const industries = [
  { name: "DeFi", note: "Protocols, yield, the people who read docs before they ape." },
  { name: "Trading platforms & bots", note: "Fast, skeptical audiences who only care about the edge." },
  { name: "Blockchain infrastructure", note: "Technical products that need translating for humans." },
  { name: "Gaming & emerging tech", note: "Communities built on fun first, tokens second." },
  { name: "Consumer crypto apps", note: "Where onboarding and simplicity decide everything." },
];

/** Edit this list to match the tools you actually use day to day. */
export const tools = [
  { group: "Publishing", items: ["X / X Pro", "Typefully", "Buffer"] },
  { group: "Community", items: ["Discord", "Telegram", "Collab.Land", "Zealy"] },
  { group: "Creative", items: ["Canva", "CapCut", "Figma"] },
  { group: "Analytics & ops", items: ["X Analytics", "Discord Insights", "Notion", "Google Sheets"] },
];
