/**
 * Projects & case studies.
 *
 * Every result is tagged so visitors can tell what kind of claim it is:
 *  - "verified"    → a hard number you can back up (screenshots, analytics).
 *  - "qualitative" → a contribution or outcome without a number attached.
 *  - "placeholder" → an empty slot waiting for real data. Replace or delete it.
 *
 * Never put a number in "verified" unless you can show proof on request.
 */

export type ResultKind = "verified" | "qualitative" | "placeholder";

export type Result = {
  kind: ResultKind;
  value?: string; // e.g. "4,600+"
  label: string;
  note?: string;
  /** Optional source link, e.g. an announcement post */
  link?: { href: string; label: string };
};

export type Pattern = "bars" | "rings" | "grid" | "dots" | "waves" | "diagonal";

export type Project = {
  slug: string;
  name: string;
  index: string;
  role: string;
  sector: string;
  /** e.g. "2023 — 2024" */
  period?: string;
  /** Project logo in /public, shown on the cover graphic */
  logo?: string;
  tagline: string;
  summary: string;
  pattern: Pattern;
  featured: boolean;
  /** false = listed on the site but no dedicated case study page yet */
  hasCaseStudy: boolean;
  /** Optional external link to the project itself */
  url?: string;
  /** Used when there's no case study: where the card should point instead */
  relatedSlug?: string;
  focus: string[];
  headline?: Result[];
  overview?: string[];
  objectives?: string[];
  strategy?: { title: string; body: string }[];
  execution?: { title: string; body: string }[];
  results?: Result[];
  /** Proof slots. Add `image` to show a real screenshot; without it the slot shows as a placeholder. */
  evidence?: {
    label: string;
    hint: string;
    image?: { src: string; width: number; height: number; alt: string };
    /** A video file in /public (mp4), played inline with controls */
    video?: { src: string; poster: string; width: number; height: number; title: string };
    /** Short line shown under the screenshot, e.g. the key number it proves */
    caption?: string;
    /** External proof links (e.g. posts on X). Shown as a link card. */
    links?: { href: string; label: string; meta?: string }[];
  }[];
  takeaways?: string[];
};

