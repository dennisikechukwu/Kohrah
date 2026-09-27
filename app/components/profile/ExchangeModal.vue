<script setup lang="ts">
import { ref } from 'vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Cancel01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'

import { useSupabaseClient } from '#imports'
import type { Database } from '~/types/database.types'

const supabase = useSupabaseClient<Database>()

const props = defineProps<{
  isOpen: boolean
  profileName: string
  profileId: string
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

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    const { error } = await supabase.from('connections').insert({
      profile_id: props.profileId,
      contact_name: form.value.name,
      contact_email: form.value.email,
      context: form.value.context || null
    })

    if (error) throw error
    
    // Trigger the email notifications in the background
    await $fetch('/api/send-connection-emails', {
      method: 'POST',
      body: {
        profileId: props.profileId,
        ownerName: props.profileName,
        contactName: form.value.name,
        contactEmail: form.value.email,
        context: form.value.context || null
      }
    }).catch(e => console.error('Failed to send notification emails:', e)) // non-blocking error

    isSuccess.value = true
    setTimeout(() => {
      emit('close')
      setTimeout(() => {
        isSuccess.value = false
        form.value = { name: '', email: '', context: '' }
      }, 300) // Reset after animation
    }, 2500)
  } catch (err) {
    console.error('Error saving connection:', err)
    alert('Failed to send details. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm" @click="emit('close')" />

        <!-- Modal Panel -->
        <div class="relative z-10 flex flex-col w-full max-w-lg bg-white rounded-[2.5rem] text-left shadow-2xl border border-brand-border/50 max-h-[90vh] sm:max-h-[85vh] overflow-hidden">
          
          <!-- Pinned Header -->
          <div class="flex items-center justify-between px-6 pt-6 pb-4 sm:px-10 sm:pt-8 sm:pb-5 border-b border-brand-border/40 shrink-0 bg-white">
            <h3 class="text-2xl font-bold text-brand-ink tracking-tight">Share details</h3>
            <button 
              class="rounded-full p-2 text-brand-muted transition hover:bg-brand-canvas hover:text-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              @click="emit('close')"
            >
              <HugeiconsIcon :icon="Cancel01Icon" class="size-5" />
            </button>
          </div>

          <!-- Scrollable Body -->
          <div class="flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-10 sm:py-8">
            
            <!-- Success State -->
            <div v-if="isSuccess" class="py-8 text-center animate-in fade-in slide-in-from-bottom-4">
              <div class="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand-primary-soft/50 text-brand-primary border border-brand-primary/20">
                <HugeiconsIcon :icon="ArrowRight01Icon" class="size-8" :stroke-width="1.8" />
              </div>
              <h3 class="mt-6 text-xl font-bold text-brand-ink tracking-tight">Details Sent!</h3>
              <p class="mt-2 text-sm text-brand-muted leading-relaxed">
                {{ profileName }} has received your contact information.
              </p>
            </div>

            <!-- Form State -->
            <div v-else>
              <p class="text-sm text-brand-muted leading-relaxed mb-6">
                Send your contact info directly to {{ profileName }} so they can stay in touch.
              </p>

              <form id="exchange-form" class="space-y-5" @submit.prevent="handleSubmit">
                <div class="space-y-1.5">
                  <label for="name" class="block text-sm font-semibold text-brand-ink">Full name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40 shadow-[0_2px_10px_rgba(38,32,75,0.02)]"
                    placeholder="Jane Doe"
                  >
                </div>
                <div class="space-y-1.5">
                  <label for="email" class="block text-sm font-semibold text-brand-ink">Email Address</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40 shadow-[0_2px_10px_rgba(38,32,75,0.02)]"
                    placeholder="jane@example.com"
                  >
                </div>
                <div class="space-y-1.5">
                  <label for="context" class="block text-sm font-semibold text-brand-ink flex justify-between">
                    <span>Where did you meet?</span>
                    <span class="text-brand-muted font-medium">Optional</span>
                  </label>
                  <textarea
                    id="context"
                    v-model="form.context"
                    rows="3"
                    class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-medium text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all resize-none placeholder:text-brand-muted/40 shadow-[0_2px_10px_rgba(38,32,75,0.02)]"
                    placeholder="e.g. Met at the design conference in SF..."
                  />
                </div>
              </form>
            </div>
          </div>
          
          <!-- Pinned Footer -->
          <div class="px-6 py-4 sm:px-10 sm:py-5 border-t border-brand-border/60 shrink-0 bg-brand-surface/50">
            <div v-if="!isSuccess" class="flex gap-3">
              <button 
                type="button" 
                class="flex-1 rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-brand-ink transition hover:bg-brand-border/50 border border-brand-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink shadow-sm"
                @click="emit('close')"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="exchange-form"
                :disabled="isSubmitting"
                class="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3.5 text-sm font-bold text-white transition hover:bg-brand-primary-dark disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-dark shadow-sm"
              >
                <svg v-if="isSubmitting" class="size-4.5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Details</span>
              </button>
            </div>
            <div v-else class="flex justify-center">
              <button 
                type="button" 
                class="w-full rounded-xl bg-brand-ink px-4 py-3.5 text-sm font-bold text-white transition hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary shadow-sm"
                @click="emit('close')"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
