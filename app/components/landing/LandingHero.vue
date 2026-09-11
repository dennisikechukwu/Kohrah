<template>
  <section id="hero" class="relative isolate overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pt-16">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[42rem] max-w-6xl" aria-hidden="true">
      <div class="absolute left-1/2 top-8 h-80 w-[46rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-brand-primary-soft/55 blur-3xl" />
      <div class="absolute left-[12%] top-56 size-44 rounded-full bg-brand-coral/5 blur-3xl" />
    </div>

    <div id="why-kohrah" class="mx-auto max-w-5xl scroll-mt-32 text-center">
      <p class="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-muted sm:text-sm">
        <span class="size-1.5 rounded-full bg-brand-coral" />
        For connections worth keeping
      </p>

      <h1 class="mt-6 text-balance text-[2.75rem] font-semibold leading-[1.01] tracking-[-0.055em] text-brand-ink sm:text-6xl lg:text-7xl xl:text-[5rem]">
        <span class="block lg:whitespace-nowrap">Share who you are.</span>
        <span class="block text-brand-primary lg:whitespace-nowrap">Remember who you meet.</span>
      </h1>

      <p class="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
        A professional profile makes exchanging details effortless. Kohrah keeps the story of the introduction with the person, so the relationship has somewhere to go.
      </p>

      <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#product-preview"
          class="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-ink px-5 py-3.5 text-sm font-bold text-white shadow-card outline-none transition hover:-translate-y-0.5 hover:bg-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-brand-canvas sm:w-auto motion-reduce:transform-none motion-reduce:transition-none"
        >
          See Kohrah in action
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none">
            <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>

        <p class="flex items-center gap-2 text-sm font-semibold text-brand-muted">
          <span class="grid size-5 place-items-center rounded-full border border-brand-success text-brand-success">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-3">
              <path d="m5.5 10.5 2.7 2.6 6.2-6.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          No app required to view
        </p>
      </div>

      <div class="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.13em] text-brand-muted" aria-label="Profile sharing methods">
        <span class="font-semibold normal-case tracking-normal text-brand-muted/75">Share by</span>
        <span class="text-brand-ink">QR code</span>
        <span class="size-1 rounded-full bg-brand-border" aria-hidden="true" />
        <span class="text-brand-ink">NFC</span>
        <span class="size-1 rounded-full bg-brand-border" aria-hidden="true" />
        <span class="text-brand-ink">Link</span>
      </div>
    </div>

    <div class="mx-auto mt-10 max-w-6xl sm:mt-14">
      <LandingHeroProductPreview />
    </div>
  </section>
</template>
