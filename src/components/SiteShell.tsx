import { Link } from '@tanstack/react-router'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Parts', to: '/parts' },
  { label: 'Truck Models', to: '/models' },
]

export const whatsappHref =
  'https://wa.me/?text=I%27d%20like%20to%20speak%20to%20an%20Isuzu%20driveline%20specialist.'

export function BrandMark() {
  return (
    <div className="brand" aria-label="Isuzu Driveline Solutions">
      <span className="brand-mark">IDS</span>
      <span className="brand-copy">
        <strong>ISUZU</strong>
        <span>DRIVELINE SOLUTIONS</span>
      </span>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="utility-bar">
        <span>National commercial driveline support</span>
        <span className="status-dot">Workshop capacity available</span>
      </div>
      <div className="header-main container-wide">
        <Link to="/" className="brand-link" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: 'active' }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a className="mobile-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp enquiry
          </a>
        </nav>
        <div className="header-actions">
          <a className="icon-button" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp enquiry">
            <MessageCircle size={19} />
          </a>
          <Link to="/quote" className="button button-red button-compact">
            Request Quote
          </Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandMark />
          <p>South Africa&apos;s focused Isuzu truck gearbox and driveline specialists.</p>
        </div>
        <div>
          <span className="footer-label">Capabilities</span>
          <a href="/services">Gearbox repairs</a>
          <a href="/services">Differential repairs</a>
          <a href="/parts">Parts supply</a>
        </div>
        <div>
          <span className="footer-label">Support</span>
          <a href="/models">Truck models</a>
          <a href="/quote">Request a quote</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp specialist</a>
        </div>
        <div className="footer-cta">
          <span className="eyebrow">Keep your fleet moving</span>
          <h3>Technical support when downtime costs.</h3>
          <Link to="/quote" className="text-link">Start an enquiry <span>↗</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Isuzu Driveline Solutions</span>
        <span>Commercial gearbox engineering · South Africa</span>
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={22} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

export function PageHero({ eyebrow, title, intro, number }: { eyebrow: string; title: string; intro: string; number: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid container">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
        <p>{intro}</p>
        <span className="page-number">/{number}</span>
      </div>
    </section>
  )
}
