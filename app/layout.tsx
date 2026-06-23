import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import LoadingScreen from "@/components/effects/LoadingScreen";
import CustomCursor from "@/components/effects/CustomCursor";
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

const siteUrl = "https://abhinavpramanik.vercel.app";

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
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abhinav Pramanik Portfolio",
    title: "Abhinav Pramanik | Full Stack Developer & SIH Winner",
    description:
      "Smart India Hackathon 2025 Winner. Building scalable web applications with Next.js, React, and AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhinav Pramanik — Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Pramanik | Full Stack Developer",
    description: "SIH 2025 Winner. Building scalable web apps with Next.js & AI.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhinav Pramanik",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  description:
    "Smart India Hackathon 2025 Winner and Full Stack Developer specializing in Next.js, React, and AI applications.",
  sameAs: [
    "https://github.com/abhinavpramanik",
    "https://linkedin.com/in/abhinavpramanik",
    "https://twitter.com/abhinavpramanik",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Full Stack Development",
    "AI Applications",
  ],
  award: [
    "Smart India Hackathon 2025 Winner",
    "Odoo x Parul University Hackathon 2026 1st Runner-Up",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col noise-overlay">
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
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
