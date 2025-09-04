<script setup lang="ts">
  import { ref } from 'vue'
  import { useFormSubmit } from '@/composables/useFormSubmit'
  import FormMessage from '@/components/forms/FormMessage.vue'
  import { US_STATES } from '@/data/states'

  const FORM_ID = 'JM7T1dFqdgm1I7upHDvz'
  const LOCATION_ID = 'oqGRosP0mjSZKtAG1WNK'
  const RECAPTCHA_SITE_KEY = '6LeDBFwpAAAAAJe8ux9-imrqZ2ueRsEtdiWoDDpX'

  // Custom field keys
  const KEY_HELP = 'ro5WxEL3RIPa4rCUSsUd'
  const KEY_TERMS = 'terms_and_conditions'

  const CONSENT_TRANSACTIONAL =
    'By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.'
  const CONSENT_MARKETING =
    'By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.'

  const form = ref<Record<string, any>>({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    [KEY_HELP]: '',
    [KEY_TERMS]: [] as string[],
  })

  const { submitting, success, error, submitForm } = useFormSubmit(
    FORM_ID,
    LOCATION_ID,
    RECAPTCHA_SITE_KEY
  )

  async function handleSubmit() {
    const payload = {
      ...form.value,
      [KEY_TERMS]: (form.value[KEY_TERMS] as string[]).join('; '),
    }
    const ok = await submitForm(payload)
    if (ok) {
      for (const k of Object.keys(form.value)) {
        form.value[k] = Array.isArray(form.value[k]) ? [] : ''
      }
    }
  }
</script>

<template>
  <div class="form-wrapper">
    <h2 class="sr-only form-title">Contact Form</h2>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-row">
        <input
          v-model="form.last_name"
          name="last_name"
          placeholder="Last Name *"
          required
          class="form-input"
        />
        <input
          v-model="form.first_name"
          name="first_name"
          placeholder="First Name *"
          required
          class="form-input"
        />
      </div>

      <input
        v-model="form.phone"
        name="phone"
        type="tel"
        placeholder="Phone *"
        required
        class="form-input"
      />

      <input
        v-model="form.email"
        name="email"
        type="email"
        placeholder="Email *"
        required
        class="form-input"
      />

      <input
        v-model="form.address"
        name="address"
        placeholder="Property Address *"
        required
        class="form-input"
      />

      <div class="form-row">
        <input
          v-model="form.city"
          name="city"
          placeholder="City *"
          required
          class="form-input"
        />
        <select v-model="form.state" name="state" required class="form-input">
          <option
            v-for="state in US_STATES"
            :key="state.value"
            :value="state.value"
          >
            {{ state.label }}
          </option>
        </select>
      </div>

      <label class="form-label" for="help">How Can We Help You?</label>
      <textarea
        id="help"
        :name="KEY_HELP"
        v-model="form[KEY_HELP]"
        class="form-textarea"
      ></textarea>
      <label class="form-label-subtext" for="help"
        >Briefly explain your situation and what you need help with.</label
      >

      <div class="form-divider" tabindex="-1"></div>

      <FormMessage :success="success" :error="error" />

      <button type="submit" :disabled="submitting" class="form-button">
        {{ submitting ? 'Submitting…' : 'Submit' }}
      </button>

      <div class="form-divider" tabindex="-1"></div>

      <!-- Consent checkboxes -->
      <div class="form-row form-checkboxes">
        <label>
          <input
            type="checkbox"
            :value="CONSENT_TRANSACTIONAL"
            v-model="form[KEY_TERMS]"
            style="width: auto; min-height: auto"
          />
          <span>{{ CONSENT_TRANSACTIONAL }}</span>
        </label>

        <label>
          <input
            type="checkbox"
            :value="CONSENT_MARKETING"
            v-model="form[KEY_TERMS]"
            style="width: auto; min-height: auto"
          />
          <span>{{ CONSENT_MARKETING }}</span>
        </label>
      </div>
    </form>
  </div>
</template>
