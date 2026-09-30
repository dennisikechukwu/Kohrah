<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
</script>

<template>
  <section class="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-5xl rounded-[2.5rem] bg-brand-ink px-4 py-16 text-center shadow-2xl sm:px-16 sm:py-24">
      <h2 class="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Stop losing connections.
      </h2>
      <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-muted/80">
        Turn every quick introduction into a relationship you remember. Create your professional Kohrah profile today.
      </p>
      
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/login"
          class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-reduce:transform-none motion-reduce:transition-none"
        >
          Claim your profile
          <HugeiconsIcon :icon="ArrowRight01Icon" class="size-4" :stroke-width="1.8" />
        </a>
      </div>
    </div>
  </section>
</template>
