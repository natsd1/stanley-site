# Stanley — Web3 Growth & Community

Personal site for Stanley (@DeFi_Senseii). Next.js 16 · TypeScript · Tailwind CSS 4 · Lucide · Framer Motion.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Editing content (no component changes needed)

| What | File |
| --- | --- |
| Name, links, availability, portrait | `src/lib/site.ts` |
| Projects & case studies | `src/lib/projects.ts` |
| Services, home "What I do", approach | `src/lib/services.ts` |
| About: timeline, strengths, industries, tools | `src/lib/about.ts` |
| Testimonials | `src/components/home/Testimonials.tsx` (`slots` array) |
| Blog articles | `src/content/insights/*.md` |

**Results labels.** Every case-study result is `verified`, `qualitative` or `placeholder`. Only use `verified` for numbers you can prove. Replace or delete placeholders as you add data.

**Portrait.** Put a photo at `public/images/stanley.jpg` and set `portrait: "/images/stanley.jpg"` in `site.ts`.

**Articles.** Add a Markdown file; the file name becomes the URL. Frontmatter:
```yaml
title: "..."
excerpt: "..."
date: "2026-11-01"
category: "Web3 Growth"   # Web3 Growth | Social Strategy | Community | X Growth | Content | Field Notes
sample: false
```
Delete the sample articles (`sample: true`) once you have your own.

## Before deploying

1. Copy `.env.example` to `.env.local` (or set in your host):
   - `NEXT_PUBLIC_SITE_URL` — your real domain (canonical URLs, sitemap, OG image).
   - `NEXT_PUBLIC_FORM_ENDPOINT` — a JSON form endpoint (e.g. Formspree). **Until this is set, the contact form does not send anything.** It tells visitors so and offers copy-to-clipboard + Telegram/X instead.
2. Deploy to Vercel (zero config) or any Node host.
