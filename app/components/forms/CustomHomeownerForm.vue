<script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'
  import { US_STATES } from '@/data/states'

  const FORM_ID = 'xzPV2jFFQnIUhfhj67pB'
  const LOCATION_ID = 'bmEOysIj5gSe0AwT3lcH'
  const RECAPTCHA_SITE_KEY = '6LeDBFwpAAAAAJe8ux9-imrqZ2ueRsEtdiWoDDpX'

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
    PmkbAq6Bk7jT29s9wZ02: '',
    YN6evksdZb9Gq8G8C3Ew: '',
  })

  const submitting = ref(false)
  const success = ref(false)
  const error = ref<string | null>(null)

  // reCAPTCHA setup
  async function getRecaptchaToken() {
    if (!RECAPTCHA_SITE_KEY) return ''
    if (!window.grecaptcha) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script')
        s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
        s.async = true
        s.onload = () => resolve(null)
        s.onerror = () => reject('Failed to load reCAPTCHA')
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

  // Submit handler
  const handleSubmit = async () => {
    submitting.value = true
    success.value = false
    error.value = null

    try {
      const captchaToken = await getRecaptchaToken()

      const fd = new FormData()
      fd.append('formId', FORM_ID)
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
        Object.keys(form.value).forEach(
          (k) => (form.value[k] = k === 'country' ? 'US' : '')
        )
      } else {
        throw new Error('Unexpected response from server')
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
  <div class="form-wrapper">
    <h2 class="sr-only form-title">Homeowner Form</h2>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-row">
        <input
          v-model="form.first_name"
          name="first_name"
          placeholder="First Name *"
          required
          class="form-input"
        />
        <input
          v-model="form.last_name"
          name="last_name"
          placeholder="Last Name *"
          required
          class="form-input"
        />
      </div>

      <input
        v-model="form.email"
        name="email"
        type="email"
        placeholder="Email *"
        required
        class="form-input"
      />
      <input
        v-model="form.phone"
        name="phone"
        type="tel"
        placeholder="Phone"
        class="form-input"
      />
      <input
        v-model="form.address"
        name="address"
        placeholder="Address"
        class="form-input"
      />

      <div class="form-row">
        <input
          v-model="form.city"
          name="city"
          placeholder="City"
          class="form-input"
        />
        <select v-model="form.state" name="state" class="form-input">
          <option
            v-for="state in US_STATES"
            :key="state.value"
            :value="state.value"
          >
            {{ state.label }}
          </option>
        </select>
      </div>

      <div class="form-row">
        <input
          v-model="form.postal_code"
          name="postal_code"
          placeholder="Postal Code"
          class="form-input"
        />
        <input
          v-model="form.country"
          name="country"
          placeholder="Country"
          class="form-input"
        />
      </div>

      <div class="form-divider" tabindex="-1"></div>

      <label class="form-label" for="sell-speed"
        >How quickly are you looking to sell? *</label
      >
      <textarea
        id="sell-speed"
        name="sell_speed"
        v-model="form.PmkbAq6Bk7jT29s9wZ02"
        class="form-textarea"
        required
      ></textarea>

      <label class="form-label" for="sell-reason"
        >What is your reason for selling? *</label
      >
      <textarea
        id="sell-reason"
        name="sell_reason"
        v-model="form.YN6evksdZb9Gq8G8C3Ew"
        class="form-textarea"
        required
      ></textarea>

      <div class="form-divider" tabindex="-1"></div>

      <div
        class="form-message"
        v-if="success || error"
        :class="success ? 'form-message--success' : 'form-message--error'"
      >
        <span v-if="success">✅ Form submitted successfully!</span>
        <span v-else>❌ {{ error }}</span>
      </div>

      <button type="submit" :disabled="submitting" class="form-button">
        {{ submitting ? 'Submitting…' : 'Submit' }}
      </button>
    </form>
  </div>
</template>
