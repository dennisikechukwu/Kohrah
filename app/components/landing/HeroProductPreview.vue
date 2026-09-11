<template>
  <figure id="profile-preview" class="relative mx-auto w-full max-w-5xl scroll-mt-28">
    <div class="absolute -inset-5 -z-10 rounded-[3rem] bg-brand-soft/70 blur-2xl sm:-inset-10" aria-hidden="true" />

    <div aria-hidden="true" class="overflow-hidden rounded-[1.75rem] border border-brand-border bg-brand-surface p-2 shadow-product sm:rounded-[2rem] sm:p-3">
      <div class="overflow-hidden rounded-[1.3rem] border border-brand-border bg-brand-canvas sm:rounded-[1.45rem]">
        <div class="flex h-12 items-center justify-between border-b border-brand-border bg-brand-surface px-4 sm:h-14 sm:px-5">
          <div class="flex gap-1.5" aria-hidden="true">
            <span class="size-2 rounded-full bg-brand-coral/75" />
            <span class="size-2 rounded-full bg-brand-border" />
            <span class="size-2 rounded-full bg-brand-violet/50" />
          </div>
          <div class="rounded-lg border border-brand-border bg-brand-canvas px-3 py-1.5 text-[0.65rem] font-medium text-brand-muted sm:px-8 sm:text-xs">
            kohrah.com/you
          </div>
          <div class="flex size-7 items-center justify-center rounded-full bg-brand-soft text-[0.6rem] font-bold text-brand-violet sm:size-8">
            YN
          </div>
        </div>

        <div class="grid gap-3 p-3 sm:gap-4 sm:p-5 lg:grid-cols-5 lg:p-7">
          <div class="lg:col-span-3">
            <LandingHeroProfileCard />
          </div>

          <div class="grid gap-3 sm:gap-4 lg:col-span-2">
            <div class="relative overflow-hidden rounded-2xl bg-brand-ink p-5 text-white shadow-card sm:p-6">
              <div class="absolute -right-8 -top-12 size-36 rounded-full bg-brand-violet/40 blur-3xl" aria-hidden="true" />
              <div class="relative flex items-start justify-between gap-5">
                <div>
                  <p class="text-xs font-medium text-white/60">Ready when you are</p>
                  <h3 class="mt-2 max-w-40 text-lg font-bold leading-tight tracking-tight">Share in a scan or a tap.</h3>
                </div>
                <div class="grid size-20 shrink-0 grid-cols-5 gap-1 rounded-xl bg-white p-2 text-brand-ink" aria-hidden="true">
                  <template v-for="index in 25" :key="index">
                    <span
                      class="rounded-[1px]"
                      :class="[1, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 18, 19, 21, 22, 23, 25].includes(index) ? 'bg-brand-ink' : 'bg-brand-border'"
                    />
                  </template>
                </div>
              </div>
              <div class="relative mt-6 flex items-center gap-2 text-xs font-semibold text-white/75">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-4 text-brand-coral">
                  <path d="M8 12.5 10.7 15 16 9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6" />
                </svg>
                No app required to view
              </div>
            </div>

            <LandingHeroConnectionContext />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-brand-border bg-brand-surface px-4 py-2.5 shadow-card sm:flex">
      <span class="grid size-7 place-items-center rounded-full bg-brand-soft text-brand-violet">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-3.5">
          <path d="m7.5 12.5 3 3 6-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <span class="whitespace-nowrap text-xs font-semibold text-brand-ink">Connection saved with context</span>
    </div>

    <figcaption class="sr-only">
      An illustrative Kohrah public profile beside tools for sharing contact details and remembering where a connection began.
    </figcaption>
  </figure>
</template>
