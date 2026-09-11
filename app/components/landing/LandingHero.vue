<template>
  <section id="hero" class="border-b border-brand-border">
    <div class="mx-auto grid max-w-7xl lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12">
      <div id="why-kohrah" class="flex scroll-mt-24 flex-col justify-between px-4 py-14 sm:px-6 sm:py-20 lg:col-span-5 lg:border-x lg:border-brand-border lg:px-8 lg:py-16 xl:px-12 xl:py-20">
        <div>
          <p class="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-muted sm:text-sm">
            <span class="h-px w-8 bg-brand-coral" />
            Professional connections, remembered
          </p>

          <h1 class="mt-9 max-w-2xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-brand-ink sm:text-6xl xl:text-7xl">
            Share who you are. Remember who you meet<span class="text-brand-coral">.</span>
          </h1>

          <p class="mt-8 max-w-lg text-pretty text-lg leading-8 text-brand-muted">
            Exchange details in seconds. Keep the place, conversation, and next step attached to the person—not buried in your memory.
          </p>

          <div class="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#product-flow"
              class="group inline-flex w-full items-center justify-between gap-8 border border-brand-ink bg-brand-ink px-5 py-3.5 text-sm font-bold text-white outline-none transition-colors hover:bg-brand-violet focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-4 focus-visible:ring-offset-brand-canvas sm:w-auto motion-reduce:transition-none"
            >
              See how it works
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
        </div>

        <ol class="mt-16 grid grid-cols-3 border-y border-brand-border lg:mt-12" aria-label="How Kohrah works">
          <li class="py-4 pr-3 sm:py-5">
            <span class="block text-[0.65rem] font-bold text-brand-coral">01</span>
            <span class="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-brand-ink sm:text-sm">Scan</span>
          </li>
          <li class="border-x border-brand-border px-3 py-4 sm:px-5 sm:py-5">
            <span class="block text-[0.65rem] font-bold text-brand-coral">02</span>
            <span class="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-brand-ink sm:text-sm">Connect</span>
          </li>
          <li class="py-4 pl-3 sm:py-5 sm:pl-5">
            <span class="block text-[0.65rem] font-bold text-brand-coral">03</span>
            <span class="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-brand-ink sm:text-sm">Remember</span>
          </li>
        </ol>
      </div>

      <div class="lg:col-span-7 lg:border-r lg:border-brand-border">
        <LandingHeroProductPreview />
      </div>
    </div>
  </section>
</template>
