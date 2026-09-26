<script setup lang="ts">
import { ref } from 'vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Mail01Icon, ArrowRight01Icon, CheckmarkBadge01Icon } from '@hugeicons/core-free-icons'

// The useAuth composable automatically handles Magic Link sending.
// Supabase handles both Sign Up and Log In natively through this one function.
const { sendMagicLink } = useAuth()

const email = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  if (!email.value) return

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    await sendMagicLink(email.value)
    isSuccess.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Header -->
    <div class="mb-8 text-center sm:text-left">
      <h2 class="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
        Get started
      </h2>
      <p class="mt-2 text-sm text-brand-muted">
        Sign in or create a new account using your email.
      </p>
    </div>

    <!-- Success State -->
    <div v-if="isSuccess" class="rounded-2xl border border-brand-primary/10 bg-brand-primary-soft/30 p-6 text-center animate-nav-enter">
      <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary sm:mx-0">
        <HugeiconsIcon :icon="CheckmarkBadge01Icon" class="size-6" :stroke-width="2" />
      </div>
      <h3 class="mt-4 text-sm font-bold text-brand-ink sm:text-left">Check your email</h3>
      <p class="mt-2 text-xs text-brand-muted sm:text-left">
        We sent a secure magic link to <span class="font-medium text-brand-ink">{{ email }}</span>. Click it to continue.
      </p>
    </div>

    <!-- Login Form -->
    <form v-else class="space-y-5 animate-nav-enter" @submit.prevent="handleLogin">
      <!-- Error Alert -->
      <div v-if="errorMessage" class="rounded-xl border border-brand-coral/20 bg-brand-coral/5 p-4">
        <p class="text-xs font-medium text-brand-coral">{{ errorMessage }}</p>
      </div>

      <div>
        <label for="email" class="sr-only">Email address</label>
        <div class="relative group">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 transition-colors group-focus-within:text-brand-primary">
            <HugeiconsIcon :icon="Mail01Icon" class="size-5 text-brand-muted/50 transition-colors group-focus-within:text-brand-primary" :stroke-width="1.8" />
          </div>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="block w-full rounded-xl border border-brand-border bg-white py-3.5 pl-11 pr-4 text-sm font-semibold text-brand-ink shadow-[0_2px_10px_rgba(38,32,75,0.02)] placeholder:font-medium placeholder:text-brand-muted/40 focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all"
            placeholder="you@example.com"
          >
        </div>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand-ink px-4 py-3.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:opacity-70 disabled:hover:translate-y-0"
      >
        <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div class="relative h-full w-8 bg-white/20" />
        </div>
        
        <svg v-if="isSubmitting" class="relative z-10 size-4.5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span v-if="isSubmitting" class="relative z-10">Sending Link...</span>
        
        <template v-else>
          <span class="relative z-10">Continue with Email</span>
          <HugeiconsIcon :icon="ArrowRight01Icon" class="relative z-10 size-4.5 transition-transform group-hover:translate-x-0.5" :stroke-width="1.8" />
        </template>
      </button>
    </form>
    
    <p class="mt-8 text-center text-[11px] font-medium text-brand-muted/60 sm:text-left">
      By continuing, you agree to Kohrah's Terms of Service and Privacy Policy.
    </p>
  </div>
</template>
