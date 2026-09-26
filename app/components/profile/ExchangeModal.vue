<script setup lang="ts">
import { ref } from 'vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Cancel01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'

defineProps<{
  isOpen: boolean
  profileName: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit', data: Record<string, string>): void
}>()

const form = ref({
  name: '',
  email: '',
  context: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  // Simulate network request
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    setTimeout(() => {
      emit('close')
      setTimeout(() => {
        isSuccess.value = false
        form.value = { name: '', email: '', context: '' }
      }, 300) // Reset after animation
    }, 2500)
  }, 1000)
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm" @click="emit('close')" />

        <!-- Modal Panel -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-full sm:translate-y-4 sm:scale-95 sm:opacity-0"
          enter-to-class="translate-y-0 sm:translate-y-0 sm:scale-100 sm:opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="translate-y-0 sm:translate-y-0 sm:scale-100 sm:opacity-100"
          leave-to-class="translate-y-full sm:translate-y-4 sm:scale-95 sm:opacity-0"
        >
          <div
            v-if="isOpen"
            class="relative w-full max-w-lg rounded-t-[2rem] bg-brand-surface p-6 shadow-2xl ring-1 ring-brand-border sm:rounded-3xl sm:p-8"
          >
            <!-- Close button -->
            <button
              class="absolute right-4 top-4 grid size-10 place-items-center rounded-full text-brand-muted transition hover:bg-brand-canvas hover:text-brand-ink"
              @click="emit('close')"
            >
              <HugeiconsIcon :icon="Cancel01Icon" class="size-5" :stroke-width="1.8" />
            </button>

            <!-- Success State -->
            <div v-if="isSuccess" class="py-12 text-center">
              <div class="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-primary-soft/50 text-brand-primary border border-brand-primary/20">
                <HugeiconsIcon :icon="ArrowRight01Icon" class="size-8" :stroke-width="1.8" />
              </div>
              <h3 class="mt-4 text-xl font-bold text-brand-ink">Details Sent!</h3>
              <p class="mt-2 text-sm text-brand-muted">
                {{ profileName }} has received your contact information.
              </p>
            </div>

            <!-- Form State -->
            <div v-else>
              <h2 class="text-xl font-bold tracking-tight text-brand-ink">Share your details</h2>
              <p class="mt-2 text-sm text-brand-muted">
                Send your contact info directly to {{ profileName }} so they can stay in touch.
              </p>

              <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
                <div>
                  <label for="name" class="block text-[0.65rem] font-bold uppercase tracking-wider text-brand-muted">Full Name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="mt-1 block w-full rounded-xl border border-brand-border bg-brand-canvas px-4 py-3 text-sm font-semibold text-brand-ink placeholder-brand-muted/40 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    placeholder="Jane Doe"
                  >
                </div>
                <div>
                  <label for="email" class="block text-[0.65rem] font-bold uppercase tracking-wider text-brand-muted">Email Address</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="mt-1 block w-full rounded-xl border border-brand-border bg-brand-canvas px-4 py-3 text-sm font-semibold text-brand-ink placeholder-brand-muted/40 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    placeholder="jane@example.com"
                  >
                </div>
                <div>
                  <label for="context" class="block text-[0.65rem] font-bold uppercase tracking-wider text-brand-muted">Where did you meet? (Optional)</label>
                  <textarea
                    id="context"
                    v-model="form.context"
                    rows="2"
                    class="mt-1 block w-full resize-none rounded-xl border border-brand-border bg-brand-canvas px-4 py-3 text-sm font-semibold text-brand-ink placeholder-brand-muted/40 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    placeholder="e.g. Met at the design conference in SF..."
                  />
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-primary/90 disabled:opacity-70"
                >
                  <svg v-if="isSubmitting" class="size-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Details</span>
                </button>
              </form>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
