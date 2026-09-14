# Kohrah — canonical project context

Last updated: 14 September 2026

This document is the permanent handoff for Kohrah. It records the product intent, current phase, approved experience, visual decisions, architecture, constraints, work completed, and the rules for continuing safely. Read it completely before modifying the repository.

## 1. Current status at a glance

- Product: professional networking and relationship-continuity platform
- Market focus: individuals first; teams, events, and enterprise later
- Current workstream: staged marketing landing page
- Current authorised implementation: Stage 1 / Phase 1 only
- Stage 1 contents: responsive navigation and hero
- Stage 1 status: implemented, reviewed through several design iterations, and pushed to `main`
- Current approved direction: centred full-width hero copy with a layered product preview rising into the lower part of the hero
- Current font: Manrope
- Current primary accent: cobalt blue; purple was explicitly rejected
- Current branch: `main`
- Last product commit before this documentation: `df7acc8 style: restore Manrope typography`
- Next implementation stage: not yet defined or authorised

The page must remain at Stage 1 until the user explicitly approves more work.

## 2. What Kohrah is

Kohrah helps professionals exchange contact information instantly and retain the context that makes a new connection useful.

The exchange layer can eventually include:

- Dynamic QR codes
- NFC-enabled cards
- Public professional profiles
- Shareable links
- Downloadable contact files

Kohrah is not just a digital business-card generator. The deeper problem is relationship continuity. After a conference, sales conversation, introduction, or meetup, people often forget:

- Who they met
- Where they met
- When they met
- What they discussed
- Why the connection mattered
- What should happen next
- When they should follow up

The product should make the initial exchange immediate while helping people remember, organise, and develop the relationship afterward.

### Brand language

- Brand name and complete mark: `Kohrah`
- Brand promise, which must not be silently rewritten: “Share who you are. Remember who you meet.”
- Working tagline: “Scan. Connect. Remember.”
- Current hero eyebrow: “For connections worth keeping”

## 3. Primary users

Kohrah initially serves individuals, especially:

- Professionals attending conferences
- Founders and entrepreneurs
- Sales and business-development professionals
- Recruiters
- Freelancers and consultants
- Company representatives
- Event attendees

Team, event, and enterprise use cases are future horizons. They should follow validation of the individual experience rather than drive the current interface.

## 4. Intended product experience

### Registered professional

A registered user will eventually create a professional profile containing information such as:

- Full name
- Profile photograph
- Professional headline
- Job title
- Company
- Short biography
- Email address
- Phone number
- Website
- LinkedIn and other professional links
- Products, services, or portfolio items
- Preferred contact method

Kohrah can then generate a public profile URL and dynamic QR code.

### Public visitor

When another person scans or opens the profile, they should eventually be able to:

- View the professional profile
- Save the professional's details to their phone
- Call or email them
- Open professional links
- Share the profile
- Exchange their own contact information

The visitor must not be forced to register or install an application.

### Zero-friction guest experience

The team may use “guest mode” internally, but the interface must not announce a restricted “Guest Mode.” Without registering, a visitor will eventually be able to:

- View a public profile
- Save it as a contact
- Exchange their own details
- Share the profile
- State where they met the profile owner
- Add optional meeting context

After exchanging information, the visitor may be invited to create a Kohrah card, but registration remains optional. Permanent contact management, cross-device synchronisation, analytics, and follow-up reminders require an account.

### Future registered capabilities

These are product horizons, not current implementation instructions:

- Profile management
- Dynamic QR-code management
- Connections
- Meeting notes
- Contact tags
- Event and location context
- Follow-up reminders
- Scan and engagement analytics
- CSV export
- Team functionality
- Event functionality
- CRM integrations

## 5. Phase boundaries

The words “Stage 1” and “Phase 1” were both used during the conversation. In this repository they refer to the same current milestone.

### Foundation milestone — complete

- Established Nuxt 4/Vue 3/TypeScript/Tailwind CSS 4 foundation
- Added Nuxt ESLint and quality scripts
- Added semantic design tokens and global base rules
- Established layouts, page composition, and component ownership
- Kept dependencies focused

### Stage 1 / Phase 1 — complete and awaiting further direction

The only authorised marketing implementation was:

- Responsive site navigation
- Landing-page hero

The hero contains an illustrative product preview to communicate the workflow, but it is not product functionality.

### Not authorised yet

Do not implement any of the following unless the user explicitly names and approves a new stage:

