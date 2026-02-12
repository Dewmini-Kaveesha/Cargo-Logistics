import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Grain texture overlay */}
      <div className="hero__grain" aria-hidden="true" />

      {/* Left accent stripe */}
      <div className="hero__stripe" aria-hidden="true" />

      {/* Main content */}
      <div className="hero__content">

        {/* Eyebrow / tag line */}
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          Trusted by 5,000+ businesses worldwide
        </div>

        {/* Main heading */}
        <h1 className="hero__title">
          GLOBAL<br />
          <span className="highlight">LOGISTICS</span><br />
          <span className="outline">SIMPLIFIED</span>
        </h1>

        {/* Description */}
        <p className="hero__desc">
          SwiftCargo delivers end-to-end shipping solutions — air, ocean, and land —
          with real-time tracking and a commitment to on-time delivery every time.
        </p>

        {/* Action buttons */}
        <div className="hero__actions">
          <a href="#contact" className="btn-primary">
            {/* Truck SVG icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="1"/>
              <path d="M16 8h4l3 4v4h-7V8z"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            Get Instant Quote
          </a>
          <a href="#tracking" className="btn-secondary">
            Track Your Shipment
          </a>
        </div>

        {/* Floating stats badge */}
        <div className="hero__stat-badge">
          <div className="hero__stat-item">
            <strong>150+</strong>
            <span>Countries</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat-item">
            <strong>2M+</strong>
            <span>Shipments</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat-item">
            <strong>99.2%</strong>
            <span>On-Time Rate</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
