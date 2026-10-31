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
  const [latest] = posts;

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
        intro="Web3 growth, social strategy, community building and what I've learned doing this work. Written for founders and fellow operators."
      />

      {latest && (
        <section className="pt-16 lg:pt-20" aria-labelledby="latest-title">
          <Container>
            <Reveal>
              <article className="group relative grid gap-8 rounded-[4px] border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="label">
                    <span className="text-accent">Latest</span> · {latest.category}
                  </p>
                  <p className="mt-3 font-mono text-xs text-dim">
                    {formatDate(latest.date)} · {latest.readingTime} min read
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <h2 id="latest-title" className="text-4xl font-semibold leading-[1.02] sm:text-5xl">
                    <Link href={`/insights/${latest.slug}`} className="after:absolute after:inset-0">
                      {latest.title}
                    </Link>
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg text-muted">{latest.excerpt}</p>
                  <p className="label mt-8 text-fg transition-colors group-hover:text-accent">Read article →</p>
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
            <InsightsBrowser posts={posts} categories={categories} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
