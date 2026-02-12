import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">

        {/* Image column */}
        <div className="about__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
            alt="SwiftCargo warehouse interior"
            className="about__image-main"
            loading="lazy"
          />
          {/* Experience badge overlaid on image */}
          <div className="about__image-badge">
            <strong>15+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>

        {/* Text column */}
        <div className="about__content">
          <div className="section-tag">
            {/* Info icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            About SwiftCargo
          </div>

          <h2 className="section-title">
            Delivering Trust,<br />
            <span>Mile After Mile</span>
          </h2>

          <span className="accent-line" />

          <p className="about__body">
            Founded in 2010, SwiftCargo began with a single truck and a simple promise:
            reliable, on-time delivery. Today, we operate a fleet of <strong style={{color:'var(--clr-white)', fontWeight: 500}}>200+ vehicles</strong>,
            partner with leading airlines and ocean carriers, and serve over 150 countries
            across six continents.
          </p>

          <p className="about__body">
            Our ISO-certified warehouses, temperature-controlled storage facilities, and
            24/7 operations team ensure your cargo — from fragile electronics to heavy
            industrial machinery — arrives safely and on schedule. We don't just move
            packages. We move businesses forward.
          </p>

          {/* Stats grid */}
          <div className="about__stats">
            <div className="about__stat-card">
              <strong>200+</strong>
              <span>Fleet Vehicles</span>
            </div>
            <div className="about__stat-card">
              <strong>50+</strong>
              <span>Warehouse Hubs</span>
            </div>
            <div className="about__stat-card">
              <strong>1,800+</strong>
              <span>Team Members</span>
            </div>
            <div className="about__stat-card">
              <strong>99.2%</strong>
              <span>On-Time Delivery</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
