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
        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
          Exchange details in seconds.<br>
          Remember them forever.
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
            <div class="relative flex flex-col items-center gap-3 text-brand-muted/40">
              <HugeiconsIcon :icon="QrCode01Icon" class="size-12" :stroke-width="1.5" />
              <span class="text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted/50">Placeholder: Share UI</span>
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
            <div class="relative flex flex-col items-center gap-3 text-brand-muted/40">
              <HugeiconsIcon :icon="Note01Icon" class="size-12" :stroke-width="1.5" />
              <span class="text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted/50">Placeholder: Context UI</span>
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
            <div class="relative flex flex-col items-center gap-3 text-brand-muted/40">
              <HugeiconsIcon :icon="Calendar01Icon" class="size-12" :stroke-width="1.5" />
              <span class="text-[0.65rem] font-bold uppercase tracking-widest text-brand-muted/50">Placeholder: Follow-up UI</span>
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
