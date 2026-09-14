# Kohrah repository instructions

These instructions apply to every coding agent working in this repository.

## Before changing anything

1. Read `docs/PROJECT_CONTEXT.md` completely. It is the canonical product and engineering handoff.
2. Read `docs/NEW_SESSION_PROMPT.md` when continuing work from a new conversation.
3. Inspect `git status`, the recent commit history, the installed package versions, and the files relevant to the requested stage.
4. Confirm the user's currently authorised stage. Do not infer that the next stage is approved.
5. Preserve unrelated user work and correct existing configuration.

## Non-negotiable product rules

- Kohrah is a professional networking and relationship-continuity product, not merely a digital business-card generator.
- The brand promise is exactly: “Share who you are. Remember who you meet.”
- The visitor-facing experience must remain useful without requiring an account or app installation.
- Never invent customer claims, testimonials, logos, metrics, or production functionality.
- Stop after the requested stage and hand it back for review.

## Non-negotiable frontend rules

- Keep `app/app.vue` as only:

  ```vue
  <template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </template>
  ```

- Put route-level chrome in layouts, route composition and metadata in pages, and focused UI responsibilities in components.
- Use Nuxt 4, Vue 3, TypeScript, and Tailwind CSS 4 as already configured.
- Use Tailwind utilities for component styling. Keep global CSS limited to the Tailwind import, fonts, semantic tokens, base rules, and genuinely shared keyframes.
- Do not add a UI library or unnecessary dependency without approval.
- Maintain mobile-first responsiveness from 320px upward, semantic HTML, keyboard access, visible focus states, reduced-motion support, and no horizontal overflow.
- Avoid massive page components, duplicated markup, premature abstractions, excessive arbitrary values, and scattered raw colour values.
- The approved current typography is Manrope. The approved primary accent is cobalt blue, not purple.
- The approved hero is a centred, vertically stacked composition. Do not return to a left/right split that squeezes the headline.
- Motion must be restrained and purposeful: short one-time entrances and interaction feedback, no perpetual floating or distracting parallax.

## Current boundary

Stage 1 (also called Phase 1 in parts of the conversation) is implemented and contains only:

- Responsive marketing navigation
- Landing-page hero
- Illustrative, non-functional product preview inside the hero

Do not add later landing sections, authentication, onboarding, real public-profile behaviour, QR generation, contact exchange, dashboards, analytics, backend services, or database work until explicitly authorised.

## Quality and Git workflow

- Run `npm run lint`, `npm run typecheck`, and `npm run build` after meaningful implementation changes.
- Check both narrow mobile and wide desktop layouts for material UI changes.
- Commit and push meaningful completed milestones to `main` when the user has asked for it and the working state is valid.
- Use clear conventional commit messages. Never create empty, misleading, or noisy commits solely to inflate activity.
- At handoff, report changed files, decisions, validation results, responsive checks, limitations, next unimplemented work, commit hash, and push result.
- Keep `docs/PROJECT_CONTEXT.md` current whenever product scope, architecture, design decisions, dependencies, or phase status change.

