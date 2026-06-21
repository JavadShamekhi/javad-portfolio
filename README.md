# Javad Shamekhi — Portfolio

Personal portfolio website built with Next.js, showcasing projects, experience, and skills as a frontend developer. Fully bilingual (English / Persian) with native RTL support, dark mode, and a custom-built internationalization system.

**Live site:** [javadshamekhi.ir](https://javadshamekhi.ir)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Theming:** next-themes (dark/light mode)
- **Date handling:** Day.js + jalaliday (Jalali/Persian calendar support)
- **Email:** Resend (contact form)
- **Notifications:** react-hot-toast
- **Deployment:** Vercel

## Features

### Internationalization (i18n)
- Manual i18n implementation (no third-party i18n library) using `[locale]` dynamic route segments
- Supported locales: English (`en`) and Persian (`fa`)
- Locale-aware routing via a custom `proxy.ts` (Next.js 16's renamed middleware) that detects the user's preferred language from cookies or browser headers and redirects accordingly
- Per-page dictionaries loaded server-side via `getDictionary()`, with full TypeScript typing inferred from the English dictionary
- Automatic RTL layout switching (`dir="rtl"` / `dir="ltr"`) based on the active locale
- Logical Tailwind classes (`ps-*`, `ms-*`, `start-*`, `end-*`) used throughout instead of physical ones (`pl-*`, `ml-*`, `left-*`), so layouts mirror correctly in Persian without separate RTL-specific styles
- Persian digit formatting (۰–۹) and Jalali calendar conversion for all dates and numbers, via centralized `formatNumber`, `formatDate`, and `formatYear` helpers
- Custom-built language switcher in the header that preserves the current page when toggling languages
- A logic-aware "Back" navigation system that ignores language-switch entries in the browser history, so the back button always returns to the previous *page*, not the previous *language*

### Theming
- Dark/light mode powered by `next-themes`, fully integrated with Tailwind's `dark:` variants
- Theme preference persists across sessions and respects system preference on first visit

### Content
- Home, About, Projects, Resume, and Contact pages, each fully translated
- A themed Basketball page featuring a custom scroll-linked animation: a basketball that follows the user's scroll position toward the hoop, complete with a hand-drawn court (key, free-throw circle, backboard, and net) built with Tailwind and inline SVG
- Contact form with server-side email delivery via Resend, with locale-aware success/error toasts
- Custom 404 page that respects the active locale and includes a "back to home" link, reached via a catch-all route inside `[locale]` so unmatched paths always render the localized not-found page instead of falling back to a generic one

### Engineering notes
- Project structure keeps API routes (`app/api`) outside the `[locale]` segment, since backend endpoints shouldn't be locale-scoped
- `generateMetadata` is used (instead of static `metadata` exports) wherever page titles/descriptions need to change per locale
- Translatable structured content (projects, work experience, education entries) lives in typed data files under `lib/data/`, separate from UI string dictionaries in `messages/`, keeping content and interface text cleanly separated

## Project Structure

```
src/
  app/
    [locale]/
      page.tsx              # Home
      about/
      projects/
      resume/
      contact/
      basketball/
      layout.tsx             # Root layout: fonts, theme provider, header/footer
      not-found.tsx           # Locale-aware 404
      [...rest]/
        page.tsx               # Catch-all route that triggers notFound() for unmatched paths
    api/
      contact/                # Contact form email endpoint (outside [locale])
  components/
    ui/                       # Page sections, cards, buttons, animations
  lib/
    i18n/                     # Locale config, dictionary loader, formatters, types
    data/                     # Typed bilingual content (projects, experience, education)
  messages/
    en.json
    fa.json
  proxy.ts                     # Locale detection & redirect (Next.js 16 middleware)
```

## Running locally

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`, and will redirect to `/en` or `/fa` based on your browser's language settings.

## Deployment

Deployed on [Vercel](https://vercel.com), connected to this repository's `master` branch. Every push to `master` triggers an automatic production deployment to **javadshamekhi.ir**.