- Remaining landing-page sections
- Authentication
- Onboarding
- Functional public profiles
- QR-code generation
- Contact exchange logic
- Dashboard functionality
- Analytics
- Backend services
- Database functionality
- Team, event, or enterprise functionality

There is intentionally no assumed Stage 2. At the start of the next implementation session, ask for or follow the user's specific next-stage brief. Do not continue simply because a next section seems obvious.

## 6. Current approved landing hero

The approved composition is centred and vertically stacked.

1. A floating, contained navigation bar sits at the top.
2. A short eyebrow introduces the purpose.
3. The brand promise receives the strongest visual weight:
   - “Share who you are.” in deep ink
   - “Remember who you meet.” in cobalt blue
4. Supporting copy explains both easy sharing and retained relationship context.
5. The main CTA and “No app required to view” reassurance sit together.
6. A small “Share by QR code • NFC • Link” line communicates exchange methods.
7. A layered product preview starts soon enough to peek into the hero viewport.

Current hero copy:

> A professional profile makes exchanging details effortless. Kohrah keeps the story of the introduction with the person, so the relationship has somewhere to go.

Current CTA: `See Kohrah in action`

Current navigation labels:

- Why Kohrah
- How it works
- View product

### Illustrative product preview

The preview visually connects three moments:

- A public profile for Maya Chen
- A “Ready to share” QR/NFC/link surface
- An “After the hello” saved-connection context card

It exists to make the product proposition believable in the hero. It must remain clearly illustrative until the actual functionality is authorised.

The sample persona is fictional:

- Name: Maya Chen
- Role: Product strategist · Independent
- Availability/status: Available / Public profile
- Example meeting context: met at a product meetup, discussed a product research partnership, follow up Friday

Do not present this persona as a real customer, testimonial, or production record.

## 7. Visual direction

The guiding statement is:

> Raycast-level polish presented through a warm, professional light interface.

Kohrah should feel:

- Premium but approachable
- Technological but not overly technical
- Professional without being cold
- Human and relationship-focused
- Beautiful but straightforward
- Modern without depending on temporary trends

Create depth with surface contrast, thin borders, soft shadows, layering, restrained colour glows, strong typography, and deliberate whitespace.

Avoid:

- Excessive gradients
- Excessive glassmorphism
- Cryptocurrency-style visuals
- Generic stock-photo composition
- Constant floating animation
- Excessive rounded cards
- Fake customer logos
- Fake testimonials
- Fake usage or growth statistics
- Decoration that does not clarify the product

### Current palette

The original brief proposed violet, but the user later explicitly said they are not a fan of purple. Cobalt is the approved replacement.

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Canvas | `canvas` | `#FAF9F7` | Warm page background |
| Surface | `surface` | `#FFFFFF` | Cards and navigation |
| Main ink | `ink` | `#16171B` | Headlines and controls |
| Muted ink | `muted` | `#6F7178` | Supporting copy |
| Primary | `primary` | `#2457D6` | Brand emphasis and interaction |
| Primary dark | `primary-dark` | `#1948BE` | Stronger primary state |
| Primary soft | `primary-soft` | `#EAF0FF` | Subtle blue surface/glow |
| Secondary | `coral` | `#FF715B` | Small human/warm highlights |
| Border | `border` | `#E8E7E3` | Quiet separators |
| Success | `success` | `#168C61` | Availability and confirmation |

Use cobalt as a deliberate accent, not as a wash over every surface. Coral should stay secondary and small.

### Typography

- Approved family: Manrope Variable
- Package: `@fontsource-variable/manrope`
- Fallbacks: `ui-sans-serif`, `system-ui`, `sans-serif`
- Wordmark: extra-bold Manrope with tightly adjusted tracking
- Headlines: confident, compact, and allowed enough width to read naturally

Instrument Sans was tried during refinement, but the user preferred the previous font. Manrope was restored in commit `df7acc8` and is the current approved choice.

### Motion

The user first asked what transitions could be added, then cautioned not to do too much, then explicitly checked that transitions had not been removed. The final direction is restrained motion, not no motion.

Current motion principles:

- Navigation enters once over roughly 420 ms with a slight upward offset.
- Hero copy enters once over roughly 650 ms with a small vertical offset.
- Product preview enters once over roughly 800 ms with a small rise and subtle scale, delayed roughly 140 ms.
- Timing uses `cubic-bezier(0.22, 1, 0.36, 1)` for a smooth, settled finish.
- Buttons and arrows receive small hover/focus feedback.
- Mobile navigation uses a short Vue transition.
- `prefers-reduced-motion` disables non-essential motion.
- No looping float, dramatic parallax, long loading sequence, or movement that competes with the message.

