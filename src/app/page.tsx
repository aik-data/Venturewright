import type { Metadata } from "next";
import { NOINDEX, SEO } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { Situations } from "@/components/sections/Situations";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * Page-level metadata. The canonical URL and indexing directives live here
 * rather than in the layout so they are not inherited by the 404 route.
 */
export const metadata: Metadata = {
  alternates: { canonical: SEO.canonical },
  robots: NOINDEX
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
      },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Situations />
      <HowItWorks />
      <Experience />
      <About />
      <FinalCta />
    </>
  );
}
