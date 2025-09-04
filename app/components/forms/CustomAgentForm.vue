<script setup lang="ts">
  import { ref } from 'vue'
  import { useFormSubmit } from '@/composables/useFormSubmit'
  import FormMessage from '@/components/forms/FormMessage.vue'
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

  const { submitting, success, error, submitForm } = useFormSubmit(
    FORM_ID,
    LOCATION_ID,
    RECAPTCHA_SITE_KEY
  )

  async function handleSubmit() {
    const ok = await submitForm(form.value)
    if (ok) {
      // reset fields after success
      Object.keys(form.value).forEach(
        (k) => (form.value[k] = k === 'country' ? 'US' : '')
      )
    }
  }
</script>

<template>
  <div class="form-wrapper">
    <h2 class="sr-only form-title">Real Estate Agent Form</h2>

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

      <FormMessage :success="success" :error="error" />

      <button type="submit" :disabled="submitting" class="form-button">
        {{ submitting ? 'Submitting…' : 'Submit' }}
      </button>
    </form>
  </div>
</template>
