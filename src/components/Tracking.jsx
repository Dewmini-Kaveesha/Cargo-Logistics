import { useState } from 'react'
import './Tracking.css'

// Mock tracking events for the demo UI
const MOCK_EVENTS = [
  { id: 1, title: 'Order Placed',       time: 'Feb 08 • 09:12 AM', done: true,  active: false },
  { id: 2, title: 'Picked Up',          time: 'Feb 08 • 02:35 PM', done: true,  active: false },
  { id: 3, title: 'In Transit – Dubai', time: 'Feb 09 • 06:50 AM', done: true,  active: false },
  { id: 4, title: 'Customs Cleared',    time: 'Feb 10 • 11:20 AM', done: false, active: true  },
  { id: 5, title: 'Out for Delivery',   time: 'Expected Feb 12',   done: false, active: false },
  { id: 6, title: 'Delivered',          time: 'Pending',           done: false, active: false },
]

export default function Tracking() {
  // State for the tracking input
  const [trackingId, setTrackingId] = useState('')
  const [searched,   setSearched]   = useState(false)

  const handleTrack = () => {
    if (trackingId.trim()) setSearched(true)
  }

  // Demo: pre-fill with a sample ID
  const handleDemo = () => {
    setTrackingId('SWC-2024-48921')
    setSearched(true)
  }

  return (
    <section className="tracking" id="tracking">
      <div className="tracking__inner">

        {/* Left: description */}
        <div className="tracking__content">
          <div className="section-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Live Tracking
          </div>

          <h2 className="section-title">
            Know Where Your<br />
            <span>Cargo Is</span> — Always
          </h2>

          <span className="accent-line" />

          <p className="section-subtitle">
            Our real-time tracking system gives you instant visibility from pickup to delivery,
            with SMS and email alerts at every milestone.
          </p>

          <div className="tracking__steps">
            {[
              { step: '01', title: 'Enter Tracking ID',   desc: 'Use the ID sent to you via email or SMS after booking.' },
              { step: '02', title: 'View Live Location',  desc: "See your shipment's exact location on an interactive map." },
              { step: '03', title: 'Get ETA Updates',     desc: 'Receive proactive alerts whenever status changes.' },
            ].map(s => (
              <div className="tracking__step" key={s.step}>
                <div className="tracking__step-num">{s.step}</div>
                <div className="tracking__step-text">
                  <strong>{s.title}</strong>
                  <span>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mock tracking widget */}
        <div className="tracking__widget">

          {/* Widget header */}
          <div className="tracking__widget-header">
            <h4>SHIPMENT TRACKER</h4>
            <div className="tracking__live-badge">
              <span className="tracking__live-dot" />
              Live
            </div>
          </div>

          {/* Widget body */}
          <div className="tracking__widget-body">

            {/* Search bar */}
            <div className="tracking__search">
              <input
                type="text"
                value={trackingId}
                onChange={e => setTrackingId(e.target.value)}
                placeholder="Enter tracking ID (e.g. SWC-2024-XXXXX)"
                onKeyDown={e => e.key === 'Enter' && handleTrack()}
              />
              <button onClick={handleTrack}>Track</button>
            </div>

            {/* Demo CTA */}
            {!searched && (
              <p style={{ fontSize: '0.75rem', color: 'var(--clr-gray-400)', textAlign: 'center', marginBottom: '1rem', cursor: 'pointer' }}
                 onClick={handleDemo}>
                🔎 Try a <span style={{ color: 'var(--clr-accent)', textDecoration: 'underline' }}>demo tracking ID</span>
              </p>
            )}

            {/* Results panel */}
            {searched && (
              <>
                {/* Shipment info */}
                <div className="tracking__info-card">
                  {[
                    { label: 'Tracking ID',   value: 'SWC-2024-48921' },
                    { label: 'Origin',        value: 'Dubai, UAE' },
                    { label: 'Destination',   value: 'Colombo, LK' },
                    { label: 'Service',       value: 'Air Freight' },
                    { label: 'Status',        value: 'In Transit', accent: true },
                  ].map(row => (
                    <div className="tracking__info-row" key={row.label}>
                      <span className="tracking__info-label">{row.label}</span>
                      <span className={`tracking__info-value ${row.accent ? 'tracking__status-in-transit' : ''}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="tracking__timeline">
                  {MOCK_EVENTS.map(ev => (
                    <div className="tracking__tl-item" key={ev.id}>
                      <div className="tracking__tl-left">
                        <div className={`tracking__tl-dot ${ev.done ? 'done' : ev.active ? 'active' : ''}`} />
                        <div className={`tracking__tl-line ${ev.done ? 'done' : ''}`} />
                      </div>
                      <div className="tracking__tl-content">
                        <div className={`tracking__tl-title ${!ev.done && !ev.active ? 'muted' : ''}`}>
                          {ev.title}
                        </div>
                        <div className="tracking__tl-time">{ev.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
