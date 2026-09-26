<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowUpRight01Icon, Mail01Icon, Call02Icon, Globe02Icon, Add01Icon } from '@hugeicons/core-free-icons'
</script>

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
          <HugeiconsIcon :icon="ArrowUpRight01Icon" class="size-4" stroke-width="1.5" />
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
          <HugeiconsIcon :icon="Mail01Icon" class="size-4 text-brand-primary" stroke-width="1.4" />
          Email
        </div>
        <div class="flex flex-col items-center gap-1.5 border-x border-brand-border py-3 text-[0.65rem] font-bold text-brand-muted">
          <HugeiconsIcon :icon="Call02Icon" class="size-4 text-brand-primary" stroke-width="1.4" />
          Call
        </div>
        <div class="flex flex-col items-center gap-1.5 py-3 text-[0.65rem] font-bold text-brand-muted">
          <HugeiconsIcon :icon="Globe02Icon" class="size-4 text-brand-primary" stroke-width="1.4" />
          Website
        </div>
      </div>

      <div class="mt-4 grid grid-cols-[1fr_auto] gap-2">
        <div class="rounded-xl bg-brand-primary px-4 py-3.5 text-center text-xs font-bold text-white shadow-sm">Save contact</div>
        <div class="grid size-11 place-items-center rounded-xl border border-brand-border bg-brand-surface text-brand-ink">
          <HugeiconsIcon :icon="Add01Icon" class="size-4" stroke-width="1.6" />
        </div>
      </div>
    </div>
  </div>
</template>
