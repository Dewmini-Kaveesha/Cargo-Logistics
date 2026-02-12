import { useState, useEffect } from 'react'
import './Navbar.css'

// Navigation links configuration
const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tracking', href: '#tracking' },
  { label: 'Fleet',    href: '#fleet' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Detect scroll to apply sticky styles
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          {/* Logo */}
          <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
            <div className="navbar__logo-icon">
              {/* Simple SVG truck icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1"/>
                <path d="M16 8h4l3 4v4h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <span className="navbar__logo-text">SWIFT<span>CARGO</span></span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#contact" className="navbar__cta">
            {/* Phone icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.69a16 16 0 006.29 6.29l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Get Quote
          </a>

          {/* Mobile Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-cta">
            <a href="#contact" className="btn-primary" onClick={handleLinkClick}>
              Get a Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
