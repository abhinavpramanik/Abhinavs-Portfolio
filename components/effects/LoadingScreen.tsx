"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-bg-primary)]"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="text-5xl md:text-6xl font-extrabold gradient-text tracking-[0.15em]">
              AP
            </span>
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent))",
              }}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 text-xs text-[var(--color-text-secondary)] tracking-widest uppercase"
          >
            Loading experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
