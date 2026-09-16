import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { SERVICES } from '@/lib/services'
import { AREA_PAGES, getAreaBySlug } from '@/lib/areas'

export function generateStaticParams() {
  return AREA_PAGES.map((area) => ({ area: area.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area: slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) return {}
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `${SITE_URL}/areas/${area.slug}/` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `${SITE_URL}/areas/${area.slug}/`,
      type: 'website',
    },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) notFound()

  const areaSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'AutomotiveBusiness'],
        '@id': `${SITE_URL}/areas/${area.slug}/#business-area`,
        name: `Car Locksmith ${area.name}`,
        description: `Professional car key service, repair, replacement and programming in ${area.name}, Dubai.`,
        url: `${SITE_URL}/areas/${area.slug}/`,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: area.name,
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        areaServed: {
          '@type': 'Place',
          name: area.name,
          containedInPlace: {
            '@type': 'City',
            name: 'Dubai',
            sameAs: 'https://www.wikidata.org/wiki/Q612',
          },
        },
        parentOrganization: { '@id': `${SITE_URL}/#business` },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
            opens: '00:00',
            closes: '23:59',
            description: 'Mobile service available 24/7.',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Car Key Services in ${area.name}`,
          itemListElement: SERVICES.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}${s.href}` },
          })),
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Areas', item: `${SITE_URL}/areas/` },
          { '@type': 'ListItem', position: 3, name: area.name, item: `${SITE_URL}/areas/${area.slug}/` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `Do you offer car key service in ${area.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes. Car Locksmith Dubai provides mobile car key service across ${area.name}, covering key replacement, programming, repair and lost key assistance. Call +971 52 642 6161.`,
            },
          },
          {
            '@type': 'Question',
            name: `How quickly can a locksmith reach me in ${area.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Response times vary depending on current demand and your exact location in ${area.name}. Call us on +971 52 642 6161 and we will advise on an estimated arrival time.`,
            },
          },
          {
            '@type': 'Question',
            name: `What documents do I need for car key replacement in ${area.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `You need your Emirates ID (or valid passport) and your vehicle registration card (Mulkiya) issued by RTA Dubai. You must also be physically present with the vehicle.`,
            },
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/areas/${area.slug}/#webpage`,
        url: `${SITE_URL}/areas/${area.slug}/`,
        name: area.metaTitle,
        description: area.metaDescription,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#business` },
        inLanguage: 'en-AE',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.service-intro', '.speakable'],
        },
      },
    ],
  }

  const faqs = [
    {
      question: `Do you offer car key service in ${area.name}?`,
      answer: `Yes. Car Locksmith Dubai provides mobile car key service across ${area.name}, covering key replacement, programming, repair and lost key assistance. Call +971 52 642 6161.`,
    },
    {
      question: `How quickly can a locksmith reach me in ${area.name}?`,
      answer: `Response times vary depending on current demand and your exact location in ${area.name}. Call us on +971 52 642 6161 and we will advise on an estimated arrival time.`,
    },
    {
      question: `What documents do I need for car key replacement in ${area.name}?`,
      answer: `You need your Emirates ID (or valid passport) and your vehicle registration card (Mulkiya) issued by RTA Dubai. You must also be physically present with the vehicle.`,
    },
    {
      question: `Can you programme a new car key at my location in ${area.name}?`,
      answer: `Yes. Our technicians carry full key cutting and programming equipment and come to your location anywhere in ${area.name}. No towing to a dealership required.`,
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      <div className="pt-24 md:pt-28 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Breadcrumb items={[
            { name: 'Areas', href: '/areas/' },
            { name: area.name, href: `/areas/${area.slug}/` },
          ]} />
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-medium uppercase tracking-wide mb-4">
              Car Locksmith · {area.name} · Dubai
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Locksmith in {area.name}
            </h1>
            <p className="service-intro speakable text-zinc-400 text-lg leading-relaxed mb-6">
              Mobile{' '}
              <Link href="/car-key-service-dubai/" className="text-brand-gold hover:underline">car key service</Link>
              ,{' '}
              <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">replacement</Link>
              ,{' '}
              <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">programming</Link>{' '}
              and{' '}
              <Link href="/car-key-repair-dubai/" className="text-brand-gold hover:underline">repair</Link>{' '}
              in {area.name}, Dubai. We come to your location — no towing needed. Call{' '}
              <a href={BUSINESS.phoneHref} className="text-brand-gold font-semibold hover:underline">{BUSINESS.phoneDisplay}</a>.
            </p>
            <CTAButtons size="lg" />
          </div>
        </div>
      </div>

      {/* Services in this area */}
      <section className="py-10 bg-[#0D0D0D] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group flex flex-col items-center gap-2 p-4 bg-[#111111] border border-zinc-800 rounded-xl hover:border-brand-gold/40 transition-all text-center"
              >
                <span className="text-brand-gold font-bold text-xs font-display group-hover:text-brand-gold transition-colors leading-snug">
                  {s.shortTitle}
                </span>
              </Link>
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
                  Car Key Service in {area.name}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">{area.description}</p>
                <p className="text-zinc-400 leading-relaxed">
                  Whether you have{' '}
                  <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">
                    lost your car keys
                  </Link>
                  , need a spare key cut, or require{' '}
                  <Link href="/car-key-programming-dubai/" className="text-brand-gold hover:underline">
                    transponder programming
                  </Link>
                  , our mobile technicians carry full equipment and come directly to your location
                  in {area.name}. Emirates ID and Mulkiya required for key programming and replacement.
                </p>
              </div>

              {/* Landmarks */}
              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                <h3 className="text-white font-bold mb-3 font-display">We Cover Near {area.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {[...area.landmarks, ...area.nearbyAreas].map((place) => (
                    <span key={place} className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-md">
                      {place}
                    </span>
                  ))}
                </div>
              </div>

              {/* Documents box */}
              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-5">
                <h3 className="text-brand-gold font-semibold mb-3 font-display">Documents Required</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  {[
                    'Emirates ID or valid passport',
                    'Vehicle registration card (Mulkiya) — RTA Dubai',
                    'Be present with the vehicle',
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

              {/* Nearby areas */}
              <div>
                <h3 className="text-white font-bold mb-3 font-display">Also Serving Nearby Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {area.nearbyAreas.map((nearby) => {
                    const nearbyArea = AREA_PAGES.find((a) => a.name === nearby)
                    return nearbyArea ? (
                      <Link key={nearby} href={`/areas/${nearbyArea.slug}/`} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-lg hover:bg-zinc-700 hover:text-white transition-colors">
                        {nearby}
                      </Link>
                    ) : (
                      <span key={nearby} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-lg">{nearby}</span>
                    )
                  })}
                  <Link href="/areas/" className="px-3 py-1.5 bg-brand-gold/10 text-brand-gold text-sm rounded-lg hover:bg-brand-gold/20 transition-colors">
                    All Dubai Areas →
                  </Link>
                </div>
              </div>

              <RelatedServices currentSlug={undefined} title="All Car Key Services" limit={4} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2 font-display">Get Help in {area.name}</h3>
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    Have your vehicle details and documents ready when you call.
                  </p>
                  <CTAButtons size="md" layout="column" />
                  <div className="mt-5 pt-5 border-t border-zinc-800 space-y-1 text-xs text-zinc-600">
                    <p>{BUSINESS.addressDisplay}</p>
                    <p>Shop: {BUSINESS.hours.shop}</p>
                    <p className="text-brand-gold/60">Mobile: {BUSINESS.hours.mobile}</p>
                  </div>
                </div>

                <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                  <h3 className="text-zinc-400 text-xs uppercase tracking-wider mb-3">All Services</h3>
                  <nav>
                    <ul className="space-y-1">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link href={s.href} className="block px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                            {s.shortTitle}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/areas/" className="block px-3 py-2 rounded-lg text-sm text-brand-gold/70 hover:text-brand-gold hover:bg-zinc-800 transition-colors">
                          All Service Areas →
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
      <section className="py-16 md:py-20 bg-[#0D0D0D] border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Car Locksmith {area.name} — Questions
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            See also:{' '}
            <Link href="/areas/" className="text-brand-gold hover:underline">all Dubai areas</Link>
            {' · '}
            <Link href="/lost-car-keys-dubai/" className="text-brand-gold hover:underline">lost car keys</Link>
            {' · '}
            <Link href="/car-key-replacement-dubai/" className="text-brand-gold hover:underline">key replacement</Link>
          </p>
          <div className="max-w-2xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
