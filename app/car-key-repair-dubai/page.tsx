import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { getServiceBySlug, SERVICES } from '@/lib/services'
import { servicePageGraph } from '@/lib/schema'

const service = getServiceBySlug('car-key-repair-dubai')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: SITE_URL + service.href },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: SITE_URL + service.href, type: 'website' },
}

const ALL_FAQS = [
  ...service.faq,
  {
    question: 'How long does a car key repair take in Dubai?',
    answer:
      'Most repairs — shell replacement, button repair, battery swap — are completed in 15 to 30 minutes on-site. Transponder diagnostics may take longer depending on the fault.',
  },
  {
    question: 'Do I need my documents for a car key repair?',
    answer:
      'For cosmetic repairs (shell replacement, battery) your Emirates ID is sufficient. For any work involving the electronic chip or transponder, your Emirates ID and Mulkiya are required.',
  },
]

const REPAIR_TYPES = [
  { name: 'Broken Key Shell', desc: 'Cracked or split key casing replaced. Original blade and chip preserved.', icon: '🔧' },
  { name: 'Faulty Remote Buttons', desc: 'Unresponsive lock/unlock buttons. Button contacts and membrane repaired.', icon: '🔘' },
  { name: 'Key Fob Battery', desc: 'Dead or weak signal. Correct CR battery replaced on-site in minutes.', icon: '🔋' },
  { name: 'Key Cover Replacement', desc: 'Worn or cracked covers replaced for popular UAE vehicle brands.', icon: '🎨' },
  { name: 'Worn Key Blade', desc: 'Physical key no longer turns smoothly. Re-cut to original spec where possible.', icon: '🗝️' },
  { name: 'Transponder Chip', desc: 'Engine immobilises despite key turning. Chip fault diagnosed and addressed.', icon: '📡' },
]

export default function CarKeyRepairPage() {
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
              Car Key Repair · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Key Repair in Dubai
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              Fix broken, damaged or faulty car keys in Dubai without a full{' '}
              <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                replacement
              </Link>
              . Broken shells, unresponsive remotes, worn blades — our mobile technicians repair
              most issues on-site at your location.
            </p>
            <CTAButtons size="lg" />
          </div>
        </div>
      </div>

      {/* Repair types */}
      <section className="py-12 md:py-16 bg-[#0D0D0D] border-y border-zinc-900" aria-labelledby="repair-types-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="repair-types-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-8">
            Types of Car Key Repairs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REPAIR_TYPES.map((type) => (
              <div key={type.name} className="bg-[#111111] border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
                <p className="text-2xl mb-3" role="presentation">{type.icon}</p>
                <h3 className="text-white font-bold mb-2 font-display">{type.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{type.desc}</p>
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
                  Repair vs Replace: Which Do You Need?
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Repair is appropriate when the damage is limited to the key shell, buttons,
                  battery, or physical blade. Replace is the better option when the{' '}
                  <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                    transponder chip
                  </Link>{' '}
                  is damaged, the key has been{' '}
                  <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                    lost
                  </Link>
                  , or the vehicle no longer recognises the key at all.
                </p>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Our technician will assess your key and advise on the most appropriate and
                  cost-effective solution for your specific situation.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  If a repair is not feasible, we carry the equipment for a full{' '}
                  <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                    car key replacement
                  </Link>{' '}
                  on-site without needing to visit a dealership.
                </p>
              </div>

              {/* Before calling checklist */}
              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-5">
                <h3 className="text-brand-gold font-semibold mb-3 font-display">Before You Call — Have Ready</h3>
                <ul className="space-y-1.5 text-zinc-300 text-sm">
                  {[
                    "Symptoms: e.g. 'key turns but car won't start', 'remote not working'",
                    'Vehicle make, model and year',
                    'Whether you have a working spare key',
                    'Emirates ID and Mulkiya (required for chip/transponder work)',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signs your key needs repair */}
              <div>
                <h2 className="text-2xl font-black text-white font-display mb-4">
                  Signs Your Car Key Needs Repair
                </h2>
                <div className="space-y-3">
                  {[
                    { sign: 'Remote does not lock or unlock the car', fix: 'Button repair or battery replacement' },
                    { sign: 'Physical cracks or breaks in the key casing', fix: 'Shell replacement' },
                    { sign: 'Key turns in ignition but engine will not start', fix: 'Transponder diagnostics' },
                    { sign: 'Key feels loose or wobbly in the lock', fix: 'Blade or collar repair' },
                    { sign: 'Signal range has reduced significantly', fix: 'Battery or antenna check' },
                  ].map((row) => (
                    <div key={row.sign} className="flex items-start gap-4 p-4 bg-[#111111] border border-zinc-800 rounded-xl">
                      <div>
                        <p className="text-white text-sm font-medium">{row.sign}</p>
                        <p className="text-zinc-500 text-xs mt-0.5">Likely fix: {row.fix}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <RelatedServices currentSlug={service.slug} title="Other Car Key Services" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Car Key Repair</h3>
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    Describe the problem and your vehicle. We will advise if repair is possible.
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
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900" aria-labelledby="repair-faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="repair-faq-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Car Key Repair — Questions
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            See also:{' '}
            <Link href="/car-key-service-dubai/" className="text-brand-gold hover:underline">car key service</Link>
            {' · '}
            <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">car key replacement</Link>
            {' · '}
            <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">key programming</Link>
          </p>
          <div className="max-w-2xl">
            <FAQAccordion items={ALL_FAQS} />
          </div>
        </div>
      </section>
    </>
  )
}
