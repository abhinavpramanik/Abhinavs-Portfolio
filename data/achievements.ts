export type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: string;
};

export type Achievement = {
  title: string;
  description: string;
  year: string;
  icon: string;
  color: string;
};

export const stats: Stat[] = [
  { value: 1, suffix: "", label: "SIH Winner", icon: "🏆" },
  { value: 400, suffix: "+", label: "Teams Competed Against", icon: "👥" },
  { value: 10, suffix: "+", label: "Projects Built", icon: "💻" },
  { value: 3, suffix: "+", label: "Years Coding", icon: "📅" },
];

export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon Winner",
    description:
      "Won the national-level Smart India Hackathon 2025, India's biggest hackathon, competing against 400+ teams.",
    year: "2025",
    icon: "🏆",
    color: "#F59E0B",
  },
  {
    title: "Odoo Hackathon 1st Runner-Up",
    description:
      "Secured 1st Runner-Up position at the Odoo x Parul University Hackathon 2026.",
    year: "2026",
    icon: "🥈",
    color: "#8B5CF6",
  },
  {
    title: "Computer Science Student",
    description:
      "Pursuing B.Tech in Computer Science Engineering with a focus on full stack development and AI.",
    year: "Present",
    icon: "🎓",
    color: "#06B6D4",
  },
  {
    title: "Full Stack Developer",
    description:
      "Building production-grade applications with modern web technologies and AI integration.",
    year: "Ongoing",
    icon: "💻",
    color: "#22C55E",
  },
];
