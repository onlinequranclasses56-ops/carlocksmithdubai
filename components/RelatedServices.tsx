import Link from 'next/link'
import { SERVICES } from '@/lib/services'

interface RelatedServicesProps {
  currentSlug?: string
  title?: string
  limit?: number
  layout?: 'grid' | 'list'
}

export default function RelatedServices({
  currentSlug,
  title = 'Related Car Key Services',
  limit = 4,
  layout = 'grid',
}: RelatedServicesProps) {
  const related = SERVICES.filter((s) => s.slug !== currentSlug).slice(0, limit)

  if (layout === 'list') {
    return (
      <nav aria-label={title}>
        <h3 className="text-white font-bold text-lg mb-4 font-display">{title}</h3>
        <ul className="space-y-2">
          {related.map((service) => (
            <li key={service.slug}>
              <Link
                href={service.href}
                className="flex items-center gap-2 text-zinc-400 hover:text-brand-gold transition-colors text-sm group"
              >
                <svg
                  className="w-4 h-4 text-brand-gold/50 group-hover:text-brand-gold transition-colors flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {service.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact/"
              className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors text-sm font-medium group"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <section aria-labelledby="related-services-heading">
      <h2
        id="related-services-heading"
        className="text-xl md:text-2xl font-black text-white font-display mb-5"
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className="group flex items-start gap-3 p-4 bg-[#111111] border border-zinc-800 rounded-xl hover:border-brand-gold/40 hover:bg-[#161616] transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-gold/20 transition-colors">
              <svg
                className="w-4 h-4 text-brand-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.65 10A6.001 6.001 0 0 0 1 12a6 6 0 0 0 11.65 2H17v2h2v-2h2v-2h-9.35zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors font-display">
                {service.shortTitle}
              </p>
              <p className="text-zinc-500 text-xs mt-0.5 leading-snug line-clamp-2">
                {service.description}
              </p>
            </div>
            <svg
              className="w-4 h-4 text-zinc-700 group-hover:text-brand-gold ml-auto flex-shrink-0 transition-colors mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
        {/* Always link to contact + areas for internal link density */}
        <Link
          href="/areas/"
          className="group flex items-start gap-3 p-4 bg-[#111111] border border-zinc-800 rounded-xl hover:border-brand-gold/40 transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors font-display">
              Service Areas
            </p>
            <p className="text-zinc-500 text-xs mt-0.5">All Dubai neighbourhoods covered</p>
          </div>
          <svg className="w-4 h-4 text-zinc-700 group-hover:text-brand-gold ml-auto flex-shrink-0 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link
          href="/contact/"
          className="group flex items-start gap-3 p-4 bg-brand-gold/5 border border-brand-gold/20 rounded-xl hover:border-brand-gold/50 transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-brand-gold font-semibold text-sm font-display">Get a Quote</p>
            <p className="text-zinc-500 text-xs mt-0.5">Contact us for any car key service</p>
          </div>
          <svg className="w-4 h-4 text-brand-gold/40 group-hover:text-brand-gold ml-auto flex-shrink-0 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
