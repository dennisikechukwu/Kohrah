<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { QrCode01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
</script>

<template>
  <div class="w-full rounded-2xl bg-brand-ink p-4 text-white shadow-product sm:p-5">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-coral">Ready to share</p>
        <p class="mt-2 max-w-32 text-sm font-bold leading-5">Scan to open Maya's profile.</p>
      </div>

      <HugeiconsIcon :icon="QrCode01Icon" class="size-20 shrink-0 rounded-xl bg-white p-2 text-brand-ink" />
    </div>

    <div class="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[0.65rem] font-semibold text-white/65">
      <HugeiconsIcon :icon="Tick02Icon" class="size-4 text-brand-coral" stroke-width="1.8" />
      No app required to view
    </div>
  </div>
</template>
