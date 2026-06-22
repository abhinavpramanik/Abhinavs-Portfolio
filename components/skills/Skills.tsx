"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="section-title gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life — from frontend
            to cloud infrastructure.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className={`group relative glass-subtle rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-400 overflow-hidden ${category.gridClass}`}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
                }}
              />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: category.color }}
                />
                <h3
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: category.color }}
                >
                  {category.name}
                </h3>
                <span className="text-xs text-[var(--color-text-secondary)]/60 ml-auto">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-200 group/skill"
                  >
                    <skill.icon
                      className="w-[18px] h-[18px] text-[var(--color-text-secondary)] group-hover/skill:scale-110 transition-transform duration-200"
                      style={{
                        color: undefined,
                      }}
                    />
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover/skill:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Background glow on hover */}
              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: category.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
