import { CheckCircle2, LoaderCircle, UploadCloud } from 'lucide-react'
import { type FormEvent, useState } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    const form = event.currentTarget

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        body: new FormData(form),
      })

      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={54} />
        <span className="eyebrow">Enquiry received</span>
        <h2>Your driveline case is in the queue.</h2>
        <p>A specialist can now review the vehicle details and images supplied.</p>
        <button className="button button-outline" onClick={() => setStatus('idle')}>Submit another enquiry</button>
      </div>
    )
  }

  return (
    <form
      className="quote-form"
      name="driveline-quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="driveline-quote" />
      <input type="hidden" name="subject" value="New driveline quote enquiry" />
      <p className="hidden-field"><label>Do not fill this out: <input name="bot-field" /></label></p>
      <div className="form-grid">
        <label><span>Name *</span><input name="name" type="text" autoComplete="name" required placeholder="Your full name" /></label>
        <label><span>Company</span><input name="company" type="text" autoComplete="organization" placeholder="Fleet or company name" /></label>
        <label><span>Phone *</span><input name="phone" type="tel" autoComplete="tel" required placeholder="Contact number" /></label>
        <label>
          <span>Truck Model *</span>
          <select name="truck-model" required defaultValue="">
            <option value="" disabled>Select truck model</option>
            <option>NPR</option><option>NQR</option><option>FRR</option><option>FTR</option><option>FVM</option><option>FVZ</option><option>Giga</option><option>Other / Unsure</option>
          </select>
        </label>
        <label className="full-field"><span>Gearbox Problem *</span><textarea name="gearbox-problem" required rows={6} placeholder="Describe the symptoms, fault, vehicle mileage and any work already completed." /></label>
      </div>
      <fieldset className="upload-zone">
        <legend>Upload Images</legend>
        <div className="upload-heading"><UploadCloud size={28} /><div><strong>Add reference images</strong><span>Gearbox, ID plate or damaged components</span></div></div>
        <div className="upload-inputs">
          <label><span>Image 1</span><input type="file" name="image-1" accept="image/*" /></label>
          <label><span>Image 2</span><input type="file" name="image-2" accept="image/*" /></label>
          <label><span>Image 3</span><input type="file" name="image-3" accept="image/*" /></label>
        </div>
        <small>Maximum combined submission size: 8 MB.</small>
      </fieldset>
      {status === 'error' && <p className="form-error" role="alert">The enquiry could not be sent. Please retry or use the WhatsApp option.</p>}
      <div className="form-submit">
        <p>By submitting, you confirm these details may be used to assess your enquiry.</p>
        <button className="button button-red" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? <><LoaderCircle className="spin" size={18} /> Sending enquiry</> : 'Submit Quote Request'}
        </button>
      </div>
    </form>
  )
}
