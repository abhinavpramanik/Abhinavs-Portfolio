"use client";

import { useEffect, useState, useCallback } from "react";

export default function FloatingBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Blobs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[100px] animate-blob"
        style={{
          background: "var(--color-primary)",
          top: "5%",
          left: "15%",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.12] blur-[100px] animate-blob"
        style={{
          background: "var(--color-secondary)",
          top: "40%",
          right: "10%",
          animationDelay: "-4s",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.10] blur-[100px] animate-blob"
        style={{
          background: "var(--color-accent)",
          bottom: "15%",
          left: "35%",
          animationDelay: "-2s",
        }}
      />

      {/* Cursor Glow — desktop only */}
      <div
        className="hidden md:block absolute w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px] transition-transform duration-[2000ms] ease-out pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary), transparent 70%)",
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          willChange: "transform",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
