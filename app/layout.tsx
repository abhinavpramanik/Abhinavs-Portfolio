import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abhinav Pramanik | Full Stack Developer",
    template: "%s | Abhinav Pramanik",
  },
  description:
    "Smart India Hackathon 2025 Winner and Full Stack Developer specializing in Next.js, React, Node.js, and AI-powered applications. Building scalable web solutions.",
  keywords: [
    "Abhinav Pramanik",
    "Full Stack Developer",
    "Smart India Hackathon Winner",
    "SIH 2025",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Abhinav Pramanik" }],
  creator: "Abhinav Pramanik",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col noise-overlay">
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          theme="dark"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
