# Kohrah

Kohrah is a professional networking and relationship-continuity platform.

**Brand promise:** Share who you are. Remember who you meet.

## Current product boundary

Stage 1 contains only the responsive marketing navigation and landing-page hero. The profile, sharing, and relationship-context surfaces inside the hero are illustrative product previews; they do not implement authentication, QR generation, contact exchange, or dashboard behavior.

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS 4
- Nuxt ESLint

## Frontend structure

```text
app/
├── app.vue                         # Minimal Nuxt layout/page outlet
├── assets/css/main.css             # Tailwind import, brand tokens, base rules
├── components/
│   ├── brand/                      # Wordmark and future brand primitives
│   ├── landing/                    # Stage-specific landing components
│   └── navigation/                 # Responsive site navigation
├── layouts/
│   ├── default.vue                 # Neutral application fallback
│   └── marketing.vue               # Public marketing chrome
└── pages/index.vue                 # Landing composition and route metadata
```

Pages own route metadata and compose sections. Layouts own route-level chrome. Components are organized by product responsibility: shared brand primitives stay independent, while landing-only visuals remain colocated under `landing/`. Styling belongs in Tailwind utility classes; the global stylesheet is reserved for semantic design tokens and genuine base rules.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Do not extend the marketing page or begin product functionality until the next stage is explicitly approved.
