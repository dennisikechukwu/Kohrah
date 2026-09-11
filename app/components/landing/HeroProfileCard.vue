<template>
  <div class="w-full overflow-hidden rounded-[1.75rem] border border-brand-border bg-brand-surface shadow-product">
    <div class="relative h-40 overflow-hidden sm:h-44">
      <img
        src="/images/maya-chen-profile.jpg"
        alt=""
        width="720"
        height="720"
        class="size-full object-cover object-[center_38%]"
      >
      <div class="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span class="rounded-full bg-brand-ink/80 px-3 py-1.5 text-[0.65rem] font-semibold text-white backdrop-blur-sm">
          kohrah.com/maya
        </span>
        <span class="grid size-9 place-items-center rounded-full border border-white/50 bg-white/90 text-brand-ink shadow-sm">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4">
            <path d="M7.5 10.2 12.7 5m0 0H9.2m3.5 0v3.5M11.5 8.5H14a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
    </div>

    <div class="p-5 sm:p-6">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-2xl font-bold tracking-[-0.035em] text-brand-ink">Maya Chen</p>
          <p class="mt-1 text-sm font-semibold text-brand-muted">Product strategist · Independent</p>
        </div>
        <span class="mt-1 flex shrink-0 items-center gap-1.5 text-[0.65rem] font-bold text-brand-success">
          <span class="size-1.5 rounded-full bg-brand-success" />
          Public
        </span>
      </div>

      <p class="mt-4 text-sm leading-6 text-brand-muted">
        Helping early-stage teams turn complex ideas into products people understand and use.
      </p>

      <div class="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-brand-border bg-brand-canvas/60">
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

      <div class="mt-4 grid grid-cols-[1fr_auto] gap-2">
        <div class="rounded-xl bg-brand-violet px-4 py-3.5 text-center text-xs font-bold text-white shadow-sm">Save contact</div>
        <div class="grid size-11 place-items-center rounded-xl border border-brand-border bg-brand-surface text-brand-ink">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4">
            <path d="M10 3.5v13m-6.5-6.5h13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
