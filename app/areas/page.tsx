import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SERVICE_AREAS, SITE_URL } from '@/lib/business'
import { SERVICES } from '@/lib/services'
import { AREA_PAGES } from '@/lib/areas'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Car Locksmith Service Areas Dubai | All Neighbourhoods',
  description:
    'Car Locksmith Dubai provides mobile car key service across 30+ Dubai areas including Downtown, Marina, Jumeirah, Business Bay, Palm Jumeirah and more. Call +971 52 642 6161.',
  alternates: { canonical: SITE_URL + '/areas/' },
  openGraph: {
    title: 'Car Locksmith Service Areas Dubai | All Neighbourhoods',
    description: 'Mobile car key service across 30+ Dubai areas. Call +971 52 642 6161.',
    url: SITE_URL + '/areas/',
    type: 'website',
  },
}

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Service Areas', href: '/areas/' },
            ])
          ),
        }}
      />

      {/* Header */}
      <div className="pt-24 md:pt-28 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Breadcrumb items={[{ name: 'Service Areas', href: '/areas/' }]} />
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-medium uppercase tracking-wide mb-4">
              Coverage · Dubai, UAE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Locksmith Service Areas in Dubai
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Our mobile car locksmith service covers all major areas of Dubai. Whether you need{' '}
              <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">
                key replacement
              </Link>
              ,{' '}
              <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                programming
              </Link>
              , or{' '}
              <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">
                repairs
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

      {/* Featured area landing pages */}
      <section className="py-12 md:py-16 bg-[#0D0D0D] border-y border-zinc-900" aria-labelledby="areas-grid-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="areas-grid-heading" className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Areas We Cover
          </h2>
          <p className="text-zinc-500 text-sm mb-8">Select your area for dedicated local service information.</p>

          {/* Linked area pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {AREA_PAGES.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/`}
                className="group flex items-start gap-3 p-4 bg-[#111111] border border-zinc-800 rounded-xl hover:border-brand-gold/40 hover:bg-[#161616] transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-gold/20 transition-colors">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors font-display">
                    {area.name}
                  </p>
                  <p className="text-zinc-500 text-xs mt-0.5">{area.district}</p>
                </div>
                <svg className="w-4 h-4 text-zinc-700 group-hover:text-brand-gold ml-auto flex-shrink-0 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* All areas list */}
          <details className="group">
            <summary className="cursor-pointer text-zinc-500 text-sm hover:text-brand-gold transition-colors select-none mb-4">
              View all {SERVICE_AREAS.length} covered areas ▾
            </summary>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2 px-3 py-3 bg-[#111111] border border-zinc-800 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-zinc-300 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* Service info + sidebar */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-4">
                  Mobile Service Across Dubai
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  We operate as a mobile car locksmith, which means our technicians come to your
                  location anywhere in Dubai. You do not need to transport your vehicle to a workshop
                  or dealership.
                </p>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  Our shop is located in Al Bada&apos;a (Satwa area), and our mobile units operate
                  across all of Dubai. For{' '}
                  <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                    lost car keys
                  </Link>
                  , our mobile service operates 24/7 — including nights, weekends and public holidays.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  If your area is not listed above, please call or WhatsApp us — we may still be
                  able to assist or advise on the nearest available option.
                </p>
              </div>

              {/* Services available across all areas */}
              <div>
                <h2 className="text-xl font-black text-white font-display mb-4">
                  Services Available Across All Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      className="group flex items-center gap-3 p-4 bg-[#111111] border border-zinc-800 rounded-xl hover:border-brand-gold/40 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                        <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12.65 10A6.001 6.001 0 0 0 1 12a6 6 0 0 0 11.65 2H17v2h2v-2h2v-2h-9.35zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                        </svg>
                      </div>
                      <span className="text-zinc-300 text-sm font-medium group-hover:text-brand-gold transition-colors font-display">
                        {s.shortTitle}
                      </span>
                      <svg className="w-4 h-4 text-zinc-700 group-hover:text-brand-gold ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              <RelatedServices currentSlug={undefined} title="All Car Key Services" limit={4} />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-5 font-display">Contact Us</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs mb-0.5">Phone / WhatsApp</p>
                        <a href={BUSINESS.phoneHref} className="text-white font-semibold hover:text-brand-gold transition-colors">
                          {BUSINESS.phoneDisplay}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs mb-0.5">Shop</p>
                        <p className="text-white text-sm">{BUSINESS.addressDisplay}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs mb-0.5">Hours</p>
                        <p className="text-white text-sm">Shop: {BUSINESS.hours.shop}</p>
                        <p className="text-brand-gold text-sm font-medium">Mobile: {BUSINESS.hours.mobile}</p>
                      </div>
                    </div>
                  </div>
                  <CTAButtons size="md" layout="column" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
