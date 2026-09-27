<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { QrCode01Icon, Note01Icon, Calendar01Icon } from '@hugeicons/core-free-icons'
</script>

<template>
  <section id="how-it-works" class="relative overflow-hidden py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
          How it works
        </p>
        <h2 class="mt-4 text-balance text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
          Exchange details in seconds. Remember them forever.
        </h2>
        <p class="mt-4 text-lg text-brand-muted">
          No apps to download or complex forms to fill. Kohrah turns the quick, chaotic exchange of information into a structured, permanent relationship.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Step 1 -->
        <div class="flex flex-col">
          <div class="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-sm">
            <div class="absolute inset-0 bg-brand-primary-soft/30" />
            <!-- Placeholder UI for "Share" -->
            <div class="relative flex flex-col items-center justify-center">
              <div class="rounded-2xl border border-brand-border bg-white p-3 shadow-sm transition-transform hover:scale-105">
                <div class="grid size-20 place-items-center rounded-xl bg-brand-ink text-white">
                  <HugeiconsIcon :icon="QrCode01Icon" class="size-12" :stroke-width="1.5" />
                </div>
              </div>
              <div class="mt-4 flex items-center gap-2 rounded-full border border-brand-border bg-white px-3 py-1.5 text-[0.65rem] font-bold text-brand-ink shadow-sm">
                kohrah.com/dennis-dev
              </div>
            </div>
          </div>
          <div class="mt-6">
            <div class="flex items-center gap-3">
              <span class="flex size-7 items-center justify-center rounded-full bg-brand-ink text-xs font-bold text-white">1</span>
              <h3 class="text-lg font-bold text-brand-ink">Share instantly</h3>
            </div>
            <p class="mt-3 text-sm leading-6 text-brand-muted">
              Present your Kohrah QR code, tap your NFC card, or send a link. The other person opens your profile instantly in their browser—no app installation required.
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col">
          <div class="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-sm">
            <div class="absolute inset-0 bg-brand-canvas/50" />
            <!-- Placeholder UI for "Context" -->
            <div class="relative flex w-48 flex-col gap-2 rounded-2xl border border-brand-border bg-white p-3 shadow-sm transition-transform hover:scale-105">
              <div class="flex items-center gap-2">
                <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <HugeiconsIcon :icon="Note01Icon" class="size-3" :stroke-width="2" />
                </div>
                <span class="truncate text-[0.65rem] font-bold text-brand-ink">Product Meetup</span>
              </div>
              <div class="rounded-lg bg-brand-canvas/50 p-2">
                <p class="text-[0.55rem] leading-relaxed text-brand-muted">
                  Discussed the new design system. Let's connect about a potential role next quarter.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <div class="flex items-center gap-3">
              <span class="flex size-7 items-center justify-center rounded-full bg-brand-ink text-xs font-bold text-white">2</span>
              <h3 class="text-lg font-bold text-brand-ink">Capture the context</h3>
            </div>
            <p class="mt-3 text-sm leading-6 text-brand-muted">
              Don't just save a name and number. Log exactly where you met, what you discussed, and why the connection matters before the memory fades.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col">
          <div class="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-sm">
            <div class="absolute inset-0 bg-brand-primary-soft/20" />
            <!-- Placeholder UI for "Follow Up" -->
            <div class="relative flex w-48 flex-col gap-3 rounded-2xl border border-brand-border bg-white p-3 shadow-sm transition-transform hover:scale-105">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-success/10 text-brand-success">
                    <HugeiconsIcon :icon="Calendar01Icon" class="size-3" :stroke-width="2" />
                  </div>
                  <span class="text-[0.65rem] font-bold text-brand-ink">Follow up</span>
                </div>
                <span class="text-[0.55rem] font-bold uppercase text-brand-muted">In 2 days</span>
              </div>
              <div class="h-1.5 w-full overflow-hidden rounded-full bg-brand-canvas">
                <div class="h-full w-2/3 rounded-full bg-brand-success"></div>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <div class="flex items-center gap-3">
              <span class="flex size-7 items-center justify-center rounded-full bg-brand-ink text-xs font-bold text-white">3</span>
              <h3 class="text-lg font-bold text-brand-ink">Keep it alive</h3>
            </div>
            <p class="mt-3 text-sm leading-6 text-brand-muted">
              Set a next step immediately. Kohrah ensures you actually follow up on the introduction, turning a brief encounter into a lasting relationship.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
