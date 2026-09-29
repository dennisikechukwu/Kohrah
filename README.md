# Kohrah

Kohrah is a professional networking and relationship-continuity platform.

**Brand promise:** Share who you are. Remember who you meet.

## Start here in a new session (For AI Agents)

Read the complete [project context](docs/PROJECT_CONTEXT.md), then use the [ready-to-paste new-session prompt](docs/NEW_SESSION_PROMPT.md). Repository-specific agent rules are in [AGENTS.md](AGENTS.md).

## Current product boundary

The application is currently at **Stage 6 (Growth & Engagement)**. The core product loop is fully dynamic and wired to the database. It currently includes:

- **Marketing:** Responsive landing page with animated hero, illustrative product preview, workflow mockups, and value propositions.
- **Authentication:** Passwordless Magic Link authentication via Supabase and Resend.
- **Onboarding:** User profile creation flow provisioning a unique URL slug.
- **Dashboard:** Secure authenticated area displaying live URL, live profile status, profile views analytics, and active connections list.
- **Live Profiles:** Dynamic public profile pages (`/[slug]`) serving data live from the database, generating `.vcf` files on the fly, and logging analytics.
- **Lead Capture & Connections:** "Exchange Details" modal allowing guests to securely leave contact info which is saved to the user's connections.
- **QR Codes:** Dynamically rendered scannable QR codes.

*Do not extend product functionality or begin the next stage until explicitly approved.*

## Stack

- **Framework:** Nuxt 4, Vue 3, TypeScript
- **Styling:** Tailwind CSS 4
- **Backend & Auth:** Supabase
- **Email:** Resend (Custom SMTP via Supabase)
- **Icons:** Hugeicons
- **Linting:** Nuxt ESLint

## Frontend structure

```text
app/
├── app.vue                         # Minimal Nuxt layout/page outlet
├── assets/css/main.css             # Tailwind import, brand tokens, base rules
├── components/
│   ├── brand/                      # Wordmark and brand primitives
│   ├── landing/                    # Stage-specific landing components
│   ├── navigation/                 # Responsive site navigation
│   ├── onboarding/                 # Onboarding form and elements
│   └── profile/                    # Live profile components (ExchangeModal, EditProfile, AvatarUpload)
├── layouts/
│   ├── default.vue                 # Neutral application fallback
│   └── marketing.vue               # Public marketing chrome
└── pages/
    ├── index.vue                   # Landing composition
    ├── login.vue                   # Glassmorphic magic-link login
    ├── confirm.vue                 # Auth callback handler
    ├── onboarding.vue              # Initial profile setup
    ├── dashboard.vue               # Secure authenticated area
    └── [slug].vue                  # Dynamic public profile page
```

Pages own route metadata and compose sections. Layouts own route-level chrome. Components are organized by product responsibility. Styling belongs in Tailwind utility classes; the global stylesheet is reserved for semantic design tokens and genuine base rules.

## Local development

### Environment setup
Create a `.env` file in the root directory with your Supabase and Resend credentials:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
NUXT_SUPABASE_SECRET_KEY=your_supabase_service_role_key
RESEND_API_KEY=your_resend_api_key
```

### Run the app
```bash
npm install
npm run dev
```

## Quality checks

Run these scripts before committing material changes:
```bash
npm run lint
npm run typecheck
npm run build
```
