import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { getServiceBySlug, SERVICES } from '@/lib/services'
import { servicePageGraph } from '@/lib/schema'

const service = getServiceBySlug('car-unlock-service-dubai')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: SITE_URL + service.href },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: SITE_URL + service.href, type: 'website' },
}

const ALL_FAQS = [
  ...service.faq,
  {
    question: 'Is it legal to call a locksmith to unlock my car in Dubai?',
    answer:
      'Yes. Calling a professional locksmith to unlock your vehicle is entirely legal provided you own the vehicle. You will need to show your Emirates ID and vehicle Mulkiya to confirm ownership. A locksmith will not proceed without seeing documentation.',
  },
  {
    question: 'What if my keys are locked inside a running car in Dubai?',
    answer:
      'This is an urgent situation, especially in Dubai\'s heat. Call +971 52 642 6161 immediately. Do not attempt to break a window unless there is a medical emergency inside — our technicians can arrive and open the vehicle using professional tools quickly.',
  },
  {
    question: 'Can I unlock my car myself without a locksmith?',
    answer:
      'Without the right tools, attempting to unlock a modern vehicle yourself risks damaging the door seals, lock mechanism or paint. Professional locksmiths use specialised slim jim tools and air wedge systems designed for each vehicle type. The risk of DIY damage typically outweighs the cost of a professional call-out.',
  },
]

const LOCKOUT_REASONS = [
  { title: 'Keys Locked Inside', desc: 'Keys left on the seat, floor or boot with the door closed. Most common lockout scenario.' },
  { title: 'Broken Key in Lock', desc: 'Key snapped in the door lock or ignition barrel. Requires extraction before entry.' },
  { title: 'Faulty Door Lock', desc: 'Lock cylinder jammed, actuator failed, or central locking malfunction. Door will not respond.' },
  { title: 'Lost Key Lockout', desc: 'No key at all — combined unlock + new key service to get you back in and driving.' },
]

export default function CarUnlockServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageGraph(service, ALL_FAQS)) }}
      />

      <div className="pt-24 md:pt-28 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Breadcrumb items={[{ name: service.title, href: service.href }]} />
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-medium uppercase tracking-wide mb-4">
              Car Unlock Service · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Unlock Service in Dubai
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              Locked out of your car in Dubai? Mobile vehicle unlock service across{' '}
              <Link href="/areas/" className="text-brand-gold hover:underline">all Dubai areas</Link>
              , 24/7. Safe, damage-free entry — keys inside, broken key, or faulty lock. If you also need a{' '}
              <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">new key</Link>
              , we carry full equipment on-site. Call{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-semibold hover:underline">{BUSINESS.phoneDisplay}</a>{' '}
              now.
            </p>
            <CTAButtons size="lg" />
          </div>
        </div>
      </div>

      {/* Lockout types */}
      <section className="py-12 md:py-16 bg-[#0D0D0D] border-y border-zinc-900" aria-labelledby="lockout-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="lockout-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-8">
            Car Lockout Situations We Handle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {LOCKOUT_REASONS.map((item) => (
              <div key={item.title} className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-2 font-display">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-4">
                  What Happens When You Call
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  When you contact us for a car unlock in Dubai, we will ask for your vehicle make,
                  model, colour and exact location. A mobile technician is dispatched with the
                  appropriate tools for your vehicle type. Arrival time varies by location and
                  demand — call +971 52 642 6161 for an estimated time for your specific area.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  If the lockout is combined with a key issue — such as a broken key or{' '}
                  <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                    lost keys
                  </Link>
                  {' '} — our technicians carry full{' '}
                  <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                    key replacement
                  </Link>{' '}
                  equipment on the same visit. Emirates ID and Mulkiya required for new key programming.
                </p>
              </div>

              {/* What to do now */}
              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-5">
                <h3 className="text-brand-gold font-semibold mb-3 font-display">Locked Out? Do This Now</h3>
                <ol className="space-y-2">
                  {[
                    'Stay with the vehicle — do not leave it unattended.',
                    'Move to shade or a safe location nearby.',
                    'Call +971 52 642 6161 — have your vehicle make, model and location ready.',
                    'Do not attempt to force the door open.',
                    'Have your Emirates ID ready to confirm ownership.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <span className="w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <RelatedServices currentSlug={service.slug} title="Other Car Key Services" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Locked Out?</h3>
                  <p className="text-zinc-400 text-sm mb-5">Call now — mobile service 24/7 across all Dubai areas.</p>
                  <CTAButtons size="md" layout="column" />
                  <div className="mt-5 pt-5 border-t border-zinc-800 space-y-1 text-xs text-zinc-600">
                    <p>{BUSINESS.addressDisplay}</p>
                    <p>Mobile: <span className="text-brand-gold/70">{BUSINESS.hours.mobile}</span></p>
                  </div>
                </div>
                <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                  <h3 className="text-zinc-400 text-xs uppercase tracking-wider mb-3">All Services</h3>
                  <nav><ul className="space-y-1">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link href={s.href} className={`block px-3 py-2 rounded-lg text-sm transition-colors ${s.slug === service.slug ? 'bg-brand-gold/10 text-brand-gold font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}>
                          {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul></nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900" aria-labelledby="unlock-faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="unlock-faq-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Car Unlock Service — Questions
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            See also:{' '}
            <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">lost car keys</Link>
            {' · '}
            <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">key replacement</Link>
            {' · '}
            <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">key repair</Link>
          </p>
          <div className="max-w-2xl">
            <FAQAccordion items={ALL_FAQS} />
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-brand-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-zinc-950 font-display mb-2">Locked out? Call us now.</h2>
          <p className="text-zinc-800 mb-5">Mobile vehicle unlock — all Dubai areas — {BUSINESS.hours.mobile}</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 px-7 py-4 bg-zinc-950 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors text-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  )
}
