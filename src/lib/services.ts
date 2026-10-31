export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: "megaphone" | "trending" | "pen" | "users" | "rocket" | "type" | "compass";
  includes: string[];
  solves: string[];
  approach: string;
  deliverables: string[];
};

/** Detailed services (Services page). */
export const services: Service[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    short: "Your channels, run daily by someone who actually lives on crypto Twitter.",
    icon: "megaphone",
    includes: [
      "Day-to-day management of X, Discord, Telegram and supporting channels",
      "Content calendar and posting rhythm",
      "Replies, quote posts and community interaction",
      "Monitoring mentions, sentiment and narratives",
    ],
    solves: [
      "Accounts that go quiet for days, then dump five posts at once",
      "A brand voice that sounds like a press release",
      "Founders spending hours on posting instead of building",
    ],
    approach:
      "I start by learning the product and the audience well enough to talk about it without a brief. Then I set a rhythm the brand can sustain and run it, adjusting to what the market is talking about that day.",
    deliverables: [
      "Channel audit and voice guide",
      "Weekly content calendar",
      "Daily publishing and engagement",
      "Monthly performance report",
    ],
  },
  {
    slug: "x-growth",
    name: "X Growth & Engagement",
    short: "Growth that comes from being worth following, not from buying followers.",
    icon: "trending",
    includes: [
      "Profile and positioning review",
      "Post formats built for the current algorithm",
      "Engagement strategy with the right accounts and communities",
      "X Spaces planning and hosting support",
    ],
    solves: [
      "Stuck follower counts and flat impressions",
      "Followers who never turn into users",
      "Not knowing which accounts and conversations matter",
    ],
    approach:
      "Organic first. I map the accounts and conversations your users already pay attention to, then build a presence there through sharp posts, timely replies and Spaces. Growth is measured by who follows, not just how many.",
    deliverables: [
      "X growth plan",
      "Engagement target list",
      "Posting + reply playbook",
      "Spaces calendar",
      "Growth tracking dashboard",
    ],
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    short: "A plan for what to say, why, and in what format, so every post is doing a job.",
    icon: "compass",
    includes: [
      "Content pillars tied to business goals",
      "Format mix: threads, memes, short-form video, explainers",
      "Narrative planning around launches and market moments",
      "Content templates your team can reuse",
    ],
    solves: [
      "Random posting with no throughline",
      "Content that educates nobody and entertains nobody",
      "Launches that land with no build-up",
    ],
    approach:
      "Every pillar answers one question: what should someone think, feel or do after seeing this? From there I build a mix of formats and a calendar that leaves room for real-time posting when the timeline moves.",
    deliverables: [
      "Content strategy document",
      "Pillars + format guide",
      "30-day content plan",
      "Launch narrative sequences",
    ],
  },
  {
    slug: "community",
    name: "Community Management & Development",
    short: "Discord and Telegram communities that talk, help each other and stick around.",
    icon: "users",
    includes: [
      "Discord / Telegram structure, roles and onboarding flow",
      "Moderation guidelines and mod team support",
      "Community events, AMAs and recurring rituals",
      "Feedback loops between community and product team",
    ],
    solves: [
      "Big member counts with dead chats",
      "Scam-prone, unmoderated channels",
      "Users who join, look around and leave",
    ],
    approach:
      "A community is a place people come back to. I design the first five minutes for new members, give regulars reasons to return and keep the team visible. Activity matters more than headcount.",
    deliverables: [
      "Server / group architecture",
      "Onboarding flow",
      "Moderation playbook",
      "Events calendar",
      "Community health report",
    ],
  },
  {
    slug: "campaigns",
    name: "Campaign Management",
    short: "Launches, TGEs, partnerships and pushes, planned as a story, not a single post.",
    icon: "rocket",
    includes: [
      "Campaign concept and narrative",
      "Timeline across teaser, launch and follow-up",
      "Coordination with partners, KOLs and community",
      "Post-campaign reporting",
    ],
    solves: [
      "Launches that peak on day one and vanish",
      "Partner announcements nobody amplifies",
      "No clear read on what a campaign actually delivered",
    ],
    approach:
      "I treat a campaign as a sequence of beats. Tease the problem, reveal the product, prove it works, keep the momentum going, and decide upfront which numbers will tell us if it worked.",
    deliverables: [
      "Campaign brief",
      "Content + asset list",
      "Rollout timeline",
      "Partner kit",
      "Results report",
    ],
  },
  {
    slug: "copywriting",
    name: "Web3 Copywriting",
    short: "Words that sound like crypto, not a corporate blog.",
    icon: "type",
    includes: [
      "Threads, announcements and launch posts",
      "Website and landing page copy",
      "Product explainers and docs-adjacent content",
      "Bios, taglines and positioning lines",
    ],
    solves: [
      "Copy that's technically right and impossible to read",
      "Announcements that don't say why anyone should care",
      "A brand that sounds different on every channel",
    ],
    approach:
      "Clear first, clever second. I write for the person scrolling past at speed: lead with the point, cut the filler and keep the tone native to where it'll be read.",
    deliverables: [
      "Copy for agreed pieces",
      "Tone of voice notes",
      "Headline + hook options",
      "Revisions",
    ],
  },
];

/** Shorter list used on the home page "What I do" section. */
export const homeServices = [
  {
    name: "Social Media Management",
    body: "Daily presence across X, Discord and Telegram, with a voice people recognise.",
    icon: "megaphone",
    href: "/services#social-media-management",
  },
  {
    name: "Content Strategy & Creation",
    body: "Pillars, formats and posts that each have a job: educate, entertain or convert.",
    icon: "pen",
    href: "/services#content-strategy",
  },
  {
    name: "X Growth & Engagement",
    body: "Organic growth from sharp posts, timely replies and Spaces, not bought followers.",
    icon: "trending",
    href: "/services#x-growth",
  },
  {
    name: "Community Development",
    body: "Communities that stay active after the airdrop, the launch and the hype.",
    icon: "users",
    href: "/services#community",
  },
  {
    name: "Campaign Management",
    body: "Launches and pushes run as a sequence, with a clear read on what they delivered.",
    icon: "rocket",
    href: "/services#campaigns",
  },
  {
    name: "Brand Positioning",
    body: "A one-line answer to 'what is this and why should I care?' that the timeline repeats.",
    icon: "compass",
    href: "/services#copywriting",
  },
] as const;

export const approach = [
  {
    step: "Research",
    body: "Product, competitors, the accounts your users follow and the narratives they care about. I learn the market before I post in it.",
  },
  {
    step: "Strategy",
    body: "Clear goals, a defined audience and positioning you can say in one line. Plus the few numbers that will tell us it's working.",
  },
  {
    step: "Content",
    body: "Pillars and formats mapped to goals: education, culture, proof and product. Written to sound like the timeline, not a brochure.",
  },
  {
    step: "Distribution",
    body: "Right post, right channel, right time. Replies, quote posts, Spaces and partners carry content further than the brand account alone.",
  },
  {
    step: "Community",
    body: "Followers become members. Members become regulars. Regulars become the people who defend you in the replies.",
  },
  {
    step: "Measure & optimise",
    body: "Weekly reads on what's moving: reach, engagement, community activity, conversions. Double down on what works, cut what doesn't.",
  },
];
