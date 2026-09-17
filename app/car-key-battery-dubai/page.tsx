import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { getServiceBySlug, SERVICES } from '@/lib/services'
import { servicePageGraph } from '@/lib/schema'

const service = getServiceBySlug('car-key-battery-dubai')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: SITE_URL + service.href },
  openGraph: { title: service.metaTitle, description: service.metaDescription, url: SITE_URL + service.href, type: 'website' },
}

const ALL_FAQS = [
  ...service.faq,
  {
    question: 'How often should I replace my car key fob battery?',
    answer:
      'Most car key fob batteries last between 1 and 3 years depending on usage. If you notice the remote range decreasing or intermittent operation, replace the battery before it fails completely.',
  },
  {
    question: 'Can a dead key fob battery stop my car from starting?',
    answer:
      'In most vehicles, yes. For keyless push-start cars, if the fob battery is completely dead the car may not recognise the key and refuse to start. Tip: hold the fob directly against the start button — many vehicles have a backup reader built into the button that works at very close range even with a dead battery.',
  },
  {
    question: 'Do I need to reprogram my key fob after replacing the battery?',
    answer:
      'In most cases, no. Simply replacing the battery does not affect the programmed codes stored in the fob. However, some older vehicles may require the fob to be re-synced after a battery change. If the remote stops working after a battery replacement, call us to re-sync it.',
  },
  {
    question: 'What car key battery do I need near me in Dubai?',
    answer:
      'The most common car key fob battery is CR2032. Other types include CR2025 and CR2016. The correct type is printed on the existing battery inside the fob, or in your vehicle owner\'s manual. Our mobile technicians carry all common types.',
  },
]

const BATTERY_SIGNS = [
  { sign: 'Remote only works at very close range', action: 'Battery likely weak — replace now' },
  { sign: 'Have to press button multiple times', action: 'Intermittent signal — battery failing' },
  { sign: 'Dashboard "key battery low" warning', action: 'Direct indicator — replace immediately' },
  { sign: 'Remote stopped working completely', action: 'Battery dead — bring key or call us' },
  { sign: 'Push-start car will not start', action: 'Hold fob to button; call for battery swap' },
]

export default function CarKeyBatteryPage() {
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
              Key Battery Replacement · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Key Battery Replacement in Dubai
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              Dead or weak car key fob? We replace CR2032, CR2025 and CR2016 key fob batteries
              on-site across{' '}
              <Link href="/areas/" className="text-brand-gold hover:underline">all Dubai areas</Link>
              . Usually done in under 10 minutes. If the battery swap does not fix the issue, we
              can diagnose and carry out{' '}
              <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">
                key fob repair
              </Link>{' '}
              on the same visit. Call{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-semibold hover:underline">{BUSINESS.phoneDisplay}</a>.
            </p>
            <CTAButtons size="lg" />
          </div>
        </div>
      </div>

      {/* Signs section */}
      <section className="py-12 md:py-16 bg-[#0D0D0D] border-y border-zinc-900" aria-labelledby="battery-signs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="battery-signs-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-8">
            Signs Your Car Key Battery Needs Replacing
          </h2>
          <div className="space-y-3">
            {BATTERY_SIGNS.map((row) => (
              <div key={row.sign} className="flex items-start gap-4 p-4 bg-[#111111] border border-zinc-800 rounded-xl">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-gold mt-2" />
                <div>
                  <p className="text-white text-sm font-medium">{row.sign}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{row.action}</p>
                </div>
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
                <h2 className="text-2xl font-black text-white font-display mb-4">
                  Battery Types We Replace
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5 speakable">
                  The most common car key fob battery is the{' '}
                  <strong className="text-white font-medium">CR2032</strong> — a 3V lithium coin cell
                  used by most Japanese and Korean vehicles including Toyota, Nissan, Honda, Hyundai,
                  and Kia. European brands often use <strong className="text-white font-medium">CR2025</strong>{' '}
                  or <strong className="text-white font-medium">CR2016</strong>. Our mobile technicians
                  carry all three types.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  If you are unsure which battery your key uses, do not guess — an incorrect battery
                  can damage the contacts inside the fob. Call us and we will bring the correct type
                  and replace it on-site.
                </p>
              </div>

              {/* Battery vs full repair */}
              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                <h3 className="text-white font-bold mb-3 font-display">Battery Replacement vs Key Repair</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                  A battery swap is the first step. If the remote still does not work after a new
                  battery, the issue may be:
                </p>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  {[
                    'Faulty button contacts — fixable with button repair',
                    'Damaged antenna or circuit board — may need key repair',
                    'Fob needs re-syncing to the vehicle — quick reprogramming job',
                    'Transponder chip fault — requires full key assessment',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-400 text-sm mt-3">
                  See our{' '}
                  <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">
                    car key repair service
                  </Link>{' '}
                  for faults beyond the battery.
                </p>
              </div>

              <RelatedServices currentSlug={service.slug} title="Other Car Key Services" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Key Fob Battery?</h3>
                  <p className="text-zinc-400 text-sm mb-5">Tell us your vehicle and we will bring the right battery to you.</p>
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
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900" aria-labelledby="battery-faq-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="battery-faq-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Car Key Battery — Questions
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            See also:{' '}
            <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">key fob repair</Link>
            {' · '}
            <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">key replacement</Link>
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
