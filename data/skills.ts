import { IconType } from "react-icons";
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

export type SkillCategory = {
  name: string;
  color: string;
  gridClass: string;
  skills: { name: string; icon: IconType }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    color: "#6366F1",
    gridClass: "md:col-span-2 md:row-span-2",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    color: "#8B5CF6",
    gridClass: "md:col-span-2 md:row-span-2",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    name: "Database",
    color: "#06B6D4",
    gridClass: "md:col-span-2",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    name: "Cloud",
    color: "#22C55E",
    gridClass: "md:col-span-1",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    name: "Tools",
    color: "#F59E0B",
    gridClass: "md:col-span-1",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
    ],
  },
];
