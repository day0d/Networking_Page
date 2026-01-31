# Claude Instructions

Guidelines for Claude when working with the Networking Page project.

## Project Overview

This is a React/TypeScript professional networking page for Derrick Yoder. It's a Figma-to-code project showcasing career information and networking call-to-actions.

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS 4 (with @tailwindcss/vite plugin)
- Radix UI / shadcn/ui components
- Framer Motion for animations
- Lucide React for icons

## Key Files

- `src/app/App.tsx` - Main page component (800+ lines, all sections)
- `src/app/components/ui/` - shadcn/ui component library
- `src/styles/theme.css` - Design tokens and CSS variables
- `vite.config.ts` - Build configuration with `@` path alias

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
```

## Coding Conventions

- **Components**: Functional components with React.FC pattern
- **Styling**: Tailwind utility classes, use `clsx` for conditionals
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: Use `@/` path alias for src directory imports
- **Structure**: Small, single-responsibility components

## Color System

- Dark text: `#1a1a1a`
- Light background: `#f8f8f8`
- Gradients for accents (defined in theme.css)
- Dark mode support via `.dark` class

## Guidelines

- Keep components small and focused
- Use existing UI components from `src/app/components/ui/`
- Follow responsive design patterns (flexbox/grid, not absolute positioning)
- Maintain Figma design fidelity
- Use `data-name` attributes to identify design elements
