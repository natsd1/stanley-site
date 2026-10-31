import { Reveal } from "../ui/Reveal";

/** Two-column case study section: sticky label on the left, content on the right. */
export function CaseSection({
  index,
  title,
  children,
  aside,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  const id = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section className="grid gap-8 border-t border-line py-16 lg:grid-cols-12 lg:py-20" aria-labelledby={id}>
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <p className="font-mono text-xs text-accent">{index}</p>
          <h2 id={id} className="mt-3 text-3xl font-semibold lg:text-4xl">
            {title}
          </h2>
          {aside}
        </div>
      </div>
      <Reveal className="lg:col-span-8">{children}</Reveal>
    </section>
  );
}