export const projects: Project[] = [
  {
    slug: "odinbot",
    name: "OdinBot",
    index: "01",
    role: "Growth & Operations Lead",
    sector: "Trading bot",
    period: "2024 — 2026",
    logo: "/images/odinbot-logo.png",
    tagline: "23 followers to an acquisition.",
    summary:
      "Took OdinBot's X account from 23 followers to 4,600+ and helped build a 16,900+ member Discord around a product that did $250M in volume, before it was acquired by Cielo Finance.",
    pattern: "bars",
    featured: true,
    hasCaseStudy: true,
    focus: ["X growth", "Discord community", "Memes & content", "X Spaces", "Product launches"],
    headline: [
      { kind: "verified", value: "23 → 4,600+", label: "X followers" },
      { kind: "verified", value: "16,900+", label: "Discord members" },
      { kind: "verified", value: "10,000", label: "Peak active users on Discord" },
      { kind: "verified", value: "21,000+", label: "Combined social followers" },
      { kind: "verified", value: "$250M", label: "Trading volume (project)" },
      { kind: "verified", value: "$1.6M", label: "Revenue (project)" },
    ],
    overview: [
      "OdinBot was an early-stage crypto trading bot with a product and almost no audience. The X account had 23 followers. In a category where every week brings a new bot promising faster fills, nobody was going to find OdinBot by accident.",
      "I joined as Growth & Operations Lead and owned the social side end to end: what we said, where we said it, and how we kept people around once they showed up. The project was eventually acquired by Cielo Finance.",
    ],
    objectives: [
      "Get OdinBot in front of active traders, not just follower-count farmers.",
      "Build a community space where users actually talk to each other and to the team.",
      "Support product launches with content that explains the tool, not just hypes it.",
      "Give the brand a voice that felt native to crypto timelines.",
    ],
    strategy: [
      {
        title: "Earn attention before asking for it",
        body: "Trading bots are a crowded, skeptical category. Instead of shouting features, the content leaned into the culture traders already live in: memes, market commentary and quick takes, with product mentions that felt like part of the conversation.",
      },
      {
        title: "Make X the front door, Discord the home",
        body: "X brought people in. Discord was where they stayed. Every campaign was designed to move curious followers into the community, where support, feedback and conversation could compound.",
      },
      {
        title: "Use launches as story beats",
        body: "Product launches were treated as narrative moments: tease, explain, demo, follow up. Each one gave the timeline a reason to talk and gave the community something to rally around.",
      },
    ],
    execution: [
      {
        title: "Growth campaigns",
        body: "Planned and ran campaigns aimed at reaching active traders and pulling them into the ecosystem.",
      },
      {
        title: "Content & memes",
        body: "Daily content mixing product education, market-aware posts and meme culture, written to fit the timeline rather than a brand guideline doc.",
      },
      {
        title: "X Spaces",
        body: "Hosted and supported Spaces to put real voices behind the product and give the community live access to the team.",
      },
      {
        title: "Community engagement",
        body: "Kept the Discord active and useful: answering questions, surfacing feedback to the team and giving members reasons to come back.",
      },
      {
        title: "Product launches",
        body: "Contributed launch content and rollout communication across X and Discord.",
      },
    ],
    results: [
      { kind: "verified", value: "4,600+", label: "X followers, up from 23" },
      { kind: "verified", value: "16,900+", label: "Discord community members" },
      { kind: "verified", value: "10,000", label: "Peak active users in Discord" },
      { kind: "verified", value: "21,000+", label: "Combined followers across platforms" },
      {
        kind: "verified",
        value: "$250M",
        label: "Trading volume through OdinBot",
        note: "Project-level figure: what the product did while the audience and community were being built.",
      },
      { kind: "verified", value: "$1.6M", label: "Revenue generated by OdinBot", note: "Project-level figure." },
      {
        kind: "verified",
        value: "104.8K",
        label: "X impressions in one analytics period, up 349%",
        note: "Same period: 8.9% engagement rate, 727 new follows (up 320%), 1.4K profile visits (up 360%). Screenshot below.",
      },
      {
        kind: "qualitative",
        label: "Acquired by Cielo Finance",
        note: "OdinBot was acquired by Cielo Finance in July 2026. The community and audience were part of what was built along the way.",
        link: { href: "https://x.com/cielofinance/status/2080640098308116866", label: "Read the announcement on X" },
      },
      {
        kind: "qualitative",
        label: "Recognisable brand voice",
        note: "A meme-literate, trader-native tone that made the account feel like part of the timeline.",
      },
    ],
    evidence: [
      {
        label: "X account analytics",
        hint: "Team Discord, 29 Oct 2024",
        image: {
          src: "/images/work/odinbot-x-analytics.jpg",
          width: 1175,
          height: 2000,
          alt: "OdinBot team Discord, 29 October 2024. Stan says he'll apply feedback on the next posts and threads. Fenrir shares X account analytics: 104.8K impressions (up 349%), 8.9% engagement rate (up 11%), 1.4K profile visits (up 360%), 727 new follows (up 320%), 331 replies, 1.7K likes, 253 reposts, 123 bookmarks, 949 video views and 2.7K media views, and writes “Doing great fam, let's keep on the pressure.” Odin replies: “Yeah doing a fantastic job!!”",
        },
      },
      {
        label: "Top-performing posts",
        hint: "On X, @odinbotio",
        links: [
          { href: "https://x.com/odinbotio/status/1853848753335341453", label: "Top post #1", meta: "Nov 2024" },
          { href: "https://x.com/odinbotio/status/1932408172280496612", label: "Top post #2", meta: "Jun 2025" },
          { href: "https://x.com/odinbotio/status/2011793950445563969", label: "Top post #3", meta: "Jan 2026" },
        ],
      },
      {
        label: "Acquisition announcement",
        hint: "On X, @cielofinance",
        links: [
          {
            href: "https://x.com/cielofinance/status/2080640098308116866",
            label: "Cielo Finance acquires OdinBot",
            meta: "Jul 2026",
          },
        ],
      },
      {
        label: "Discord members",
        hint: "Admin view",
        caption: "16,951 members on the OdinBot Discord. Names blurred for privacy.",
        image: {
          src: "/images/work/odinbot-discord-members.jpg",
          width: 1333,
          height: 1068,
          alt: "OdinBot Discord server's admin Members page, showing 16,951 members in total. Member names and avatars are blurred for privacy.",
        },
      },
    ],
    takeaways: [
      "Small accounts grow fastest when they sound like the people they want to reach.",
      "Followers are a vanity metric until there's somewhere for them to go. Discord was that place.",
      "Launches work best as a sequence, not a single post.",
    ],
  },
  {
    slug: "axxel",
    name: "Axxel",
    index: "02",
    role: "Social Media / Growth",
    sector: "Trading terminal",
    period: "2026",
    logo: "/images/axxel-logo.png",
    tagline: "Showing up every day, on purpose.",
    summary:
      "Daily X content, engagement and product education for a crypto trading terminal, built to keep Axxel visible and easy to understand.",
    pattern: "grid",
    featured: true,
    hasCaseStudy: true,
    focus: ["X content", "Daily engagement", "Product education", "Positioning"],
    headline: [
      { kind: "verified", value: "33.3K", label: "X impressions in 7 days (up 34%)" },
      { kind: "verified", value: "4.1%", label: "Engagement rate (up 11%)" },
      { kind: "verified", value: "+81%", label: "New follows vs previous 7 days" },
    ],
    overview: [
      "Axxel is a crypto trading terminal. Terminals are hard to explain in a single post, and traders switch tools only when they clearly see the edge.",
      "My role covered social media and growth: keeping the X presence consistent, explaining the product in plain language and positioning Axxel clearly in a crowded market.",
    ],
    objectives: [
      "Keep Axxel visible on the timeline with consistent, daily content.",
      "Explain what the terminal does and why it matters to active traders.",
      "Sharpen positioning so the product is easy to place against alternatives.",
      "Grow engagement and community visibility around the brand.",
    ],
    strategy: [
      {
        title: "Consistency as a strategy",
        body: "For a tool traders use every day, the brand should show up every day too. The daily targets: 3–5 original posts, 20+ valuable replies and one community conversation or poll, seven days a week.",
      },
      {
        title: "Education over announcements",
        body: "Product posts focused on what a trader can actually do with a feature, turning release notes into reasons to try the terminal. The content mix: 35% product, 25% education, 20% culture, 20% community.",
      },
      {
        title: "Positioning in plain language",
        body: "Clear, repeatable messaging on who Axxel is for and what it does better, so the timeline could describe it in one line.",
      },
    ],
    execution: [
      { title: "Daily X content", body: "Planned and published a consistent stream of content for the brand account." },
      { title: "Engagement", body: "Active replies, quote posts and conversation with traders and adjacent accounts." },
      { title: "Product education", body: "Explainers and feature breakdowns that made the terminal easier to understand." },
      { title: "Visibility", body: "Community-facing work to keep Axxel part of the trading conversation." },
    ],
    results: [
      {
        kind: "verified",
        value: "33.3K",
        label: "X impressions in 7 days, up 34%",
        note: "Aug 15–21. Same week: 306 profile visits (up 45%), 401 likes (up 43%), 55 replies (up 25%).",
      },
      { kind: "verified", value: "4.1%", label: "Engagement rate, up 11%", note: "Same 7-day period." },
      { kind: "verified", value: "67", label: "New follows in 7 days, up 81%", note: "Same 7-day period." },
      {
        kind: "qualitative",
        label: "Consistent daily presence",
        note: "A reliable posting cadence for the brand on X.",
      },
      {
        kind: "qualitative",
        label: "Clearer product story",
        note: "Feature education that translated terminal functionality into trader benefits.",
      },
    ],
    evidence: [
      {
        label: "Product explainer video",
        hint: "Posted on X, Aug 2026",
        video: {
          src: "/videos/axxel-explainer.mp4",
          poster: "/videos/axxel-explainer-poster.jpg",
          width: 1920,
          height: 1080,
          title: "Axxel product explainer: a terminal-style walkthrough of Axxel's multi-chain trading setup",
        },
        links: [
          {
            href: "https://x.com/axxel_ai/status/2086076308228846037",
            label: "View the original post on X",
            meta: "@axxel_ai",
          },
        ],
      },
      {
        label: "Content plan",
        hint: "Daily targets & content mix",
        image: {
          src: "/images/work/axxel-content-plan.png",
          width: 1026,
          height: 552,
          alt: "Axxel content plan. Daily distribution targets: 3 to 5 original posts, 20+ valuable replies, 1 community interaction (a conversation or poll), active 7 days a week. Content mix: 35% product, 25% education, 20% culture, 20% community.",
        },
      },
      {
        label: "X account analytics",
        hint: "7 days, Aug 15–21",
        image: {
          src: "/images/work/axxel-x-analytics.jpg",
          width: 923,
          height: 1480,
          alt: "Axxel X account analytics for Aug 15 to 21: 33.3K impressions (up 34%), 4.1% engagement rate (up 11%), 306 profile visits (up 45%), 67 new follows (up 81%), 55 replies (up 25%) and 401 likes (up 43%), with a daily bar chart.",
        },
      },
    ],
    takeaways: [
      "In trading tools, education is marketing. Show the edge and people will try it.",
      "Daily consistency beats occasional viral spikes for products people use every day.",
    ],
  },
  {
    slug: "cielo-finance",
    name: "Cielo Finance",
    index: "03",
    role: "Via the OdinBot acquisition",
    sector: "On-chain analytics",
    tagline: "Where the OdinBot story landed.",
    summary:
      "Cielo Finance acquired OdinBot. The OdinBot case study covers the audience and community built ahead of that acquisition.",
    pattern: "rings",
    featured: true,
    hasCaseStudy: false,
    relatedSlug: "odinbot",
    focus: ["Acquisition", "Community transition"],
  },
  {
    slug: "socialfun",
    name: "SocialFun",
    index: "04",
    role: "Social Media Manager & Clipper",
    sector: "Trading terminal",
    period: "2026",
    logo: "/images/socialfun-logo.png",
    tagline: "100K+ views in the first month.",
    summary:
      "Social media and short-form clips for SocialFun, a terminal that aggregates Fomo and pump.fun trades with deep filters. 100K+ views in my first month.",
    pattern: "waves",
    featured: true,
    hasCaseStudy: true,
    focus: ["Social media management", "Short-form clips", "Product demos"],
    headline: [{ kind: "verified", value: "100K+", label: "Views in the first month" }],
    overview: [
      "SocialFun is a trading terminal that pulls Fomo and pump.fun trades into one place, with lots of filters to cut through the noise. It's a fast product for a fast market, and a wall of text doesn't sell it.",
      "I joined as Social Media Manager and Clipper: running the X account and turning the product into short clips that show what it does in seconds. In my first month, the content passed 100K views.",
    ],
    objectives: [
      "Show the product working, not just describe it.",
      "Make SocialFun easy to understand for traders already on Fomo and pump.fun.",
      "Keep the X account active with content that travels.",
    ],
    strategy: [
      {
        title: "Show, don't tell",
        body: "A terminal is easiest to understand when you watch it work. Short clips of the product in action replaced long feature lists.",
      },
      {
        title: "Built for the scroll",
        body: "Clips designed to make sense in a few seconds, with the payoff up front, so they hold attention and earn reshares.",
      },
      {
        title: "Speak to where traders already are",
        body: "Content framed around Fomo and pump.fun, the places SocialFun's users already trade, so the value was obvious straight away.",
      },
    ],
    execution: [
      { title: "Social media management", body: "Ran SocialFun's X presence day to day." },
      { title: "Clipping", body: "Cut and published short-form clips showing the terminal and its filters in action." },
      { title: "Distribution", body: "Posted and pushed clips to reach traders on the timeline." },
    ],
    results: [
      {
        kind: "verified",
        value: "100K+",
        label: "Views in the first month",
        note: "Across SocialFun's content during my first month on the account.",
      },
      {
        kind: "qualitative",
        label: "Product explained through clips",
        note: "A library of short demos that show the terminal working, linked below.",
      },
    ],
    evidence: [
      {
        label: "Clips on X",
        hint: "@trysocialfun",
        links: [
          { href: "https://x.com/trysocialfun/status/2102767441151406377", label: "Clip #1", meta: "Sep 2026" },
          { href: "https://x.com/trysocialfun/status/2108555308096192899", label: "Clip #2", meta: "Oct 2026" },
          { href: "https://x.com/trysocialfun/status/2110397107181887796", label: "Clip #3", meta: "Oct 2026" },
        ],
      },
    ],
    takeaways: [
      "For trading tools, a 10-second clip of the product working beats a thread about it.",
      "Short-form rewards clarity. If it needs a caption to make sense, recut it.",
    ],
  },
  {
    slug: "konoha",
    name: "Konoha",
    index: "05",
    role: "Community & Web3 Education",
    sector: "Web3 education",
    logo: "/images/konoha-logo.png",
    tagline: "500+ beginners, onboarded properly.",
    summary:
      "Helped onboard and educate 500+ African Web3 beginners through community-led learning and development.",
    pattern: "dots",
    featured: true,
    hasCaseStudy: true,
    focus: ["Web3 education", "Live classes", "Onboarding", "Community development"],
    headline: [{ kind: "verified", value: "500+", label: "African Web3 beginners onboarded & educated" }],
    overview: [
      "A lot of Web3 talks about onboarding the next billion and then speaks only to people already inside. Konoha did the opposite: start from zero and teach properly.",
      "Through Konoha I helped onboard and educate more than 500 African Web3 beginners, building the community and the learning around it.",
    ],
    objectives: [
      "Give complete beginners a safe, clear entry point into Web3.",
      "Turn one-off learners into an active, supportive community.",
      "Make education practical: wallets, safety, and how the ecosystem actually works.",
    ],
    strategy: [
      {
        title: "Teach from zero",
        body: "No assumed knowledge. Concepts were explained in plain language before any jargon showed up.",
      },
      {
        title: "Community as the classroom",
        body: "Learning happened in the community, so beginners could ask questions, help each other and stay after the lesson ended.",
      },
      {
        title: "Local context matters",
        body: "Education built for African beginners, with their realities in mind rather than a generic global playbook.",
      },
    ],
    execution: [
      { title: "Onboarding", body: "Guided newcomers through their first steps into Web3." },
      {
        title: "Live classes",
        body: "Ran regular community classes, such as a multi-day crypto trading class covering TA and FA, with recordings for anyone who missed a session.",
      },
      {
        title: "Accountability groups",
        body: "Organised learners into groups with leaders, plus polls and check-ins, so people kept showing up between classes.",
      },
      {
        title: "DeFi for beginners",
        body: "Hosted “DeFi Unlocked”, a one-hour live session on Telegram, and wrote a How to DeFi beginner guide (PDF) shared with the audience.",
      },
      { title: "Community development", body: "Grew and looked after the community so learning kept going between sessions." },
    ],
    results: [
      { kind: "verified", value: "500+", label: "African Web3 beginners onboarded and educated" },
      {
        kind: "qualitative",
        label: "Beginner-first community",
        note: "A space where first-time users could learn without being talked down to.",
      },
      {
        kind: "qualitative",
        label: "Recurring live classes",
        note: "Multi-day classes like crypto trading (TA vs FA), with recordings and accountability groups.",
      },
      {
        kind: "qualitative",
        label: "DeFi Unlocked + beginner PDF",
        note: "A one-hour live session on Telegram and a How to DeFi beginner guide, each post seen by 1.2K–1.5K people.",
      },
    ],
    evidence: [
      {
        label: "Class announcement",
        hint: "Telegram, 20 Oct 2023",
        image: {
          src: "/images/work/konoha-class-announcement.png",
          width: 715,
          height: 901,
          alt: "Community announcement on Telegram, 20 October 2023: the crypto trading class continues tonight at 9 PM after covering TA and the difference between FA and TA; a recording is available for anyone who missed it; a guest session at 8:30 PM; group leaders from the fearless session asked to submit their groups; and a reminder to vote in the accountability group poll.",
        },
      },
      {
        label: "DeFi Unlocked & beginner guide",
        hint: "Telegram",
        image: {
          src: "/images/work/konoha-defi-unlocked.jpg",
          width: 1290,
          height: 1884,
          alt: "Telegram channel posts: “We're LIVE on Telegram! DeFi Unlocked with yours truly @defi_senseii” (1.2K views, 22 comments), followed by a one-hour live stream. Then the How to DeFi Beginner PDF is shared (1.5K views) with the message “Defi for beginners PDF. All thanks to @defi_Senseii. Enjoy” (1.4K views).",
        },
      },
    ],
    takeaways: [
      "Onboarding is a community job, not a landing-page job.",
      "Beginners stay when they're treated as future builders, not exit liquidity.",
    ],
  },
  {
    slug: "fluxpoint",
    name: "FluxPoint",
    index: "06",
    role: "Community Manager",
    sector: "Web3 gaming · Cardano",
    period: "2023 — 2024",
    logo: "/images/fluxpoint-logo.png",
    tagline: "Keeping a gaming community in the game.",
    summary:
      "Community Manager for FluxPoint, a Web3 game on Cardano, across a 2,500-member Discord and an 11,000-follower X audience.",
    pattern: "diagonal",
    featured: true,
    hasCaseStudy: true,
    focus: ["Community management", "Player engagement", "AMAs & X Spaces", "Cardano ecosystem"],
    headline: [
      { kind: "verified", value: "2,500", label: "Discord members" },
      { kind: "verified", value: "11,000", label: "X followers" },
    ],
    overview: [
      "FluxPoint is a Web3 gaming project built on Cardano. Gaming communities are some of the most demanding in crypto: players want updates, answers and a reason to stick around between releases.",
      "From 2023 to 2024 I was FluxPoint's Community Manager, looking after a 2,500-member Discord alongside an 11,000-follower X audience. I ran the community day to day, made the announcements and kept the conversation between players and the team going.",
    ],
    objectives: [
      "Keep the community active and engaged between game updates.",
      "Be the bridge between players and the team: questions, feedback and announcements.",
      "Make new members feel welcome in the FluxPoint and Cardano gaming community.",
    ],
    strategy: [
      {
        title: "Fun first, tokens second",
        body: "Gaming communities stay for the game and the people. Engagement centred on the experience of playing and being part of the community, not just token talk.",
      },
      {
        title: "Close the loop with players",
        body: "Player questions and feedback were picked up and passed to the team, and updates went back to the community, so players knew they were being heard.",
      },
    ],
    execution: [
      { title: "Community management", body: "Day-to-day running and moderation of the community spaces." },
      { title: "Player engagement", body: "Conversations, activities and updates that kept members coming back." },
      { title: "Team ↔ community bridge", body: "Relayed feedback to the team and kept the community informed." },
      {
        title: "AMAs & X Spaces",
        body: "Organised and announced community AMAs on X Spaces, including the December 2023 year-end AMA with a prize raffle to keep people in until the end.",
      },
    ],
    results: [
      { kind: "verified", value: "2,500", label: "Discord community members" },
      { kind: "verified", value: "11,000", label: "Followers on X" },
      {
        kind: "qualitative",
        label: "Year-end AMA on X Spaces",
        note: "Announced to the whole community with a prize raffle to keep listeners in until the end (December 2023).",
      },
      {
        kind: "qualitative",
        label: "Active, looked-after community",
        note: "Day-to-day community management for a Web3 game on Cardano.",
      },
    ],
    evidence: [
      {
        label: "Year-end AMA announcement",
        hint: "Discord, 20 Dec 2023",
        image: {
          src: "/images/work/fluxpoint-ama-announcement.jpg",
          width: 1287,
          height: 1222,
          alt: "Stanley's Discord announcement to the Flux Fam: a year-end AMA on X Spaces on 28 December 2023 at 8 PM, with prizes raffled at the end and questions collected in the ama-questions channel. The post has 13 fire, 9 cheers, 6 party, 5 thumbs-up, 6 rocket and 6 check reactions.",
        },
      },
      {
        label: "Community engagement",
        hint: "Discord, 19 Mar 2024",
        image: {
          src: "/images/work/fluxpoint-community-feedback.jpg",
          width: 1290,
          height: 1801,
          alt: "FluxPoint Discord, 19 March 2024. Community member FluxFamFlamTam shares artwork of an armoured ninja character, saying 1,721 XP is needed to finish it off and “This one is bloomin awesome!” FluxPoint's CEO, decimalist, replies: “Looking forward to the day we add this guy into TRIB3.”",
        },
      },
    ],
    takeaways: ["Gaming communities stay for the people. Look after them between releases, not just at launch."],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const caseStudies = projects.filter((p) => p.hasCaseStudy);
export const projectHref = (p: Project) =>
  p.hasCaseStudy ? `/work/${p.slug}` : p.relatedSlug ? `/work/${p.relatedSlug}` : "/work";
