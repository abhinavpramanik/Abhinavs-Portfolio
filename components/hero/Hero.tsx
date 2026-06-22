"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import FloatingBackground from "./FloatingBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/abhinavpramanik", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/abhinavpramanik", icon: FaLinkedinIn },
  { label: "Twitter", href: "https://twitter.com/abhinavpramanik", icon: FaXTwitter },
  { label: "Email", href: "mailto:abhinavpramanik@email.com", icon: Mail },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <FloatingBackground />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 section-container flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20"
      >
        {/* Left Side — Text */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-sm font-medium text-[var(--color-achievement)]">
              🏆 Smart India Hackathon 2025 Winner
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4"
          >
            <span className="block text-white">Hi, I&apos;m</span>
            <span className="block gradient-text">Abhinav Pramanik</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium mb-6"
          >
            Full Stack Developer{" "}
            <span className="text-white/30">•</span> SIH 2025 Winner{" "}
            <span className="text-white/30">•</span> Problem Solver
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[var(--color-text-secondary)]/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Building scalable web applications, AI-powered solutions, and
            innovative products that solve real-world challenges.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-white font-semibold text-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <ExternalLink
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-subtle text-white font-semibold text-sm hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
              <Mail
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl glass-subtle text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-primary)]/30 transition-colors duration-200"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Side — 3D or Visual */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex items-center justify-center max-w-md lg:max-w-lg w-full"
        >
          {/* Trophy / Achievement Visual */}
          <div className="relative w-full aspect-square max-w-[400px]">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-secondary)]/10 to-[var(--color-accent)]/20 blur-3xl animate-glow" />

            {/* Glass sphere */}
            <div className="relative w-full h-full rounded-full glass flex items-center justify-center animate-float">
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-4">🏆</div>
                <p className="text-sm font-semibold text-[var(--color-achievement)]">
                  SIH 2025
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  National Winner
                </p>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg glass-subtle text-xs font-medium text-[var(--color-accent)]"
            >
              Next.js
            </motion.div>
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-8 px-3 py-1.5 rounded-lg glass-subtle text-xs font-medium text-[var(--color-primary)]"
            >
              React
            </motion.div>
            <motion.div
              animate={{ y: [-4, 8, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 -right-6 px-3 py-1.5 rounded-lg glass-subtle text-xs font-medium text-[var(--color-secondary)]"
            >
              TypeScript
            </motion.div>
            <motion.div
              animate={{ y: [4, -8, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 -left-4 px-3 py-1.5 rounded-lg glass-subtle text-xs font-medium text-[var(--color-success)]"
            >
              Node.js
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)]/50"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
