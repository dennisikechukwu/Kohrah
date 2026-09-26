<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowRight01Icon, Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'

const isMenuOpen = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menu-button')

const navigationItems = [
  { label: 'Why Kohrah', href: '#why-kohrah' },
  { label: 'How it works', href: '#how-it-works' },
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
    class="sticky inset-x-0 top-0 z-50 animate-nav-enter px-3 pt-3 sm:px-5 sm:pt-4 motion-reduce:animate-none"
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

      <div class="hidden items-center gap-4 md:flex">
        <a
          href="/login"
          class="text-sm font-semibold text-brand-ink outline-none transition-colors hover:text-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          Sign in
        </a>
        <a
          href="/maya"
          class="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-ink px-4 py-2.5 text-sm font-semibold text-white outline-none transition hover:-translate-y-0.5 hover:bg-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
        >
          View product
          <HugeiconsIcon :icon="ArrowRight01Icon" class="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
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
        <HugeiconsIcon v-if="!isMenuOpen" :icon="Menu01Icon" class="size-5" />
        <HugeiconsIcon v-else :icon="Cancel01Icon" class="size-5" />
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
            href="/login"
            class="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-muted outline-none transition-colors hover:bg-brand-canvas hover:text-brand-ink focus-visible:ring-2 focus-visible:ring-brand-primary motion-reduce:transition-none"
            @click="closeMenu"
          >
            Sign in
          </a>
          <a
            href="/maya"
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
