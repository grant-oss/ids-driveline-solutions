import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, CircleCheck, MessageCircle } from 'lucide-react'
import { PartVisual } from '@/components/IndustrialVisuals'
import { PageHero, PageShell, whatsappHref } from '@/components/SiteShell'

export const Route = createFileRoute('/parts/')({ component: PartsPage })

const parts = [
  { code: 'ISZ-6M', name: 'Isuzu 6-Speed Manual Gearbox', price: 'R25,000', type: 'gearbox' as const, note: 'Inspected transmission unit', badge: 'AVAILABLE' },
  { code: 'MAN-AS', name: 'MAN Astronic Reconditioned Gearbox', price: 'R40,000', type: 'astronic' as const, note: 'Warranty Included', badge: 'RECONDITIONED' },
  { code: 'UG-780', name: 'UG780 Second-Hand Gearbox', price: 'R15,000', type: 'ug780' as const, note: 'Quality used unit', badge: 'USED' },
  { code: 'FTR-CP', name: 'Isuzu FTR800/FTR850 Centre Portions', price: 'Contact For Pricing', type: 'differential' as const, note: 'Multiple ratios available', badge: 'ENQUIRE' },
]

function PartsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Parts & units" title="The right component. Matched to the truck." intro="New, used and reconditioned gearbox components and driveline units, supported by specialist parts identification." number="02" />
      <section className="catalogue-section section-pad">
        <div className="container">
          <div className="catalogue-top"><p>Featured stock</p><span>Availability subject to confirmation</span></div>
          <div className="parts-grid">
            {parts.map((part, index) => (
              <article className="part-card" key={part.name}>
                <div className="part-card-image">
                  <span className="stock-badge">{part.badge}</span>
                  <span className="part-index">0{index + 1}</span>
                  <PartVisual type={part.type} />
                </div>
                <div className="part-card-content">
                  <span className="part-code">{part.code}</span>
                  <h2>{part.name}</h2>
                  <div className="part-meta"><strong>{part.price}</strong><span><CircleCheck size={15} /> {part.note}</span></div>
                  <Link to="/quote" className="part-enquire">Enquire about this unit <ArrowUpRight size={17} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="parts-assist">
        <div className="container parts-assist-grid">
          <div><span className="eyebrow">Parts identification</span><h2>Don&apos;t see the part you need?</h2></div>
          <p>Send a photo of the gearbox ID plate, truck model and VIN details. We&apos;ll help identify the correct component or compatible unit.</p>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-light"><MessageCircle size={18} /> Send details on WhatsApp</a>
        </div>
      </section>
    </PageShell>
  )
}
