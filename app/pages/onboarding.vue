<script setup lang="ts">

definePageMeta({
  layout: false
})

useHead({
  title: 'Set up your profile — Kohrah',
  meta: [
    { name: 'description', content: 'Create your professional profile on Kohrah.' }
  ]
})
</script>

<template>
  <main class="min-h-screen bg-brand-canvas flex flex-col relative overflow-hidden">
    <!-- Ambient background mesh (same as login for consistency) -->
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <div class="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] rounded-full bg-brand-primary-soft/40 blur-[120px] opacity-70 mix-blend-multiply animate-pulse" style="animation-duration: 8s;" />
      <div class="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-coral/10 blur-[100px] opacity-60 mix-blend-multiply animate-pulse" style="animation-duration: 12s;" />
    </div>

    <!-- Header area -->
    <header class="relative z-10 p-6 flex justify-between items-center">
      <NuxtLink to="/" class="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-brand-canvas rounded-sm">
        <span class="sr-only">Kohrah home</span>
        <BrandKohrahWordmark class="h-6 w-auto text-brand-ink transition-colors group-hover:text-brand-primary" />
      </NuxtLink>
    </header>

    <!-- Main Form Area -->
    <div class="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
      <OnboardingForm />
    </div>
  </main>
</template>
