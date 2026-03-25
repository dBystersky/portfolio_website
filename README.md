# My Portfolio Website

A personal portfolio site built to present work clearly and make it easy for visitors to learn more and get in touch. This repo uses **Next.js (App Router)** and **Tailwind CSS** with a component-driven layout and a data-driven projects section.

## What’s included

- `Home (/)`: Welcome section with a featured projects grid and navigation links to About and Contact.
- `About Me (/about)`: Background and story layout, including sections for skills/tools and experience.
- `Portfolio (/portfolio)`: A responsive projects grid rendered from `app/data/projects.ts` using reusable `app/components/project-tile.tsx` cards.
- `Contact (/contact)`: Contact form UI for name, email, subject, and message with client-side validation (submit wiring is currently placeholder and should be connected to your enquiry email/API).

## Implementation highlights

- Reusable shared layout components: a sticky header (`app/components/header.tsx`) and a footer with social links (`app/components/footer.tsx`).
- Data-first design for projects: `portfolioProjects` powers the full grid and “featured” selection on the homepage.
- Accessible, responsive UI built with Tailwind utility classes and Next.js components (`next/link`, `next/image`).

## Tech stack

- Next.js 16
- React 19
- Tailwind CSS
- `lucide-react` for icons

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Deployment

Standard Next.js build/deploy commands are included (`npm run build` / `npm run start`) and work well with platforms such as **Vercel** and other compatible hosting providers.
