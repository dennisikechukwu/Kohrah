<script setup lang="ts">
const isMenuOpen = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menu-button')

const navigationItems = [
  { label: 'Why Kohrah', href: '#why-kohrah' },
  { label: 'How it works', href: '#product-preview' },
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
    class="sticky inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    @keydown.esc="closeMenuWithKeyboard"
  >
    <div
      class="relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-brand-border/90 bg-brand-surface/90 px-4 shadow-nav backdrop-blur-xl sm:px-5"
    >
      <BrandKohrahWordmark />

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
        <a
          v-for="item in navigationItems"
          :key="item.href"
          :href="item.href"
          class="rounded-lg px-4 py-2 text-sm font-semibold text-brand-muted outline-none transition-colors hover:bg-brand-canvas hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-primary motion-reduce:transition-none"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center md:flex">
        <a
          href="#product-preview"
          class="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-ink px-4 py-2.5 text-sm font-semibold text-white outline-none transition hover:-translate-y-0.5 hover:bg-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
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
        class="inline-flex size-10 items-center justify-center rounded-xl border border-brand-border bg-brand-surface text-brand-ink outline-none transition-colors hover:bg-brand-canvas focus-visible:ring-2 focus-visible:ring-brand-primary md:hidden motion-reduce:transition-none"
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

      <Transition
        enter-active-class="transition duration-150 ease-out motion-reduce:transition-none"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-100 ease-in motion-reduce:transition-none"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <nav
          v-if="isMenuOpen"
          id="mobile-navigation"
          class="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl border border-brand-border bg-brand-surface p-2 shadow-nav md:hidden"
          aria-label="Mobile navigation"
        >
          <a
            v-for="item in navigationItems"
            :key="item.href"
            :href="item.href"
            class="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-muted outline-none transition-colors hover:bg-brand-canvas hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-primary motion-reduce:transition-none"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
          <a
            href="#product-preview"
            class="mt-1 flex items-center justify-center rounded-xl bg-brand-ink px-4 py-3 text-sm font-semibold text-white outline-none transition-colors hover:bg-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 motion-reduce:transition-none"
            @click="closeMenu"
          >
            View product
          </a>
        </nav>
      </Transition>
    </div>
  </header>
</template>
