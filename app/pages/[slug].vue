<script setup lang="ts">
import { ref } from 'vue'
import { HugeiconsIcon } from '@hugeicons/vue'
import { 
  Download04Icon, 
  Share01Icon, 
  Linkedin02Icon, 
  NewTwitterIcon,
  Globe02Icon,
  CardExchange01Icon,
  CheckmarkBadge01Icon
} from '@hugeicons/core-free-icons'

import ProfileExchangeModal from '~/components/profile/ExchangeModal.vue'

// Simulate fetching data for the slug in the future

// Dummy data for the prototype
const profile = {
  name: "Maya Chen",
  role: "Product Strategist",
  company: "Independent",
  bio: "Helping founders turn chaotic visions into shipped software. Based in SF.",
  avatar: "/images/maya-chen-profile.jpg",
  links: [
    { title: "LinkedIn", url: "#", icon: Linkedin02Icon },
    { title: "Twitter", url: "#", icon: NewTwitterIcon },
    { title: "Personal Site", url: "#", icon: Globe02Icon },
  ]
}

const isExchangeModalOpen = ref(false)
const isSaving = ref(false)
const isCopied = ref(false)

const shareProfile = async () => {
  const shareData = {
    title: `${profile.name} on Kohrah`,
    text: `Check out ${profile.name}'s professional profile on Kohrah.`,
    url: window.location.href,
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch (err) {
      // User cancelled or share failed, fallback to copy if needed
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
      // Legacy fallback for insecure contexts (like testing on local network HTTP)
      const textArea = document.createElement('textarea')
      textArea.value = url
      // Move textarea out of viewport
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      try {
        document.execCommand('copy')
      } catch (err) {
        console.error('Fallback copy failed', err)
      }
      
      textArea.remove()
    }
    
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Copy failed', err)
  }
}

const downloadVCard = () => {
  isSaving.value = true
  
  // Simulate generation delay for premium tactile feedback
  setTimeout(() => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:${profile.name.split(' ').reverse().join(';')};;;
FN:${profile.name}
ORG:${profile.company}
TITLE:${profile.role}
NOTE:${profile.bio}
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', `${profile.name.replace(/\s+/g, '_')}.vcf`)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    
    isSaving.value = false
  }, 400)
}
</script>

<template>
  <div class="relative min-h-screen w-full sm:flex sm:items-center sm:justify-center sm:py-12">
    <!-- Main container: full screen on mobile, centered floating card on desktop -->
    
    <!-- Ambient desktop background glow to make the card pop -->
    <div class="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block" aria-hidden="true">
      <div class="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary-soft/50 blur-[120px]" />
    </div>

    <!-- Profile Card Wrapper -->
    <div class="relative w-full bg-brand-surface sm:max-w-[26rem] sm:rounded-[2.5rem] sm:border sm:border-brand-border sm:shadow-2xl">
      <!-- Cover/Header -->
      <div class="relative h-32 bg-brand-primary-soft/50 sm:h-36 sm:rounded-t-[2.5rem]">
        <!-- Quick Actions (Share) -->
        <button 
          class="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
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

    <div class="relative px-6 pb-12">
      <!-- Avatar -->
      <div class="-mt-16 sm:-mt-20">
        <div class="inline-block rounded-[2rem] border-4 border-brand-surface bg-brand-canvas p-1 shadow-sm">
          <img :src="profile.avatar" alt="Profile" class="size-28 rounded-3xl object-cover sm:size-32">
        </div>
      </div>

      <!-- Identity -->
      <div class="mt-5">
        <h1 class="text-2xl font-bold tracking-tight text-brand-ink">{{ profile.name }}</h1>
        <p class="mt-1 text-sm font-semibold text-brand-primary">{{ profile.role }} <span class="text-brand-muted">at</span> {{ profile.company }}</p>
        <p class="mt-5 text-sm leading-6 text-brand-muted">{{ profile.bio }}</p>
      </div>

      <!-- Main Actions -->
      <div class="mt-8 grid grid-cols-1 gap-3">
        <button 
          :disabled="isSaving"
          class="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-ink px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 disabled:opacity-80 disabled:hover:translate-y-0"
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
          class="flex w-full items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-4 py-3.5 text-sm font-bold text-brand-ink shadow-sm transition hover:bg-brand-canvas"
          @click="isExchangeModalOpen = true">
          <HugeiconsIcon :icon="CardExchange01Icon" class="size-4.5 text-brand-primary" :stroke-width="1.8" />
          Exchange Details
        </button>
      </div>

      <!-- Social Links -->
      <div class="mt-10">
        <h2 class="text-xs font-bold uppercase tracking-wider text-brand-muted">Connect</h2>
        <div class="mt-4 grid grid-cols-1 gap-3">
          <a v-for="link in profile.links" :key="link.title" :href="link.url" class="flex items-center gap-3.5 rounded-2xl border border-brand-border bg-brand-canvas p-3 transition hover:border-brand-primary/30 hover:bg-brand-primary-soft/20">
            <div class="grid size-12 place-items-center rounded-xl bg-white shadow-sm border border-brand-border/50">
              <HugeiconsIcon :icon="link.icon" class="size-5 text-brand-primary" :stroke-width="1.8" />
            </div>
            <span class="text-sm font-semibold text-brand-ink">{{ link.title }}</span>
          </a>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <BrandKohrahWordmark class="mx-auto text-brand-ink/30" />
        <p class="mt-2 text-[0.65rem] text-brand-muted/60">Create your own profile</p>
      </div>
      </div>
    </div>
    
    <ProfileExchangeModal
      :is-open="isExchangeModalOpen"
      :profile-name="profile.name"
      @close="isExchangeModalOpen = false"
    />
  </div>
</template>
