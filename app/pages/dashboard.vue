<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Logout01Icon, Edit02Icon, Link04Icon, CheckmarkBadge01Icon, UserGroupIcon } from '@hugeicons/core-free-icons'
import type { Database } from '~/types/database.types'

definePageMeta({
  layout: false // We will use a custom fullscreen layout for the dashboard
})

const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
const router = useRouter()
const { signOut } = useAuth()
const requestUrl = useRequestURL()

const profile = ref<Database['public']['Tables']['profiles']['Row'] | null>(null)
const isCopied = ref(false)

onMounted(async () => {
  if (user.value?.sub) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.value.sub)
      .maybeSingle()
      
    if (data) {
      profile.value = data
    } else {
      // If the user somehow bypassed onboarding or has no row, send them to onboarding
      router.push('/onboarding')
    }
  }
})

const isSignOutModalOpen = ref(false)

const handleSignOut = async () => {
  await signOut()
  router.push('/login')
}

const copyLink = async () => {
  if (!profile.value?.slug) return
  const url = `${requestUrl.protocol}//${requestUrl.host}/${profile.value.slug}`
  
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url)
    }
    isCopied.value = true
    setTimeout(() => isCopied.value = false, 2000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}
</script>

<template>
  <div class="min-h-screen bg-brand-canvas selection:bg-brand-primary-soft selection:text-brand-ink antialiased">
    <!-- Top Navigation -->
    <header class="sticky top-0 z-40 w-full border-b border-brand-border/60 bg-brand-surface/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <BrandKohrahWordmark 
          to="/dashboard" 
          class="h-6 !text-lg text-brand-ink outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm" 
        />
        
        <button 
          class="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-brand-muted transition-colors hover:bg-brand-canvas hover:text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          @click="isSignOutModalOpen = true"
        >
          <HugeiconsIcon :icon="Logout01Icon" class="size-4.5" />
          <span class="hidden sm:inline">Sign out</span>
        </button>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
      <!-- Loading State -->
      <div v-if="!profile" class="flex items-center justify-center py-20">
        <svg class="size-8 animate-spin text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>

      <!-- Content -->
      <div v-else class="animate-nav-enter space-y-10">
        
        <!-- Welcome Header -->
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            Welcome, {{ profile.full_name?.split(' ')[0] || 'there' }}
          </h1>
          <p class="mt-2 text-brand-muted">Manage your digital identity and connections.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          <!-- Your Card Section (2 columns wide) -->
          <div class="lg:col-span-2">
            <div class="relative overflow-hidden rounded-3xl border border-brand-border bg-white shadow-card">
              <!-- Background Ambient -->
              <div class="absolute -right-20 -top-20 size-64 rounded-full bg-brand-primary/5 blur-[80px]" />
              
              <div class="relative p-6 sm:p-8">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  
                  <div class="flex items-center gap-5">
                    <div class="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-brand-primary-soft/50 border border-brand-primary/10 text-2xl font-black text-brand-primary shadow-sm overflow-hidden">
                      <img v-if="profile.avatar_url" :src="profile.avatar_url" class="h-full w-full object-cover" alt="Avatar" >
                      <span v-else>{{ profile.full_name?.charAt(0).toUpperCase() }}</span>
                    </div>
                    <div>
                      <h2 class="text-xl font-bold tracking-tight text-brand-ink">{{ profile.full_name }}</h2>
                      <p class="mt-0.5 text-sm font-medium text-brand-primary">
                        {{ profile.job_title }} 
                        <span v-if="profile.company" class="text-brand-muted font-normal">at <span class="font-medium">{{ profile.company }}</span></span>
                      </p>
                    </div>
                  </div>

                  <NuxtLink 
                    to="/dashboard" 
                    class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-canvas px-4 py-2.5 text-sm font-bold text-brand-ink shadow-sm ring-1 ring-inset ring-brand-border transition-colors hover:bg-brand-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary shrink-0 opacity-50 cursor-not-allowed"
                    title="Edit profile coming soon"
                  >
                    <HugeiconsIcon :icon="Edit02Icon" class="size-4" />
                    Edit Profile
                  </NuxtLink>
                </div>

                <div class="mt-8 border-t border-brand-border/60 pt-6">
                  <p class="mb-3 text-sm font-bold text-brand-ink">Your custom link</p>
                  
                  <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div class="flex-1 flex items-center overflow-hidden rounded-xl border border-brand-border/80 bg-white transition-all focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-brand-primary shadow-[0_2px_10px_rgba(38,32,75,0.02)]">
                      <div class="flex h-full items-center justify-center border-r border-brand-border/60 bg-brand-canvas/30 px-3.5 py-2.5">
                        <HugeiconsIcon :icon="Link04Icon" class="size-4.5 text-brand-muted" />
                      </div>
                      <input 
                        readonly 
                        :value="`${requestUrl.host}/${profile.slug}`"
                        class="w-full bg-transparent px-3.5 py-2.5 text-sm font-semibold text-brand-ink focus:outline-none"
                      >
                    </div>
                    
                    <button 
                      class="relative flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-ink px-4 py-2.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none"
                      @click="copyLink"
                    >
                      <Transition
                        mode="out-in"
                        enter-active-class="transition duration-150 ease-out"
                        enter-from-class="scale-50 opacity-0"
                        enter-to-class="scale-100 opacity-100"
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="scale-100 opacity-100"
                        leave-to-class="scale-50 opacity-0"
                      >
                        <HugeiconsIcon v-if="isCopied" :icon="CheckmarkBadge01Icon" class="size-4.5 text-brand-success" />
                        <span v-else class="size-4.5" /> <!-- Spacer when no icon -->
                      </Transition>
                      {{ isCopied ? 'Copied!' : 'Copy Link' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Recent Connections / Stats Placeholder -->
          <div class="lg:col-span-1 space-y-6">
            <div class="rounded-3xl border border-brand-border bg-white p-6 shadow-card flex flex-col justify-center items-center text-center h-full min-h-[200px]">
               <div class="rounded-full bg-brand-primary/10 p-3 mb-4 text-brand-primary">
                  <HugeiconsIcon :icon="UserGroupIcon" class="size-6" />
               </div>
               <h3 class="text-sm font-bold text-brand-ink">Connections</h3>
               <p class="mt-2 text-xs text-brand-muted leading-relaxed">You haven't remembered anyone yet. Share your card to get started!</p>
            </div>
          </div>
          
        </div>
      </div>
    </main>

    <!-- Sign Out Confirmation Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isSignOutModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/40 px-4 backdrop-blur-sm" @click.self="isSignOutModalOpen = false">
          <div 
            class="relative w-full max-w-sm scale-100 overflow-hidden rounded-3xl bg-white p-6 text-left shadow-2xl transition-all"
          >
            <div class="flex items-center gap-4">
              <div class="flex size-12 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-canvas text-brand-ink shadow-sm">
                <HugeiconsIcon :icon="Logout01Icon" class="size-6" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-brand-ink">Sign out</h3>
                <p class="mt-1 text-sm text-brand-muted">Are you sure you want to sign out of your account?</p>
              </div>
            </div>
            <div class="mt-8 flex gap-3 sm:flex-row-reverse">
              <button 
                class="flex w-full items-center justify-center rounded-xl bg-brand-ink px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                @click="handleSignOut"
              >
                Sign out
              </button>
              <button 
                class="flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-brand-ink shadow-sm ring-1 ring-inset ring-brand-border transition hover:bg-brand-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                @click="isSignOutModalOpen = false"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
