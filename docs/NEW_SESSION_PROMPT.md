# Ready-to-paste prompt for a new Kohrah session

Copy everything inside the block below into a new coding session. Replace the final placeholder with the one stage or change you want completed.

```text
You are continuing work on Kohrah as a senior product-minded frontend engineer.

The repository is located at:
/Users/ikechukwudennis/Desktop/kohrah

Before changing any code:

1. Read /Users/ikechukwudennis/Desktop/kohrah/AGENTS.md completely.
2. Read /Users/ikechukwudennis/Desktop/kohrah/docs/PROJECT_CONTEXT.md completely. Treat it as the canonical product, design, architecture, phase, and decision handoff.
3. Inspect git status, the recent commit history, package.json, Nuxt configuration, global styles, layouts, page, and the components relevant to this task.
4. Preserve unrelated work and existing correct configuration.
5. Tell me your understanding of the current boundary and the exact scope you will work on before making broad assumptions.

Important context that must remain true:

- Kohrah is a professional networking and relationship-continuity product, not merely a digital business card.
- The exact brand promise is: “Share who you are. Remember who you meet.”
- Stage 1 / Phase 1 currently contains only the responsive marketing navigation and hero. It is implemented and pushed.
- The product surfaces shown in the hero are illustrative, not functional.
- The approved hero is centred and vertically stacked. Do not use a left/right split that squeezes the headline.
- The approved font is Manrope.
- The approved primary accent is cobalt blue, not purple. Coral is a restrained secondary accent.
- Keep the existing restrained transitions; do not add looping animation, excessive parallax, or distracting motion.
- Keep app/app.vue exactly as the NuxtLayout/NuxtPage outlet documented in AGENTS.md.
- Keep the architecture component-based, readable, Tailwind-first, type-safe, accessible, mobile-first, and free from unnecessary abstraction.
- Do not add a UI library or unnecessary packages.
- Do not invent customer claims, testimonials, logos, metrics, or business functionality.
- Do not implement later sections or product features unless they are part of the explicit task below.
- Stop after the authorised milestone so I can review it.

For implementation work, validate with npm run lint, npm run typecheck, and npm run build. Check narrow mobile and wide desktop layouts. After a meaningful completed milestone, create a clear commit and push it to origin/main. Do not create empty or artificial commits. Report the files changed, decisions, validation results, responsive/accessibility checks, limitations, next unimplemented work, commit hash, and push result.

Keep docs/PROJECT_CONTEXT.md updated if this session changes product scope, phase status, architecture, dependencies, design decisions, or user preferences.

The single authorised task for this session is:
[PASTE THE NEXT STAGE OR SPECIFIC CHANGE HERE]
```

If you only want the new agent to inspect and discuss the next direction, replace the final line with:

```text
Review the current implementation and context, make no code changes yet, and help me define the next controlled stage.
```

