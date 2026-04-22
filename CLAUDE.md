@AGENTS.md

## Stack
- Next.js 16.2.4 (Turbopack) + React 19 + Tailwind v4 (`@theme {}` in `globals.css`, geen `tailwind.config.ts`)
- Deploy-target: Cloudflare Workers via **@opennextjs/cloudflare** — dus **geen** `output: "export"` in `next.config.ts`
- Account ID: `585e765108dbd25f3594a9ac03aa7de7` · Zone ID (imadgine.nl): `bc94a21d890b40f12da57febd6869e2a`

## Deploy
Wanneer de user vraagt om te deployen: draai `npm run deploy`. Niet eerst vragen of checklist afwerken — gewoon runnen.

- `npm run deploy` = `opennextjs-cloudflare build && opennextjs-cloudflare deploy`
- `npm run preview` = lokaal de Worker draaien (`opennextjs-cloudflare preview`)
- Worker-naam: `imadgine` · Custom domains: `imadgine.nl`, `www.imadgine.nl` (staan in `wrangler.jsonc` onder `routes` met `custom_domain: true`)
- Assets-binding: `ASSETS` → `.open-next/assets/`

## Cloudflare auth
- Wrangler gebruikt OAuth (`~/Library/Preferences/.wrangler/config/default.toml`) — scopes omvatten `pages:write`, `workers:write`, `workers_routes:write`, `ssl_certs:write`, `zone:read`.
- **OAuth heeft GEEN DNS-edit scope.** Voor DNS-records verwijderen/bewerken is een API-token nodig met `Zone → DNS → Edit` op imadgine.nl. Vraag de user om een token als DNS mutaties nodig zijn.
- Wrangler zelf kán DNS wél beheren bij custom-domain-attach (via workers_routes scope) zolang er geen conflicterende DNS-records bestaan.

## Custom domain attachen — gotcha
Als `wrangler deploy` faalt met `100117 Hostname '...' already has externally managed DNS records`, dan moet je de bestaande A/AAAA/CNAME records voor dat hostname eerst deleten via DNS API. De `override_existing_dns_record` vlag bestaat wel in de foutmelding maar werkt niet via public API met OAuth.

## Niet aanraken (DNS)
Email-records voor TransIP mailhosting blijven staan — NIET deleten:
- `MX imadgine.nl → mx.transip.email`
- `TXT imadgine.nl → "v=spf1 include:_spf.transip.email ~all"`
- `TXT _dmarc.imadgine.nl`
- `CNAME autoconfig.imadgine.nl`, `CNAME autodiscover.imadgine.nl`

## Opgeruimd (niet meer gebruiken)
- Oude Cloudflare Pages project `imadgine` is verwijderd — **geen** `wrangler pages deploy` meer.
- `.github/workflows/deploy.yml` (TransIP rsync) is verwijderd — GitHub Actions doet geen deploy meer.
- Wildcard `*.imadgine.nl` A/AAAA naar TransIP IP (85.10.159.152) is verwijderd.
