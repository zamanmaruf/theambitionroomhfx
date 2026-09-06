# The Ambition Room

Premium website for **The Ambition Room** — a private community and curated gathering for entrepreneurs and ambitious professionals.

**Right People. One Room. Endless Possibilities.**

## Access models

| | Membership | Halifax #001 |
|---|------------|--------------|
| Access | Application | Direct Eventbrite |
| CTA | Apply for Membership | Reserve Your Place |
| Outcome | Considered for community | Founding guest (≠ membership) |

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

See `.env.example` for Resend, social, and founder profile fields.

## Key routes

- `/` — brand homepage
- `/membership` — membership positioning
- `/membership/apply` — membership application
- `/founders` — founders
- `/privacy` — privacy

Legacy `/apply` redirects to `/membership/apply`.

## Production

```bash
npm run build
npm start
```

Configuration lives in `src/lib/siteConfig.ts` (venue, Eventbrite URL, `registrationStatus`, founders, partners).
