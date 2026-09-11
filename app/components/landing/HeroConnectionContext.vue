<template>
  <div class="w-full border border-brand-ink bg-brand-surface shadow-card">
    <div class="flex items-center justify-between border-b border-brand-border px-4 py-3">
      <span class="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-muted">Saved connection</span>
      <span class="text-[0.65rem] font-bold text-brand-muted">Just now</span>
    </div>

    <div class="p-5">
      <div class="flex items-center gap-3">
        <div class="grid size-11 place-items-center rounded-full bg-brand-soft text-sm font-extrabold text-brand-violet">MC</div>
        <div>
          <p class="text-base font-bold text-brand-ink">Maya Chen</p>
          <p class="text-xs text-brand-muted">Independent product consultant</p>
        </div>
      </div>

      <dl class="mt-6 space-y-5">
        <div class="grid grid-cols-[4.75rem_1fr] gap-3 border-t border-brand-border pt-4">
          <dt class="text-[0.65rem] font-bold uppercase tracking-wide text-brand-muted">Met at</dt>
          <dd class="text-xs font-semibold leading-5 text-brand-ink">Product Assembly</dd>
        </div>
        <div class="grid grid-cols-[4.75rem_1fr] gap-3 border-t border-brand-border pt-4">
          <dt class="text-[0.65rem] font-bold uppercase tracking-wide text-brand-muted">Context</dt>
          <dd class="text-xs font-semibold leading-5 text-brand-ink">A partnership worth exploring</dd>
        </div>
        <div class="grid grid-cols-[4.75rem_1fr] gap-3 border-t border-brand-border pt-4">
          <dt class="text-[0.65rem] font-bold uppercase tracking-wide text-brand-muted">Next step</dt>
          <dd class="flex items-center gap-2 text-xs font-semibold leading-5 text-brand-ink">
            <span class="size-1.5 rounded-full bg-brand-coral" />
            Follow up Friday
          </dd>
        </div>
      </dl>
    </div>

    <div class="border-t border-brand-border bg-brand-canvas px-4 py-3 text-center text-[0.65rem] font-bold text-brand-muted">
      Context stays attached to the person
    </div>
  </div>
</template>
