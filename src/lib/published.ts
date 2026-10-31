import type { PostMeta } from "./posts-shared";

/**
 * Writing published on other sites (Medium, client blogs, X).
 * These show in Insights and link straight to the original.
 * To add one, copy an entry. `date` is YYYY-MM-DD ("" if unknown).
 * Set `featured: true` on the one you want as the big card at the top.
 */
export const published: PostMeta[] = [
  {
    slug: "apyx-crypto-yield-problem",
    title: "Crypto's Yield Problem and How APYX Can Fix It",
    excerpt: "",
    date: "",
    category: "DeFi & Yield",
    readingTime: 0,
    sample: false,
    featured: true,
    external: { url: "https://stan-writes.medium.com/cryptos-yield-problem-and-how-apyx-can-fix-it-864db0a65b6e", source: "Medium" },
  },
  {
    slug: "rebelfi-stablecoin-float",
    title: "Stablecoin Float: The Definitive Guide for Payment Operators",
    excerpt: "",
    date: "",
    category: "Stablecoins",
    readingTime: 0,
    sample: false,
    external: { url: "https://rebelfi.io/blog/stablecoin-float-definitive-guide-payment-operators", source: "RebelFi blog" },
  },
  {
    slug: "rebelfi-exchange-treasury-yield",
    title: "Stablecoin Treasury Yield Optimization for Crypto Exchanges",
    excerpt: "",
    date: "",
    category: "Stablecoins",
    readingTime: 0,
    sample: false,
    external: { url: "https://rebelfi.io/blog/crypto-exchange-stablecoin-treasury-yield-optimization", source: "RebelFi blog" },
  },
  {
    slug: "x-defi-senseii-2026-07",
    title: "Post on X by @DeFi_Senseii",
    excerpt: "",
    date: "2026-07-26",
    category: "Field Notes",
    readingTime: 0,
    sample: false,
    external: { url: "https://x.com/defi_senseii/status/2081503048690524274", source: "X · @DeFi_Senseii" },
  },
  {
    slug: "x-konoha-2025-09",
    title: "Written for Konoha",
    excerpt: "",
    date: "2025-09-13",
    category: "Community",
    readingTime: 0,
    sample: false,
    external: { url: "https://x.com/konohahq/status/1966883312758386921", source: "X · @KonohaHQ" },
  },
  {
    slug: "x-fluxpoint-2025-02",
    title: "Written for FluxPoint Studio",
    excerpt: "",
    date: "2025-02-19",
    category: "Gaming",
    readingTime: 0,
    sample: false,
    external: { url: "https://x.com/fluxpointstudio/status/1892331968018473359", source: "X · @FluxPointStudio" },
  },
];
