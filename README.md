# Networking Page

A professional networking and career development website for Derrick Yoder, Learning Experience Designer. This interactive "career snapshot" page enables networking, job seeking, and career guidance conversations.

**Figma Design:** [Refine Seeking and Help Sections](https://www.figma.com/design/oZLzD6zFAuonnnmItJ50Sx/Refine-Seeking-and-Help-Sections)

## Features

- Professional introduction with profile image and career summary
- "What I'm Seeking" section (role types and requirements)
- "Where I'm Seeking" section (geographic/company preferences)
- "How You Can Help" section with interactive action items:
  - Request introductions to opportunities
  - Give feedback via Google Form
  - Request referrals to recruiters
- "My Background & Contact" section with key achievements carousel
- Footer with contact information and meeting scheduling links

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI / shadcn/ui** - Accessible component primitives
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Project Structure

```
src/
├── main.tsx                    # React entry point
├── app/
│   ├── App.tsx                 # Main page component
│   └── components/
│       ├── figma/              # Figma-specific components
│       └── ui/                 # shadcn/ui component library
├── imports/                    # Generated SVG and asset imports
├── assets/                     # Static assets
└── styles/
    ├── index.css               # Global styles
    ├── fonts.css               # Custom fonts
    ├── tailwind.css            # Tailwind imports
    └── theme.css               # Design tokens
```

## License

Private project.
