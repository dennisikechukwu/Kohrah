<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { Briefcase01Icon, Globe02Icon, Calendar01Icon } from '@hugeicons/core-free-icons'
</script>

<template>
  <section id="why-kohrah" class="relative overflow-hidden py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
          Why Kohrah
        </p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
          The handshake is just the beginning.
        </h2>
        <p class="mt-4 text-lg leading-8 text-brand-muted">
          Most networking tools stop at the exchange. Kohrah is built to capture the context of your introduction so the relationship has somewhere to go.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-3">
        <!-- Pillar 1 -->
        <div class="relative rounded-[2rem] border border-brand-border bg-brand-surface p-6 shadow-card sm:p-8 lg:p-10">
          <div class="inline-flex size-12 items-center justify-center rounded-xl bg-brand-canvas text-brand-primary shadow-sm border border-brand-border">
            <HugeiconsIcon :icon="Globe02Icon" class="size-5" :stroke-width="1.6" />
          </div>
          <h3 class="mt-6 text-lg font-bold text-brand-ink">Beyond the business card</h3>
          <p class="mt-3 text-sm leading-7 text-brand-muted">
            Paper cards get lost in pockets. Basic digital cards are easily ignored. Kohrah provides a premium, living profile that represents you at your best, everywhere you go.
          </p>
        </div>

        <!-- Pillar 2 -->
        <div class="relative rounded-[2rem] border border-brand-border bg-brand-surface p-6 shadow-card sm:p-8 lg:p-10">
          <div class="inline-flex size-12 items-center justify-center rounded-xl bg-brand-canvas text-brand-primary shadow-sm border border-brand-border">
            <HugeiconsIcon :icon="Briefcase01Icon" class="size-5" :stroke-width="1.6" />
          </div>
          <h3 class="mt-6 text-lg font-bold text-brand-ink">Context over contacts</h3>
          <p class="mt-3 text-sm leading-7 text-brand-muted">
            A name and number aren't enough. Kohrah logs the exact context of the introduction—where you met and what you discussed—so you never forget a face.
          </p>
        </div>

        <!-- Pillar 3 -->
        <div class="relative rounded-[2rem] border border-brand-border bg-brand-surface p-6 shadow-card sm:p-8 lg:p-10">
          <div class="inline-flex size-12 items-center justify-center rounded-xl bg-brand-canvas text-brand-primary shadow-sm border border-brand-border">
            <HugeiconsIcon :icon="Calendar01Icon" class="size-5" :stroke-width="1.6" />
          </div>
          <h3 class="mt-6 text-lg font-bold text-brand-ink">Built for follow-through</h3>
          <p class="mt-3 text-sm leading-7 text-brand-muted">
            The difference between a quick chat and a closed deal is the follow-up. Set reminders immediately after an encounter to ensure the connection moves forward.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
