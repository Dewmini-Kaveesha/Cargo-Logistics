import './Features.css'

// Operational features data
const FEATURES = [
  {
    id: 1,
    title: 'Real-Time Tracking',
    desc: 'Monitor your shipment 24/7 with live GPS tracking, status alerts, and an ETA dashboard updated every 60 seconds.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Global Warehousing',
    desc: '50+ strategically located fulfilment centres across 6 continents with bonded, ISO-certified, and smart inventory systems.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Secure Packaging',
    desc: 'Custom crating, pallet wrapping, and tamper-evident sealing for fragile, high-value, and hazardous goods.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: '24/7 Custom Clearance',
    desc: 'Dedicated customs brokers available around the clock to handle import/export documentation in 150+ countries.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Insurance Coverage',
    desc: 'Comprehensive cargo insurance for every shipment, with easy claims processing and swift reimbursements.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Multi-Modal Transport',
    desc: 'Seamlessly combine air, sea, and road transport in a single shipment for optimised cost and speed.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8"/>
        <line x1="4" y1="20" x2="21" y2="3"/>
        <polyline points="21 16 21 21 16 21"/>
        <line x1="15" y1="15" x2="21" y2="21"/>
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Digital Documentation',
    desc: 'Paperless bill of lading, e-AWB, and cloud-based compliance reports — accessible from any device, anywhere.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Dedicated Account Manager',
    desc: 'Every business client receives a personal account manager who knows your supply chain inside-out.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="features" id="tracking">
      <div className="features__inner">

        {/* Header */}
        <div className="features__header">
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            {/* Star icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Why SwiftCargo
          </div>
          <h2 className="section-title">
            Operational <span>Excellence</span>
          </h2>
          <p className="section-subtitle">
            Built on decades of experience, powered by technology — here's what makes us different.
          </p>
        </div>

        {/* Features grid */}
        <div className="features__grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-card__icon">
                {feature.icon}
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
