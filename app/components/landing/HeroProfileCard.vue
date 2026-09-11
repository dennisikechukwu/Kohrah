<template>
  <div class="w-full border border-brand-ink bg-brand-surface shadow-card">
    <div class="flex items-center justify-between border-b border-brand-border px-4 py-3">
      <span class="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-muted">Example public profile</span>
      <span class="flex items-center gap-1.5 text-[0.65rem] font-bold text-brand-success">
        <span class="size-1.5 rounded-full bg-brand-success" />
        Live
      </span>
    </div>

    <div class="px-5 pb-5 pt-6">
      <div class="flex items-start justify-between gap-4">
        <div class="grid size-16 shrink-0 place-items-center rounded-full bg-brand-soft text-lg font-extrabold text-brand-violet ring-4 ring-brand-canvas">
          MC
        </div>
        <svg viewBox="0 0 21 21" fill="none" aria-hidden="true" class="size-16 bg-white p-1 text-brand-ink">
          <path d="M1 1h6v6H1V1Zm2 2v2h2V3H3Zm11-2h6v6h-6V1Zm2 2v2h2V3h-2ZM1 14h6v6H1v-6Zm2 2v2h2v-2H3ZM9 1h2v2H9V1Zm0 4h2v4H9V5Zm4 4h2v2h-2V9Zm4 0h3v2h-3V9ZM1 9h4v2H1V9Zm6 2h2v2H7v-2Zm3 2h3v2h-3v-2Zm5 0h2v4h-2v-4Zm4 0h1v3h-1v-3Zm-9 4h2v3h-2v-3Zm3 1h2v2h-2v-2Zm4 0h3v2h-3v-2Z" fill="currentColor" />
        </svg>
      </div>

      <p class="mt-6 text-2xl font-bold tracking-tight text-brand-ink">Maya Chen</p>
      <p class="mt-1 text-sm font-medium text-brand-muted">Independent product consultant</p>
      <p class="mt-4 text-sm leading-6 text-brand-muted">Helping early-stage teams turn complex ideas into useful products.</p>

      <div class="mt-6 grid grid-cols-3 border-y border-brand-border">
        <div class="flex flex-col items-center gap-1.5 py-3 text-[0.65rem] font-bold text-brand-muted">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4 text-brand-violet">
            <path d="M3.5 6.5 10 11l6.5-4.5M5 4.5h10A1.5 1.5 0 0 1 16.5 6v8A1.5 1.5 0 0 1 15 15.5H5A1.5 1.5 0 0 1 3.5 14V6A1.5 1.5 0 0 1 5 4.5Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Email
        </div>
        <div class="flex flex-col items-center gap-1.5 border-x border-brand-border py-3 text-[0.65rem] font-bold text-brand-muted">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4 text-brand-violet">
            <path d="M6.5 3.5 8 7 6.2 8a10.8 10.8 0 0 0 5.8 5.8l1-1.8 3.5 1.5V16a1 1 0 0 1-1 1A12.5 12.5 0 0 1 3 4.5a1 1 0 0 1 1-1h2.5Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Call
        </div>
        <div class="flex flex-col items-center gap-1.5 py-3 text-[0.65rem] font-bold text-brand-muted">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4 text-brand-violet">
            <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.4" />
            <path d="M3.5 10h13M10 3c1.8 1.9 2.7 4.2 2.7 7s-.9 5.1-2.7 7c-1.8-1.9-2.7-4.2-2.7-7S8.2 4.9 10 3Z" stroke="currentColor" stroke-width="1.4" />
          </svg>
          Website
        </div>
      </div>

      <div class="mt-5 grid gap-2">
        <div class="bg-brand-violet px-4 py-3 text-center text-xs font-bold text-white">Save contact</div>
        <div class="border border-brand-border px-4 py-3 text-center text-xs font-bold text-brand-ink">Exchange details</div>
      </div>
    </div>
  </div>
</template>
