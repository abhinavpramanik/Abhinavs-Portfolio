"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateX.set(py * -8);
      rotateY.set(px * 8);
      x.set(px * 4);
      y.set(py * 4);

      // Spotlight effect
      const spotlightX = ((e.clientX - rect.left) / rect.width) * 100;
      const spotlightY = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--spotlight-x", `${spotlightX}%`);
      e.currentTarget.style.setProperty("--spotlight-y", `${spotlightY}%`);
    },
    [rotateX, rotateY, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  }, [rotateX, rotateY, x, y]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`group relative spotlight-card glass-subtle rounded-2xl overflow-hidden hover:border-[var(--color-primary)]/30 transition-colors duration-300 h-full flex flex-col`}
    >
      {/* Badge */}
      {project.badge && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[var(--color-achievement)]/10 text-[var(--color-achievement)] text-xs font-bold animate-glow">
          {project.badge}
        </div>
      )}

      {/* Preview Area */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] flex items-center justify-center overflow-hidden">
        {project.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-center transition-transform duration-500 group-hover:scale-105">
            <span className="text-4xl mb-2 block">
              {project.id === "easyerp"
                ? "🏢"
                : project.id === "jobscout"
                ? "🔍"
                : "🤖"}
            </span>
            <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
              {project.title}
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features */}
        {project.isFeatured && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="text-xs text-[var(--color-text-secondary)]/70 px-2 py-0.5 rounded-md bg-white/[0.03]"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
            >
              <FaGithub size={16} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 bg-[var(--color-primary)]" />
    </motion.div>
  );
}

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setTimeout(onSelect, 0);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20"
        >
          <div className="text-left">
            <h2 className="section-title gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="section-subtitle max-w-xl">
              Handpicked work I&apos;m proud of — from hackathon-winning systems
              to AI-powered applications.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="p-3 rounded-full glass-subtle text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-primary)]/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="p-3 rounded-full glass-subtle text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-primary)]/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 cursor-grab active:cursor-grabbing">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] min-w-0"
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
