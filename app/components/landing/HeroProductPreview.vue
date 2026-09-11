<template>
  <figure id="product-flow" class="flex h-full scroll-mt-24 flex-col bg-brand-surface" aria-labelledby="product-flow-caption">
    <div class="flex items-center justify-between border-b border-brand-border px-5 py-4 sm:px-7">
      <div>
        <p class="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-coral">The Kohrah flow</p>
        <p class="mt-1 text-sm font-semibold text-brand-ink">From introduction to next step</p>
      </div>
      <p class="hidden text-xs font-medium text-brand-muted sm:block">Illustrative product preview</p>
    </div>

    <div aria-hidden="true" class="grid flex-1 content-center gap-7 bg-brand-soft/45 px-4 py-10 sm:px-7 lg:grid-cols-[minmax(0,0.9fr)_2.5rem_minmax(0,1fr)] lg:gap-4 xl:px-9">
      <div class="min-w-0">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-brand-ink">01 / Share</p>
          <p class="text-[0.65rem] font-semibold text-brand-muted">Guest view</p>
        </div>
        <LandingHeroProfileCard />
      </div>

      <div class="flex items-center justify-center" aria-hidden="true">
        <div class="grid size-9 rotate-90 place-items-center border border-brand-ink bg-brand-canvas text-brand-ink lg:rotate-0">
          <svg viewBox="0 0 20 20" fill="none" class="size-4">
            <path d="M3 10h13m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div class="min-w-0">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-brand-ink">02 / Remember</p>
          <p class="text-[0.65rem] font-semibold text-brand-muted">Your view</p>
        </div>
        <LandingHeroConnectionContext />

        <div class="mt-4 border-l-2 border-brand-coral bg-brand-canvas px-4 py-3">
          <p class="text-xs font-semibold leading-5 text-brand-muted">
            The visitor leaves with your details. You keep the reason this connection mattered.
          </p>
        </div>
      </div>
    </div>

    <figcaption id="product-flow-caption" class="sr-only">
      An illustrative two-step Kohrah flow: a visitor views and saves a public profile, then the profile owner retains meeting context and a follow-up reminder.
    </figcaption>
  </figure>
</template>
