<template>
  <div class="w-full rounded-2xl border border-brand-border bg-brand-surface p-4 shadow-card sm:p-5">
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="grid size-8 place-items-center rounded-lg bg-brand-primary-soft text-brand-primary">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4">
            <path d="M5 3.5v2M15 3.5v2M3.5 8h13m-11-3h9A1.5 1.5 0 0 1 16 6.5V15a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 15V6.5A1.5 1.5 0 0 1 5.5 5Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
          </svg>
        </span>
        <div>
          <p class="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-primary">After the hello</p>
          <p class="mt-0.5 text-xs font-semibold text-brand-muted">Connection saved</p>
        </div>
      </div>
      <span class="text-[0.65rem] font-semibold text-brand-muted">Today</span>
    </div>

    <div class="mt-4 flex items-center gap-3 border-t border-brand-border pt-4">
      <img src="/images/maya-chen-profile.jpg" alt="" width="720" height="720" class="size-10 rounded-full object-cover object-[center_35%]">
      <div class="min-w-0">
        <p class="truncate text-sm font-bold text-brand-ink">Maya Chen</p>
        <p class="truncate text-xs text-brand-muted">Met at a product meetup</p>
      </div>
    </div>

    <p class="mt-4 rounded-xl bg-brand-canvas px-3.5 py-3 text-xs font-medium leading-5 text-brand-ink">
      Discussed a product research partnership.
    </p>

    <div class="mt-3 flex items-center justify-between gap-3 text-xs">
      <span class="font-semibold text-brand-muted">Next step</span>
      <span class="flex items-center gap-1.5 rounded-full bg-brand-primary-soft px-2.5 py-1.5 font-bold text-brand-primary">
        <span class="size-1.5 rounded-full bg-brand-coral" />
        Follow up Friday
      </span>
    </div>
  </div>
</template>
