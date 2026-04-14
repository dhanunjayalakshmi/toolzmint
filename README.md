# Toolzmint

Toolzmint is a fast, browser-based utility tools website built with Next.js. It provides everyday text, developer, and generator tools with a clean UI, light/dark theme support, SEO-friendly tool pages, and client-side processing for quick workflows.

Live site: [https://toolzmint.com](https://toolzmint.com)

## What It Does

Toolzmint helps users perform common tasks directly in the browser, including:

- generating passwords, UUIDs, random strings, and repeated text
- counting words and characters
- formatting, minifying, and validating JSON
- encoding and decoding Base64 and URLs
- decoding JWTs
- converting Unix timestamps
- previewing Markdown
- cleaning and transforming text, including line-break removal, duplicate-line removal, line sorting, case conversion, and slug generation

## Why This Project Matters

This project is not just a collection of small utilities. It is structured as a scalable tool platform:

- reusable tool layout and discovery components
- centralized tool metadata in `toolsConfig.js`
- canonical metadata helpers for SEO consistency
- sitemap and robots support for search indexing
- reusable utility modules for non-trivial tool logic
- consistent UI surfaces across light and dark themes
- client-side processing for privacy-friendly, low-latency tool usage

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS
- shadcn/ui-style primitives
- Lucide React icons
- ESLint

## Project Structure

```txt
src/
  app/
    components/              Shared app and tool UI components
    tools/                   Individual tool routes and UI components
    layout.js                App shell, metadata, and theme handling
    page.js                  Homepage and tool discovery entry point
    robots.js                Robots metadata
    sitemap.js               Sitemap generation
  components/ui/             Shared UI primitives
  lib/
    toolsConfig.js           Tool metadata, examples, SEO content, and related links
    toolDiscovery.js         Tool grouping, search, featured tools, and related tools
    metadata.js              Canonical metadata helpers
    *Utils.js                Tool-specific utility logic
```

## Key Implementation Details

- Tool pages use a shared `ToolLayout` for examples, about content, how-to steps, FAQ, and related tools.
- Tool metadata is centralized so discovery, SEO content, sitemap generation, and internal linking stay consistent.
- Search and grouping are handled through shared discovery utilities.
- Theme handling supports light, dark, and system preference modes.
- Tools that need reusable parsing or generation logic use dedicated utility modules under `src/lib`.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Current Focus

The project is actively being expanded with high-value tools while maintaining a consistent pattern:

- build new tools with full metadata and SEO content from day one
- refine existing high-intent tools
- keep internal linking and indexing signals intentional
- maintain a clean, border-light UI across light and dark themes
