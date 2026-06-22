"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { stats, achievements } from "@/data/achievements";

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="text-center p-6 md:p-8 glass-subtle rounded-2xl hover:bg-white/[0.06] transition-all duration-300"
    >
      <span className="text-2xl md:text-3xl mb-2 block">{stat.icon}</span>
      <div className="text-3xl md:text-4xl font-extrabold gradient-text-primary mb-1">
        {inView ? (
          <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
        ) : (
          "0"
        )}
      </div>
      <p className="text-xs md:text-sm text-[var(--color-text-secondary)]">
        {stat.label}
      </p>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: i * 0.12,
    },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="section-title gradient-text mb-4">Achievements</h2>
          <p className="section-subtitle mx-auto">
            Milestones that define my journey — from national hackathon
            victories to production deployments.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative glass-subtle rounded-2xl p-6 overflow-hidden hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${achievement.color}, transparent)`,
                }}
              />

              {/* Content */}
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{achievement.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {achievement.title}
                    </h3>
                    <span
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        background: `${achievement.color}15`,
                        color: achievement.color,
                      }}
                    >
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ background: achievement.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
