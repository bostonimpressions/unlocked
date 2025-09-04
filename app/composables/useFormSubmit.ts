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

  async function getRecaptchaToken(): Promise<string> {
    if (!recaptchaSiteKey) return ''

    // Load script if not present
    if (!window.grecaptcha) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script')
        s.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`
        s.async = true
        s.onload = () => resolve(null)
        s.onerror = () => reject(new Error('Failed to load reCAPTCHA script'))
        document.head.appendChild(s)
      })
    }

    return new Promise<string>((resolve, reject) => {
      try {
        window.grecaptcha.ready(() => {
          try {
            window.grecaptcha
              .execute(recaptchaSiteKey, { action: 'submit' })
              .then(resolve)
              .catch((err: any) => {
                console.error('reCAPTCHA execute failed:', err)
                reject(new Error('reCAPTCHA verification failed'))
              })
          } catch (err: any) {
            console.error('reCAPTCHA execution error:', err)
            reject(new Error('Invalid reCAPTCHA configuration'))
          }
        })
      } catch (err: any) {
        reject(new Error('reCAPTCHA not available'))
      }
    })
  }

  async function submitForm(formData: Record<string, any>) {
    submitting.value = true
    success.value = false
    error.value = null

    try {
      let captchaToken = ''
      try {
        captchaToken = await getRecaptchaToken()
      } catch (recaptchaError: any) {
        throw new Error(
          recaptchaError?.message || 'reCAPTCHA verification failed.'
        )
      }

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
      console.error('Form submission failed:', e)
      error.value =
        e?.response?.data?.message ||
        e?.message ||
        'Submission failed. Please try again.'
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
