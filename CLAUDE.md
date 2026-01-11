# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:5173
npm run build    # TypeScript check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Tech Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS v4** (via @tailwindcss/vite plugin)
- **Framer Motion** for animations
- **React Router v7** for routing

## Architecture

```
src/
  components/    # Reusable UI components (Navbar, Footer, ProjectCard, Section)
  pages/         # Route-level components (Home, Projects, ProjectDetail, About, Contact)
  layouts/       # Page layouts (MainLayout wraps all routes)
  data/          # Static data (projects.ts contains project definitions)
  assets/        # Static assets
```

### Key Files

- `src/App.tsx` - Router configuration with AnimatePresence for page transitions
- `src/data/projects.ts` - Project data and helper functions (getFeaturedProjects, getProjectById)
- `src/index.css` - Tailwind imports and custom theme (primary color palette)
- `src/layouts/MainLayout.tsx` - Shared layout with Navbar and Footer
- `src/components/Section.tsx` - Animated section wrapper with scroll-triggered fade-in

### Routing

Routes are defined in `App.tsx`:
- `/` - Home page
- `/projects` - Project listing with category filters
- `/projects/:id` - Individual project detail page
- `/about` - About page with skills and AI workflow section
- `/contact` - Contact form and social links

## Styling Conventions

- Uses Tailwind CSS v4 with `@theme` block in `index.css` for custom CSS variables
- Dark mode: uses `dark:` variant classes (respects system preference)
- Primary color scale: `primary-50` through `primary-950`
- Animations via Framer Motion's `motion` components with `whileInView` for scroll effects

## Adding a New Project

Edit `src/data/projects.ts`:
```typescript
{
  id: 'unique-slug',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description for project page',
  category: 'blockchain' | 'mobile' | 'ai' | 'web',
  technologies: ['Tech1', 'Tech2'],
  imageUrl: '/path-to-image.jpg',
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true  // Shows on home page
}
```

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Import repository in Vercel dashboard
3. Vercel auto-detects Vite and deploys

Build output goes to `dist/` directory.
