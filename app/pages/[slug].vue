<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSupabaseClient } from '#imports'
import { HugeiconsIcon } from '@hugeicons/vue'
import { 
  Download04Icon, 
  Share01Icon, 
  CardExchange01Icon,
  CheckmarkBadge01Icon
} from '@hugeicons/core-free-icons'

import ProfileExchangeModal from '~/components/profile/ExchangeModal.vue'
import type { Database } from '~/types/database.types'

definePageMeta({
  layout: false
})

const route = useRoute()
const supabase = useSupabaseClient<Database>()
const slug = route.params.slug as string

// Fetch the profile dynamically based on the slug
const { data: profile } = await useAsyncData(`profile-${slug}`, async () => {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()
  return data
})

// If no profile matches the slug, throw a standard 404
if (!profile.value) {
  throw createError({ statusCode: 404, statusMessage: 'Profile not found', fatal: true })
}

// Dynamically generate SEO tags for rich previews in iMessage/Slack/Twitter
useSeoMeta({
  title: `${profile.value.full_name} | Kohrah`,
  description: profile.value.bio || `${profile.value.full_name}'s professional profile on Kohrah.`,
})

const isExchangeModalOpen = ref(false)
const isSaving = ref(false)
const isCopied = ref(false)

const shareProfile = async () => {
  if (!profile.value) return
  const shareData = {
    title: `${profile.value.full_name} on Kohrah`,
    text: `Check out ${profile.value.full_name}'s professional profile on Kohrah.`,
    url: window.location.href,
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        copyToClipboard()
      }
    }
  } else {
    copyToClipboard()
  }
}

const copyToClipboard = async () => {
  const url = window.location.href
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url)
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = url
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try { document.execCommand('copy') } catch (_err) { /* ignore fallback error */ }
      textArea.remove()
    }
    
    isCopied.value = true
    setTimeout(() => { isCopied.value = false }, 2000)
  } catch (_err) {
    /* ignore clipboard API error */
  }
}

const downloadVCard = () => {
  if (!profile.value) return
  isSaving.value = true
  
  setTimeout(() => {
    const p = profile.value!
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:${p.full_name?.split(' ').reverse().join(';') || 'Contact'};;;
FN:${p.full_name || ''}
ORG:${p.company || ''}
TITLE:${p.job_title || ''}
NOTE:${p.bio || ''}
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', `${(p.full_name || 'contact').replace(/\s+/g, '_')}.vcf`)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    
    isSaving.value = false
  }, 400)
}
</script>

<template>
  <div class="relative min-h-screen w-full sm:flex sm:items-center sm:justify-center sm:py-12 bg-brand-canvas sm:bg-transparent">
    
    <!-- Ambient desktop background glow to make the card pop -->
    <div class="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block" aria-hidden="true">
      <div class="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary-soft/50 blur-[120px]" />
    </div>

    <!-- Profile Card Wrapper -->
    <div v-if="profile" class="relative w-full bg-brand-surface sm:max-w-[26rem] sm:rounded-[2.5rem] sm:border sm:border-brand-border sm:shadow-2xl overflow-hidden min-h-screen sm:min-h-0 flex flex-col">
      <!-- Cover/Header -->
      <div class="relative h-32 bg-brand-primary-soft/50 sm:h-36 shrink-0">
        <!-- Quick Actions (Share) -->
        <button 
          class="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          @click="shareProfile">
          
          <Transition
            mode="out-in"
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="scale-50 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-50 opacity-0"
          >
            <HugeiconsIcon v-if="isCopied" :icon="CheckmarkBadge01Icon" class="size-5 text-brand-success" :stroke-width="2" />
            <HugeiconsIcon v-else :icon="Share01Icon" class="size-5 text-brand-ink" :stroke-width="1.8" />
          </Transition>
        </button>
      </div>

      <div class="relative px-6 pb-12 flex-1 flex flex-col">
        <!-- Avatar -->
        <div class="-mt-16 sm:-mt-20 shrink-0">
          <div class="inline-block rounded-[2rem] border-4 border-brand-surface bg-brand-primary-soft/30 p-1 shadow-sm">
            <div v-if="!profile.avatar_url" class="flex size-28 sm:size-32 items-center justify-center rounded-3xl bg-brand-primary-soft/50 border border-brand-primary/10 text-4xl font-black text-brand-primary">
              {{ profile.full_name?.charAt(0).toUpperCase() }}
            </div>
            <img v-else :src="profile.avatar_url" alt="Profile" class="size-28 rounded-3xl object-cover sm:size-32">
          </div>
        </div>

        <!-- Identity -->
        <div class="mt-5">
          <h1 class="text-2xl font-bold tracking-tight text-brand-ink">{{ profile.full_name }}</h1>
          <p class="mt-1 text-sm font-semibold text-brand-primary">
            {{ profile.job_title }} 
            <span v-if="profile.company" class="text-brand-muted">at <span class="font-medium">{{ profile.company }}</span></span>
          </p>
          <p class="mt-5 text-sm leading-6 text-brand-muted">{{ profile.bio }}</p>
        </div>

        <!-- Main Actions -->
        <div class="mt-8 grid grid-cols-1 gap-3">
          <button 
            :disabled="isSaving"
            class="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-ink px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 disabled:opacity-80 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            @click="downloadVCard">
            <svg v-if="isSaving" class="size-4.5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <HugeiconsIcon v-else :icon="Download04Icon" class="size-4.5" :stroke-width="1.8" />
            <span v-if="isSaving">Saving...</span>
            <span v-else>Save Contact</span>
          </button>
          <button 
            class="flex w-full items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-4 py-3.5 text-sm font-bold text-brand-ink shadow-sm transition hover:bg-brand-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            @click="isExchangeModalOpen = true">
            <HugeiconsIcon :icon="CardExchange01Icon" class="size-4.5 text-brand-primary" :stroke-width="1.8" />
            Exchange Details
          </button>
        </div>

        <!-- Spacer to push branding to bottom -->
        <div class="flex-1"/>
        
        <div class="mt-12 text-center pb-4 sm:pb-0">
          <BrandKohrahWordmark to="/" class="mx-auto text-brand-ink/30" />
          <p class="mt-2 text-[0.65rem] text-brand-muted/60">Create your own profile</p>
        </div>
      </div>
    </div>
    
    <ProfileExchangeModal
      v-if="profile"
      :is-open="isExchangeModalOpen"
      :profile-name="profile.full_name || 'this user'"
      @close="isExchangeModalOpen = false"
    />
  </div>
</template>
