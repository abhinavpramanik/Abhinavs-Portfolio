export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  badge?: string;
  isFeatured: boolean;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "easyerp",
    title: "EasyERP",
    description:
      "A comprehensive ERP system built for educational institutions, winning Smart India Hackathon 2025.",
    longDescription:
      "Full-featured Enterprise Resource Planning system with role-based dashboards for administrators, faculty, and students. Integrates with Google Sheets for cost-effective data management.",
    badge: "🏆 SIH Winner",
    isFeatured: true,
    techStack: ["Next.js", "Google Sheets", "Apps Script", "TypeScript"],
    features: [
      "Role-Based Dashboards",
      "Library Management",
      "Fee Management",
      "Hostel Management",
      "Attendance Tracking",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "jobscout",
    title: "JobScout",
    description:
      "AI-powered job aggregation platform with intelligent resume matching and skill extraction.",
    longDescription:
      "Aggregates job listings from multiple sources and uses AI to match candidates based on their resume, extracting skills and experience automatically.",
    isFeatured: false,
    techStack: ["React", "Node.js", "MongoDB", "AI/ML"],
    features: [
      "Job Aggregation",
      "Resume Matching",
      "Skill Extraction",
      "Multi-Source Search",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "cognitia",
    title: "Cognitia AI",
    description:
      "Intelligent AI chat application powered by Google's Gemini with persistent conversation history.",
    longDescription:
      "Full-featured AI chat application with Gemini integration, supporting persistent chat history, user authentication, and a premium chat interface.",
    isFeatured: false,
    techStack: ["Next.js", "Gemini API", "MongoDB", "NextAuth"],
    features: [
      "AI Chat Interface",
      "Gemini Integration",
      "Chat History",
      "User Authentication",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
];
