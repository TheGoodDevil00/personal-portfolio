# Void Eclipse // Personal Portfolio

A high-performance, aesthetically-driven personal portfolio built with a "Deep Void" architectural aesthetic. This project prioritizes visual excellence, smooth motion design, and a unified system-oriented user interface.

![Portfolio Preview](/public/avatar.png)

## 🌌 Core Philosophy
The **Void Eclipse** design system utilizes a curated, harmonious color palette of Deep Surface blacks and Silver Mist highlights. The interface is designed to feel alive and responsive, using micro-animations and a unified numbering system (`01 // Initialize`, `02 // Portfolio`, etc.) to guide the user through a cohesive digital narrative.

## 🛠️ Technical Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Form Handling**: [Formspree](https://formspree.io/)
- **Typography**: Inter & Display Mono variants
- **Icons**: Custom Animated Icons (Rocket, Github, Code)

## 🚀 Key Features
- **Unified Header Architecture**: Consistent 0X // SECTION_NAME labeling across all pages.
- **Dynamic Contact System**: Fully integrated Formspree endpoint with real-time UI state management (Submitting/Success/Error).
- **Automated Resume Delivery**: Direct PDF download system served via the `public/` directory for zero-latency access.
- **Performance Optimized**: Extreme dependency pruning and Turbopack-driven build pipeline.
- **Atmospheric UI**: Multi-layered background glows, noise textures, and glassmorphism components.

## 📦 Project Structure
```text
├── app/               # Core application routes & pages
├── components/        # Reusable UI components & animated icons
├── public/            # Static assets (Resume, Avatar, etc.)
├── styles/            # Global CSS & Design System tokens
├── lib/               # Shared utilities & content handlers
└── scripts/           # Development tools (Resume Generator)
```

## 🛠️ Development

### Getting Started
First, install the dependencies using [pnpm](https://pnpm.io/):

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

### Building for Production
To generate an optimized production build:

```bash
pnpm run build
```

### Resume Generation
This project includes a custom script to generate a professional PDF resume from JSON data:

```bash
pnpm run generate-resume
```

## 📧 Connect
Initialization complete. Feel free to reach out via the [Contact Page](/contact) or connect on [LinkedIn](https://linkedin.com/in/hitesh-patil07).

---
© 2026 HITESH PATIL. ALL RIGHTS RESERVED.
