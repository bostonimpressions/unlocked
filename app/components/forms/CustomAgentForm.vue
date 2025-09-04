<script setup lang="ts">
  import { ref } from 'vue'
  import { useFormSubmit } from '@/composables/useFormSubmit'
  import FormMessage from '@/components/forms/FormMessage.vue'

  const FORM_ID = 'Zopvhm5KPhVnxgnGpsXw'
  const LOCATION_ID = 'NKixxUw8AniSJy40EMjm'
  const RECAPTCHA_SITE_KEY = '6LeDBFwpAAAAAJe8ux9-imrqZ2ueRsEtdiWoDDpX'
  const KEY_FAMILIARITY = 'uBqTJyjlqhRhADIyo1Te' // radio: Yes/No/Somewhat
  const KEY_LISTING_DETAILS = 'MZottkUdiM2av5Zemk0P' // textarea: specific listing
  const KEY_ANYTHING_ELSE = 'zB3GysV4Xsp4DKV9NQL1' // textarea: anything else
  const KEY_BROKERAGE_NAME = 'brokerage_name'

  const form = ref<Record<string, any>>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    [KEY_BROKERAGE_NAME]: '',
    [KEY_FAMILIARITY]: '',
    [KEY_LISTING_DETAILS]: '',
    [KEY_ANYTHING_ELSE]: '',
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
      for (const k of Object.keys(form.value)) form.value[k] = ''
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
        placeholder="Phone *"
        required
        class="form-input"
      />

      <input
        v-model="form[KEY_BROKERAGE_NAME]"
        :name="KEY_BROKERAGE_NAME"
        placeholder="Brokerage Name"
        class="form-input"
      />

      <div class="form-divider" tabindex="-1"></div>

      <label class="form-label"
        >Are you familiar with creative real estate strategies? *</label
      >
      <div
        class="form-row"
        role="group"
        aria-label="Creative strategies familiarity"
      >
        <label
          class="form-input"
          style="display: flex; align-items: center; gap: 8px; cursor: pointer"
        >
          <input
            type="radio"
            :name="KEY_FAMILIARITY"
            value="Yes"
            v-model="form[KEY_FAMILIARITY]"
            required
            style="width: auto; min-height: auto"
          />
          <span>Yes</span>
        </label>
        <label
          class="form-input"
          style="display: flex; align-items: center; gap: 8px; cursor: pointer"
        >
          <input
            type="radio"
            :name="KEY_FAMILIARITY"
            value="No"
            v-model="form[KEY_FAMILIARITY]"
            required
            style="width: auto; min-height: auto"
          />
          <span>No</span>
        </label>
        <label
          class="form-input"
          style="display: flex; align-items: center; gap: 8px; cursor: pointer"
        >
          <input
            type="radio"
            :name="KEY_FAMILIARITY"
            value="Somewhat"
            v-model="form[KEY_FAMILIARITY]"
            required
            style="width: auto; min-height: auto"
          />
          <span>Somewhat</span>
        </label>
      </div>

      <label class="form-label" for="listing-details">
        Is there a specific listing you would like to get in touch about? If so
        please add relative information.
      </label>
      <textarea
        id="listing-details"
        :name="KEY_LISTING_DETAILS"
        v-model="form[KEY_LISTING_DETAILS]"
        class="form-textarea"
      ></textarea>

      <label class="form-label" for="anything-else"
        >Anything else you want to discuss?</label
      >
      <textarea
        id="anything-else"
        :name="KEY_ANYTHING_ELSE"
        v-model="form[KEY_ANYTHING_ELSE]"
        class="form-textarea"
      ></textarea>

      <div class="form-divider" tabindex="-1"></div>

      <FormMessage :success="success" :error="error" />

      <button type="submit" :disabled="submitting" class="form-button">
        {{ submitting ? 'Submitting…' : 'Submit' }}
      </button>
    </form>
  </div>
</template>
