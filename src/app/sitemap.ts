import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { caseStudies } from "@/lib/projects";
import { getLocalPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/services", "/work", "/insights", "/contact"].map((p) => ({
    url: absoluteUrl(p),
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.8,
  }));
  const work = caseStudies.map((p) => ({ url: absoluteUrl(`/work/${p.slug}`), priority: 0.7 }));
  const posts = getLocalPosts().map((p) => ({ url: absoluteUrl(`/insights/${p.slug}`), lastModified: p.date, priority: 0.6 }));
  return [...pages, ...work, ...posts];
}
