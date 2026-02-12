import './Fleet.css'

// Fleet gallery images with labels
const FLEET_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    label: 'Container Vessel',
    sub: 'Ocean Freight',
    featured: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    label: 'Cargo Aircraft',
    sub: 'Air Freight',
    featured: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
    label: 'Heavy Truck Fleet',
    sub: 'Land Transport',
    featured: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    label: 'Smart Warehouse',
    sub: 'Storage & Fulfilment',
    featured: true,
  },
  {
    id: 5,
    src: 'https://media.istockphoto.com/id/479431970/photo/container-operation-in-port.jpg?s=612x612&w=0&k=20&c=aNjl9SjxVBOEWPU_zQ4TGxStuY5bnBKDNXwOlgXbhgc=',
    label: 'Port Terminal',
    sub: 'Loading Operations',
    featured: false,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    label: 'Logistics Hub',
    sub: 'Distribution Centre',
    featured: false,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    label: 'Tanker at Port',
    sub: 'Bulk Cargo',
    featured: false,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&q=80',
    label: 'Last Mile Delivery',
    sub: 'Express Courier',
    featured: false,
  },
]

export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="fleet__inner">

        {/* Header */}
        <div className="fleet__header">
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            {/* Camera icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            Fleet Gallery
          </div>

          <h2 className="section-title">
            Our Global <span>Fleet</span>
          </h2>

          <p className="section-subtitle">
            200+ vehicles, vessels, and aircraft — purpose-built for every cargo challenge.
          </p>
        </div>

        {/* Image grid */}
        <div className="fleet__grid">
          {FLEET_IMAGES.map(item => (
            <div
              key={item.id}
              className={`fleet__item ${item.featured ? 'fleet__item--featured' : ''}`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
              />

              {/* Hover overlay with label */}
              <div className="fleet__item-overlay">
                <div>
                  <div className="fleet__item-label">{item.label}</div>
                  <div className="fleet__item-sub">{item.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
