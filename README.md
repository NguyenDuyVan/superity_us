# Superity Fulfillment

Marketing site for **SUPERITY PTE. LTD.**, built with Next.js 16 (App Router),
React 19 and Tailwind CSS v4.

- **Company:** SUPERITY PTE. LTD.
- **Address:** 60 Paya Lebar Road, #07-54, Paya Lebar Square, Singapore 409051
- **Email:** contact.superity@gmail.com

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (without Docker)

```bash
npm run build   # produces the standalone server in .next/standalone
npm run start
```

## Project layout

- `src/app/` — root layout, global styles, page entry, favicon (`icon.png`)
- `src/components/` — one component per homepage section (Header, Hero, Services, …, Footer)
- `src/lib/site.ts` — single source of truth for company name, email and address
- `public/images/` — section and testimonial photos (the logo is an inline SVG, `LogoMark` in `src/components/icons.tsx`)

The contact / quote forms are static (`mailto:` actions). To capture submissions, wire them to a
form backend (Formspree, a serverless route, etc.).

## Docker (production)

The app is containerized using Next.js standalone output (`output: "standalone"` in
`next.config.ts`).

Build and run locally:

```bash
docker build -t superity-web .
docker run --rm -p 3000:3000 superity-web
```

## Deploy behind Traefik (server)

`docker-compose.yml` attaches the service to the **existing external `deploy_web` network** and
publishes it through Traefik for `superity.us` (+ `www`).

```bash
docker compose up -d --build
```

### Assumptions — adjust to match your Traefik instance

The labels in `docker-compose.yml` use the most common Traefik conventions. If your server differs,
edit these:

- **Entrypoints:** `web` (HTTP :80) and `websecure` (HTTPS :443).
- **Certificate resolver:** `letsencrypt` (`tls.certresolver=letsencrypt`).
- **Network:** `deploy_web` must already exist (`docker network ls`). It is declared `external: true`.
- **Domain:** change the `Host(...)` rules if deploying to a different hostname.

Ensure DNS for `superity.us` and `www.superity.us` points at the server before the
first request so the ACME certificate can be issued.
