import { useState } from 'react'
import './Contact.css'

// List of shipping service options for the dropdown
const SERVICE_OPTIONS = [
  'Air Freight',
  'Ocean Freight',
  'Land Transport',
  'Express Courier',
  'Warehousing',
  'Door-to-Door Delivery',
  'Cold Chain',
  'Project Cargo',
]

export default function Contact() {
  // Form state
  const [form, setForm] = useState({
    name:     '',
    service:  '',
    quantity: '',
    notes:    '',
  })

  // Update a form field
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  /**
   * Build the WhatsApp pre-filled message and open WhatsApp.
   * Format: "Hi, I'm [Name], I want to ship [Package] of [Quantity]."
   */
  const handleWhatsApp = (e) => {
    e.preventDefault()
    const { name, service, quantity, notes } = form

    if (!name || !service || !quantity) {
      alert('Please fill in your name, service type, and quantity.')
      return
    }

    // Compose the pre-filled message
    const message = `Hi, I'm ${name}, I want to ship ${service} of ${quantity}.${
      notes ? ` Additional info: ${notes}` : ''
    }`

    // Encode and build WhatsApp URL
    const phone   = '94741234567' // placeholder number — replace with real number
    const encoded = encodeURIComponent(message)
    const url     = `https://wa.me/${phone}?text=${encoded}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">

        {/* Header */}
        <div className="contact__header">
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            {/* Mail icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact Us
          </div>
          <h2 className="section-title">
            Let's Move Your <span>Cargo</span>
          </h2>
          <p className="section-subtitle">
            Reach out for a free quote or send us a WhatsApp message and our team will respond within minutes.
          </p>
        </div>

        <div className="contact__grid">

          {/* ---- Left: Contact info + Map ---- */}
          <div>
            <div className="contact__info-list">

              {/* Address */}
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <strong>Main Office</strong>
                  <span>Colombo 01,<br />Western Province, Sri Lanka</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <strong>Email Us</strong>
                  <span>info@swiftcargo.lk<br />support@swiftcargo.lk</span>
                </div>
              </div>

              {/* Phone */}
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.69a16 16 0 006.29 6.29l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <strong>Call / WhatsApp</strong>
                  <span>+94 74 123 4567<br />Mon–Sun · 6:00 AM – 10:00 PM</span>
                </div>
              </div>

            </div>

            {/* Google Map embed — Colombo Port area */}
            <div className="contact__map">
              <iframe
                title="SwiftCargo Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8236!2d79.8488!3d6.9355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259251b0f9f15%3A0x8cce8d25c6e03ef7!2sColombo+Port!5e0!3m2!1sen!2slk!4v1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ---- Right: WhatsApp Quote form ---- */}
          <div className="contact__form-card">
            <h3 className="contact__form-title">Request a Quick Quote</h3>
            <p className="contact__form-sub">Fill in the form and we'll open WhatsApp with your details pre-filled.</p>

            {/* WhatsApp badge */}
            <div className="contact__wa-badge">
              {/* WhatsApp icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Via WhatsApp
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsApp}>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Dewmini Kaveehsa"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Service / Package Type */}
              <div className="form-group">
                <label htmlFor="service">Package / Service Type *</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">— Select a service —</option>
                  {SERVICE_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Weight / Quantity */}
              <div className="form-group">
                <label htmlFor="quantity">Weight / Quantity *</label>
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  placeholder="e.g. 50 kg or 2 pallets"
                  value={form.quantity}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Optional notes */}
              <div className="form-group">
                <label htmlFor="notes">Additional Notes (optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Origin, destination, special requirements..."
                  value={form.notes}
                  onChange={handleChange}
                />
              </div>

              {/* WhatsApp CTA button */}
              <button type="submit" className="btn-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
