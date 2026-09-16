import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { getServiceBySlug, SERVICES } from '@/lib/services'
import { servicePageGraph } from '@/lib/schema'

const service = getServiceBySlug('car-key-programming-dubai')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: SITE_URL + service.href },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: SITE_URL + service.href, type: 'website' },
}

const ALL_FAQS = [
  ...service.faq,
  {
    question: 'How long does car key programming take in Dubai?',
    answer:
      'Most transponder and smart key programming is completed in 30 to 60 minutes on-site. The time varies depending on the vehicle make, model and key type. Push-start proximity keys may take slightly longer.',
  },
  {
    question: 'Do I need to go to a dealership for car key programming in Dubai?',
    answer:
      'No. A professional automotive locksmith with dealer-grade programming tools can programme most car keys on-site anywhere in Dubai. You will need your Emirates ID and vehicle Mulkiya to verify ownership before programming begins.',
  },
]

const KEY_TYPES = [
  {
    name: 'Transponder Chip Keys',
    description:
      'Keys with an embedded electronic chip that communicates with the vehicle\'s immobiliser. The chip must be programmed to your specific vehicle before the engine will start.',
  },
  {
    name: 'Smart & Proximity Keys',
    description:
      'Keyless entry and push-button start systems. The key fob broadcasts a signal when within range. Programming synchronises the fob with your car\'s control unit.',
  },
  {
    name: 'Remote Key Fobs',
    description:
      'Remote locking and unlocking fobs that operate your central locking system. Programmed as part of a new key or as a standalone replacement fob.',
  },
  {
    name: 'Push-Start Systems',
    description:
      'Vehicles with keyless ignition require the fob to be present and recognised. We programme push-start fobs for most makes sold in the UAE.',
  },
]

export default function CarKeyProgrammingPage() {
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
              Car Key Programming · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Key Programming in Dubai
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              On-site transponder, smart key and remote fob programming for all vehicle makes across{' '}
              <Link href="/areas/" className="text-brand-gold hover:underline">all Dubai areas</Link>
              . No dealer visit needed. Combined with{' '}
              <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                key cutting
              </Link>{' '}
              or as a standalone service. Call{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-semibold hover:underline">{BUSINESS.phoneDisplay}</a>.
            </p>
            <CTAButtons size="lg" />
          </div>
        </div>
      </div>

      {/* Key types */}
      <section className="py-12 md:py-16 bg-[#0D0D0D] border-y border-zinc-900" aria-labelledby="key-types-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="key-types-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-8">
            Key Types We Programme
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {KEY_TYPES.map((type) => (
              <div key={type.name} className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12.65 10A6.001 6.001 0 0 0 1 12a6 6 0 0 0 11.65 2H17v2h2v-2h2v-2h-9.35zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-2 font-display">{type.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{type.description}</p>
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
                  Why Car Key Programming Matters
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Virtually all vehicles manufactured in the last two decades include an immobiliser
                  system. The immobiliser prevents the engine from starting unless it receives the
                  correct signal from a matched key chip. A key that fits the lock physically will
                  still not start the car without proper programming.
                </p>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  This applies to new keys made after a{' '}
                  <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                    lost key
                  </Link>
                  , spare keys during a{' '}
                  <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                    replacement
                  </Link>
                  , and fobs repaired as part of a{' '}
                  <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">
                    car key repair
                  </Link>
                  . Our technicians carry dealer-grade diagnostic and programming equipment to handle
                  this on-site across Dubai.
                </p>
              </div>

              {/* Brands */}
              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                <h3 className="text-white font-bold text-base mb-3 font-display">
                  Brands We Commonly Programme
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Toyota', 'Nissan', 'Honda', 'Hyundai', 'Kia', 'Mitsubishi',
                    'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus',
                    'Land Rover', 'Jeep', 'Dodge', 'GMC',
                  ].map((brand) => (
                    <span key={brand} className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-md">
                      {brand}
                    </span>
                  ))}
                </div>
                <p className="text-zinc-600 text-xs mt-3">
                  Contact us to confirm compatibility with your specific model and year.
                </p>
              </div>

              {/* Documents */}
              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-3 font-display">Documents Required for Programming</h3>
                <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
                  Per Dubai ownership verification requirements, you will need:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Emirates ID or valid passport',
                    'Vehicle Mulkiya (registration card — RTA Dubai)',
                    'Physical presence at the vehicle',
                  ].map((doc) => (
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

              <RelatedServices currentSlug={service.slug} title="Other Car Key Services" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Key Programming</h3>
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    Tell us your vehicle make, model, year and location. We will confirm availability.
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
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900" aria-labelledby="programming-faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="programming-faq-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Car Key Programming — Questions
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            See also:{' '}
            <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">car key replacement</Link>
            {' · '}
            <Link href="/car-key-service-dubai/" className="text-brand-gold hover:underline">car key service</Link>
            {' · '}
            <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">lost car keys</Link>
          </p>
          <div className="max-w-2xl">
            <FAQAccordion items={ALL_FAQS} />
          </div>
        </div>
      </section>
    </>
  )
}
