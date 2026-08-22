# Isuzu Driveline Solutions Website

A premium industrial website for a South African Isuzu truck gearbox and driveline specialist. The site communicates national-scale capability across gearbox repairs, rebuilds, parts supply, differential work, centre portions, reconditioned units, and fleet support.

## Key Features

- Responsive multi-page commercial vehicle engineering design
- Dedicated services, parts catalogue, and truck model pages
- Custom transmission and driveline technical artwork
- Persistent WhatsApp enquiry access across the site
- Netlify quote form with truck details and up to three image uploads
- Accessible mobile navigation, form feedback, and reduced-motion support

## Technology

- TanStack Start
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Netlify Forms

## Local Development

Install dependencies and start the local Netlify development environment:

```bash
pnpm install
netlify dev --port 8889
```

Open `http://localhost:8889` in a browser. Netlify Forms are registered and processed on deployed builds; use a deploy preview to verify live form submissions.

## Project Structure

```text
src/components/       Shared shell, technical visuals, quote form
src/routes/           File-based application pages
src/styles.css        Global industrial design system
public/__forms.html   Netlify Forms registration skeleton
netlify.toml          Netlify build and local development settings
```

## Production Build

Netlify uses the configured `vite build` command and publishes `dist/client`.
