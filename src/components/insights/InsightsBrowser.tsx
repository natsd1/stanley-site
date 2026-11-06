"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import clsx from "clsx";
import type { PostMeta } from "@/lib/posts-shared";
import { PostRow } from "./PostRow";

export function InsightsBrowser({ posts, categories }: { posts: PostMeta[]; categories: readonly string[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("category");
  const [category, setCategory] = useState<string | null>(initial && categories.includes(initial) ? initial : null);
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    posts.forEach((p) => (c[p.category] = (c[p.category] ?? 0) + 1));
    return c;
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (!category || p.category === category) &&
        (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)),
    );
  }, [posts, category, query]);

  const choose = (c: string | null) => {
    setCategory(c);
    router.replace(c ? `/insights?category=${encodeURIComponent(c)}` : "/insights", { scroll: false });
  };

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {[null, ...categories].map((c) => {
            const active = category === c;
            const n = c ? counts[c] ?? 0 : posts.length;
            return (
              <button
                key={c ?? "all"}
                type="button"
                aria-pressed={active}
                onClick={() => choose(c)}
                className={clsx(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  active
                    ? "border-fg bg-fg text-ink"
                    : "border-line-strong text-muted hover:border-fg hover:text-fg",
                )}
              >
                {c ?? "All"} <span className={clsx("ml-1 font-mono text-xs", active ? "text-ink/60" : "text-dim")}>{n}</span>
              </button>
            );
          })}
        </div>
        <div className="relative w-full lg:w-72">
          <label htmlFor="post-search" className="sr-only">
            Search articles
          </label>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-dim" aria-hidden="true" />
          <input
            id="post-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            className="w-full rounded-full border border-line-strong bg-transparent py-2.5 pl-11 pr-10 text-sm placeholder:text-dim focus:border-accent focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-dim hover:text-fg"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      <p className={clsx("label mt-6", !category && !query && "sr-only")} aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
        {category && ` in ${category}`}
        {query && ` matching “${query}”`}
      </p>

      {filtered.length > 0 ? (
        <div>
          {filtered.map((p) => (
            <PostRow key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[4px] border border-dashed border-line-strong p-10 text-center">
          <p className="text-xl font-medium">Nothing here yet.</p>
          <p className="mt-2 text-muted">Try another category or a different search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              choose(null);
            }}
            className="mt-6 rounded-full border border-line-strong px-5 py-2 text-sm hover:border-accent hover:text-accent"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
