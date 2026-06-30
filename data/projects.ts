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
    image: "/easyerp-img.png",
    description:
      "Award-winning ERP platform for educational institutions, developed during Smart India Hackathon 2025 and securing 1st place nationally.",

    longDescription:
      "A scalable and cost-effective ERP ecosystem built for schools, colleges, and universities. The platform streamlines admissions, academics, attendance, hostel management, fee collection, and library operations through role-based dashboards and real-time data synchronization.",

    badge: "🏆 Smart India Hackathon Winner",
    isFeatured: true,

    techStack: [
      "Next.js",
      "TypeScript",
      "Google Sheets",
      "Google Apps Script",
      "Tailwind CSS",
    ],

    features: [
      "Role-Based Dashboards for Admins, Faculty & Students",
      "Online Admission Management System",
      "Student Attendance Tracking",
      "Fee Collection & Payment Management",
      "Hostel Room Allocation & Management",
      "Digital Library Management System",
      "Academic Records & Performance Tracking",
      "Real-Time Data Synchronization",
      "Multilingual Support (English & Hindi)",
      "AI-Powered Student Assistance",
    ],

    githubUrl: "https://github.com/TLE-Smashers/EasyERP-SIH",
    liveUrl: "https://easy-erp-tle-smashers.kanhaiyalalsahu.me/",
  },

  {
    id: "cafe-odoo",
    title: "Café Odoo",
    image: "/odoocafe-img.png",

    description:
      "Real-time POS and restaurant management platform that secured 1st Runner-Up at the Odoo x Parul University Hackathon.",

    longDescription:
      "A complete restaurant ecosystem featuring POS operations, Kitchen Display Systems, QR-based ordering, inventory tracking, payment processing, and business analytics. Built to improve operational efficiency and customer experience for modern cafes and restaurants.",

    badge: "🥈 Odoo Hackathon Runner-Up",
    isFeatured: true,

    techStack: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Socket.io",
      "NextAuth",
      "Razorpay",
    ],

    features: [
      "Real-Time POS Billing System",
      "Kitchen Display System (KDS)",
      "QR-Based Self Ordering",
      "Live Order Status Tracking",
      "Role-Based Authentication & Permissions",
      "Inventory & Stock Management",
      "Razorpay Payment Integration",
      "Customer Order History",
      "Sales & Revenue Analytics Dashboard",
      "Real-Time Notifications using WebSockets",
    ],

    githubUrl: "https://github.com/CSEAnuragChandra/OxPH-CafePOS",
    liveUrl: "https://odoocafe-pos.onrender.com/",
  },

  {
    id: "jobscout",
    title: "JobScout",
    image: "/jobscout-img.png",

    description:
      "AI-powered job discovery platform that aggregates opportunities from multiple sources and intelligently matches candidates with relevant roles.",

    longDescription:
      "A job search engine that combines API integrations and web scraping to aggregate opportunities from multiple job portals. Includes AI-powered resume analysis, skill extraction, duplicate prevention, and automated job synchronization.",

    isFeatured: true,

    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Playwright",
      "Cheerio",
      "NextAuth",
    ],

    features: [
      "Multi-Source Job Aggregation",
      "AI Resume Parsing & Analysis",
      "Automated Skill Extraction",
      "Smart Job Recommendation Engine",
      "Duplicate Job Detection",
      "Advanced Search & Filtering",
      "Automated Job Collection Cron Jobs",
      "Authentication & User Profiles",
      "Resume-Based Matching Score",
      "Support for 6+ Job Platforms",
    ],

    githubUrl: "https://github.com/abhinavpramanik/jobscout",
    // liveUrl: "#",
  },

  {
    id: "cognitia",
    title: "Cognitia AI",
    image: "/cognitia-img.png",

    description:
      "Intelligent AI chat platform powered by Google's Gemini with persistent memory and modern conversational experience.",

    longDescription:
      "A ChatGPT-inspired AI assistant built using Gemini APIs. Features secure authentication, persistent conversation storage, chat management, and a clean user experience designed for productivity and long-term conversations.",

    isFeatured: true,

    techStack: [
      "Next.js",
      "MongoDB",
      "Gemini API",
      "NextAuth",
      "Tailwind CSS",
    ],

    features: [
      "Gemini-Powered AI Conversations",
      "Persistent Chat History",
      "Multiple Chat Sessions",
      "Authentication & User Accounts",
      "Real-Time Message Streaming",
      "Chat Management & Organization",
      "Modern ChatGPT-Like Interface",
      "Responsive Design",
      "Conversation Context Retention",
      "Secure Data Storage",
    ],

    githubUrl: "https://github.com/abhinavpramanik/cognitiachatbot",
    liveUrl: "http://cognitiachatbot.vercel.app/",
  },

  {
    id: "portfolio",
    title: "Personal Portfolio",
    image: "/portfolio-img.png",

    description:
      "A highly interactive and immersive developer portfolio showcasing projects, achievements, skills, and technical expertise.",

    longDescription:
      "A premium personal portfolio inspired by modern SaaS websites. Built with advanced animations, smooth scrolling, 3D elements, and interactive project showcases to create a memorable user experience while highlighting technical achievements and projects.",

    isFeatured: true,

    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "React Three Fiber",
    ],

    features: [
      "Interactive 3D Hero Section",
      "Advanced Framer Motion Animations",
      "GSAP Scroll-Based Effects",
      "Smooth Scrolling with Lenis",
      "Dynamic Project Showcase",
      "Responsive Design Across Devices",
      "Achievement & Experience Timeline",
      "Interactive Skills Visualization",
      "SEO Optimized Architecture",
      "Performance Optimized (95+ Lighthouse)",
    ],

    githubUrl: "https://github.com/abhinavpramanik/Abhinavs-Portfolio",
    liveUrl: "https://abhinavpramanik.vercel.app/",
  },
];
