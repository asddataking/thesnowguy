# The Snow Guy - Next.js Website

A modern, responsive website for The Snow Guy snow shoveling service built with Next.js and Tailwind CSS.

## Features

- ✨ Animated falling snow effect
- 📱 Fully responsive design
- 🎨 Custom color scheme (night, ice, holly, candy)
- 📞 Contact form with phone integration
- 💰 Pricing sections
- 🗺️ Service area information
- 💬 Customer testimonials

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create environment variables:
Create a `.env.local` file in the root directory with:
```
NEXT_PUBLIC_PHONE=(555) 123-SNOW
NEXT_PUBLIC_EMAIL=contact@thesnowguy.com
NEXT_PUBLIC_CITY_LIST=St. Clair, Port Huron, and surrounding areas
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Colors
The custom colors are defined in `tailwind.config.js`:
- `night`: #0A2540 (dark blue background)
- `ice`: #E6F0FF (light blue text)
- `holly`: #2ECC71 (green accents)
- `candy`: #FF4D4D (red accents)

### Contact Information
Update the environment variables in `.env.local`:
- `NEXT_PUBLIC_PHONE`: Your phone number
- `NEXT_PUBLIC_EMAIL`: Your email address
- `NEXT_PUBLIC_CITY_LIST`: Your service areas

### Content
Edit the content directly in `src/app/page.js` or create additional pages as needed.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.js        # Root layout with metadata
│   └── page.js          # Homepage component
└── components/
    ├── SnowAnimation.js # Animated snow effect
    ├── ContactForm.js   # Contact form component
    └── Footer.js        # Footer component
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

## Technologies Used

- **Next.js 15** - React framework
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - UI library

## License

All rights reserved. © The Snow Guy