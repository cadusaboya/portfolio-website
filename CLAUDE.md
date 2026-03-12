# CLAUDE.md - Portfolio Website

## Project Overview
Personal portfolio website for Carlos Saboya. Single-page site with sections: About, Projects, Blog, and Contact. Deployed on Vercel.

## Tech Stack
- **Framework**: Next.js 14 (App Router) with React 18 and TypeScript
- **Styling**: Tailwind CSS + MUI (Material UI) for some components
- **Forms**: react-hook-form + axios for contact form submission
- **Email**: Resend API (server-side, via Next.js API route)
- **Navigation**: react-scroll for smooth scrolling between sections
- **Icons**: react-icons (FontAwesome set)
- **Analytics**: Vercel Analytics (`@vercel/analytics`)
- **Font**: Inter (via `next/font/google`)
- **Path alias**: `@/*` maps to project root

## Project Structure
```
app/
  layout.tsx          # Root layout - Inter font, Vercel Analytics
  page.tsx            # Main page - composes all sections (About, Projects, Blog, Contact, Footer)
  globals.css         # Global styles, card hover animation, MUI button overrides
  api/send/route.tsx  # POST endpoint - sends contact form emails via Resend
components/
  Header.tsx          # Fixed floating navbar with react-scroll smooth links (client component)
  AboutMe.tsx         # Hero section - photo, bio, personal info, social links (server component)
  Card.tsx            # Project card - image, description, skill tags, GitHub link (server component)
  BlogCard.tsx        # Blog post card using MUI Card/CardMedia (server component)
  NewsList.tsx        # Blog post list + "Check my Medium blog" button (client component)
  ContactForm.tsx     # Contact form with validation and email sending (client component)
public/
  my-img.jpeg         # Profile photo
  personal.png, factor.png, myroutine.png, loading.jpg  # Project screenshots
  *_blog.jpg          # Blog post thumbnail images
  Resume.pdf          # Downloadable resume
```

## Key Patterns
- **Client components**: marked with `'use client'` - Header, ContactForm, NewsList
- **Server components**: AboutMe, Card, BlogCard (no 'use client' directive)
- **Styling mix**: Tailwind for layout/spacing, MUI for interactive components (buttons, cards in blog section), custom CSS in globals.css for card hover effects and MUI button color overrides
- **Navigation**: Section IDs (`about`, `projects`, `blog`, `contact`) used by react-scroll for in-page navigation
- **Contact flow**: ContactForm (axios POST) -> `/api/send` (Resend API) -> owner's email. Rate-limited client-side (one message per session via `isSent` state)

## Environment Variables
- `RESEND_API_KEY` - Required for contact form email delivery (in `.env.local`, gitignored)

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Development Notes
- Project card data is hardcoded in `app/page.tsx` (not fetched from an API)
- Blog article data is hardcoded in `components/NewsList.tsx`
- All blog links point to Medium (@carlosepsaboya)
- Social links: LinkedIn, Instagram, GitHub, Medium, WhatsApp
- Footer has a "Download my Resume" link to `/Resume.pdf`
- The site uses a light gradient background (gray-to-white) defined in globals.css
- No dark mode support currently
- No testing framework configured
- Language: site content is in English, placeholder text "Nome" in contact form is Portuguese
