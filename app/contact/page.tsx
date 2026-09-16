import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import RelatedServices from '@/components/RelatedServices'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Car Locksmith Dubai | Get a Quote | +971 52 642 6161',
  description:
    'Contact Car Locksmith Dubai for car key service, repair, replacement or programming. Call +971 52 642 6161 or WhatsApp. Mobile service across all Dubai areas.',
  alternates: { canonical: SITE_URL + '/contact/' },
  openGraph: {
    title: 'Contact Car Locksmith Dubai | Get a Quote | +971 52 642 6161',
    description: 'Call or WhatsApp +971 52 642 6161 for mobile car key service across all Dubai areas.',
    url: SITE_URL + '/contact/',
    type: 'website',
  },
}

const CONTACT_ITEMS = [
  {
    label: 'Phone',
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.phoneHref,
    description: 'Call for immediate assistance',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.whatsappMessage,
    description: 'Send your location and vehicle details',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    description: 'For non-urgent enquiries',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: BUSINESS.addressDisplay,
    href: undefined,
    description: 'Shop location — mobile service available',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Contact', href: '/contact/' },
            ])
          ),
        }}
      />

      {/* Header */}
      <div className="pt-24 md:pt-28 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Breadcrumb items={[{ name: 'Contact', href: '/contact/' }]} />
          <div className="mt-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-medium uppercase tracking-wide mb-4">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Contact Car Locksmith Dubai
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              For the fastest response, call or WhatsApp us directly. We provide mobile{' '}
              <Link href="/car-key-service-dubai/" className="text-brand-gold hover:underline">
                car key services
              </Link>{' '}
              across{' '}
              <Link href="/areas/" className="text-brand-gold hover:underline">
                all Dubai areas
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Contact options */}
      <section className="py-12 md:py-16 bg-[#0D0D0D] border-y border-zinc-900" aria-label="Contact options">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold mb-4">
                  {item.icon}
                </div>
                <p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white font-semibold text-sm hover:text-brand-gold transition-colors block mb-1"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white font-semibold text-sm mb-1">{item.value}</p>
                )}
                <p className="text-zinc-600 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: direct contact */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-4">
                Fastest Response: Call or WhatsApp
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-5">
                For immediate car key assistance anywhere in Dubai, calling or WhatsApp messaging
                is the fastest way to reach us. Please have the following ready:
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  'Your vehicle make, model and year',
                  'Your current location in Dubai',
                  'The nature of the problem (lost key, broken key, programming, etc.)',
                  'Your Emirates ID and Mulkiya (required for programming or replacement)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButtons size="lg" />
            </div>

            {/* Right: hours + info */}
            <div className="space-y-5">
              <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4 font-display">Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white text-sm font-medium">Shop</p>
                      <p className="text-zinc-500 text-xs">Al Bada&apos;a, Dubai</p>
                    </div>
                    <p className="text-brand-gold text-sm font-medium text-right">{BUSINESS.hours.shop}</p>
                  </div>
                  <div className="h-px bg-zinc-800" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white text-sm font-medium">Mobile Service</p>
                      <p className="text-zinc-500 text-xs">
                        <Link href="/areas/" className="hover:text-brand-gold transition-colors">All Dubai areas</Link>
                      </p>
                    </div>
                    <p className="text-brand-gold text-sm font-medium text-right">{BUSINESS.hours.mobile}</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-6">
                <h3 className="text-brand-gold font-bold text-base mb-3 font-display">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  {[
                    'We will confirm whether we can help with your specific vehicle',
                    'You will be given an estimated arrival time',
                    'Ownership documents checked before the job begins',
                    'Payment made after the job is completed',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                <h3 className="text-zinc-400 text-xs uppercase tracking-wider mb-3">Services</h3>
                <nav>
                  <ul className="space-y-1">
                    {[
                      { href: '/car-key-service-dubai/', label: 'Car Key Service' },
                      { href: '/car-key-replacement-dubai/', label: 'Key Replacement' },
                      { href: '/car-key-repair-dubai/', label: 'Key Repair' },
                      { href: '/car-key-programming-dubai/', label: 'Key Programming' },
                      { href: '/lost-car-keys-dubai/', label: 'Lost Car Keys' },
                      { href: '/areas/', label: 'Service Areas' },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-10 md:py-14 bg-[#0D0D0D] border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedServices currentSlug={undefined} title="Our Car Key Services" limit={4} />
        </div>
      </section>
    </>
  )
}
