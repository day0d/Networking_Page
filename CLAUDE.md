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

## Design System

### Layout
- Only use absolute positioning when necessary
- Prefer responsive layouts with flexbox and grid
- Refactor code as you go to keep it clean
- Keep file sizes small; extract helpers to separate files

### Button Variants
- **Primary**: Bold, filled with primary brand color - one per section for main actions
- **Secondary**: Outlined with primary color, transparent background - for supporting actions
- **Tertiary**: Text-only, no border - for least important actions

---

## Recent Work Session (2026-01-31)

**Session Summary**: Work was interrupted during debugging of mailto: links and layout improvements.

**Completed in this session**:
- ✅ Reorganized page structure (h1 header, profile grouping, header line wrapping fixes)
- ✅ Moved footer text to bottom
- ✅ Partially improved "How You Can Help" section layout

**Currently broken/in-progress**:
- ❌ mailto: links not working (attempted fix with `encodeURIComponent()` failed)
- ⚠️ Text alignment issues in sections (text boxes not using full width)
- ⚠️ Need to center main header

**Modified files** (uncommitted):
- `src/app/App.tsx` - main component changes
- `src/styles/theme.css` - styling updates
- `CLAUDE.md` - documentation updates

**Next immediate priorities**:
1. Debug mailto: links (try alternative approaches: onClick handlers, window.location, or verify <a> tag rendering)
2. Center "Career Support and Guidance" header
3. Fix text alignment/spacing in "How You Can Help" section

---

## Next Actions

Tasks to implement, organized by category. Each section includes sub-agent instructions.

### 1. Page Structure & Layout ✅ PARTIALLY COMPLETE

**Goal**: Reorganize the page hierarchy and fix header formatting.

- [x] Make "Career Support and Guidance Snapshot" the main page header (h1, top of page)
- [x] Group "Derrick Yoder" name + "Learning Experience Designer" title with profile photo as a unit
- [x] Fix "My Background" header to display on one line (currently wrapping)
- [x] Fix "Where I'm Seeking" header to display on one line (currently wrapping)
- [x] Move "thank you for taking the time..." text to bottom of page as footer content
- [ ] **NEW**: Center "Career Support and Guidance" header on the page

**Files**: `src/app/App.tsx`

### 2. How You Can Help Section - NEEDS DEBUGGING

**Goal**: Fix email functionality and improve visual grouping of list items.

**Status**: Initial implementation attempted but mailto: links still not working.

**Previous attempt (FAILED)**:
- Used `encodeURIComponent()` for subject and body in ActionButton1 and ActionButton3
- Created href as: `mailto:?subject=${subject}&body=${body}`
- Links were visually updated but still not triggering email client on click

**Next steps for debugging**:
1. Check if mailto: is being prevented by browser security/React
2. Test with simpler mailto: format first (e.g., `mailto:test@example.com`)
3. Consider using `window.location.href` or `onClick` handlers instead of href
4. Check browser console for errors when clicking links
5. Test across different browsers (Chrome, Firefox, Safari, Edge)
6. Verify the encoded URL format matches RFC 6068 standard
7. May need to use a mailto library or different approach
8. Check if the `<a>` tag is being properly rendered (not a `<button>` wrapper)

**Layout improvements needed**:
- [ ] Debug mailto: links for both "Request Intro" buttons (see debugging steps above)
- [x] Reorganize section layout so each item (bullet number + text + action button) forms a seamless visual unit (partially done)
- [ ] **NEW**: Text should be right against "Next Action" buttons with no gap - completely seamless
- [ ] **NEW**: Fix text alignment - text boxes should use full available space within sections

**Files**: `src/app/App.tsx` (ActionButton1 lines ~258-279, ActionButton3 lines ~356-378)

### 3. Navigation & Scrolling

**Goal**: Replace scrollbar with button-based navigation.

- [ ] Remove scrollbar from "My Background" section
- [ ] Add left/right toggle buttons for horizontal scrolling
  - Position buttons at vertical midline of the div
  - Style consistently with rest of UI
  - Consider fade indicators for scroll position

