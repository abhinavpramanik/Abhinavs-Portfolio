"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

type SocialLink = {
  label: string;
  href: string;
  icon: IconType | LucideIcon;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/abhinavpramanik",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abhinavpramanik",
    icon: FaLinkedinIn,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/abhinavpramanik",
    icon: FaXTwitter,
  },
  {
    label: "Email",
    href: "mailto:abhinavpramanik@email.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold gradient-text">
              Abhinav Pramanik
            </span>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Full Stack Developer • SIH 2025 Winner
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl glass-subtle text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-primary)]/30 transition-colors duration-200"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-secondary)]">
          <p>© {new Date().getFullYear()} Abhinav Pramanik. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with
            <span className="gradient-text font-medium">Next.js</span>
            &
            <span className="gradient-text font-medium">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
