# Toolzmint

Toolzmint is a fast, browser-based utility tools website built with Next.js. It provides everyday text, developer, and generator tools with a clean UI, light/dark theme support, SEO-optimised tool pages, and client-side processing for privacy-friendly, low-latency workflows.

Live site: [https://toolzmint.com](https://toolzmint.com)

## Tools (35)

### Text
| Tool | What it does |
|---|---|
| Word Counter | Words, characters, sentences, paragraphs, and reading time |
| Character Counter | Characters with and without spaces, word and line count |
| Word Frequency Counter | Ranked word frequency table with stop-word filtering and CSV export |
| Case Converter | Upper, lower, title, sentence, camel, snake, kebab, and Pascal |
| Text Reverser | Reverses characters or word order |
| Text Repeater | Repeat text N times with a custom separator |
| Word Duplicator | Duplicate each word a configurable number of times |
| Text to Slug | Convert any text to a URL-safe slug |
| Remove Extra Spaces | Strip leading, trailing, and multiple consecutive spaces |
| Line Break Remover | Remove or replace line breaks |
| Line Sorter | Alphabetical, reverse, random, or length sort; deduplicate option |
| Duplicate Line Remover | Remove duplicate lines, case-insensitive option |
| Diff Checker | Side-by-side line diff with added/removed/unchanged counts and copy |

### Developer
| Tool | What it does |
|---|---|
| JSON Formatter | Format, minify, and validate JSON |
| JSON to CSV | Convert JSON arrays to CSV with delimiter and header options |
| CSV to JSON | Convert CSV to a JSON array |
| Base64 Encoder/Decoder | Encode and decode Base64 strings |
| URL Encoder/Decoder | Percent-encode and decode URL components |
| JWT Decoder | Decode JWT header, payload, and timing claims without a secret |
| HTML Entities Encoder/Decoder | Encode and decode HTML special characters |
| Regex Tester | Live regex match preview with flag toggles and capture group details |
| Number Base Converter | Convert between binary, octal, decimal, and hexadecimal |
| Unix Timestamp Converter | Convert between Unix timestamps and human-readable dates |
| Hash Generator | MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes |
| Markdown Previewer | Render Markdown to HTML live |

### Generators
| Tool | What it does |
|---|---|
| Password Generator | Configurable length, charset, and strength indicator |
| UUID Generator | RFC 4122 v4 UUIDs, bulk generation, and GUID format |
| Random String Generator | Custom charset and length random strings |
| QR Code Generator | QR codes from any text or URL with error-correction levels |
| Lorem Ipsum Generator | Paragraphs, sentences, or words of placeholder text |
| Color Converter | Hex, RGB, HSL, and HSB conversions with live swatches |

### Calculators & Media
| Tool | What it does |
|---|---|
| Age Calculator | Age in years/months/days and days until next birthday |
| Percentage Calculator | Find percentage, value from percentage, and percentage change |
| Image Resizer | Batch client-side image resize with aspect-ratio lock and JPEG quality control |

## Tech Stack

- **Next.js 16** App Router with static generation for all tool pages
- **React 19** with `useMemo`, `useCallback`, and debounced `useEffect` for performance
- **Tailwind CSS** with CSS variables for light/dark theme
- **shadcn/ui**-style UI primitives (`Button`, `Switch`, `Label`)
- **Lucide React** icons
- `next/og` Edge runtime for programmatic OG image generation

## Project Structure

```
src/
  app/
    api/og/route.jsx          OG image endpoint (1200×630, Edge runtime)
    components/               Shared app and tool UI components
      ToolLayout.jsx          Shared tool page shell with JSON-LD, FAQ, related tools
    tools/                    Individual tool routes and client components
    layout.js                 App shell, global metadata, Open Graph
    page.js                   Homepage and tool catalog
    robots.js                 Robots metadata
    sitemap.js                Sitemap generation (all tool pages)
  components/ui/              Shared UI primitives
  lib/
    toolsConfig.js            Tool metadata, examples, SEO content, and related links
    toolDiscovery.js          Tool grouping, search, featured tools
    metadata.js               Canonical metadata and OG image URL helpers
    *Utils.js                 Tool-specific logic (diffUtils, regexUtils, etc.)
```

## Key Implementation Details

**SEO**
- Every tool page gets `WebApplication`, `BreadcrumbList`, and `FAQPage` JSON-LD schemas injected via `ToolLayout`.
- Open Graph and Twitter Card metadata are generated per-tool via `metadata.js`, pointing to `/api/og` for unique preview images.
- `/api/og` generates branded 1200×630 preview cards at the Edge using `ImageResponse`.
- A canonical sitemap covers all 35 tool pages.

**Performance**
- All expensive derived values are wrapped in `useMemo` to avoid recomputation on unrelated renders.
- Hash generation and diff computation run inside a 300ms debounced `useEffect` to avoid overlapping async chains on every keystroke.
- Image resizing is handled entirely in-browser via the Canvas API — no upload needed.

**Architecture**
- Tool metadata is centralised in `toolsConfig.js`; discovery, sitemap generation, and internal linking all derive from it.
- Tool type must be one of `generator`, `analyzer`, `transformer`, or `modifier` (defined in `toolDiscovery.js`) or the tool will not appear in the catalog.
- Non-trivial parsing or generation logic lives in a dedicated `*Utils.js` module under `src/lib`, keeping tool components thin.

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # production server
npm run lint       # ESLint
```

## Adding a New Tool

1. Add an entry to `src/lib/toolsConfig.js` with `slug`, `name`, `description`, `type`, `metaTitle`, `metaDescription`, `examples`, `howToSteps`, `faqItems`, and `relatedToolSlugs`.
2. Create `src/app/tools/<slug>/page.jsx` — import `ToolLayout`, call `getToolMetadata`, pass `slug` and all metadata props.
3. Create `src/app/tools/<slug>/<ToolName>Tool.jsx` — the client component with `"use client"`.
4. If the tool has non-trivial logic, extract it into `src/lib/<name>Utils.js`.
