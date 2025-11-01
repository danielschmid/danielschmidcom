# danielschmid.com

Personal website for Daniel Schmid - Graphic Design Educator at EDHEA, University of Applied Sciences and Arts Western Switzerland (HES-SO Valais-Wallis).

## Tech Stack

- **Framework**: Astro v5.15.3
- **Styling**: TailwindCSS v4.1.16
- **Compression**: @playform/compress v0.2.0
- **Runtime**: Bun
- **Deployment**: Cloudflare Pages

## Features

- Static site generation with Astro
- Modern CSS with TailwindCSS v4
- Custom typography with ABC Diatype fonts
- Responsive design
- Semantic HTML structure
- Optimized compression with @playform/compress
  - CSS minification and compression
  - HTML compression (15%+ reduction)
  - Image optimization (up to 58% reduction)
  - JavaScript and SVG compression

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment

The site is automatically deployed to Cloudflare Pages with dynamic URL configuration supporting both custom domains and the default Pages URL.
