import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, BadgeCheck, Boxes, Gauge, MessageCircle, ShieldCheck, Truck } from 'lucide-react'
import { DrivelineVisual } from '@/components/IndustrialVisuals'
import { PageShell, whatsappHref } from '@/components/SiteShell'

export const Route = createFileRoute('/')({ component: HomePage })

const services = [
  { number: '01', icon: Gauge, title: 'Gearbox Repairs', text: 'Professional fault diagnosis, teardown, repair and load-focused testing for Isuzu truck transmissions.' },
  { number: '02', icon: ShieldCheck, title: 'Differential Repairs', text: 'Crown wheel, pinion, bearing and complete differential centre portion assessment and repair.' },
  { number: '03', icon: Boxes, title: 'Parts Supply', text: 'New and used Isuzu gearbox components, reconditioned units and hard-to-source driveline parts.' },
  { number: '04', icon: Truck, title: 'Fleet Support', text: 'Responsive technical support designed around the uptime demands of commercial truck operators.' },
]

const models = ['NPR', 'NQR', 'FRR', 'FTR', 'FVM', 'FVZ', 'GIGA']

function HomePage() {
  return (
    <PageShell>
      <section className="home-hero">
        <div className="container-wide hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-line" /> Gearbox engineering / South Africa</div>
            <h1>South Africa&apos;s Isuzu Truck <em>Gearbox Specialists</em></h1>
            <p>New, Used and Reconditioned Gearboxes, Parts &amp; Professional Repairs</p>
            <div className="hero-actions">
              <Link to="/quote" className="button button-red">Request Quote <ArrowUpRight size={17} /></Link>
              <Link to="/quote" className="button button-ghost">Contact Specialist</Link>
            </div>
            <div className="hero-proof">
              <div><strong>National</strong><span>Parts &amp; unit supply</span></div>
              <div><strong>Isuzu</strong><span>Focused expertise</span></div>
              <div><strong>Fleet</strong><span>Downtime support</span></div>
            </div>
          </div>
          <DrivelineVisual />
        </div>
        <div className="hero-rail"><span>INSPECTION</span><span>REBUILD</span><span>RECONDITION</span><span>SUPPLY</span></div>
      </section>

      <section className="credibility-strip">
        <div className="container credibility-grid">
          <div className="section-index">01 — CAPABILITY</div>
          <h2>Precision driveline support built around commercial uptime.</h2>
          <p>From individual owner-drivers to national fleet operators, every enquiry receives focused technical assessment and a practical route back to service.</p>
          <div className="compliance-note"><BadgeCheck size={20} /> Commercial-grade workmanship</div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Core capabilities</span><h2>Driveline expertise.<br /><span>One specialist partner.</span></h2></div>
            <p>Focused support across the components that keep Isuzu commercial vehicles productive.</p>
          </div>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, text }) => (
              <Link to="/services" className="service-card" key={title}>
                <div className="service-card-top"><span>{number}</span><Icon size={25} /></div>
                <h3>{title}</h3><p>{text}</p>
                <span className="card-link">Explore capability <ArrowUpRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="engineering-section">
        <div className="container engineering-grid">
          <div className="engineering-visual">
            <div className="tech-circle"><span>6</span><small>STAGE<br />PROCESS</small></div>
            <div className="shaft-diagram"><i /><i /><i /><i /><i /><i /></div>
            <div className="engineering-stamp">DRIVELINE<br />ENGINEERING</div>
          </div>
          <div className="engineering-copy">
            <span className="eyebrow">Workshop methodology</span>
            <h2>Rebuilt with purpose.<br />Tested for the road.</h2>
            <p>Our process starts with the operating symptoms and ends with a transmission solution matched to the truck, application and commercial demands.</p>
            <ol className="process-list">
              <li><span>01</span> Technical assessment</li><li><span>02</span> Strip &amp; inspect</li><li><span>03</span> Component report</li><li><span>04</span> Precision rebuild</li><li><span>05</span> Quality verification</li><li><span>06</span> Return to service</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="models-section section-pad">
        <div className="container">
          <div className="section-heading models-heading"><span className="eyebrow">Vehicle coverage</span><h2>Built around the Isuzu truck range.</h2></div>
          <div className="model-ticker">
            {models.map((model, index) => <Link key={model} to="/models"><small>0{index + 1}</small>{model}<ArrowUpRight size={18} /></Link>)}
          </div>
        </div>
      </section>

      <section className="national-cta">
        <div className="container national-grid">
          <div><span className="eyebrow">National support</span><h2>A driveline partner for the road ahead.</h2></div>
          <p>Send the truck model, symptoms and component images. Our team can help identify the right repair, part or replacement unit.</p>
          <div className="cta-stack">
            <Link to="/quote" className="button button-light">Request Technical Quote <ArrowUpRight size={17} /></Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="whatsapp-link"><MessageCircle size={18} /> WhatsApp enquiry</a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
