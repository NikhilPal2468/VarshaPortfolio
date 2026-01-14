# Varsha Prasanna Portfolio

A stunning, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by the ComponentX template, this portfolio showcases a beautiful terminal-style hero section, skills, projects, testimonials, and more.

## Features

- 🎨 Modern, aesthetic design with glassmorphism effects
- 💻 Terminal-style hero section with typing animation
- 📱 Fully responsive design
- ⚡ Smooth animations with Framer Motion
- 🎯 SEO optimized
- 🚀 Fast performance with Next.js 14

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - The workflow will automatically deploy when you push to the `main` branch

3. **Your site will be available at:**
   - `https://[your-username].github.io/[repository-name]/`
   - Or if you have a custom domain, configure it in the Pages settings

### Manual Deployment

If you want to test the build locally before deploying:

```bash
npm run build
```

The static files will be generated in the `out` directory, which you can preview locally.

### Notes

- The site is configured for static export (no server-side features)
- Images are unoptimized for GitHub Pages compatibility
- The `.nojekyll` file prevents Jekyll from processing the site

## Customization

- Update personal information in the component files
- Modify colors in `tailwind.config.ts`
- Add your projects in `components/Projects.tsx`
- Update experience in `components/Experience.tsx`
- Customize testimonials in `components/Testimonials.tsx`

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

MIT License - feel free to use this template for your own portfolio!
