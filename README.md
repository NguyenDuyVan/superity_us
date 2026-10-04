# Infinity Fulfillment

Marketing site for **Infinity Ads and Trade Agency Limited**, built with Next.js 16 (App Router),
React 19 and Tailwind CSS v4.

- **Company:** Infinity Ads and Trade Agency Limited
- **Address:** RM 1618B, 16/F, Pioneer Centre, 750 Nathan Road, Mongkok, Kowloon, Hong Kong
- **Email:** hello@infinityfulfill.com

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
- `public/images/` — logo and testimonial photos

The contact / quote forms are static (`mailto:` actions). To capture submissions, wire them to a
form backend (Formspree, a serverless route, etc.).

## Docker (production)

The app is containerized using Next.js standalone output (`output: "standalone"` in
`next.config.ts`).

Build and run locally:

```bash
docker build -t infinityfulfillment-web .
docker run --rm -p 3000:3000 infinityfulfillment-web
```

## Deploy behind Traefik (server)

`docker-compose.yml` attaches the service to the **existing external `deploy_web` network** and
publishes it through Traefik for `infinityfulfill.com` (+ `www`).

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

Ensure DNS for `infinityfulfill.com` and `www.infinityfulfill.com` points at the server before the
first request so the ACME certificate can be issued.
