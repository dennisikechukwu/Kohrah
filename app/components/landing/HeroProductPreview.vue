<template>
  <figure
    id="product-preview"
    class="relative mx-auto w-full max-w-[52rem] scroll-mt-32 pb-2 md:min-h-[40rem] md:pb-0"
    aria-labelledby="product-preview-caption"
  >
    <div aria-hidden="true">
      <div class="absolute inset-x-8 top-16 h-[27rem] rounded-full bg-brand-primary-soft/80 blur-3xl sm:inset-x-14" />
      <div class="absolute right-4 top-24 size-40 rounded-full bg-brand-coral/10 blur-3xl" />

      <div class="relative z-20 mx-auto w-full max-w-[26rem]">
        <LandingHeroProfileCard />
      </div>

      <div class="absolute left-0 top-36 z-10 hidden w-[17rem] -rotate-2 md:block">
        <LandingHeroShareCard />
      </div>

      <div class="relative z-30 -mt-7 ml-auto w-[94%] max-w-80 md:absolute md:right-0 md:bottom-0 md:mt-0">
        <LandingHeroConnectionContext />
      </div>
    </div>

    <figcaption id="product-preview-caption" class="sr-only">
      An illustrative Kohrah public profile that can be opened by QR code, saved without an app, and remembered later with meeting context and a follow-up.
    </figcaption>
  </figure>
</template>
