<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Logout01Icon, Edit02Icon, Link04Icon, CheckmarkBadge01Icon, UserGroupIcon, EyeIcon, QrCodeIcon, ExternalLinkIcon } from '@hugeicons/core-free-icons'
import QrcodeVue from 'qrcode.vue'
import type { Database } from '~/types/database.types'
import ProfileEditModal from '~/components/profile/EditProfileModal.vue'

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
const isEditModalOpen = ref(false)

const connections = ref<Database['public']['Tables']['connections']['Row'][]>([])
const totalViews = ref(0)

const fetchProfile = async () => {
  if (!user.value?.sub) return
  
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.value.sub)
    .maybeSingle()
    
  if (data) {
    profile.value = data

    // Fetch connections
    const { data: conns } = await supabase
      .from('connections')
      .select('*')
      .eq('profile_id', data.id)
      .order('created_at', { ascending: false })
    connections.value = conns || []

    // Fetch views count
    const { count } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })
      .eq('profile_id', data.id)
    totalViews.value = count || 0
  } else {
    router.push('/onboarding')
  }
}

onMounted(() => {
  fetchProfile()
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

const profileUrl = computed(() => {
  if (!profile.value?.slug) return ''
  return `${requestUrl.protocol}//${requestUrl.host}/${profile.value.slug}`
})

const timeAgo = (dateStr: string) => {
  const now = new Date()
  const date = new Date(dateStr)
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  if (seconds < 60) return 'Just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
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
      <div v-else class="animate-nav-enter space-y-8">
        
        <!-- Welcome Header -->
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            Welcome, {{ profile.full_name?.split(' ')[0] || 'there' }}
          </h1>
          <p class="mt-2 text-brand-muted">Manage your digital identity and connections.</p>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <!-- Profile Views -->
          <div class="relative overflow-hidden rounded-2xl border border-brand-border bg-white p-5 shadow-card">
            <div class="absolute -right-4 -top-4 size-20 rounded-full bg-brand-primary/5 blur-[30px]" />
            <div class="relative">
              <div class="flex items-center gap-2 text-brand-muted">
                <HugeiconsIcon :icon="EyeIcon" class="size-4" :stroke-width="1.8" />
                <span class="text-xs font-bold uppercase tracking-wider">Views</span>
              </div>
              <p class="mt-2 text-3xl font-black text-brand-ink">{{ totalViews }}</p>
            </div>
          </div>

          <!-- Connections Count -->
          <div class="relative overflow-hidden rounded-2xl border border-brand-border bg-white p-5 shadow-card">
            <div class="absolute -right-4 -top-4 size-20 rounded-full bg-brand-primary/5 blur-[30px]" />
            <div class="relative">
              <div class="flex items-center gap-2 text-brand-muted">
                <HugeiconsIcon :icon="UserGroupIcon" class="size-4" :stroke-width="1.8" />
                <span class="text-xs font-bold uppercase tracking-wider">Leads</span>
              </div>
              <p class="mt-2 text-3xl font-black text-brand-ink">{{ connections.length }}</p>
            </div>
          </div>

          <!-- Profile Status -->
          <div class="col-span-2 sm:col-span-1 relative overflow-hidden rounded-2xl border border-brand-border bg-white p-5 shadow-card">
            <div class="absolute -right-4 -top-4 size-20 rounded-full bg-green-500/5 blur-[30px]" />
            <div class="relative">
              <div class="flex items-center gap-2 text-brand-muted">
                <div class="size-2 rounded-full bg-green-500 animate-pulse" />
                <span class="text-xs font-bold uppercase tracking-wider">Status</span>
              </div>
              <p class="mt-2 text-lg font-bold text-brand-ink">Live</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          <!-- Your Card Section (2 columns wide) -->
          <div class="lg:col-span-2 space-y-6">
            <div class="relative overflow-hidden rounded-3xl border border-brand-border bg-white shadow-card">
              <!-- Background Ambient -->
              <div class="absolute -right-20 -top-20 size-64 rounded-full bg-brand-primary/5 blur-[80px]" />
              <div class="absolute -left-32 -bottom-32 size-64 rounded-full bg-brand-primary/3 blur-[80px]" />
              
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

                  <div class="flex items-center gap-2 shrink-0">
                    <NuxtLink 
                      :to="`/${profile.slug}`"
                      target="_blank"
                      class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-canvas px-4 py-2.5 text-sm font-bold text-brand-ink shadow-sm ring-1 ring-inset ring-brand-border transition-colors hover:bg-brand-surface hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                    >
                      <HugeiconsIcon :icon="ExternalLinkIcon" class="size-4" />
                      Preview
                    </NuxtLink>
                    <button 
                      class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-ink px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      @click="isEditModalOpen = true"
                    >
                      <HugeiconsIcon :icon="Edit02Icon" class="size-4" />
                      Edit
                    </button>
                  </div>
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

            <!-- QR Code Card -->
            <div class="relative overflow-hidden rounded-3xl border border-brand-border bg-white p-6 sm:p-8 shadow-card">
              <div class="absolute -left-16 -bottom-16 size-48 rounded-full bg-brand-primary/5 blur-[60px]" />
              <div class="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div class="shrink-0 rounded-2xl bg-white p-3 shadow-sm border border-brand-border/40">
                  <ClientOnly>
                    <QrcodeVue :value="profileUrl" :size="100" level="M" render-as="svg" />
                  </ClientOnly>
                </div>
                <div class="text-center sm:text-left">
                  <div class="flex items-center gap-2 justify-center sm:justify-start">
                    <HugeiconsIcon :icon="QrCodeIcon" class="size-5 text-brand-primary" :stroke-width="1.8" />
                    <h3 class="text-lg font-bold text-brand-ink">Your QR Code</h3>
                  </div>
                  <p class="mt-2 text-sm text-brand-muted leading-relaxed max-w-sm">
                    Anyone can scan this to instantly open your profile. Screenshot it for your slides, print it on your badge, or save it to your phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Recent Connections -->
          <div class="lg:col-span-1">
            <div class="rounded-3xl border border-brand-border bg-white shadow-card overflow-hidden flex flex-col h-full min-h-[360px] lg:max-h-[calc(100vh-20rem)]">
              <div class="p-5 border-b border-brand-border/60 bg-brand-surface/50 shrink-0">
                <h3 class="text-sm font-bold text-brand-ink flex items-center justify-between">
                  <span class="flex items-center gap-2">
                    <HugeiconsIcon :icon="UserGroupIcon" class="size-4.5 text-brand-primary" />
                    Recent Connections
                  </span>
                  <span v-if="connections.length" class="text-xs font-bold text-brand-muted bg-brand-canvas rounded-lg px-2 py-1">{{ connections.length }}</span>
                </h3>
              </div>
              
              <div v-if="connections.length === 0" class="flex-1 flex flex-col justify-center items-center text-center p-6">
                 <div class="rounded-2xl bg-brand-primary/8 p-4 mb-4 text-brand-primary">
                    <HugeiconsIcon :icon="UserGroupIcon" class="size-7" />
                 </div>
                 <p class="text-sm font-bold text-brand-ink">No connections yet</p>
                 <p class="mt-1 text-xs text-brand-muted leading-relaxed font-medium max-w-[200px]">Share your profile link to start capturing leads.</p>
              </div>

              <div v-else class="flex-1 overflow-y-auto">
                <div v-for="(conn, i) in connections" :key="conn.id" class="group">
                  <div class="px-5 py-4 transition-colors hover:bg-brand-canvas/50">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-3 min-w-0">
                        <div class="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft/40 text-sm font-black text-brand-primary">
                          {{ conn.contact_name?.charAt(0).toUpperCase() }}
                        </div>
                        <div class="min-w-0">
                          <p class="text-sm font-bold text-brand-ink truncate">{{ conn.contact_name }}</p>
                          <a :href="`mailto:${conn.contact_email}`" class="text-xs font-semibold text-brand-primary hover:underline block truncate">{{ conn.contact_email }}</a>
                        </div>
                      </div>
                      <span class="text-[0.65rem] font-medium text-brand-muted whitespace-nowrap pt-1">{{ timeAgo(conn.created_at) }}</span>
                    </div>
                    <p v-if="conn.context" class="mt-2 ml-12 text-xs text-brand-muted line-clamp-2 leading-relaxed">{{ conn.context }}</p>
                  </div>
                  <div v-if="i < connections.length - 1" class="mx-5 border-b border-brand-border/30" />
                </div>
              </div>
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

    <!-- Edit Profile Modal -->
    <ProfileEditModal
      :is-open="isEditModalOpen"
      :profile="profile"
      @close="isEditModalOpen = false"
      @profile-updated="fetchProfile"
    />
  </div>
</template>
