# The Snow Guy - Snow Removal Service

A fast, accessible, single-page marketing website for The Snow Guy—a family-owned, Michigan-based snow removal service serving St. Clair County.

## Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom brand colors
- **SEO Optimized** with JSON-LD schema, OpenGraph, and local SEO
- **Accessible** with semantic HTML and keyboard navigation
- **Performance** optimized with image optimization and lazy loading
- **Lead Generation** form with API endpoint
- **Responsive Design** for all devices

## Brand Colors

- **Winter Blue**: `#0A2A5E` (primary)
- **Frost**: `#E6F0FF` (light background)
- **Accent Gold**: `#D4AF37` (highlights, CTAs)
- **Body Text**: `#111827` (dark text)

## Service Areas

Serving St. Clair County, Michigan:
- Kimball
- Port Huron
- Marysville
- Fort Gratiot
- St. Clair
- Clyde
- Columbus

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_PHONE=(810) 555-0123
NEXT_PUBLIC_EMAIL=hello@thesnowguy.com
NOTIFICATION_EMAIL=your-email@domain.com
```

## Development

```bash
npm install
npm run dev
```

## Deployment

The site is configured for Vercel deployment with `vercel.json`. Simply connect your GitHub repository to Vercel for automatic deployments.

## Lead Management

Form submissions are saved to `/data/leads/` as JSON files. Integrate with your preferred email service by updating the API route at `src/app/api/lead/route.js`.

## SEO Features

- Structured data (JSON-LD) for LocalBusiness, FAQPage, and Reviews
- Optimized meta tags and OpenGraph
- Local SEO with city-specific content
- Sitemap and robots.txt
- Semantic HTML structure

## Performance

- Lighthouse score optimized for 90+ on mobile
- Image optimization with Next.js
- Font preloading
- Lazy loading for non-critical sections
- CSS-only snowfall animation (low CPU impact)

## License

© 2024 The Snow Guy. Family-owned in Michigan.