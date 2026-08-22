import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Truck } from 'lucide-react'
import { PageHero, PageShell } from '@/components/SiteShell'

export const Route = createFileRoute('/models/')({ component: ModelsPage })

const models = [
  { name: 'NPR', segment: 'Light Duty', descriptor: 'Urban delivery & distribution', code: 'N-SERIES / 01' },
  { name: 'NQR', segment: 'Light Duty', descriptor: 'High-capacity distribution', code: 'N-SERIES / 02' },
  { name: 'FRR', segment: 'Medium Duty', descriptor: 'Regional freight & logistics', code: 'F-SERIES / 03' },
  { name: 'FTR', segment: 'Medium Duty', descriptor: 'Commercial haulage applications', code: 'F-SERIES / 04' },
  { name: 'FVM', segment: 'Heavy Duty', descriptor: 'Multi-axle freight operations', code: 'F-SERIES / 05' },
  { name: 'FVZ', segment: 'Heavy Duty', descriptor: 'Severe commercial applications', code: 'F-SERIES / 06' },
  { name: 'Giga', segment: 'Extra Heavy', descriptor: 'Long-haul & high-GCM work', code: 'C/E-SERIES / 07' },
]

function ModelsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Truck coverage" title="Specialist support across the Isuzu range." intro="Gearbox, differential and parts support for established Isuzu light, medium and heavy commercial platforms." number="03" />
      <section className="models-catalogue section-pad">
        <div className="container">
          <div className="models-intro"><span>MODEL RANGE</span><p>Select a platform to start a technical parts or repair enquiry.</p></div>
          <div className="model-grid">
            {models.map((model) => (
              <Link to="/quote" className="model-card" key={model.name}>
                <div className="model-code">{model.code}</div>
                <Truck className="model-truck-icon" strokeWidth={1.25} />
                <span>{model.segment}</span><h2>{model.name}</h2><p>{model.descriptor}</p>
                <div className="model-action">Request support <ArrowRight size={18} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
