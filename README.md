# Vertek.lab Website

The official website for **Vertek.lab** — an AI-First Engineering Studio.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Validation**: Zod
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type check
pnpm type-check
```

## 🏗️ Project Structure

```
vertek-lab-website/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form endpoint
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles
│   ├── not-found.tsx         # Custom 404 page
│   └── sitemap.ts            # Sitemap generation
├── components/
│   ├── sections/             # Page sections
│   │   ├── Hero.tsx
│   │   ├── Capabilities.tsx
│   │   ├── MethodTimeline.tsx
│   │   ├── EnterpriseIntegration.tsx
│   │   ├── Cases.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── ui/                   # Reusable UI components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Section.tsx
├── lib/
│   ├── utils.ts              # Utility functions (cn helper)
│   └── schemas.ts            # Zod validation schemas
└── public/                   # Static assets

```

## 🎨 Design System

### Colors

- **Background**: `#0A0A0A` (black)
- **Graphite**: `#2E2E2E` (dark gray)
- **Electric**: `#2FB1FF` (blue accent)
- **Concrete**: `#B4B4B4` (light gray)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 3xl-7xl
- **Body**: Regular, lg-xl

### Spacing

- Max container width: `1280px`
- Section padding: `24px` (mobile) → `96px` (desktop)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Supabase (for contact form persistence)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend (for email notifications)
RESEND_API_KEY=your_resend_api_key

# reCAPTCHA (for spam protection)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

### Next Steps for Full Implementation

1. **Contact Form Integration**:
   - Set up Supabase database
   - Configure Resend for email notifications
   - Add reCAPTCHA Enterprise
   - Implement rate limiting

2. **Assets**:
   - Add favicon and app icons
   - Create OG image (1200×630)
   - Add any project images for Cases section

3. **Performance**:
   - Run Lighthouse CI
   - Optimize images (convert to AVIF/WebP)
   - Configure CDN caching

4. **Analytics**:
   - Set up Plausible or Google Analytics
   - Configure Sentry for error tracking

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 📊 Performance Targets

- **LCP**: ≤ 2.0s
- **TTI**: ≤ 2.5s
- **CLS**: ≤ 0.05
- **Lighthouse Performance**: ≥ 90
- **Lighthouse Accessibility**: ≥ 95

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader optimized
- `prefers-reduced-motion` support
- Focus-visible indicators
- Skip-to-content link

## 🔒 Security

- Security headers configured in `next.config.js`
- CSP headers for XSS protection
- HTTPS enforced (HSTS)
- No exposed API keys in client code

## 📝 License

© 2025 VERTEK.LAB — All rights reserved

---

**Built with the AI-First methodology we offer to clients.**
