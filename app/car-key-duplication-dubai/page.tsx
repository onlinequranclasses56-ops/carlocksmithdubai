import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { getServiceBySlug, SERVICES } from '@/lib/services'
import { servicePageGraph } from '@/lib/schema'

const service = getServiceBySlug('car-key-duplication-dubai')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: SITE_URL + service.href },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: SITE_URL + service.href, type: 'website' },
}

const ALL_FAQS = [
  ...service.faq,
  {
    question: 'Where can I get a car key made in Dubai?',
    answer:
      'Car Locksmith Dubai provides mobile key cutting and duplication across all Dubai areas. Call +971 52 642 6161 and we come to your location — home, office or roadside. No need to visit a shop or dealership.',
  },
  {
    question: 'Can a spare key be made from the VIN number?',
    answer:
      'Yes. The vehicle identification number (VIN) contains the key code that determines the blade profile. A professional locksmith can cut a new key directly from the VIN, without needing the original key as a template. Ownership documents (Emirates ID and Mulkiya) are required.',
  },
  {
    question: 'How long does car key duplication take in Dubai?',
    answer:
      'Standard metal key duplication takes around 10 to 20 minutes. Transponder key duplication (cutting + chip programming) typically takes 30 to 45 minutes on-site. Smart key and proximity key duplication may take up to 60 minutes.',
  },
  {
    question: 'What is the cheapest way to get a duplicate car key in Dubai?',
    answer:
      'A mobile locksmith is typically less expensive than a main dealership for duplicate car keys, particularly for transponder and smart keys. The exact cost depends on the key type and vehicle model. Contact us for a quote.',
  },
]

const KEY_TYPES = [
  { name: 'Standard Metal Key', desc: 'Basic blade profile copied from original. Fast and low cost.', time: '15 min' },
  { name: 'Transponder Key', desc: 'Blade cut + chip programmed to immobiliser. Full working spare.', time: '30–45 min' },
  { name: 'Remote Key Fob', desc: 'Central locking remote paired to your vehicle.', time: '30–45 min' },
  { name: 'Flip Key', desc: 'Folding key blade + remote. Cut and programmed together.', time: '45–60 min' },
  { name: 'Smart / Proximity Key', desc: 'Keyless entry fob synchronised to your car system.', time: '45–60 min' },
]

export default function CarKeyDuplicationPage() {
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
              Key Duplication · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Key Duplication in Dubai
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              Spare key cutting and duplication for all vehicle types across{' '}
              <Link href="/areas/" className="text-brand-gold hover:underline">all Dubai areas</Link>
              . Copy from your original or have a new key cut from your VIN. Includes{' '}
              <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">transponder programming</Link>{' '}
              for modern vehicles. Call{' '}
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

      {/* Key type table */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-4">
                  Key Duplication by Type
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  The time and cost of car key duplication in Dubai depends on the type of key.
                  Simple metal keys require only cutting. Modern keys with electronic chips require
                  cutting plus{' '}
                  <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                    programming to your immobiliser
                  </Link>
                  .
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-3 pr-4 text-zinc-400 font-medium">Key Type</th>
                        <th className="text-left py-3 pr-4 text-zinc-400 font-medium">What&apos;s Involved</th>
                        <th className="text-left py-3 text-zinc-400 font-medium">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {KEY_TYPES.map((row) => (
                        <tr key={row.name} className="border-b border-zinc-800/60 hover:bg-zinc-900/30 transition-colors">
                          <td className="py-3 pr-4 text-white font-medium">{row.name}</td>
                          <td className="py-3 pr-4 text-zinc-400">{row.desc}</td>
                          <td className="py-3 text-brand-gold text-xs font-medium">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Why have a spare key */}
              <div>
                <h2 className="text-xl font-black text-white font-display mb-3">
                  Why Get a Spare Car Key?
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-4 speakable">
                  Having a spare car key is the most effective way to avoid being stranded if your
                  original is{' '}
                  <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                    lost
                  </Link>
                  {' '}or damaged. Getting a spare made when you already have a working key is
                  significantly faster and less expensive than a full{' '}
                  <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                    car key replacement
                  </Link>{' '}
                  after the fact — there is no VIN-only lookup or extended programming process when
                  the original key is present.
                </p>
              </div>

              {/* Documents box */}
              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                <h3 className="text-white font-bold mb-3 font-display">What You Need</h3>
                <ul className="space-y-2 text-zinc-300 text-sm mb-4">
                  {[
                    'Original working key (for standard duplication)',
                    'Emirates ID or valid passport',
                    'Vehicle Mulkiya (required for transponder/smart key programming)',
                    'Be present at the vehicle',
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
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
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Get a Duplicate Key</h3>
                  <p className="text-zinc-400 text-sm mb-5">Tell us your vehicle make, model and location in Dubai.</p>
                  <CTAButtons size="md" layout="column" />
                  <div className="mt-5 pt-5 border-t border-zinc-800 space-y-1 text-xs text-zinc-600">
                    <p>{BUSINESS.addressDisplay}</p>
                    <p>Shop: {BUSINESS.hours.shop}</p>
                    <p>Mobile: {BUSINESS.hours.mobile}</p>
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
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900" aria-labelledby="dup-faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="dup-faq-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Car Key Duplication — Questions
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
    </>
  )
}