**Files**: `src/app/App.tsx`

### 4. Contact Links

**Goal**: Update contact methods with correct links.

- [ ] Change phone number link to WhatsApp: `https://wa.link/5dbxs7`
- [ ] Remove Calendly link
- [ ] Add two scheduling buttons:
  - **30m meeting**: `https://calendar.app.google/dE6USMiCrZsq3zer9`
  - **60m meeting**: `https://calendly.com/derrickyoder/30m-meeting`

**Files**: `src/app/App.tsx`

### 5. Typography & Style Guidelines

**Goal**: Establish and implement consistent typography system.

- [ ] Define font guidelines:
  - Headers (h1, h2, h3): font family, size, weight, line-height
  - Subheaders: font family, size, weight
  - Body/paragraphs: font family, size, line-height
  - Captions/small text: specifications
- [ ] Implement typography system in code
  - Add CSS custom properties or Tailwind config
  - Apply consistently across components
- [ ] Update CLAUDE.md with typography specifications in Design System section

**Files**: `src/styles/theme.css`, `src/app/App.tsx`, `CLAUDE.md`

### 6. Responsive Spacing & Layout Strategy **HIGH PRIORITY**

**Goal**: Develop and implement a comprehensive responsive spacing strategy that dynamically adapts across devices.

**Current Issues**:
- Text boxes inside sections are not aligned well - only taking up part of available space
- Spacing is not optimized for different screen sizes
- Layout needs to work seamlessly on laptop, iPad, and smartphone
- Fixed widths/heights causing layout issues

**Required Approach**:
⚠️ **PLAN FIRST** - Do not implement without a comprehensive strategy:

1. **Audit Phase**:
   - Identify all fixed widths, heights, and spacing values in App.tsx
   - Document current breakpoint usage (or lack thereof)
   - List all sections and their spacing/alignment issues

2. **Strategy Development**:
   - Define spacing scale for each breakpoint:
     - Mobile (375px-767px): tight spacing, single column
     - Tablet (768px-1023px): medium spacing, flexible columns
     - Desktop (1024px+): comfortable spacing, multi-column where appropriate
   - Create consistent container system (max-widths, padding, margins)
   - Define responsive typography scaling
   - Plan flexbox/grid layouts that adapt to viewport

3. **Implementation Plan**:
   - Use Tailwind responsive prefixes (sm:, md:, lg:, xl:)
   - Replace fixed pixel values with responsive units
   - Implement dynamic padding/margins based on screen size
   - Test on multiple screen sizes during development

**Specific fixes needed**:
- [ ] Center "Career Support and Guidance" header
- [ ] Fix text box alignment in all sections (use full available width)
- [ ] Make spacing dynamic across laptop/iPad/smartphone
- [ ] Remove any remaining absolute positioning
- [ ] Implement responsive container widths
- [ ] Test on: laptop (1440px+), iPad (768px-1024px), smartphone (375px-430px)

**Files**: `src/app/App.tsx`, `src/styles/theme.css`

**Testing requirement**: Must verify on multiple screen sizes before marking complete.

---

## Implementation Notes

When working on these tasks:
1. Read relevant sections of `src/app/App.tsx` first to understand current structure
2. Make incremental changes, testing after each modification
3. Keep changes focused - one task at a time
4. Update task checkboxes as items are completed
5. Run `npm run dev` to preview changes locally
6. **For responsive/spacing tasks**: PLAN the strategy first, get approval, then implement

---

## UI Task Completion Procedure

**REQUIRED**: After completing any UI-related tasks, follow this procedure:

1. **Mark tasks as complete** in the task list
2. **Start dev server** (if not already running):
   ```bash
   cd C:\users\yoder\Networking_Page && npm run dev
   ```
3. **Provide local link** to user for review:
   - Default: `http://localhost:5173/`
4. **Wait for user feedback** before proceeding to next tasks
5. **Document any issues** found during testing in CLAUDE.md

This ensures the user can visually verify all UI changes before moving forward.
