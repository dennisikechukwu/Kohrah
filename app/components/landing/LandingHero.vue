<template>
  <section id="hero" class="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-8 lg:pt-44">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[42rem] max-w-6xl" aria-hidden="true">
      <div class="absolute left-[-7rem] top-28 size-64 rounded-full bg-brand-coral/10 blur-3xl sm:left-0 sm:size-80" />
      <div class="absolute right-[-8rem] top-14 size-72 rounded-full bg-brand-violet/15 blur-3xl sm:right-0 sm:size-96" />
    </div>

    <div id="why-kohrah" class="mx-auto max-w-4xl scroll-mt-32 text-center">
      <div class="inline-flex items-center gap-2 rounded-full border border-brand-violet/15 bg-brand-soft/70 px-3 py-1.5 text-xs font-semibold text-brand-violet sm:text-sm">
        <span class="size-1.5 rounded-full bg-brand-coral" />
        Built for connections beyond the introduction
      </div>

      <h1 class="mx-auto mt-6 max-w-4xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-brand-ink sm:mt-8 sm:text-6xl lg:text-7xl">
        <span class="block">Share who you are.</span>
        <span class="block text-brand-violet">Remember who you meet.</span>
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
        Share your professional profile in a tap or scan, then keep the context that turns a quick introduction into a lasting relationship.
      </p>

      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#profile-preview"
          class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-violet px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-violet/20 outline-none transition hover:-translate-y-0.5 hover:bg-brand-violet-dark focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-4 focus-visible:ring-offset-brand-canvas sm:w-auto motion-reduce:transform-none motion-reduce:transition-none"
        >
          Explore the experience
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none">
            <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <p class="px-4 py-3 text-sm font-semibold text-brand-muted">Scan. Connect. Remember.</p>
      </div>
    </div>

    <div class="mx-auto mt-14 max-w-6xl sm:mt-20">
      <LandingHeroProductPreview />
    </div>
  </section>
</template>
