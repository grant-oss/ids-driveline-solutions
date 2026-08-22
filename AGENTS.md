# Isuzu Driveline Solutions

## Project Overview

This repository contains the premium marketing and technical enquiry website for Isuzu Driveline Solutions. It presents the company as a national commercial truck gearbox and driveline specialist, with dedicated pages for services, available parts, supported truck models, and quote requests.

## Technology

- TanStack Start with React 19 and file-based routing
- TypeScript in strict mode
- Tailwind CSS 4 plus a custom global design system
- Lucide React for interface icons
- Netlify Forms for quote submissions and image uploads
- Netlify deployment through the TanStack Start Vite plugin

## Key Directories

- `src/routes/` contains every public page. Each directory maps to a URL.
- `src/components/` contains the shared site shell, industrial illustrations, and quote form.
- `src/styles.css` contains the complete visual system and responsive behavior.
- `public/__forms.html` is the static form skeleton Netlify uses to register the quote form at deploy time.
- `.netlify/` contains platform-generated metadata and the task completion summary.

## Routes

- `/` — home and capability overview
- `/services` — gearbox, differential, parts, and fleet services
- `/parts` — featured transmission and centre portion catalogue
- `/models` — supported Isuzu truck platforms
- `/quote` — technical quote form with image uploads

## Coding Conventions

- Use PascalCase for React components and camelCase for functions and values.
- Keep page-specific content in its route and reusable structure in `src/components/`.
- Use existing CSS tokens and utility classes before adding new visual primitives.
- Keep the industrial palette limited to black, steel grey, off-white, and Isuzu red.
- Use TanStack `Link` for internal navigation and standard anchors for external WhatsApp links.
- Maintain meaningful labels, focus states, reduced-motion support, and semantic page structure.

## Netlify Forms

The React form name and every submitted field must remain identical to the fields in `public/__forms.html`. File uploads use `FormData` and post to `/__forms.html` without manually setting a `Content-Type` header. Netlify Forms must remain enabled for the site when the form changes.

## Non-Obvious Decisions

- WhatsApp links intentionally open a prefilled enquiry without a hard-coded phone number because no official company number was supplied.
- Technical product imagery is rendered with local SVG and CSS artwork, avoiding unreliable external image dependencies.
- The site uses one shared shell so navigation, WhatsApp access, and national-brand presentation stay consistent across every page.
