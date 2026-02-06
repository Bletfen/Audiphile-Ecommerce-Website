## Audiophile E-commerce Website

Modern e-commerce storefront for premium audio gear. Built with Next.js App Router, TypeScript, and Tailwind CSS, featuring category navigation, product detail pages, and a cart/checkout flow.

## Features

- App Router pages with category and product routes
- Product gallery and feature sections
- Cart management with global state
- Responsive layout across desktop, tablet, and mobile
- Static product data and assets stored in-repo

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Zustand (cart state)

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint the codebase
```

## Project Structure

- app/ - App Router pages and layouts
- components/ - Reusable UI components
- data/data.json - Product catalog data
- public/assets/ - Images and static assets
- store/cartStore.ts - Cart state
- types/type.d.ts - Shared TypeScript types

## Notes

- Global styles live in app/globals.css.
- Fonts are loaded via next/font (Manrope).

## Deployment

Build the app with `npm run build` and serve it with `npm run start` on your preferred hosting platform.
