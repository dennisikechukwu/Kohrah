<template>
  <div class="flex h-full flex-col rounded-2xl border border-brand-border bg-brand-surface p-5 shadow-card sm:p-7">
    <div class="flex items-center justify-between gap-4">
      <div class="inline-flex items-center gap-2 text-xs font-semibold text-brand-muted">
        <span class="size-2 rounded-full bg-brand-success" />
        Public profile
      </div>
      <div class="flex size-9 items-center justify-center rounded-full border border-brand-border text-brand-muted">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-4">
          <path d="M8.5 12.8 15.8 8m-7.3 3.2 7.3 4.8M8 14.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5ZM17 9.5A2.5 2.5 0 1 1 17 4a2.5 2.5 0 0 1 0 5.5Zm0 10.5a2.5 2.5 0 1 1 0-5.5A2.5 2.5 0 0 1 17 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>

    <div class="mt-8 flex items-center gap-4 sm:mt-10">
      <div class="grid size-16 shrink-0 place-items-center rounded-full bg-brand-soft text-lg font-bold text-brand-violet ring-4 ring-brand-canvas sm:size-20">
        YN
      </div>
      <div class="min-w-0">
        <p class="truncate text-xl font-bold tracking-tight text-brand-ink sm:text-2xl">Your name</p>
        <p class="mt-1 truncate text-sm text-brand-muted">Your role · Company</p>
      </div>
    </div>

    <p class="mt-5 max-w-md text-sm leading-6 text-brand-muted sm:text-base">
      A clear introduction to who you are, what you do, and the best way to reach you.
    </p>

    <div class="mt-6 grid grid-cols-3 gap-2" aria-label="Profile contact methods">
      <div class="flex flex-col items-center gap-2 rounded-xl bg-brand-canvas px-2 py-3 text-xs font-medium text-brand-muted">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-4 text-brand-violet">
          <path d="M4 7.5 12 13l8-5.5M5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11A1.5 1.5 0 0 1 5.5 5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Email
      </div>
      <div class="flex flex-col items-center gap-2 rounded-xl bg-brand-canvas px-2 py-3 text-xs font-medium text-brand-muted">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-4 text-brand-violet">
          <path d="M8.2 4.5 10 8.7 7.8 10a13.3 13.3 0 0 0 6.2 6.2l1.3-2.2 4.2 1.8v3a1.7 1.7 0 0 1-1.7 1.7A14.3 14.3 0 0 1 3.5 6.2a1.7 1.7 0 0 1 1.7-1.7h3Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Call
      </div>
      <div class="flex flex-col items-center gap-2 rounded-xl bg-brand-canvas px-2 py-3 text-xs font-medium text-brand-muted">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-4 text-brand-violet">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6" />
          <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.4 5.1 3.4 8.5S14.2 18.2 12 20.5C9.8 18.2 8.6 15.4 8.6 12S9.8 5.8 12 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
        Website
      </div>
    </div>

    <div class="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
      <div class="flex items-center justify-center rounded-xl bg-brand-violet px-4 py-3 text-sm font-semibold text-white shadow-sm">
        Save contact
      </div>
      <div class="flex items-center justify-center rounded-xl border border-brand-border bg-brand-surface px-4 py-3 text-sm font-semibold text-brand-ink">
        Exchange details
      </div>
    </div>
  </div>
</template>
