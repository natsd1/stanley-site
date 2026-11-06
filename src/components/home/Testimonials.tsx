import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Em, SectionHeading } from "../ui/SectionHeading";

/**
 * Real screenshots of feedback. To add one: put the image in
 * public/images/testimonials/ and add an entry below (width/height = image size in pixels).
 * `alt` should repeat what the message says, for screen readers and search engines.
 */
const screenshots = [
  {
    src: "/images/testimonials/discord-odin-fantastic-job.jpg",
    width: 1010,
    height: 192,
    source: "Discord · OdinBot",
    alt: "OdinBot Discord, 29 October 2024. ODIN replies to Fenrir's post of the X analytics: “Yeah doing a fantastic job!!”",
  },
  {
    src: "/images/testimonials/discord-culture.jpg",
    width: 1280,
    height: 592,
    source: "Discord",
    alt: "Discord messages. Fenrir: “Stan knows the culture well.” Thor in #marketing-chat: “Stan the man killing it as per usual.”",
  },
  {
    src: "/images/testimonials/discord-twitter-admin.jpg",
    width: 1280,
    height: 724,
    source: "Discord",
    alt: "Discord messages. thatbagholder: “I like how active the twitter is, props to the twitter admin.” Forseti replies: “Props goes to @Stan.”",
  },
  {
    src: "/images/testimonials/telegram-perfect-content.jpg",
    width: 1280,
    height: 824,
    source: "Telegram",
    alt: "Telegram chat. YZ Z: “thx Stan.” Stan: “You're welcome. Just need your go ahead on when you want to post out or anything you want to be added or removed.” YZ Z: “Perfect content.”",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-line py-24 lg:py-32" aria-labelledby="testimonials-title">
      <Container>
        <SectionHeading
          title={
            <span id="testimonials-title">
              Straight from <Em>the group chats.</Em>
            </span>
          }
          intro="No polished quotes. These are unedited screenshots from Discord and Telegram, from the communities and teams I've worked with."
        />
        <ul className="mt-14 gap-6 md:columns-2 lg:columns-3 [&>li]:mb-6 [&>li]:break-inside-avoid">
          {screenshots.map((s, i) => (
            <li key={s.src}>
              <Reveal delay={0.06 * i}>
                <figure className="group overflow-hidden rounded-[4px] border border-line bg-surface transition-colors hover:border-line-strong">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={s.width}
                    height={s.height}
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
