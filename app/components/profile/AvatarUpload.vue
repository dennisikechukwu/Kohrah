<script setup lang="ts">
import { ref } from 'vue'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Camera01Icon } from '@hugeicons/core-free-icons'

defineProps<{
  modelValue: string | null
  fullName: string | null
}>()

const emit = defineEmits(['update:modelValue', 'upload-started', 'upload-finished'])

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const fileInput = ref<HTMLInputElement | null>(null)
const isUploading = ref(false)

const triggerUpload = () => {
  if (!isUploading.value) {
    fileInput.value?.click()
  }
}

const handleFileSelect = async (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target.files || target.files.length === 0) return

  const file = target.files[0]
  if (!file) return
  // Generate a unique filename using timestamp to avoid caching issues when replacing
  const fileExt = file.name.split('.').pop()
  const filePath = `${user.value?.sub}-${Date.now()}.${fileExt}`

  try {
    isUploading.value = true
    emit('upload-started')

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    const { data } = supabase.storage.from('avatars').getPublicUrl(filePath)
    
    emit('update:modelValue', data.publicUrl)
  } catch (error) {
    console.error('Error uploading avatar:', error)
    alert('Failed to upload avatar. Please try again.')
  } finally {
    isUploading.value = false
    emit('upload-finished')
    if (fileInput.value) fileInput.value.value = ''
  }
}
</script>

<template>
  <div class="relative group inline-block shrink-0">
    <div 
      class="relative flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-[2rem] bg-brand-primary-soft/50 border-[3px] border-brand-surface shadow-sm transition-transform duration-200 group-hover:scale-[1.02] cursor-pointer"
      @click="triggerUpload"
    >
      <img 
        v-if="modelValue" 
        :src="modelValue" 
        alt="Avatar" 
        class="h-full w-full object-cover transition-opacity duration-200"
        :class="{ 'opacity-50': isUploading }"
      >
      <div v-else class="text-3xl font-black text-brand-primary">
        {{ fullName?.charAt(0).toUpperCase() || '?' }}
      </div>

      <!-- Hover Overlay -->
      <div 
        class="absolute inset-0 bg-brand-ink/40 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        :class="{ 'opacity-100': isUploading, 'opacity-0': !isUploading }"
      >
        <svg v-if="isUploading" class="size-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <HugeiconsIcon v-else :icon="Camera01Icon" class="size-6 text-white" :stroke-width="2" />
      </div>
    </div>
    <input 
      ref="fileInput" 
      type="file" 
      accept="image/*" 
      class="hidden" 
      @change="handleFileSelect"
    >
  </div>
</template>
