# The Ambition Room

Premium conversion landing site for **The Ambition Room** — a curated gathering for entrepreneurs and ambitious professionals.

**Right People. One Room. Endless Possibilities.**

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (SEO, sitemap, OG) |
| `RESEND_API_KEY` | Required — sends applications to the inbox |
| `RESEND_FROM_EMAIL` | Verified Resend sender (not Gmail as from-address) |
| `APPLICATIONS_NOTIFY_EMAIL` | Defaults to `theambitionroomhfx@gmail.com` |
| `NEXT_PUBLIC_LINKEDIN_URL` | Optional LinkedIn link in footer |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Optional Instagram link in footer |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Defaults to `theambitionroomhfx@gmail.com` |

## Application flow

Home → **Request an Invitation** → `/apply` → submit → email to **theambitionroomhfx@gmail.com** → `/apply/success` → manual review → private Eventbrite link later (not public).

Applications are email-only. No database required.

## Production

```bash
npm run build
npm start
```

## Configuration

Event and brand copy live in `src/lib/siteConfig.ts`. Update venue there when confirmed (`event.venue`).
