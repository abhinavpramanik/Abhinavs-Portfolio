"use client";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { IconType } from "react-icons";

type TechLogo = {
  name: string;
  icon: IconType;
  color: string;
};

const techLogos: TechLogo[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...techLogos, ...techLogos]; // Duplicate for seamless loop

  return (
    <div className="relative overflow-hidden group/marquee">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-6 w-max group-hover/marquee:[animation-play-state:paused]"
        style={{
          animation: `marquee ${reverse ? "35s" : "30s"} linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl glass-subtle hover:bg-white/[0.08] hover:scale-105 transition-all duration-200 flex-shrink-0"
          >
            <tech.icon
              className="w-5 h-5"
              style={{ color: tech.color }}
            />
            <span className="text-sm font-medium text-[var(--color-text-secondary)] whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative py-12 md:py-16 border-y border-white/[0.04]">
      <div className="space-y-5">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
