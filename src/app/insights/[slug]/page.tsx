import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PostRow } from "@/components/insights/PostRow";
import { XIcon } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { absoluteUrl, site } from "@/lib/site";
import { formatDate, getLocalPosts, getPost, getRelated } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getLocalPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelated(post.slug);
  const shareUrl = `https://x.com/intent/post?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(
    absoluteUrl(`/insights/${post.slug}`),
  )}&via=${site.handle}`;

  return (
    <>
      <article className="pt-32 lg:pt-40">
        <Container>
          <Link href="/insights" className="label inline-flex items-center gap-2 hover:text-fg">
            <ArrowLeft className="size-3.5" aria-hidden="true" /> All insights
          </Link>
          <header className="mt-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.08em] text-dim">
              <Link href={`/insights?category=${encodeURIComponent(post.category)}`} className="text-accent hover:underline">
                {post.category}
              </Link>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min read</span>
              {post.sample && (
                <span className="rounded-full border border-dashed border-line-strong px-2 py-0.5 normal-case tracking-normal">
                  Sample article
                </span>
              )}
            </div>
            <h1 className="mt-6 text-[clamp(2.4rem,5.4vw,4.75rem)] font-semibold leading-[1] tracking-[-0.045em]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted">{post.excerpt}</p>
          </header>

          <div className="mt-14 grid gap-12 border-t border-line pt-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="space-y-8 lg:sticky lg:top-28">
                <div className="flex items-center gap-3">
                  {site.portrait ? (
                    <Image src={site.portrait} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
                  ) : (
                    <span className="grid size-10 place-items-center rounded-full bg-accent font-mono text-sm font-bold text-ink" aria-hidden="true">
                      S
                    </span>
                  )}
                  <div className="text-sm">
                    <p className="font-medium">Stanley</p>
                    <p className="text-dim">@{site.handle}</p>
                  </div>
                </div>
                {post.headings.length > 0 && (
                  <nav aria-label="On this page" className="hidden lg:block">
                    <p className="label">On this page</p>
                    <ol className="mt-4 space-y-2.5 border-l border-line">
                      {post.headings.map((h) => (
                        <li key={h.id}>
                          <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-sm text-muted hover:border-accent hover:text-fg">
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-muted hover:border-accent hover:text-accent"
                >
                  <XIcon className="size-3.5" /> Share on X
                </a>
              </div>
            </aside>
            <div className="prose-article max-w-[68ch] lg:col-span-8 lg:col-start-5" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Container>
      </article>

      <section className="mt-24 border-t border-line bg-surface/40 py-16">
        <Container className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <p className="text-3xl font-semibold tracking-tight lg:col-span-8">
            Want this kind of thinking on your project&apos;s timeline?
          </p>
          <div className="lg:col-span-4 lg:text-right">
            <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-20" aria-labelledby="related-title">
          <Container>
            <h2 id="related-title" className="label">
              Related articles
            </h2>
            <div className="mt-4 border-t border-line">
              {related.map((r) => (
                <PostRow key={r.slug} post={r} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
