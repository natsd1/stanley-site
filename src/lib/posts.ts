import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { categories, type PostMeta } from "./posts-shared";
import { published } from "./published";

export { categories, formatDate, postHref, type Category, type PostMeta } from "./posts-shared";

/**
 * Insights are Markdown files in src/content/insights.
 * File name = URL slug. Frontmatter fields:
 *   title, excerpt, date (YYYY-MM-DD), category, sample (true/false)
 */

export type Post = PostMeta & { html: string; headings: { id: string; text: string }[] };

const DIR = path.join(process.cwd(), "src/content/insights");

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function readFile(file: string) {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  const meta: PostMeta = {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date),
    category: (categories as readonly string[]).includes(data.category) ? data.category : "Field Notes",
    readingTime: Math.max(1, Math.round(words / 230)),
    sample: Boolean(data.sample),
  };
  return { meta, content };
}

/** Articles written for this site (Markdown files), newest first. */
export function getLocalPosts(): PostMeta[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Everything shown in Insights: local articles, then writing published elsewhere (see published.ts). */
export function getAllPosts(): PostMeta[] {
  return [...getLocalPosts(), ...published];
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.md`;
  if (!/^[a-z0-9-]+$/.test(slug) || !fs.existsSync(path.join(DIR, file))) return null;
  const { meta, content } = readFile(file);
  const headings: Post["headings"] = [];
  const renderer = new marked.Renderer();
  renderer.heading = ({ tokens, depth }) => {
    const text = renderer.parser.parseInline(tokens);
    const id = slugify(text);
    if (depth === 2) headings.push({ id, text: text.replace(/<[^>]+>/g, "") });
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };
  const html = marked.parse(content, { renderer, async: false }) as string;
  return { ...meta, html, headings };
}

export function getRelated(slug: string, limit = 3): PostMeta[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);
  const others = all.filter((p) => p.slug !== slug);
  const same = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}

