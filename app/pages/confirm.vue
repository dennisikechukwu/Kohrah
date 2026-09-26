<script setup lang="ts">
import { useSupabaseUser, useRouter, watch } from '#imports'
import { onMounted } from 'vue'

const user = useSupabaseUser()
const router = useRouter()

// 1. This page acts as the callback handler for Supabase Magic Links.
// When the user clicks the link in their email, they land here.
// Nuxt Supabase intercepts the URL fragment, sets the secure HTTP-only cookies,
// and populates the `useSupabaseUser()` composable.
// We watch for that user object to be populated, and then safely redirect them.

watch(
  user,
  () => {
    if (user.value) {
      // Redirect to the dashboard once the session is established securely via cookies
      return router.push('/dashboard')
    }
  },
  { immediate: true }
)

// Fallback safety timeout just in case the link is invalid or expired
onMounted(() => {
  setTimeout(() => {
    if (!user.value) {
      router.push('/login?error=invalid_link')
    }
  }, 5000)
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-brand-canvas px-4 py-12">
    <!-- Professional loading spinner while we exchange the token -->
    <svg class="size-8 animate-spin text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <p class="mt-6 text-sm font-bold text-brand-ink">Verifying your secure session...</p>
    <p class="mt-2 text-xs text-brand-muted">This will only take a moment.</p>
  </div>
</template>