## 8. Design feedback and decisions log

This history matters because it records what should not be repeated.

### Rejected: generic centred SaaS template

An early hero used a pale gradient/glow, centred headline, CTA, and browser-style mockup. The user described it as “AI slop.” The issue was not merely polish; it looked interchangeable with many generated SaaS landing pages and did not explain Kohrah's relationship-continuity value convincingly.

Lesson: every visual element must feel specific to Kohrah and demonstrate the product idea.

### Rejected: harsh editorial left/right split

The next direction used a strong split composition with copy on the left and a large product workflow on the right. It was more product-specific, but the headline became narrow and broke into too many lines.

The user explicitly said they did not want the left and right sides flexed because the text was squished.

Lesson: do not return to a 50/50 split hero. Preserve full-width breathing room for the brand promise.

### Approved direction: centred message plus product evidence

The hero was rebuilt as a full-width centred message with the product imagery below. The user confirmed this felt like the start of a real product. The product cards were then pulled upward so part of the visual appears inside the hero viewport.

Lesson: keep the hierarchy calm and direct, with the product preview supporting the message instead of competing beside it.

### Purple replaced with cobalt

The original palette used violet. The user explicitly rejected purple. It was replaced with a professional cobalt blue while retaining coral as a small warm secondary accent.

### Font returned to Manrope

An alternative typography pass was tried. The user preferred the earlier family, so Manrope is restored and approved.

### Motion retained, but intentionally limited

The hero includes gentle one-time entrances and interaction transitions. The user asked not to overdo motion but did not want it removed entirely.

## 9. Reference direction and research

The original brief supplied three reference screenshots. Their source files were conversation attachments and are not currently tracked in Git, but their intended roles are recorded here.

### Reference 1: Raycast landing page

Use for:

- Navbar polish
- Hero confidence
- Strong typography
- Visual depth
- Product presentation
- Restrained animation

Do not copy its artwork, dark palette, or exact layout. Translate its confidence into Kohrah's warm light identity.

### Reference 2: Attio-like CRM interface

Use later for:

- Information hierarchy
- Professional structure
- Contact-management interfaces
- The future authenticated dashboard

Do not reproduce or implement the dashboard during the landing-page stage.

### Reference 3: personal-profile bento interface

Use for:

- Human profile presentation
- Modular professional information
- The public-profile concept
- Profile previews used in marketing

Do not copy the exact layout.

### Online products reviewed for professional patterns

