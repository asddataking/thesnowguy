# The Snow Guy - Marketing Website

A modern, responsive one-page marketing site for The Snow Guy, a local snow shoveling service in Port Huron and St. Clair County, Michigan.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend (optional)

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd thesnowguy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your Resend API credentials (see Email Configuration below).

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Production Build
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
```

## ⚙️ Configuration

### Site Settings

All site configuration is centralized in `lib/site.ts`. This file contains:

- **Contact Information:**
  - Phone number (display and tel: link format)
  - Email address
  - Location

- **Service Areas:**
  - List of cities/areas served (Port Huron, Kimball, Fort Gratiot, etc.)

- **Services:**
  - Service descriptions with icons and copy

- **Gallery Images:**
  - Before/after image pairs with alt text

- **Testimonials:**
  - Customer quotes and attributions

**To update site content:** Simply edit `lib/site.ts` and the changes will reflect across the entire site.

### Example: Changing Phone Number

```typescript
// In lib/site.ts
export const siteConfig = {
  // ...
  phone: "+1-810-555-XXXX",      // Update this
  phoneDisplay: "(810) 555-XXXX", // And this
  // ...
};
```

### Example: Adding a Service Area

```typescript
// In lib/site.ts
export const siteConfig = {
  // ...
  areas: [
    "Port Huron",
    "Kimball",
    "Fort Gratiot",
    "Marysville",
    "St. Clair",
    "Marine City", // Add new areas here
  ],
  // ...
};
```

## 📧 Email Configuration (Optional)

The quote form works with or without email configuration:

- **With email:** Quote requests are sent via Resend to your specified email
- **Without email:** Quote requests are logged to the console (development) and the form still provides success feedback to users

### Setting Up Resend

1. **Create a Resend account:** [https://resend.com](https://resend.com)

2. **Get your API key:** Navigate to API Keys in your Resend dashboard

3. **Verify your domain or use Resend's test domain**

4. **Update `.env.local`:**
   ```bash
   RESEND_API_KEY=re_your_actual_api_key
   QUOTE_TO_EMAIL=your-email@thesnowguy.com
   QUOTE_FROM_EMAIL=noreply@thesnowguy.com
   ```

5. **Restart your dev server** for changes to take effect

## 🎨 Design System

### Colors
The design uses a custom color palette defined in Tailwind config:

- `snow-ice`: #4DA6FF (primary blue)
- `snow-navy`: #003366 (navy)
- `snow-white`: #FFFFFF (white)
- `snow-gray`: #DFE6EE (light gray)
- `snow-bg`: #F5F8FC (background)

### Fonts
- **Headings:** Bebas Neue (via Google Fonts)
- **Body:** Inter (via Google Fonts)

### Components
All UI components use:
- `rounded-2xl` for consistent border radius
- Soft shadows for depth
- Focus-visible rings for accessibility
- 12/16px spacing scale

## 🖼️ Assets

### Logo
- Location: `/public/snowguy-logo.png`
- Currently uses a placeholder SVG snowflake
- Replace with your actual logo (recommended size: 200x200px or larger)

### Gallery Images
- Location: `/public/gallery/`
- 6 pairs of before/after images
- Format: `before-1.jpg`, `after-1.jpg`, etc.
- Currently uses SVG placeholders
- Recommended size: 800x600px (4:3 aspect ratio)

**To replace placeholders:**
1. Add your actual photos to `/public/gallery/`
2. Keep the naming convention: `before-#.jpg` and `after-#.jpg`
3. Update alt text in `lib/site.ts` if needed

## 📱 Features

### Sections
1. **Hero** - Animated header with CTAs and snow effect
2. **Services** - Three service cards with hover effects
3. **Areas We Serve** - Interactive map illustration + city pills
4. **Gallery** - Before/after image grid with hover reveals
5. **Testimonials** - Customer quotes (hidden if empty)
6. **Quote Form** - Contact form with validation
7. **Footer** - Copyright and CTA

### Accessibility
- Semantic HTML5 landmarks
- Skip-to-content link
- Proper heading hierarchy
- Focus indicators on all interactive elements
- Respects `prefers-reduced-motion`
- ARIA labels where appropriate

### SEO
- Next.js Metadata API for tags
- Open Graph images (auto-generated)
- JSON-LD structured data (LocalBusiness)
- Semantic HTML
- Mobile-responsive
- Fast page loads

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The site is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## 📁 Project Structure

```
thesnowguy/
├── app/
│   ├── api/
│   │   └── quote/
│   │       └── route.ts          # Quote form API endpoint
│   ├── globals.css               # Global styles + CSS variables
│   ├── layout.tsx                # Root layout with fonts & metadata
│   ├── page.tsx                  # Main page (assembles all sections)
│   ├── opengraph-image.tsx       # OG image generator
│   ├── icon.tsx                  # Favicon generator
│   └── apple-icon.tsx            # Apple touch icon
├── components/
│   ├── ui/                       # Primitive UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── brand.tsx                 # Logo components
│   ├── header.tsx                # Sticky nav + mobile menu
│   ├── hero.tsx                  # Hero section with animation
│   ├── services.tsx              # Services grid
│   ├── areas.tsx                 # Service areas + map
│   ├── gallery.tsx               # Before/after gallery
│   ├── testimonials.tsx          # Testimonials section
│   ├── quote-form.tsx            # Quote request form
│   ├── section.tsx               # Section wrapper component
│   └── footer.tsx                # Site footer
├── lib/
│   ├── site.ts                   # **Site configuration (edit this!)**
│   └── utils.ts                  # Utility functions
├── public/
│   ├── gallery/                  # Before/after images
│   └── snowguy-logo.png          # Site logo
├── .env.local.example            # Example environment variables
├── package.json
├── tailwind.config.ts            # Tailwind + design tokens
├── tsconfig.json
└── README.md
```

## 🎯 Customization Checklist

- [ ] Update contact info in `lib/site.ts`
- [ ] Update service areas in `lib/site.ts`
- [ ] Replace logo in `/public/snowguy-logo.png`
- [ ] Add real gallery images to `/public/gallery/`
- [ ] Add testimonials in `lib/site.ts`
- [ ] Set up Resend for email notifications (optional)
- [ ] Update domain in `lib/site.ts` when deployed
- [ ] Add Facebook URL in `lib/site.ts` if available

## 🐛 Troubleshooting

### Images not loading
- Ensure images are in `/public/` directory
- Check file names match exactly (case-sensitive)
- Clear `.next` cache: `rm -rf .next` and restart

### Form not sending emails
- Check `.env.local` variables are set correctly
- Verify Resend API key is valid
- Check sender email is verified in Resend
- Look at browser console and server logs for errors

### Build errors
- Run `npm run typecheck` to find TypeScript errors
- Run `npm run lint` to find ESLint issues
- Clear cache: `rm -rf .next node_modules && npm install`

## 📄 License

© 2025 The Snow Guy. All rights reserved.

## 🤝 Support

For questions or issues, contact [hello@thesnowguy.com](mailto:hello@thesnowguy.com).
