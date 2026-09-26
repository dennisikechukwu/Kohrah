<template>
  <footer class="border-t border-brand-border bg-brand-surface py-12">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <BrandKohrahWordmark class="text-brand-ink grayscale transition-all hover:grayscale-0" />
        
        <nav class="flex gap-6 text-sm font-semibold text-brand-muted">
          <a href="#" class="transition-colors hover:text-brand-ink">Privacy Policy</a>
          <a href="#" class="transition-colors hover:text-brand-ink">Terms of Service</a>
          <a href="#" class="transition-colors hover:text-brand-ink">Twitter</a>
        </nav>
      </div>
      
      <div class="mt-8 border-t border-brand-border pt-8 text-center sm:text-left">
        <p class="text-xs text-brand-muted">
          &copy; {{ new Date().getFullYear() }} Kohrah. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
