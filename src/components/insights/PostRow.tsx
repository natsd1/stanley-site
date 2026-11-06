import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type PostMeta } from "@/lib/posts-shared";

export function PostRow({ post }: { post: PostMeta }) {
  const ext = post.external;
  const meta = [post.readingTime ? `${post.readingTime} min read` : null, ext ? `On ${ext.source}` : null].filter(Boolean);
  return (
    <article className="group relative grid gap-3 border-b border-line py-8 sm:grid-cols-[9rem_1fr_auto] sm:gap-8">
      <div className="flex gap-3 font-mono text-xs uppercase tracking-[0.08em] text-dim sm:flex-col sm:gap-1.5">
        {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
      </div>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
          {ext ? (
            <a href={ext.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
              {post.title}
              <span className="sr-only"> (opens on {ext.source} in a new tab)</span>
            </a>
          ) : (
            <Link href={`/insights/${post.slug}`} className="after:absolute after:inset-0">
              {post.title}
            </Link>
          )}
        </h3>
        {post.excerpt && <p className="mt-3 max-w-2xl text-muted">{post.excerpt}</p>}
        {(meta.length > 0 || post.sample) && (
          <p className="mt-4 flex items-center gap-3 font-mono text-xs text-dim">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
            {post.sample && <span className="rounded-full border border-dashed border-line-strong px-2 py-0.5">Sample</span>}
          </p>
        )}
      </div>
      <ArrowUpRight
        className="hidden size-6 text-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:block"
        aria-hidden="true"
      />
    </article>
  );
}
