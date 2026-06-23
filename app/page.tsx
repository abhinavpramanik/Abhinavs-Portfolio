import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";

// Dynamic imports for below-fold heavy components
const About = dynamic(() => import("@/components/about/About"));
const Skills = dynamic(() => import("@/components/skills/Skills"));
const Projects = dynamic(() => import("@/components/projects/Projects"));
const Achievements = dynamic(
  () => import("@/components/achievements/Achievements")
);
const Timeline = dynamic(() => import("@/components/timeline/Timeline"));
const Marquee = dynamic(() => import("@/components/marquee/Marquee"));
const Contact = dynamic(() => import("@/components/contact/Contact"));

function SectionSkeleton() {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center gap-4">
        <div className="w-48 h-10 rounded-xl bg-white/[0.03] animate-pulse" />
        <div className="w-96 max-w-full h-5 rounded-lg bg-white/[0.02] animate-pulse" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={null}>
        <Marquee />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Achievements />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Timeline />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </>
  );
}
