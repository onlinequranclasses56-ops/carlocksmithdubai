import Link from 'next/link'
import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
  featured?: boolean
}

function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    key: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.65 10A6.001 6.001 0 0 0 1 12a6 6 0 0 0 11.65 2H17v2h2v-2h2v-2h-9.35zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
    ),
    wrench: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    refresh: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    chip: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    search: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    lock: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  }

  return <>{icons[icon] ?? icons.key}</>
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className={`group block rounded-xl border transition-all duration-300 ${
        featured
          ? 'bg-gradient-to-br from-brand-gold/10 to-transparent border-brand-gold/30 hover:border-brand-gold/60 hover:from-brand-gold/15'
          : 'bg-[#111111] border-zinc-800 hover:border-zinc-700 hover:bg-[#161616]'
      } p-6`}
      aria-label={`Learn more about ${service.title}`}
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
          featured ? 'bg-brand-gold/20' : 'bg-zinc-800/80'
        }`}
      >
        <ServiceIcon
          icon={service.icon}
          className={`w-5 h-5 ${featured ? 'text-brand-gold' : 'text-zinc-300'}`}
        />
      </div>

      {/* Content */}
      <h3 className={`font-bold text-lg mb-2 transition-colors font-display ${
        featured ? 'text-brand-gold' : 'text-white group-hover:text-brand-gold'
      }`}>
        {service.shortTitle}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* CTA */}
      <span
        className={`inline-flex items-center gap-1 text-sm font-medium transition-all ${
          featured
            ? 'text-brand-gold'
            : 'text-zinc-500 group-hover:text-brand-gold'
        }`}
      >
        Learn more
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
