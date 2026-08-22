import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Boxes, Gauge, ScanSearch, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { PageHero, PageShell } from '@/components/SiteShell'

export const Route = createFileRoute('/services/')({ component: ServicesPage })

const capabilities = [
  { icon: Gauge, title: 'Gearbox Repairs', label: 'TRANSMISSION', text: 'Diagnosis and professional repair of noise, gear selection faults, jumping gears, bearing failure and internal transmission damage.', items: ['Manual gearbox repairs', 'Complete strip & assessment', 'Bearing and synchro replacement', 'Rebuild and quality verification'] },
  { icon: ShieldCheck, title: 'Differential Repairs', label: 'FINAL DRIVE', text: 'Assessment and repair of differential assemblies to resolve noise, vibration, excessive play and component failure.', items: ['Crown wheel & pinion', 'Bearing replacement', 'Ratio identification', 'Centre portion rebuilds'] },
  { icon: Boxes, title: 'Parts Supply', label: 'COMPONENTS', text: 'A focused supply network for new, used and reconditioned Isuzu gearbox parts and complete transmission units.', items: ['New gearbox parts', 'Quality used components', 'Reconditioned units', 'Nationwide dispatch'] },
  { icon: Truck, title: 'Fleet Support', label: 'UPTIME', text: 'Commercially minded support for fleet operators who need clear assessment, responsive sourcing and predictable repair communication.', items: ['Multi-vehicle support', 'Technical parts matching', 'Downtime prioritisation', 'Repair status communication'] },
]

function ServicesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Technical capability" title="Commercial driveline services engineered for uptime." intro="Focused technical support for Isuzu truck gearboxes, differential systems and the fleets that rely on them." number="01" />
      <section className="capabilities section-pad">
        <div className="container capability-list">
          {capabilities.map(({ icon: Icon, title, label, text, items }, index) => (
            <article className="capability-row" key={title}>
              <div className="capability-number">0{index + 1}</div>
              <div className="capability-icon"><Icon size={31} /></div>
              <div className="capability-main"><span>{label}</span><h2>{title}</h2><p>{text}</p></div>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link to="/quote" className="round-link" aria-label={`Enquire about ${title}`}><ArrowUpRight /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="diagnostic-band">
        <div className="container diagnostic-grid">
          <div className="diagnostic-icon"><ScanSearch size={44} /></div>
          <div><span className="eyebrow">Not sure what failed?</span><h2>Start with the symptoms.</h2></div>
          <p>Send the model, operating symptoms and any available photos. A technical specialist can guide the next step.</p>
          <Link to="/quote" className="button button-red">Describe the problem <Wrench size={17} /></Link>
        </div>
      </section>
    </PageShell>
  )
}
