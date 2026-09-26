<script setup lang="ts">
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'

definePageMeta({
  // Disable the default layout (SiteHeader/SiteFooter) for a focused auth experience
  layout: false,
  middleware: [
    function (_to, _from) {
      const user = useSupabaseUser()
      if (user.value) {
        return navigateTo('/dashboard')
      }
    }
  ]
})
</script>

<template>
  <div class="relative flex min-h-screen bg-brand-canvas selection:bg-brand-primary-soft selection:text-brand-ink">
    
    <!-- Background Ambient Effects -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -left-[10%] -top-[10%] h-[50%] w-[40%] rounded-full bg-brand-primary-soft/60 blur-[100px]" />
      <div class="absolute -right-[5%] top-[20%] h-[40%] w-[30%] rounded-full bg-brand-coral/5 blur-[120px]" />
      <div class="absolute bottom-0 left-[20%] h-[30%] w-[50%] rounded-full bg-brand-primary/5 blur-[100px]" />
    </div>

    <!-- Clean Navigation Overlay -->
    <div class="absolute left-6 top-6 z-20 sm:left-10 sm:top-10">
      <NuxtLink to="/" class="group flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-brand-muted outline-none transition-colors hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-primary">
        <HugeiconsIcon :icon="ArrowLeft01Icon" class="size-4 transition-transform group-hover:-translate-x-0.5" />
        Back to Home
      </NuxtLink>
    </div>

    <div class="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      
      <!-- Brand Header -->
      <div class="mb-10 w-full max-w-[420px] text-center animate-nav-enter sm:mb-12">
        <NuxtLink to="/" class="inline-block rounded-sm outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-8 focus-visible:ring-offset-brand-canvas">
          <BrandKohrahWordmark class="h-7 text-brand-ink mx-auto" />
        </NuxtLink>
      </div>

      <!-- Elevated Auth Card -->
      <div class="w-full max-w-[420px] animate-hero-enter rounded-3xl bg-brand-surface/90 p-8 shadow-product ring-1 ring-brand-border/80 backdrop-blur-2xl sm:p-10">
        <AuthForm />
      </div>

    </div>
  </div>
</template>
