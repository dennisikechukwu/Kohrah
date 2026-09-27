<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Cancel01Icon, Tick01Icon } from '@hugeicons/core-free-icons'
import type { Database } from '~/types/database.types'
import AvatarUpload from './AvatarUpload.vue'

const props = defineProps<{
  isOpen: boolean
  profile: Database['public']['Tables']['profiles']['Row'] | null
}>()

const emit = defineEmits(['close', 'profile-updated'])

const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()

const form = ref({
  full_name: '',
  job_title: '',
  company: '',
  bio: '',
  avatar_url: null as string | null,
  website: '',
  linkedin_url: '',
  twitter_url: '',
  instagram_url: ''
})

const isSaving = ref(false)
const errorMessage = ref('')
const isUploadingAvatar = ref(false)

// Populate the form when the modal opens
watch(() => props.isOpen, (newVal) => {
  if (newVal && props.profile) {
    form.value = {
      full_name: props.profile.full_name || '',
      job_title: props.profile.job_title || '',
      company: props.profile.company || '',
      bio: props.profile.bio || '',
      avatar_url: props.profile.avatar_url || null,
      website: props.profile.website || '',
      linkedin_url: props.profile.linkedin_url || '',
      twitter_url: props.profile.twitter_url || '',
      instagram_url: props.profile.instagram_url || ''
    }
  }
})

const handleSave = async () => {
  if (!user.value || !props.profile) return
  
  isSaving.value = true
  errorMessage.value = ''
  
  try {
    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: form.value.full_name.trim(),
        job_title: form.value.job_title.trim(),
        company: form.value.company.trim() || null,
        bio: form.value.bio.trim() || null,
        avatar_url: form.value.avatar_url,
        website: form.value.website.trim() || null,
        linkedin_url: form.value.linkedin_url.trim() || null,
        twitter_url: form.value.twitter_url.trim() || null,
        instagram_url: form.value.instagram_url.trim() || null,
        updated_at: new Date().toISOString()
      })
      .eq('id', user.value.sub)
      
    if (error) throw error
    
    emit('profile-updated')
    emit('close')
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'Failed to update profile.'
  } finally {
    isSaving.value = false
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
            <h3 class="text-2xl font-bold text-brand-ink tracking-tight">Edit Profile</h3>
            <button 
              class="rounded-full p-2 text-brand-muted transition hover:bg-brand-canvas hover:text-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              @click="emit('close')"
            >
              <HugeiconsIcon :icon="Cancel01Icon" class="size-5" />
            </button>
          </div>

          <!-- Scrollable Body -->
          <div class="flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-10 sm:py-8">
            <form id="edit-profile-form" class="space-y-6" @submit.prevent="handleSave">
              <!-- Avatar Section -->
              <div class="flex items-center gap-6 p-4 rounded-3xl bg-brand-canvas/50 border border-brand-border/50">
                <AvatarUpload 
                  v-model="form.avatar_url" 
                  :full-name="form.full_name"
                  @upload-started="isUploadingAvatar = true"
                  @upload-finished="isUploadingAvatar = false"
                />
                <div>
                  <h4 class="text-sm font-bold text-brand-ink">Profile Picture</h4>
                  <p class="text-[0.8rem] leading-relaxed text-brand-muted mt-1 max-w-[200px]">
                    Click the avatar to upload a new image. JPG or PNG.
                  </p>
                </div>
              </div>

              <!-- Error -->
              <div v-if="errorMessage" class="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                {{ errorMessage }}
              </div>

              <!-- Fields -->
              <div class="space-y-5">
                <div class="space-y-1.5">
                  <label for="fullName" class="block text-sm font-semibold text-brand-ink">Full name</label>
                  <input id="fullName" v-model="form.full_name" type="text" required class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40" placeholder="Maya Chen">
                </div>

                <div class="space-y-1.5">
                  <label for="jobTitle" class="block text-sm font-semibold text-brand-ink">Headline or Job Title</label>
                  <input id="jobTitle" v-model="form.job_title" type="text" required class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40" placeholder="Product Strategist">
                </div>
                
                <div class="space-y-1.5">
                  <label for="company" class="block text-sm font-semibold text-brand-ink flex justify-between">
                    <span>Company</span>
                    <span class="text-brand-muted font-medium">Optional</span>
                  </label>
                  <input id="company" v-model="form.company" type="text" class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40" placeholder="Independent">
                </div>

                <div class="space-y-1.5">
                  <label for="bio" class="block text-sm font-semibold text-brand-ink flex justify-between">
                    <span>Bio</span>
                    <span class="text-brand-muted font-medium">Optional</span>
                  </label>
                  <textarea id="bio" v-model="form.bio" rows="3" class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-medium text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all resize-none placeholder:text-brand-muted/40" placeholder="A short description of what you do..."/>
                </div>

                <!-- Social Links -->
                <div class="pt-4 border-t border-brand-border space-y-5">
                  <h4 class="text-sm font-bold text-brand-ink">Social Links</h4>
                  
                  <div class="space-y-1.5">
                    <label for="website" class="block text-sm font-semibold text-brand-ink flex justify-between">
                      <span>Website</span>
                      <span class="text-brand-muted font-medium">Optional</span>
                    </label>
                    <input id="website" v-model="form.website" type="url" class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40" placeholder="https://yourwebsite.com">
                  </div>

                  <div class="space-y-1.5">
                    <label for="linkedin" class="block text-sm font-semibold text-brand-ink flex justify-between">
                      <span>LinkedIn</span>
                      <span class="text-brand-muted font-medium">Optional</span>
                    </label>
                    <input id="linkedin" v-model="form.linkedin_url" type="url" class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40" placeholder="https://linkedin.com/in/username">
                  </div>
                  
                  <div class="space-y-1.5">
                    <label for="twitter" class="block text-sm font-semibold text-brand-ink flex justify-between">
                      <span>X (Twitter)</span>
                      <span class="text-brand-muted font-medium">Optional</span>
                    </label>
                    <input id="twitter" v-model="form.twitter_url" type="url" class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40" placeholder="https://x.com/username">
                  </div>

                  <div class="space-y-1.5">
                    <label for="instagram" class="block text-sm font-semibold text-brand-ink flex justify-between">
                      <span>Instagram</span>
                      <span class="text-brand-muted font-medium">Optional</span>
                    </label>
                    <input id="instagram" v-model="form.instagram_url" type="url" class="block w-full rounded-xl border border-brand-border bg-brand-surface py-3.5 px-4 text-sm font-semibold text-brand-ink focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all placeholder:text-brand-muted/40" placeholder="https://instagram.com/username">
                  </div>
                </div>
              </div>

            </form>
          </div>
          
          <!-- Pinned Footer -->
          <div class="px-6 py-4 sm:px-10 sm:py-5 border-t border-brand-border/60 shrink-0 bg-brand-surface/50">
            <div class="flex gap-3">
              <button 
                type="button" 
                class="flex-1 rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-brand-ink transition hover:bg-brand-border/50 border border-brand-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink shadow-sm"
                @click="emit('close')"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                form="edit-profile-form"
                :disabled="isSaving || isUploadingAvatar"
                class="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3.5 text-sm font-bold text-white transition hover:bg-brand-primary-dark disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-dark shadow-sm"
              >
                <svg v-if="isSaving" class="size-4.5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <HugeiconsIcon v-else :icon="Tick01Icon" class="size-4.5" :stroke-width="2.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

