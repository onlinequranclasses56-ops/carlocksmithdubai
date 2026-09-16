import Link from 'next/link'
import { BUSINESS, SERVICE_AREAS } from '@/lib/business'
import { SERVICES } from '@/lib/services'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const featuredAreas = SERVICE_AREAS.slice(0, 12)

  return (
    <footer className="bg-[#0A0A0A] border-t border-zinc-800" role="contentinfo">
      {/* Top CTA strip */}
      <div className="bg-brand-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-950 font-semibold text-center sm:text-left">
              Need a car locksmith in Dubai? We are available now.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={BUSINESS.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-950 text-white text-sm font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="WhatsApp Car Locksmith Dubai"
              >
                <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-950/80 text-white text-sm font-bold rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label={`Call ${BUSINESS.phoneDisplay}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Car Locksmith Dubai">
              <div className="w-9 h-9 rounded-lg bg-brand-gold flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-950" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.65 10A6.001 6.001 0 0 0 1 12a6 6 0 0 0 11.65 2H17v2h2v-2h2v-2h-9.35zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </div>
              <div>
                <span className="block text-white font-bold text-sm font-display">Car Locksmith Dubai</span>
                <span className="block text-brand-gold text-xs">Al Bada&apos;a · Dubai, UAE</span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">
              Professional car key services across Dubai. Mobile technicians equipped for key cutting, repair, replacement and programming.
            </p>
            <div className="space-y-2">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 text-brand-gold text-sm font-medium hover:text-brand-gold-light transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 text-zinc-400 text-sm hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {BUSINESS.email}
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-display">
              Car Key Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-zinc-400 text-sm hover:text-brand-gold transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact/"
                  className="text-zinc-400 text-sm hover:text-brand-gold transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-display">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {featuredAreas.map((area) => (
                <li key={area}>
                  <span className="text-zinc-400 text-sm">{area}</span>
                </li>
              ))}
              <li>
                <Link
                  href="/areas/"
                  className="text-brand-gold text-sm hover:text-brand-gold-light transition-colors font-medium"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Info column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-display">
              Information
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link href="/blog/" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Car Key Guides
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3 font-display">
              Hours
            </h3>
            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-brand-gold text-xs mt-0.5">●</span>
                <div>
                  <p className="text-zinc-300 text-sm font-medium">Shop</p>
                  <p className="text-zinc-500 text-xs">{BUSINESS.hours.shop}, Daily</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-gold text-xs mt-0.5">●</span>
                <div>
                  <p className="text-zinc-300 text-sm font-medium">Mobile Service</p>
                  <p className="text-zinc-500 text-xs">{BUSINESS.hours.mobile}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-zinc-600 text-xs">
              © {currentYear} Car Locksmith Dubai. All rights reserved.
            </p>
            <p className="text-zinc-700 text-xs">
              Al Bada&apos;a, Dubai, United Arab Emirates
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
