# Abhinav Pramanik — Developer Portfolio

A highly interactive and immersive developer portfolio showcasing projects, achievements, skills, and technical expertise. Built with modern web technologies, focusing on performance, fluid animations, and a premium "liquid glass" dark-themed aesthetic.

> **🚀 Live Deployment:** [abhinavpramanik.vercel.app](https://abhinavpramanik.vercel.app/)

---

## ✨ Key Features

- **Immersive Animations:** Advanced scroll-linked animations, magnetic elements, and spring physics powered by Framer Motion and GSAP.
- **3D Interactive Hero:** Floating, tilt-responsive 3D elements built with React Three Fiber and Three.js.
- **Premium Aesthetics:** Ocean/Deep Sea color palette with custom frosted "liquid glass" components, spotlight hover effects, and animated gradient borders.
- **Smooth Scrolling:** Buttery smooth scrolling experience integrated natively via Lenis.
- **Dynamic Projects Showcase:** Touch-friendly swipeable project carousel built with Embla Carousel.
- **Performant & SEO Optimized:** Dynamically imported components, suspense boundaries, OpenGraph metadata, and structured JSON-LD for excellent Lighthouse scores.
- **Working Contact Form:** Integrated with the Resend API for real-time email delivery with Zod validation.
- **Fully Responsive:** Beautifully adapts to mobile, tablet, and desktop screens with custom touch optimizations.

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4 (with custom inline theme tokens)
- **Animations:** Framer Motion, GSAP, React Spring
- **3D Rendering:** Three.js, React Three Fiber, React Three Drei
- **Carousel:** Embla Carousel React
- **Icons:** Lucide React, React Icons
- **Forms & Validation:** React Hook Form, Zod
- **Email API:** Resend

---

## 🚀 Getting Started

Follow these instructions to run the portfolio locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpramanik/Abhinavs-Portfolio.git
   cd Abhinavs-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the project and add your Resend API key for the contact form to work:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio live!

---

## 🎨 Customization

The core design system is heavily centralized in `app/globals.css`. 
To change the site-wide theme, modify the CSS custom properties inside the `@theme inline` block:

```css
@theme inline {
  --color-bg-primary: #020617; /* Deep Slate */
  --color-primary: #3B82F6;    /* Sapphire Blue */
  --color-secondary: #06B6D4;  /* Cyan */
  --color-accent: #2DD4BF;     /* Teal */
}
```

All data (projects, skills, achievements) is neatly separated from the UI components. Simply edit the files inside the `data/` directory to update the content.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
