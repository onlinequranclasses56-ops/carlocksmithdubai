import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { getServiceBySlug, SERVICES } from '@/lib/services'
import { servicePageGraph } from '@/lib/schema'

const service = getServiceBySlug('lost-car-keys-dubai')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: SITE_URL + service.href },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: SITE_URL + service.href, type: 'website' },
}

const ALL_FAQS = [
  ...service.faq,
  {
    question: 'Can a locksmith replace lost car keys in Dubai without the original?',
    answer:
      'Yes. Using the vehicle identification number (VIN) and professional key cutting equipment, a new key can be cut without needing the original. The new key is then programmed to your immobiliser on-site. Emirates ID and Mulkiya are required to verify ownership.',
  },
  {
    question: 'My car keys were stolen in Dubai — what should I do?',
    answer:
      'Report the theft to Dubai Police and obtain a police report. Contact a locksmith to have new keys made and, if desired, have the immobiliser reprogrammed so the stolen keys no longer start the vehicle. Call Car Locksmith Dubai on +971 52 642 6161.',
  },
]

export default function LostCarKeysPage() {
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
              Lost Car Keys · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Lost Your Car Keys in Dubai?
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              Mobile{' '}
              <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                car key replacement
              </Link>{' '}
              and{' '}
              <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                programming
              </Link>{' '}
              across{' '}
              <Link href="/areas/" className="text-brand-gold hover:underline">all Dubai areas</Link>
              . We come to you — no towing required. Call{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-semibold hover:underline">{BUSINESS.phoneDisplay}</a>{' '}
              now.
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

      {/* Content + sidebar */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">

              {/* What to do now */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-4">
                  What to Do Right Now
                </h2>
                <ol className="space-y-4">
                  {[
                    'Stay calm and stay with your vehicle if it is safe to do so.',
                    'Check if your vehicle is locked or unlocked — do not leave it unsecured.',
                    'Locate your Emirates ID and vehicle registration card (Mulkiya).',
                    'Call or WhatsApp us with your location and vehicle details.',
                    'Wait for the mobile technician — do not attempt to break in.',
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-[#111111] border border-zinc-800 rounded-xl">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold text-xs font-black font-display">
                        {index + 1}
                      </span>
                      <span className="text-zinc-300 text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* What happens when you call */}
              <div>
                <h2 className="text-xl font-black text-white font-display mb-4">
                  What Happens When You Call
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  We will ask for your vehicle make, model, year, and current location in Dubai.
                  A mobile technician will be dispatched with equipment to cut and{' '}
                  <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                    programme a new key
                  </Link>{' '}
                  on-site. For most common vehicles, the full{' '}
                  <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                    car key replacement
                  </Link>{' '}
                  is completed without towing to a workshop or dealer.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  If your keys were stolen, we can advise on immobiliser reprogramming so that the
                  stolen keys no longer operate your vehicle. You may also wish to file a report
                  with{' '}
                  <a href="https://www.dubaipolice.gov.ae" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
                    Dubai Police
                  </a>
                  .
                </p>
              </div>

              {/* Documents */}
              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-5">
                <h3 className="text-brand-gold font-semibold mb-3 font-display">Documents to Have Ready</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  {[
                    'Emirates ID or valid passport',
                    'Vehicle registration card (Mulkiya) — issued by RTA Dubai',
                    'Be present at the vehicle',
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <a href="https://www.rta.ae" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-zinc-500 text-xs hover:text-brand-gold transition-colors">
                  About Mulkiya — RTA Dubai →
                </a>
              </div>

              <RelatedServices currentSlug={service.slug} title="Other Car Key Services" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Lost Your Keys?</h3>
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    Call or WhatsApp now. Have your Emirates ID and Mulkiya ready.
                  </p>
                  <CTAButtons size="md" layout="column" />
                  <div className="mt-5 pt-5 border-t border-zinc-800 space-y-1 text-xs text-zinc-600">
                    <p>{BUSINESS.addressDisplay}</p>
                    <p>Shop: {BUSINESS.hours.shop}</p>
                    <p>Mobile: {BUSINESS.hours.mobile}</p>
                  </div>
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
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900" aria-labelledby="lost-keys-faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="lost-keys-faq-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Lost Car Keys — Questions
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            See also:{' '}
            <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">car key replacement</Link>
            {' · '}
            <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">key programming</Link>
            {' · '}
            <Link href="/car-key-service-dubai/" className="text-brand-gold hover:underline">car key service</Link>
          </p>
          <div className="max-w-2xl">
            <FAQAccordion items={ALL_FAQS} />
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-brand-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-zinc-950 font-display mb-2">
            Lost your keys? Call us now.
          </h2>
          <p className="text-zinc-800 mb-5">Mobile service — all Dubai areas — {BUSINESS.hours.mobile}</p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 px-7 py-4 bg-zinc-950 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors text-lg"
          >
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
