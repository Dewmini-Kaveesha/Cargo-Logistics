import './Services.css'

// All 8 shipping services with Unsplash images, descriptions, and pricing
const SERVICES = [
  {
    id: 1,
    name: 'Air Freight',
    tag: 'Express',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    desc: 'Priority air cargo to 150+ countries. Ideal for time-sensitive, high-value shipments with door-to-airport service.',
    price: 'From Rs.3,500/kg',
  },
  {
    id: 2,
    name: 'Ocean Freight',
    tag: 'FCL / LCL',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    desc: 'Full container and less-than-container loads. Most cost-effective option for bulk international cargo.',
    price: 'From Rs.850/kg',
  },
  {
    id: 3,
    name: 'Land Transport',
    tag: 'Domestic',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
    desc: 'Nationwide road freight with real-time GPS tracking. FTL and LTL options for every business size.',
    price: 'From Rs.120/kg',
  },
  {
    id: 4,
    name: 'Express Courier',
    tag: 'Next Day',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&q=80',
    desc: 'Same-day and next-day delivery for documents, parcels and small packages across the country.',
    price: 'From Rs.299/parcel',
  },
  {
    id: 5,
    name: 'Warehousing',
    tag: 'Storage',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
    desc: 'Climate-controlled warehouses with 24/7 security, inventory management, and order fulfilment services.',
    price: 'From Rs.12/sqft/day',
  },
  {
    id: 6,
    name: 'Door-to-Door',
    tag: 'Full Service',
    image: 'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?w=600&q=80',
    desc: 'End-to-end pickup and delivery service. We handle customs, documentation, and the last mile.',
    price: 'From Rs.1,200/pkg',
  },
  {
    id: 7,
    name: 'Cold Chain',
    tag: 'Refrigerated',
    image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&q=80',
    desc: 'Temperature-controlled logistics for pharmaceuticals, food, and perishable goods. -20°C to +25°C range.',
    price: 'From Rs.5,000/kg',
  },
  {
    id: 8,
    name: 'Project Cargo',
    tag: 'Heavy Lift',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    desc: 'Oversized and out-of-gauge shipments for industrial machinery, turbines, and construction equipment.',
    price: 'Custom Quote',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      {/* Section header */}
      <div className="services__header">
        <div>
          <div className="section-tag">
            {/* Package icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="21 8 21 21 3 21 3 8"/>
              <rect x="1" y="3" width="22" height="5"/>
              <line x1="10" y1="12" x2="14" y2="12"/>
            </svg>
            Our Services
          </div>
          <h2 className="section-title">
            Shipping Solutions<br />
            <span>For Every Need</span>
          </h2>
          <p className="section-subtitle">
            From a single parcel to a full container — we've got the right solution for your cargo.
          </p>
        </div>

        <a href="#contact" className="btn-primary" style={{flexShrink: 0}}>
          Request Custom Quote
        </a>
      </div>

      {/* Services grid */}
      <div className="services__grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

// Individual service card component
function ServiceCard({ service }) {
  return (
    <div className="service-card">
      {/* Image */}
      <div className="service-card__image">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
        />
        <span className="service-card__tag">{service.tag}</span>
      </div>

      {/* Body */}
      <div className="service-card__body">
        <h3 className="service-card__name">{service.name}</h3>
        <p className="service-card__desc">{service.desc}</p>

        {/* Pricing footer */}
        <div className="service-card__price">
          <span className="service-card__price-label">Starting from</span>
          <span className="service-card__price-amount">{service.price}</span>
        </div>
      </div>
    </div>
  )
}
