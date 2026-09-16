import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { getServiceBySlug, SERVICES } from '@/lib/services'
import { servicePageGraph } from '@/lib/schema'

const service = getServiceBySlug('car-key-service-dubai')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: SITE_URL + service.href },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: SITE_URL + service.href,
    type: 'website',
  },
}

const ALL_FAQS = [
  ...service.faq,
  {
    question: 'Do I need to book in advance for car key service in Dubai?',
    answer:
      'No advance booking is required. Call or WhatsApp +971 52 642 6161 and we will advise on availability and dispatch a mobile unit to your location in Dubai.',
  },
  {
    question: 'What documents do I need for a car key service in Dubai?',
    answer:
      'For key programming and replacement, you need your Emirates ID and vehicle registration card (Mulkiya) as issued by the Dubai Roads and Transport Authority (RTA). These are required to verify vehicle ownership before any key is programmed.',
  },
  {
    question: 'Can you cut a car key without the original?',
    answer:
      'Yes. Using the vehicle identification number (VIN) and professional key cutting equipment, we can cut a new key blank to match your vehicle\'s lock without needing the original as a template.',
  },
]

export default function CarKeyServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicePageGraph(service, ALL_FAQS)),
        }}
      />

      {/* Header */}
      <div className="pt-24 md:pt-28 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Breadcrumb items={[{ name: service.title, href: service.href }]} />
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-medium uppercase tracking-wide mb-4">
              Car Key Service · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Key Service in Dubai
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              Professional{' '}
              <strong className="text-white font-medium">car key cutting, duplication and programming</strong>{' '}
              for all vehicle makes and models. Mobile technicians across{' '}
              <Link href="/areas/" className="text-brand-gold hover:underline">
                all Dubai areas
              </Link>{' '}
              — we come to your location. Call{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-semibold hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
              .
            </p>
            <CTAButtons size="lg" />
          </div>
        </div>
      </div>

      {/* Feature checklist */}
      <section className="py-10 bg-[#0D0D0D] border-y border-zinc-900" aria-label="Service features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 bg-[#111111] border border-zinc-800 rounded-xl">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold/15 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-zinc-300 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-4">
                  What Is a Car Key Service?
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  A car key service covers everything required to provide a functional key for your
                  vehicle — including cutting the physical blade, programming any electronic chip,
                  and testing the key on your car. Modern vehicles require chip-programmed keys that
                  communicate with the immobiliser before the engine will start.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  We service all key types:{' '}
                  <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                    transponder chip keys
                  </Link>
                  ,{' '}
                  <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                    smart proximity keys
                  </Link>
                  , remote fobs, flip keys, and standard metal keys for most brands sold in the UAE.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-4">
                  Why Use a Mobile Car Key Service?
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  A mobile car key service saves the time and cost of transporting your vehicle to a
                  dealership. Our technicians carry full cutting and programming equipment and come
                  to your home, workplace or roadside location anywhere in{' '}
                  <Link href="/areas/" className="text-brand-gold hover:underline">
                    Dubai
                  </Link>
                  .
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  If you have{' '}
                  <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                    lost your car keys
                  </Link>
                  , need a{' '}
                  <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                    replacement key
                  </Link>
                  , or want to{' '}
                  <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">
                    repair a damaged key
                  </Link>
                  , our mobile service handles all of these on-site.
                </p>
              </div>

              {/* Documents required box */}
              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-3 font-display">
                  Documents Required
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                  For key programming or replacement, in line with Dubai requirements:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Emirates ID or valid passport',
                    'Vehicle registration card (Mulkiya) issued by RTA Dubai',
                    'You must be present at the vehicle',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.rta.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 text-xs hover:text-brand-gold transition-colors"
                >
                  More about Mulkiya (RTA Dubai) →
                </a>
              </div>

              {/* Key types table */}
              <div>
                <h2 className="text-2xl font-black text-white font-display mb-4">
                  Key Types We Service
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 pr-4 text-zinc-400 font-medium">Key Type</th>
                        <th className="text-left py-3 pr-4 text-zinc-400 font-medium">Description</th>
                        <th className="text-left py-3 text-zinc-400 font-medium">Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: 'Standard Metal Key', desc: 'Basic mechanical key, no chip', svc: 'Cut & duplicate' },
                        { type: 'Transponder Key', desc: 'Embedded chip for immobiliser', svc: 'Cut & programme' },
                        { type: 'Remote Key Fob', desc: 'Wireless lock/unlock remote', svc: 'Programme & repair' },
                        { type: 'Flip Key', desc: 'Folding key with remote fob', svc: 'Cut & programme' },
                        { type: 'Smart / Proximity Key', desc: 'Keyless entry & push start', svc: 'Programme on-site' },
                      ].map((row) => (
                        <tr key={row.type} className="border-b border-zinc-800/60 hover:bg-zinc-900/30 transition-colors">
                          <td className="py-3 pr-4 text-white font-medium">{row.type}</td>
                          <td className="py-3 pr-4 text-zinc-400">{row.desc}</td>
                          <td className="py-3 text-brand-gold">{row.svc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Related services — internal linking */}
              <RelatedServices currentSlug={service.slug} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Get Car Key Help</h3>
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    Tell us your vehicle make, model and{' '}
                    <Link href="/areas/" className="text-brand-gold hover:underline">
                      Dubai location
                    </Link>
                    .
                  </p>
                  <CTAButtons size="md" layout="column" />
                  <div className="mt-5 pt-5 border-t border-zinc-800 space-y-2 text-xs text-zinc-600">
                    <p>{BUSINESS.addressDisplay}</p>
                    <p>Shop: {BUSINESS.hours.shop}</p>
                    <p>Mobile: {BUSINESS.hours.mobile}</p>
                  </div>
                </div>

                {/* Sidebar service nav */}
                <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                  <h3 className="text-zinc-400 text-xs uppercase tracking-wider mb-3">All Services</h3>
                  <nav>
                    <ul className="space-y-1">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={s.href}
                            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                              s.slug === service.slug
                                ? 'bg-brand-gold/10 text-brand-gold font-medium'
                                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                            }`}
                          >
                            {s.shortTitle}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/areas/" className="block px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                          Service Areas
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900" aria-labelledby="service-faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 id="service-faq-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
              Car Key Service — Common Questions
            </h2>
            <p className="text-zinc-500 text-sm">
              Also see:{' '}
              <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">car key repair</Link>
              {' · '}
              <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">car key replacement</Link>
              {' · '}
              <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">lost car keys</Link>
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <FAQAccordion items={ALL_FAQS} />
          </div>
        </div>
      </section>
    </>
  )
}
