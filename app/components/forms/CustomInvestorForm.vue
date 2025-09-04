<script setup lang="ts">
  import { ref } from 'vue'
  import { useFormSubmit } from '@/composables/useFormSubmit'
  import FormMessage from '@/components/forms/FormMessage.vue'

  const FORM_ID = 'iIEAOpoyKr7iRFINPsAH'
  const LOCATION_ID = 'qJHGl5gtPfEjI8OTUJUF'
  const RECAPTCHA_SITE_KEY = '6LeDBFwpAAAAAJe8ux9-imrqZ2ueRsEtdiWoDDpX'

  const KEY_TERMS = 'terms_and_conditions'

  // Consent messages
  const CONSENT_TRANSACTIONAL =
    'By checking this box, I consent to receive communications from Unlocked Home Project and its partners regarding property opportunities, buyer programs, investment deals, or services I have expressed interest in. This may include texts, emails, or phone calls related to new listings, follow-ups, or relevant real estate updates. Message frequency may vary. Standard message and data rates may apply. Reply HELP for help or STOP to unsubscribe at any time.'
  const CONSENT_MARKETING =
    'By checking this box, I agree to receive marketing and promotional messages from Unlocked Home Project. These may include off-market deal alerts, referral or commission opportunities, requests for testimonials or reviews, special offers, and updates about new programs or services. Message frequency may vary. Standard message and data rates may apply. Reply HELP for help or STOP to opt out.'

  // Form state
  const form = ref<Record<string, any>>({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    J9IZ5sTpFN08BWb06kNc: [] as string[], // Investor Type
    wixTZ0Z3PyGFlyi398tr: [] as string[], // Property Type
    '4o3Kdbwdo6sYtP3jwYIS': [] as string[], // Preferred Updates
    mCUf6PA9UqReQaUNqA5p: [] as string[], // States
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
    <h2 class="sr-only form-title">Investor Looking To Sell Form</h2>
    <form @submit.prevent="handleSubmit" class="form">
      <!-- Name and Contact -->
      <div class="form-row">
        <input
          v-model="form.first_name"
          placeholder="First Name *"
          required
          class="form-input"
        />
        <input
          v-model="form.last_name"
          placeholder="Last Name *"
          required
          class="form-input"
        />
      </div>
      <input
        v-model="form.email"
        type="email"
        placeholder="Email *"
        required
        class="form-input"
      />
      <input
        v-model="form.phone"
        type="tel"
        placeholder="Phone *"
        required
        class="form-input"
      />

      <div class="two-col-grid">
        <div class="grid-item">
          <!-- Investor Type -->
          <label class="form-label">What Kind of Investor Are You?</label>
          <div class="form-row form-checkboxes">
            <label
              v-for="opt in [
                'Fix & Flip',
                'Buy & Hold',
                'Wholesaler',
                'Private Money Lending',
                'Just Getting Started',
              ]"
              :key="opt"
            >
              <input
                type="checkbox"
                :value="opt"
                v-model="form.J9IZ5sTpFN08BWb06kNc"
              />
              <span>{{ opt }}</span>
            </label>
          </div>
        </div>

        <div class="grid-item">
          <!-- Property Type -->
          <label class="form-label"
            >What types of properties are you looking for?</label
          >
          <div class="form-row form-checkboxes">
            <label
              v-for="opt in [
                'Single Family',
                'Multi-Family (2-4 units)',
                'Multi-Family (5+)',
                'Other commercial',
              ]"
              :key="opt"
            >
              <input
                type="checkbox"
                :value="opt"
                v-model="form.wixTZ0Z3PyGFlyi398tr"
              />
              <span>{{ opt }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="two-col-grid">
        <div class="grid-item">
          <!-- States -->
          <label class="form-label"
            >Which States are you wanting to invest in? (Multi-Select)</label
          >
          <div class="form-row form-checkboxes">
            <label
              v-for="opt in [
                'All - NH',
                'All - MA',
                'All - RI',
                'All - ME',
                'Southern - NH',
                'Central - NH',
                'Eastern - NH',
                'Western - NH',
                'Northern - NH',
              ]"
              :key="opt"
            >
              <input
                type="checkbox"
                :value="opt"
                v-model="form.mCUf6PA9UqReQaUNqA5p"
              />
              <span>{{ opt }}</span>
            </label>
          </div>
        </div>

        <div class="grid-item">
          <!-- Preferred Updates -->
          <label class="form-label"
            >How do you prefer to receive updates from us?</label
          >
          <div class="form-row form-checkboxes">
            <label v-for="opt in ['Email', 'SMS/Text']" :key="opt">
              <input
                type="checkbox"
                :value="opt"
                v-model="form['4o3Kdbwdo6sYtP3jwYIS']"
              />
              <span>{{ opt }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="form-divider" tabindex="-1"></div>

      <!-- Form messages -->
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
          />
          <span>{{ CONSENT_TRANSACTIONAL }}</span>
        </label>

        <label>
          <input
            type="checkbox"
            :value="CONSENT_MARKETING"
            v-model="form[KEY_TERMS]"
          />
          <span>{{ CONSENT_MARKETING }}</span>
        </label>
      </div>
    </form>
  </div>
</template>
