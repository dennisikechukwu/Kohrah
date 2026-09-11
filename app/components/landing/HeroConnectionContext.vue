<template>
  <div class="rounded-2xl border border-brand-border bg-brand-surface p-5 shadow-card sm:p-6">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-brand-violet">After the hello</p>
        <h3 class="mt-2 text-lg font-bold tracking-tight text-brand-ink">Keep the context</h3>
      </div>
      <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-violet">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-4">
          <path d="M8 4.5v3M16 4.5v3M5.5 9.5h13M6.5 6h11A1.5 1.5 0 0 1 19 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </span>
    </div>

    <dl class="mt-5 space-y-3">
      <div class="rounded-xl bg-brand-canvas px-4 py-3">
        <dt class="text-xs font-medium text-brand-muted">Where you met</dt>
        <dd class="mt-1 text-sm font-semibold text-brand-ink">Add an event or place</dd>
      </div>
      <div class="rounded-xl bg-brand-canvas px-4 py-3">
        <dt class="text-xs font-medium text-brand-muted">What mattered</dt>
        <dd class="mt-1 text-sm font-semibold text-brand-ink">Capture a quick note</dd>
      </div>
      <div class="rounded-xl bg-brand-canvas px-4 py-3">
        <dt class="text-xs font-medium text-brand-muted">What comes next</dt>
        <dd class="mt-1 flex items-center gap-2 text-sm font-semibold text-brand-ink">
          <span class="size-1.5 rounded-full bg-brand-coral" />
          Follow up when it matters
        </dd>
      </div>
    </dl>
  </div>
</template>
