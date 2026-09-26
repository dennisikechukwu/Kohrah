<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { HugeiconsIcon } from '@hugeicons/vue'
import {
  ArrowRight02Icon,
  UserIcon,
  Briefcase02Icon,
  Building03Icon,
  Link04Icon
} from '@hugeicons/core-free-icons'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()
const requestUrl = useRequestURL()

const form = ref({
  fullName: '',
  jobTitle: '',
  company: '',
  username: ''
})

const isSubmitting = ref(false)
const errorMessage = ref('')

// Basic username auto-generation from full name
const updateUsername = () => {
  if (!form.value.fullName) return
  // Only auto-fill if they haven't manually typed a custom username
  if (form.value.username === '' || form.value.username === generateSlug(form.value.fullName.slice(0, -1))) {
    form.value.username = generateSlug(form.value.fullName)
  }
}

const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
}

const isFormValid = computed(() => {
  return form.value.fullName.trim() && form.value.jobTitle.trim() && form.value.username.trim()
})

const submitProfile = async () => {
  if (!user.value || !isFormValid.value) return
  
  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    // 1. Check if username is taken
    const { data: existingUser } = await supabase
      .from('profiles')
      .select('id')
      .eq('slug', form.value.username.trim())
      .maybeSingle()
      
    if (existingUser && existingUser.id !== user.value.sub) {
      throw new Error('This username is already taken. Please choose another.')
    }

    // 2. Upsert profile
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.value.sub,
        full_name: form.value.fullName.trim(),
        job_title: form.value.jobTitle.trim(),
        company: form.value.company.trim() || null,
        slug: form.value.username.trim(),
        is_onboarded: true,
        updated_at: new Date().toISOString()
      })
      
    if (error) throw error
    
    // Redirect to dashboard
    router.push('/dashboard')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Something went wrong saving your profile.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="relative w-full max-w-md">
    <!-- Ambient backglow -->
    <div class="absolute -inset-1 bg-gradient-to-tr from-brand-primary/20 via-brand-primary-soft to-brand-primary/10 rounded-2xl blur-xl opacity-70 animate-pulse" style="animation-duration: 4s;" />
    
    <div class="relative bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl shadow-brand-ink/5 rounded-3xl p-8 sm:p-10 overflow-hidden">
      <!-- Decorative glass highlight -->
      <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
      
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-brand-ink tracking-tight">Create your card</h1>
        <p class="text-brand-muted mt-2 text-sm leading-relaxed">
          Set up your professional identity. You can always change this later.
        </p>
      </div>

      <form class="space-y-5" @submit.prevent="submitProfile">
        <!-- Error Message -->
        <div v-if="errorMessage" class="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-2">
          {{ errorMessage }}
        </div>

        <!-- Full Name -->
        <div class="space-y-2">
          <label for="fullName" class="block text-sm font-semibold text-brand-ink">Full name</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-muted group-focus-within:text-brand-primary transition-colors">
              <HugeiconsIcon :icon="UserIcon" class="w-5 h-5" />
            </div>
            <input
              id="fullName"
              v-model="form.fullName"
              type="text"
              required
              class="block w-full rounded-xl border border-brand-border bg-white/80 py-3.5 pl-11 pr-4 text-sm font-semibold text-brand-ink shadow-[0_2px_10px_rgba(38,32,75,0.02)] placeholder:font-medium placeholder:text-brand-muted/40 focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all"
              placeholder="Maya Chen"
              @input="updateUsername"
            >
          </div>
        </div>

        <!-- Job Title -->
        <div class="space-y-2">
          <label for="jobTitle" class="block text-sm font-semibold text-brand-ink">Headline or Job Title</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-muted group-focus-within:text-brand-primary transition-colors">
              <HugeiconsIcon :icon="Briefcase02Icon" class="w-5 h-5" />
            </div>
            <input
              id="jobTitle"
              v-model="form.jobTitle"
              type="text"
              required
              class="block w-full rounded-xl border border-brand-border bg-white/80 py-3.5 pl-11 pr-4 text-sm font-semibold text-brand-ink shadow-[0_2px_10px_rgba(38,32,75,0.02)] placeholder:font-medium placeholder:text-brand-muted/40 focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all"
              placeholder="Product Strategist"
            >
          </div>
        </div>
        
        <!-- Company -->
        <div class="space-y-2">
          <label for="company" class="block text-sm font-semibold text-brand-ink flex justify-between">
            <span>Company</span>
            <span class="text-brand-muted font-medium">Optional</span>
          </label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-muted group-focus-within:text-brand-primary transition-colors">
              <HugeiconsIcon :icon="Building03Icon" class="w-5 h-5" />
            </div>
            <input
              id="company"
              v-model="form.company"
              type="text"
              class="block w-full rounded-xl border border-brand-border bg-white/80 py-3.5 pl-11 pr-4 text-sm font-semibold text-brand-ink shadow-[0_2px_10px_rgba(38,32,75,0.02)] placeholder:font-medium placeholder:text-brand-muted/40 focus:border-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-ink transition-all"
              placeholder="Independent"
            >
          </div>
        </div>

        <!-- Username / Custom Link -->
        <div class="space-y-2 pt-2">
          <label for="username" class="block text-sm font-semibold text-brand-ink">Your custom link</label>
          <div class="relative group flex rounded-xl shadow-[0_2px_10px_rgba(38,32,75,0.02)] overflow-hidden border border-brand-border focus-within:border-brand-ink focus-within:ring-1 focus-within:ring-brand-ink transition-all">
            <div class="bg-brand-canvas/50 px-4 py-3.5 flex items-center justify-center border-r border-brand-border">
              <HugeiconsIcon :icon="Link04Icon" class="w-4 h-4 text-brand-muted mr-1.5" />
              <span class="text-sm font-medium text-brand-muted">{{ requestUrl.host }}/</span>
            </div>
            <input
              id="username"
              v-model="form.username"
              type="text"
              required
              class="block w-full bg-white/80 py-3.5 px-4 text-sm font-semibold text-brand-ink placeholder:font-medium placeholder:text-brand-muted/40 focus:outline-none"
              placeholder="maya-chen"
            >
          </div>
        </div>

        <!-- Submit -->
        <div class="pt-4">
          <button
            type="submit"
            :disabled="isSubmitting || !isFormValid"
            class="group relative flex w-full justify-center items-center gap-2 rounded-xl bg-brand-primary px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-brand-primary-dark hover:shadow-lg hover:shadow-brand-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <!-- Button shine effect -->
            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            
            <template v-if="isSubmitting">
              <svg class="relative z-10 size-4.5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span class="relative z-10">Saving profile...</span>
            </template>
            <template v-else>
              <span class="relative z-10">Enter Dashboard</span>
              <HugeiconsIcon :icon="ArrowRight02Icon" class="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </template>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
