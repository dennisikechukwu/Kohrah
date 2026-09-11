<script setup lang="ts">
const isMenuOpen = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menu-button')

const navigationItems = [
  { label: 'Why Kohrah', href: '#why-kohrah' },
  { label: 'Product flow', href: '#product-flow' },
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
  <header
    class="sticky inset-x-0 top-0 z-50 border-b border-brand-border bg-brand-canvas/95 backdrop-blur-md"
    @keydown.esc="closeMenuWithKeyboard"
  >
    <div
      class="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <BrandKohrahWordmark />

      <nav class="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        <a
          v-for="item in navigationItems"
          :key="item.href"
          :href="item.href"
          class="border-b border-transparent py-1 text-sm font-semibold text-brand-muted outline-none transition-colors hover:border-brand-ink hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-4 focus-visible:ring-offset-brand-canvas motion-reduce:transition-none"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center md:flex">
        <a
          href="#product-flow"
          class="group inline-flex items-center justify-center gap-2 border border-brand-ink bg-brand-ink px-4 py-2.5 text-sm font-semibold text-white outline-none transition-colors hover:bg-brand-violet focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-4 focus-visible:ring-offset-brand-canvas motion-reduce:transition-none"
        >
          View product
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none">
            <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>

      <button
        ref="menu-button"
        type="button"
        class="inline-flex size-10 items-center justify-center border border-brand-border bg-brand-surface text-brand-ink outline-none transition-colors hover:border-brand-ink focus-visible:ring-2 focus-visible:ring-brand-violet md:hidden motion-reduce:transition-none"
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
        class="absolute inset-x-0 top-full border-y border-brand-border bg-brand-surface p-4 shadow-card md:hidden"
        aria-label="Mobile navigation"
      >
        <a
          v-for="item in navigationItems"
          :key="item.href"
          :href="item.href"
          class="block border-b border-brand-border px-1 py-4 text-sm font-semibold text-brand-muted outline-none transition-colors hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-violet motion-reduce:transition-none"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <a
          href="#product-flow"
          class="mt-4 flex items-center justify-center bg-brand-ink px-4 py-3 text-sm font-semibold text-white outline-none transition-colors hover:bg-brand-violet focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-2 motion-reduce:transition-none"
          @click="closeMenu"
        >
          View product
        </a>
      </nav>
    </div>
  </header>
</template>
