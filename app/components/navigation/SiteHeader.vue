<script setup lang="ts">
const isMenuOpen = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menu-button')

const navigationItems = [
  { label: 'Why Kohrah', href: '#why-kohrah' },
  { label: 'The experience', href: '#profile-preview' },
] as const

function closeMenu() {
  isMenuOpen.value = false
}

async function closeMenuWithKeyboard() {
  if (!isMenuOpen.value) {
    return
  }

  closeMenu()
  await nextTick()
  menuButton.value?.focus()
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5" @keydown.esc="closeMenuWithKeyboard">
    <div
      class="relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-brand-border/90 bg-brand-canvas/90 px-4 py-3 shadow-nav backdrop-blur-xl sm:px-5"
    >
      <BrandKohrahWordmark />

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
        <a
          v-for="item in navigationItems"
          :key="item.href"
          :href="item.href"
          class="rounded-lg px-4 py-2 text-sm font-medium text-brand-muted outline-none transition-colors hover:bg-brand-surface hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-violet motion-reduce:transition-none"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center md:flex">
        <a
          href="#profile-preview"
          class="inline-flex items-center justify-center rounded-xl bg-brand-ink px-4 py-2.5 text-sm font-semibold text-white shadow-sm outline-none transition hover:-translate-y-0.5 hover:bg-brand-violet focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
        >
          See the experience
        </a>
      </div>

      <button
        ref="menu-button"
        type="button"
        class="inline-flex size-10 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-brand-ink outline-none transition-colors hover:bg-brand-soft focus-visible:ring-2 focus-visible:ring-brand-violet md:hidden motion-reduce:transition-none"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg v-if="!isMenuOpen" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-5">
          <path d="M5 8h14M5 16h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true" class="size-5">
          <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </button>

      <nav
        v-show="isMenuOpen"
        id="mobile-navigation"
        class="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl border border-brand-border bg-brand-surface p-2 shadow-nav md:hidden"
        aria-label="Mobile navigation"
      >
        <a
          v-for="item in navigationItems"
          :key="item.href"
          :href="item.href"
          class="block rounded-xl px-4 py-3 text-sm font-medium text-brand-muted outline-none transition-colors hover:bg-brand-canvas hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-violet motion-reduce:transition-none"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <a
          href="#profile-preview"
          class="mt-1 flex items-center justify-center rounded-xl bg-brand-ink px-4 py-3 text-sm font-semibold text-white outline-none transition-colors hover:bg-brand-violet focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-2 motion-reduce:transition-none"
          @click="closeMenu"
        >
          See the experience
        </a>
      </nav>
    </div>
  </header>
</template>
