# Alex Rivera — Developer Portfolio

A modern, premium developer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ✅ Dark glassmorphism design
- ✅ Animated gradients & blob backgrounds
- ✅ Framer Motion scroll animations
- ✅ Fully responsive (mobile-first)
- ✅ SEO-friendly (Next.js metadata API)
- ✅ Interactive tabbed Experience section
- ✅ Testimonial carousel 
- ✅ Working contact form UI
- ✅ Skill bar animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Custom CSS variables, glass utilities, animations
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx        # Fixed nav with scroll detection & mobile menu
│   ├── Hero.tsx          # Landing section with animated blobs & CTAs
│   ├── About.tsx         # Bio, photo card, stats grid
│   ├── Skills.tsx        # Animated skill bars + tech badge cloud
│   ├── Projects.tsx      # Project cards grid with show more
│   ├── Experience.tsx    # Tabbed career timeline
│   ├── Testimonials.tsx  # Carousel with quote cards
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Links, socials, copyright
└── public/
    └── resume.pdf        # Add your resume here
```

## Customisation

1. **Personal info** — Update name, bio, email in each component
2. **Projects** — Edit the `projects` array in `components/Projects.tsx`
3. **Experience** — Edit the `experiences` array in `components/Experience.tsx`
4. **Skills** — Edit the `categories` array in `components/Skills.tsx`
5. **Colors** — CSS variables in `app/globals.css`
6. **Photo** — Replace the initials avatar in `About.tsx` with an `<Image>` tag

## Build

```bash
npm run build
npm start
```
