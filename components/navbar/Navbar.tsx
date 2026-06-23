"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Intersection Observer for active section
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-[1200px] rounded-full",
          isScrolled
            ? "glass-pill border border-white/[0.08] shadow-xl shadow-black/40"
            : "bg-transparent border border-transparent"
        )}
      >
        <div className="px-4 md:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="relative group"
            >
              <span className="text-xl font-bold gradient-text tracking-tight">
                AP
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    activeSection === link.href.replace("#", "")
                      ? "text-white"
                      : "text-[var(--color-text-secondary)] hover:text-white"
                  )}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/[0.08] shadow-[0_0_20px_rgba(255,255,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.25)] rounded-full backdrop-blur-lg border border-white/[0.15] -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Resume Button (Desktop) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full gradient-bg text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-white transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[var(--color-bg-secondary)]/95 backdrop-blur-xl border-l border-white/[0.06]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-8">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200",
                        activeSection === link.href.replace("#", "")
                          ? "text-white bg-white/[0.06]"
                          : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/[0.03]"
                      )}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Resume Button */}
                <div className="mt-auto">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-xl gradient-bg text-white"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
