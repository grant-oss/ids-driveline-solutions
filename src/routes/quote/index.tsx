import { createFileRoute } from '@tanstack/react-router'
import { Clock3, MessageCircle, ShieldCheck } from 'lucide-react'
import { QuoteForm } from '@/components/QuoteForm'
import { PageHero, PageShell, whatsappHref } from '@/components/SiteShell'

export const Route = createFileRoute('/quote/')({ component: QuotePage })

function QuotePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Technical enquiry" title="Tell us what the truck is doing." intro="Provide the operating symptoms and available vehicle details so the right specialist can assess your gearbox or driveline requirement." number="04" />
      <section className="quote-section section-pad">
        <div className="container quote-layout">
          <aside className="quote-aside">
            <span className="eyebrow">Before you submit</span>
            <h2>Better detail leads to faster assessment.</h2>
            <p>Include the truck model, gearbox symptoms and clear images of the ID plate or affected components where possible.</p>
            <div className="aside-points">
              <div><Clock3 /><span><strong>Focused response</strong>Details route to a driveline specialist.</span></div>
              <div><ShieldCheck /><span><strong>Technical review</strong>Images help confirm parts and unit identity.</span></div>
            </div>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="aside-whatsapp"><MessageCircle /> Prefer WhatsApp?<span>Start a direct enquiry</span></a>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </PageShell>
  )
}
