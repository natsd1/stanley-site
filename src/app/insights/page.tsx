import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Em } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { InsightsBrowser } from "@/components/insights/InsightsBrowser";
import { PostRow } from "@/components/insights/PostRow";
import { categories, formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes on Web3 growth, X strategy, crypto community building and content that works on the timeline.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <>
      <PageHero
        index="//"
        eyebrow="Insights"
        title={
          <>
            Notes from <Em>the timeline.</Em>
          </>
        }
        intro="Writing on DeFi, stablecoins, Web3 growth and community, published on Medium, client blogs and X."
      />

      {featured && (
        <section className="pt-16 lg:pt-20" aria-labelledby="featured-title">
          <Container>
            <Reveal>
              <article className="group relative grid gap-8 rounded-[4px] border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="label">
                    <span className="text-accent">Featured</span> · {featured.category}
                  </p>
                  <p className="mt-3 font-mono text-xs text-dim">
                    {[
                      featured.date && formatDate(featured.date),
                      featured.readingTime ? `${featured.readingTime} min read` : null,
                      featured.external && `On ${featured.external.source}`,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <h2 id="featured-title" className="text-4xl font-semibold leading-[1.02] sm:text-5xl">
                    {featured.external ? (
                      <a href={featured.external.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                        {featured.title}
                        <span className="sr-only"> (opens on {featured.external.source} in a new tab)</span>
                      </a>
                    ) : (
                      <Link href={`/insights/${featured.slug}`} className="after:absolute after:inset-0">
                        {featured.title}
                      </Link>
                    )}
                  </h2>
                  {featured.excerpt && <p className="mt-5 max-w-2xl text-lg text-muted">{featured.excerpt}</p>}
                  <p className="label mt-8 text-fg transition-colors group-hover:text-accent">
                    {featured.external ? `Read on ${featured.external.source} ↗` : "Read article →"}
                  </p>
                </div>
              </article>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="py-16 lg:py-24" aria-label="All articles">
        <Container>
          <Suspense
            fallback={
              <div>
                {posts.map((p) => (
                  <PostRow key={p.slug} post={p} />
                ))}
              </div>
            }
          >
            <InsightsBrowser posts={posts} categories={categories.filter((c) => posts.some((p) => p.category === c))} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
