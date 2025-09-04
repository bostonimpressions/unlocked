import { ref } from 'vue'
import axios from 'axios'

export function useFormSubmit(
  formId: string,
  locationId: string,
  recaptchaSiteKey: string
) {
  const submitting = ref(false)
  const success = ref(false)
  const error = ref<string | null>(null)

  async function getRecaptchaToken() {
    if (!recaptchaSiteKey) return ''
    if (!window.grecaptcha) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script')
        s.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`
        s.async = true
        s.onload = () => resolve(null)
        s.onerror = () => reject('Failed to load reCAPTCHA')
        document.head.appendChild(s)
      })
    }

    return new Promise<string>((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(recaptchaSiteKey, { action: 'submit' })
          .then(resolve)
          .catch(() => resolve(''))
      })
    })
  }

  async function submitForm(formData: Record<string, any>) {
    submitting.value = true
    success.value = false
    error.value = null

    try {
      const captchaToken = await getRecaptchaToken()

      const fd = new FormData()
      fd.append('formId', formId)
      if (captchaToken) fd.append('captchaV3', captchaToken)
      fd.append(
        'formData',
        JSON.stringify({
          ...formData,
          formId,
          location_id: locationId,
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
        return true
      } else {
        throw new Error('Unexpected response from server')
      }
    } catch (e: any) {
      console.error(e)
      error.value = e?.response?.data?.message || 'Submission failed.'
      return false
    } finally {
      submitting.value = false
    }
  }

  return {
    submitting,
    success,
    error,
    submitForm,
  }
}
