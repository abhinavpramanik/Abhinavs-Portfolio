"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  {
    title: "Internship",
    subtitle: "Software Development Intern",
    description:
      "Gained hands-on experience in full stack development, working with real-world codebases and production systems.",
    date: "2023",
    icon: "💼",
    color: "#06B6D4",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project Development",
    subtitle: "Building Production Applications",
    description:
      "Developed multiple full-stack applications, honing skills in system design, API architecture, and frontend development.",
    date: "2024",
    icon: "🛠️",
    color: "#6366F1",
    tags: ["Next.js", "TypeScript", "AWS"],
  },
  {
    title: "Hackathon Victories",
    subtitle: "SIH Winner & Odoo Runner-Up",
    description:
      "Won Smart India Hackathon 2025 and secured 1st Runner-Up at Odoo x Parul University Hackathon 2026.",
    date: "2025–2026",
    icon: "🏆",
    color: "#F59E0B",
    tags: ["EasyERP", "Team Lead", "Innovation"],
  },
  {
    title: "Current Journey",
    subtitle: "Full Stack Developer & Builder",
    description:
      "Focusing on AI-powered applications, scalable architectures, and contributing to innovative products.",
    date: "Present",
    icon: "🚀",
    color: "#22C55E",
    tags: ["AI/ML", "SaaS", "Open Source"],
  },
];

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="section-title gradient-text mb-4">Experience</h2>
          <p className="section-subtitle mx-auto">
            From learning the fundamentals to winning national competitions — my
            professional timeline.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-white/[0.06]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-primary)] to-[var(--color-success)]"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Events */}
          <div className="space-y-10">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: i * 0.15,
                  }}
                  className="absolute left-4 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 mt-2"
                  style={{
                    borderColor: event.color,
                    background: `${event.color}30`,
                    boxShadow: `0 0 12px ${event.color}25`,
                  }}
                />

                {/* Card */}
                <div className="group glass-subtle rounded-2xl p-6 hover:bg-white/[0.06] hover:translate-x-2 transition-all duration-300">
                  {/* Date + Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{event.icon}</span>
                    <span
                      className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: `${event.color}15`,
                        color: event.color,
                      }}
                    >
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-primary)] mb-2">
                    {event.subtitle}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-[var(--color-text-secondary)] border border-white/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
