"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2023",
    title: "Started Full Stack Development",
    description:
      "Began my journey into web development, learning React, Node.js, and modern JavaScript frameworks.",
    icon: "🚀",
    color: "#06B6D4",
  },
  {
    year: "2024",
    title: "Built Production Projects",
    description:
      "Developed multiple production-grade applications including ERP systems and AI-powered tools.",
    icon: "💻",
    color: "#6366F1",
  },
  {
    year: "2025",
    title: "Won Smart India Hackathon",
    description:
      "Led the team to victory at India's biggest hackathon, competing against 400+ teams nationwide.",
    icon: "🏆",
    color: "#F59E0B",
  },
  {
    year: "2026",
    title: "1st Runner-Up — Odoo Hackathon",
    description:
      "Secured 1st Runner-Up position at the Odoo x Parul University Hackathon.",
    icon: "🥈",
    color: "#8B5CF6",
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="about" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="section-title gradient-text mb-4">About Me</h2>
          <p className="section-subtitle mx-auto">
            My journey from learning to code to winning national hackathons — a
            timeline of growth, building, and competing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-white/[0.06]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestone Cards */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } pl-12 md:pl-0`}
              >
                {/* Timeline Node */}
                <div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 mt-6"
                  style={{
                    borderColor: milestone.color,
                    background: `${milestone.color}40`,
                    boxShadow: `0 0 16px ${milestone.color}30`,
                  }}
                />

                {/* Card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-subtle rounded-2xl p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 group">
                    {/* Year Badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{
                        background: `${milestone.color}15`,
                        color: milestone.color,
                      }}
                    >
                      {milestone.year}
                    </span>

                    {/* Content */}
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{milestone.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
