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
    logo: "/images/odinbot-logo.png",
    tagline: "23 followers to an acquisition.",
    summary:
      "Took OdinBot's X account from 23 followers to 4,600+ and helped build a 16,000-member Discord around a product that did $250M in volume, before it was acquired by Cielo Finance.",
    pattern: "bars",
    featured: true,
    hasCaseStudy: true,
    focus: ["X growth", "Discord community", "Memes & content", "X Spaces", "Product launches"],
    headline: [
      { kind: "verified", value: "23 → 4,600+", label: "X followers" },
      { kind: "verified", value: "16,000", label: "Discord members" },
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
      { kind: "verified", value: "16,000", label: "Discord community members" },
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
      { label: "Discord server insights", hint: "Member count + active users at peak" },
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
    tagline: "Showing up every day, on purpose.",
    summary:
      "Daily X content, engagement and product education for a crypto trading terminal, built to keep Axxel visible and easy to understand.",
    pattern: "grid",
    featured: true,
    hasCaseStudy: true,
    focus: ["X content", "Daily engagement", "Product education", "Positioning"],
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
        body: "For a tool traders use every day, the brand should show up every day too. A steady posting rhythm built familiarity and kept Axxel in the feed.",
      },
      {
        title: "Education over announcements",
        body: "Product posts focused on what a trader can actually do with a feature, turning release notes into reasons to try the terminal.",
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
        kind: "qualitative",
        label: "Consistent daily presence",
        note: "A reliable posting cadence for the brand on X.",
      },
      {
        kind: "qualitative",
        label: "Clearer product story",
        note: "Feature education that translated terminal functionality into trader benefits.",
      },
      { kind: "placeholder", label: "Follower / impression growth", note: "Add verified X analytics here." },
      { kind: "placeholder", label: "Engagement rate", note: "Add a before/after figure if you have one." },
    ],
    evidence: [
      { label: "X analytics overview", hint: "Impressions, engagement, follower change" },
      { label: "Product explainer thread", hint: "Screenshot or link to a strong educational post" },
      { label: "Content calendar sample", hint: "A week of planned posts (redacted if needed)" },
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
    role: "Social Content & Distribution",
    sector: "Consumer social",
    tagline: "Short-form, creator-first.",
    summary:
      "Social content distribution and short-form content for SocialFun, with growth built around creators rather than corporate posts.",
    pattern: "waves",
    featured: true,
    hasCaseStudy: true,
    focus: ["Content distribution", "Short-form content", "Creator-focused growth"],
    overview: [
      "SocialFun sits at the intersection of social and crypto, where attention moves fast and creators drive most of it.",
      "My work focused on distribution: getting content in front of the right people, in short formats, with creators at the centre of the growth plan.",
    ],
    objectives: [
      "Distribute content across social channels in formats that travel.",
      "Lean on short-form content to grab attention quickly.",
      "Make creators the engine of growth, not an afterthought.",
    ],
    strategy: [
      {
        title: "Built for the scroll",
        body: "Short-form first: content designed to make sense in under ten seconds and earn a reshare.",
      },
      {
        title: "Creators as distribution",
        body: "Creator-focused growth means the people using the platform become its loudest channel. Content was made to be easy for them to share and build on.",
      },
      {
        title: "Platform-native, not copy-paste",
        body: "Each channel got content shaped for how people behave there, instead of one post pasted everywhere.",
      },
    ],
    execution: [
      { title: "Distribution", body: "Planned where and how content went out across social channels." },
      { title: "Short-form content", body: "Produced and shaped short-form pieces built for fast consumption." },
      { title: "Creator growth", body: "Supported creator-focused initiatives that put users at the centre of the story." },
    ],
    results: [
      {
        kind: "qualitative",
        label: "Creator-led content approach",
        note: "Growth framed around creators and their audiences.",
      },
      { kind: "placeholder", label: "Reach / views on short-form", note: "Add verified numbers here." },
      { kind: "placeholder", label: "Creator participation", note: "Add a count or example if available." },
    ],
    evidence: [
      { label: "Short-form content samples", hint: "2–3 clips or stills" },
      { label: "Distribution analytics", hint: "Views / reach per channel" },
    ],
    takeaways: [
      "On consumer social, the users are the distribution. Make sharing effortless.",
      "Short-form rewards clarity. If it needs a caption to make sense, recut it.",
    ],
  },
  {
    slug: "konoha",
    name: "Konoha",
    index: "05",
    role: "Community & Web3 Education",
    sector: "Web3 education",
    tagline: "500+ beginners, onboarded properly.",
    summary:
      "Helped onboard and educate 500+ African Web3 beginners through community-led learning and development.",
    pattern: "dots",
    featured: true,
    hasCaseStudy: true,
    focus: ["Web3 education", "Onboarding", "Community development"],
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
      { title: "Education", body: "Delivered and supported learning sessions and resources for beginners." },
      { title: "Community development", body: "Grew and looked after the community so learning kept going between sessions." },
    ],
    results: [
      { kind: "verified", value: "500+", label: "African Web3 beginners onboarded and educated" },
      {
        kind: "qualitative",
        label: "Beginner-first community",
        note: "A space where first-time users could learn without being talked down to.",
      },
      { kind: "placeholder", label: "Sessions / cohorts run", note: "Add the number if you tracked it." },
    ],
    evidence: [
      { label: "Community photos or session screenshots", hint: "With permission from participants" },
      { label: "Learning materials", hint: "A slide, guide or thread you created" },
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
