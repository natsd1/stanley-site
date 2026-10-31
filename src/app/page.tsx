import { Hero } from "@/components/home/Hero";
import { Results } from "@/components/home/Results";
import { WhatIDo } from "@/components/home/WhatIDo";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Approach } from "@/components/home/Approach";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Results />
      <WhatIDo />
      <FeaturedProjects />
      <Approach />
      <Testimonials />
      <FinalCta />
    </>
  );
}
