import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { getServiceBySlug, SERVICES } from '@/lib/services'
import { servicePageGraph } from '@/lib/schema'

const service = getServiceBySlug('car-key-replacement-dubai')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: SITE_URL + service.href },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: SITE_URL + service.href, type: 'website' },
}

const ALL_FAQS = [...service.faq,
  {
    question: 'How much does car key replacement cost in Dubai?',
    answer:
      'The cost depends on your vehicle make, model, and key type. Standard metal key replacement is less expensive than smart key or transponder key replacement, which requires programming equipment. Contact us for a specific quote for your vehicle.',
  },
  {
    question: 'Can I get a car key replacement without visiting a dealership?',
    answer:
      'Yes. A professional automotive locksmith with dealer-grade programming tools can replace most car keys on-site in Dubai. Ownership documents are still required. Contact Car Locksmith Dubai on +971 52 642 6161 to confirm your specific vehicle.',
  },
]

const STEPS = [
  { step: '01', title: 'Call or WhatsApp', desc: 'Contact us with your vehicle make, model, year and Dubai location.' },
  { step: '02', title: 'Verify Ownership', desc: 'Present your Emirates ID and vehicle Mulkiya to confirm you own the vehicle.' },
  { step: '03', title: 'Key Cut & Programmed', desc: 'New key cut to your VIN, programmed to your immobiliser on-site.' },
  { step: '04', title: 'Tested & Confirmed', desc: 'Key tested to confirm it starts and operates all locks correctly.' },
]

export default function CarKeyReplacementPage() {
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
              Car Key Replacement · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Key Replacement in Dubai
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              Complete car key replacement for{' '}
              <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                lost
              </Link>
              , broken or stolen keys. New keys cut and{' '}
              <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                programmed
              </Link>{' '}
              on-site across{' '}
              <Link href="/areas/" className="text-brand-gold hover:underline">all Dubai areas</Link>
              . No towing. Call{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-semibold hover:underline">{BUSINESS.phoneDisplay}</a>.
            </p>
            <CTAButtons size="lg" />
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-10 bg-[#0D0D0D] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-zinc-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20" aria-labelledby="replacement-process-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="replacement-process-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-8">
                How Car Key Replacement Works
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {STEPS.map((step) => (
                  <div key={step.step} className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-3">
                      <span className="text-brand-gold font-black text-sm font-display">{step.step}</span>
                    </div>
                    <h3 className="text-white font-bold mb-1.5 font-display">{step.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6 mb-8">
                <h3 className="text-white font-bold text-lg mb-3 font-display">Required Documentation</h3>
                <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
                  Per Dubai ownership verification requirements, you will need:
                </p>
                <ul className="space-y-2 mb-4">
                  {['Emirates ID or valid passport', 'Vehicle Mulkiya (registration card — RTA Dubai)', 'Physical presence at the vehicle'].map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <a href="https://www.rta.ae" target="_blank" rel="noopener noreferrer" className="text-zinc-500 text-xs hover:text-brand-gold transition-colors">
                  About Mulkiya — RTA Dubai →
                </a>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-black text-white font-display">When to Replace vs Repair</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  If the key is{' '}
                  <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">completely lost</Link>
                  , stolen, or the electronic chip is irreparably damaged, replacement is required.
                  For physical damage — cracked shells, broken remotes, worn blades — see our{' '}
                  <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">car key repair service</Link>
                  {' '}first, which may resolve the issue at lower cost.
                </p>
              </div>

              <div className="mt-8">
                <RelatedServices currentSlug={service.slug} title="Other Car Key Services" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Get a Replacement Key</h3>
                  <p className="text-zinc-400 text-sm mb-5">Have your vehicle details and documents ready.</p>
                  <CTAButtons size="md" layout="column" />
                </div>
                <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                  <h3 className="text-zinc-400 text-xs uppercase tracking-wider mb-3">All Services</h3>
                  <nav>
                    <ul className="space-y-1">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link href={s.href} className={`block px-3 py-2 rounded-lg text-sm transition-colors ${s.slug === service.slug ? 'bg-brand-gold/10 text-brand-gold font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}>
                            {s.shortTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900" aria-labelledby="replacement-faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="replacement-faq-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Car Key Replacement — Questions
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            See also:{' '}
            <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">lost car keys Dubai</Link>
            {' · '}
            <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">key programming</Link>
            {' · '}
            <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">car key repair</Link>
          </p>
          <div className="max-w-2xl">
            <FAQAccordion items={ALL_FAQS} />
          </div>
        </div>
      </section>
    </>
  )
}
