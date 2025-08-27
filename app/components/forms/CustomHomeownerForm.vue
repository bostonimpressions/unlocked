<script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'

  const FORM_ID = 'xzPV2jFFQnIUhfhj67pB'
  const LOCATION_ID = 'bmEOysIj5gSe0AwT3lcH'
  const RECAPTCHA_SITE_KEY = '' // Plug in later

  const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'US',
    // Custom fields
    PmkbAq6Bk7jT29s9wZ02: '',
    YN6evksdZb9Gq8G8C3Ew: '',
  })

  const submitting = ref(false)
  const success = ref(false)
  const error = ref<string | null>(null)

  declare global {
    interface Window {
      grecaptcha: any
    }
  }

  async function getRecaptchaToken(): Promise<string> {
    if (!RECAPTCHA_SITE_KEY) return ''
    if (!window.grecaptcha) {
      await new Promise<void>((resolve, reject) => {
        const s = document.createElement('script')
        s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
        s.async = true
        s.onload = () => resolve()
        s.onerror = () => reject(new Error('Failed to load reCAPTCHA'))
        document.head.appendChild(s)
      })
    }
    return new Promise<string>((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
          .then(resolve)
          .catch(() => resolve(''))
      })
    })
  }

  const handleSubmit = async () => {
    submitting.value = true
    success.value = false
    error.value = null

    try {
      const captchaToken = await getRecaptchaToken()
      const fd = new FormData()
      fd.append('formId', FORM_ID)
      fd.append('locationId', LOCATION_ID)
      if (captchaToken) fd.append('captchaV3', captchaToken)
      fd.append(
        'formData',
        JSON.stringify({
          ...form.value,
          formId: FORM_ID,
          location_id: LOCATION_ID,
          eventData: {
            source: 'direct',
            page: { url: window.location.href, title: document.title },
            timestamp: Date.now(),
          },
          Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
      )

      const res = await axios.post(
        'https://backend.leadconnectorhq.com/forms/submit',
        fd
      )

      if (res.status === 201) {
        success.value = true
        Object.keys(form.value).forEach((k) => ((form.value as any)[k] = ''))
        form.value.country = 'US'
      } else {
        throw new Error('Unexpected response')
      }
    } catch (e: any) {
      console.error(e)
      error.value = e?.response?.data?.message || 'Submission failed.'
    } finally {
      submitting.value = false
    }
  }
</script>

<template>
  <div class="max-w-lg mx-auto p-8 bg-white/90 rounded-2xl shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center">Homeowner Form</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          v-model="form.first_name"
          class="border p-3 rounded w-full"
          placeholder="First Name"
          required
        />
        <input
          v-model="form.last_name"
          class="border p-3 rounded w-full"
          placeholder="Last Name"
          required
        />
      </div>

      <input
        v-model="form.email"
        type="email"
        class="border p-3 rounded w-full"
        placeholder="Email"
        required
      />
      <input
        v-model="form.phone"
        type="tel"
        class="border p-3 rounded w-full"
        placeholder="Phone"
      />
      <input
        v-model="form.address"
        class="border p-3 rounded w-full"
        placeholder="Address"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          v-model="form.city"
          class="border p-3 rounded w-full"
          placeholder="City"
        />
        <input
          v-model="form.state"
          class="border p-3 rounded w-full"
          placeholder="State"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          v-model="form.postal_code"
          class="border p-3 rounded w-full"
          placeholder="Postal Code"
        />
        <input
          v-model="form.country"
          class="border p-3 rounded w-full"
          placeholder="Country"
        />
      </div>

      <textarea
        v-model="form.PmkbAq6Bk7jT29s9wZ02"
        class="border p-3 rounded w-full h-24"
        placeholder="How quickly are you looking to sell? *
"
      ></textarea>
      <textarea
        v-model="form.YN6evksdZb9Gq8G8C3Ew"
        class="border p-3 rounded w-full h-24"
        placeholder="What is your reason for selling? *
"
      ></textarea>

      <button
        type="submit"
        :disabled="submitting"
        class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {{ submitting ? 'Submitting…' : 'Submit' }}
      </button>

      <p v-if="success" class="text-green-600 mt-4 text-center">
        Form submitted successfully 🎉
      </p>
      <p v-if="error" class="text-red-600 mt-4 text-center">{{ error }}</p>
    </form>
  </div>
</template>
