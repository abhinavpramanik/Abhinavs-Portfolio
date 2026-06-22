import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Achievements from "@/components/achievements/Achievements";
import Timeline from "@/components/timeline/Timeline";
import Marquee from "@/components/marquee/Marquee";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <Skills />
      <Projects />
      <Achievements />
      <Timeline />
      <Contact />
    </>
  );
}