- [Raycast](https://www.raycast.com/) — hierarchy, confidence, polish, restrained motion
- [Attio](https://attio.com/) — relationship-data structure and product presentation
- [Linear](https://linear.app/) — precise typography, spacing, and interaction restraint
- [Blinq](https://blinq.me/business) — digital contact exchange positioning
- [HiHello](https://www.hihello.com/professional) — professional profile and no-friction sharing patterns
- [Dex](https://getdex.com/) — relationship context and follow-up positioning

The useful synthesis was: lead with a direct benefit, show a believable product artifact, use a restrained hierarchy, and keep the person—not the technology—at the centre.

## 10. Frontend architecture

The application follows Nuxt 4's `app/` directory structure.

```text
app/
├── app.vue
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── brand/
│   │   └── BrandWordmark.vue
│   ├── landing/
│   │   ├── HeroConnectionContext.vue
│   │   ├── HeroProductPreview.vue
│   │   ├── HeroProfileCard.vue
│   │   ├── HeroShareCard.vue
│   │   └── LandingHero.vue
│   └── navigation/
│       └── SiteHeader.vue
├── layouts/
│   ├── default.vue
│   └── marketing.vue
└── pages/
    └── index.vue

public/
└── images/
    └── maya-chen-profile.jpg

docs/
├── PROJECT_CONTEXT.md
└── NEW_SESSION_PROMPT.md
```

### Ownership rules

- `app/app.vue` is only the Nuxt layout/page outlet. It must remain minimal.
- Layouts own route-level chrome and page shells.
- Pages own route metadata and compose approved sections.
- Components are grouped by product responsibility.
- Shared brand primitives remain separate from landing-only visuals.
- Global CSS owns semantic tokens, global base rules, fonts, and shared keyframes.
- Component presentation is expressed with Tailwind utilities.

Required `app/app.vue` contents:

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

### Current file responsibilities

- `app/layouts/default.vue`: neutral application fallback with the shared canvas.
- `app/layouts/marketing.vue`: public marketing shell and `NavigationSiteHeader`.
- `app/pages/index.vue`: SEO metadata, marketing layout selection, and `LandingHero` composition only.
- `app/components/brand/BrandWordmark.vue`: text-only Kohrah wordmark; no separate symbol.
- `app/components/navigation/SiteHeader.vue`: responsive floating navigation, desktop links, mobile menu state, focus return, Escape handling, and CTA.
- `app/components/landing/LandingHero.vue`: message hierarchy, CTA/reassurance, sharing methods, ambient glows, and product-preview placement.
- `app/components/landing/HeroProductPreview.vue`: accessible wrapper and responsive layering for the three illustrative surfaces.
- `app/components/landing/HeroProfileCard.vue`: fictional Maya Chen public profile card.
- `app/components/landing/HeroShareCard.vue`: dark sharing surface and decorative/static QR representation.
- `app/components/landing/HeroConnectionContext.vue`: saved connection, meeting context, and next-step preview.
- `app/assets/css/main.css`: Tailwind import, Manrope import, semantic Tailwind 4 theme tokens, base rules, shadows, and motion keyframes.

Do not collapse these responsibilities into a single large page component. Do not split them further unless a real repeated responsibility appears.

## 11. Technology and dependency snapshot

From `package.json` at this handoff:

### Runtime dependencies

- `nuxt`: `^4.5.2`
- `vue`: `^3.5.42`
- `vue-router`: `^5.3.1`
- `@fontsource-variable/manrope`: `^5.3.0`

### Development dependencies

- `tailwindcss`: `^4.3.3`
- `@tailwindcss/vite`: `^4.3.3`
- `typescript`: `^5.9.3`
- `vue-tsc`: `^3.3.11`
- `eslint`: `^10.10.0`
- `@nuxt/eslint`: `^1.17.0`

### Compatibility detail

- `eslint-plugin-regexp` is overridden to `3.1.1` for the current lint toolchain.
- TypeScript remains on the compatible 5.9 line for the present Nuxt/Vue type-checking setup.

### Nuxt configuration

- Tailwind CSS 4 is integrated through the Vite plugin.
- Compatibility date is `2025-07-15`.
- Nuxt devtools are disabled.
- `@nuxt/eslint` is enabled.
- `app/assets/css/main.css` is loaded globally.

Do not change versions or introduce packages casually. Inspect current state first because these versions may evolve after this document is updated.

## 12. Engineering standards

All implementation must be:

- Component-based
- Type-safe
- Mobile-first
- Responsive from 320px upward
- Accessible
- Keyboard navigable
- Semantically structured
- Maintainable
- Free from unnecessary abstraction
- Free from duplicated markup
- Free from horizontal overflow
- Respectful of reduced-motion preferences
- Checked at mobile and desktop sizes

### Tailwind-first rules

1. Use Tailwind utilities for layout, spacing, typography, colours, borders, shadows, responsive behaviour, and interaction states.
2. Do not create large traditional CSS files.
3. Avoid `<style scoped>` unless a requirement genuinely cannot be expressed cleanly with Tailwind.
4. Keep global CSS limited to Tailwind setup, font declarations, global base rules, semantic design tokens, and specialised shared keyframes.
5. Use the installed Tailwind 4 configuration approach.
6. Prefer semantic tokens to scattered raw hex values.
7. Avoid excessive arbitrary values.
8. Extract repeated interface patterns into Vue components.
9. Do not add Bootstrap, Vuetify, PrimeVue, or another competing styling system.
10. Make the result feel designed for Kohrah, not like default Tailwind components.

### Product-development rules

1. Work only on the currently authorised stage.
2. Do not generate the complete landing page or product automatically.
3. Stop after each stage for user review.
4. Do not add features merely because they look impressive.
5. Do not invent business claims or customer information.
6. Do not silently rewrite approved product copy.
7. Prioritise mobile usability.
8. Explain meaningful UX and engineering decisions.
9. Inspect existing code before modifying it.
10. Preserve unrelated work.
11. Do not implement backend functionality without explicit authorisation.
12. Do not continue merely because the next stage appears obvious.

## 13. Accessibility and responsive behaviour already present

- Semantic navigation and main content structure
- Mobile menu button with `aria-expanded` and `aria-controls`
- Escape key closes the mobile navigation and returns focus
- Visible focus treatment for interactive controls
- Decorative product-preview content is hidden appropriately from assistive technology while a concise figure caption describes its meaning
- Motion respects `prefers-reduced-motion`
- Base viewport supports 320px and above without an intentional fixed-width layout
- Hero typography scales down and wraps deliberately on narrow screens
- Product preview stacks on mobile and layers at wider breakpoints
- Navigation adapts from desktop links to a mobile disclosure

Future UI changes must preserve these behaviours and be checked for horizontal overflow.

## 14. Asset provenance

`public/images/maya-chen-profile.jpg` is a generated illustrative portrait created specifically for the fictional hero preview. It is not a photograph of a customer or a claim of endorsement.

Creative direction used for the asset:

- Natural editorial head-and-shoulders portrait
- Confident Black woman in her early thirties presented as a product strategist
- Charcoal blazer and warm neutral top
- Warm coral studio wall
- Realistic skin texture and professional but human expression
- Square crop
- No text, logo, watermark, or exaggerated stock-photo styling

The optimised repository asset is approximately 720 × 720 pixels and roughly 114 KB at the time of creation.

## 15. Validation and scripts

Available commands:

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run generate
npm run preview
```

The current Stage 1 implementation has passed lint, type-check, and production build checks during development. Run all three again after material code changes because this statement is historical, not a substitute for validation.

For visual changes, also inspect:

- Narrow mobile around 320–390 px
- Tablet/intermediate widths where navigation and preview layout change
- Wide desktop around 1440 px or greater
- Keyboard navigation and focus order
- Reduced-motion mode
- Long copy wrapping and horizontal overflow

## 16. Git history and working method

Meaningful milestones leading to the current product state:

| Commit | Purpose |
| --- | --- |
| `b1565f9` | Initial repository commit |
| `71830a3` | Establish frontend quality foundation |
| `ed7e9fa` | Build responsive Kohrah landing hero |
| `071b887` | Make the hero demonstrate the Kohrah workflow |
| `f59c9c3` | Give hero copy full-width breathing room |
| `fa89cd9` | Refine hero colour and motion |
| `c21be5f` | Refine typography and hero motion |
| `df7acc8` | Restore approved Manrope typography |

The user wants work committed and pushed frequently so completed product progress appears on GitHub. Interpret this as meaningful checkpoints:

- Commit after a real, reviewable milestone.
- Push completed, validated work to `origin/main` when authorised.
- Use clear conventional commit messages.
- Do not create empty or artificially fragmented commits merely to manufacture contribution activity.
- Never overwrite unrelated user changes.

At the beginning of a session, run `git status --short` and inspect recent commits. At the end, report the commit hash and whether the push succeeded.

## 17. Known limitations

- The entire visible product preview is illustrative and non-interactive.
- Navigation anchors currently point to future sections that are not yet implemented.
- CTA destinations do not represent an implemented product flow yet.
- The QR pattern is decorative; no QR code is generated or scannable.
- Email, call, website, save-contact, exchange, meeting context, and follow-up actions are visual only.
- There is no authentication, persistence, API, backend, database, analytics, or account state.
- The fictional profile does not represent a real user.
- Only navigation and hero are present; later marketing sections remain intentionally absent.
- The three original visual-reference screenshots are not stored in the repository. Their intended lessons are preserved in this document. If exact archival copies are needed, the user must reattach them so they can be copied into a tracked reference folder.

## 18. Required handoff after every future stage

Every implementation-stage report should include:

- Files created
- Files modified
- Major product, UX, and engineering decisions
- Validation commands performed
- Lint, type-check, test, and build results as applicable
- Responsive checks performed
- Accessibility checks performed
- Known limitations
- The next unimplemented stage
- Commit hash
- Push result

## 19. How to continue from a new session

1. Open the repository at `/Users/ikechukwudennis/Desktop/kohrah`.
2. Paste the prompt from `docs/NEW_SESSION_PROMPT.md` into the new session.
3. Have the agent read `AGENTS.md` and this file completely.
4. Have it inspect the repository and Git state rather than relying only on this snapshot.
5. State the single next stage or change you authorise.
6. Review that milestone before approving anything beyond it.

If no new stage is provided, the correct action is to explain the current state and ask what should be authorised next—not to write more product code.

