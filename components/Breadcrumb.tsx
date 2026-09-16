import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/schema'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: 'Home', href: '/' }, ...items]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(allItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          return (
            <span key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span
                  className="text-sm text-zinc-400"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm text-zinc-500 hover:text-brand-gold transition-colors"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <svg
                  className="w-3 h-3 text-zinc-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </span>
          )
        })}
      </nav>
    </>
  )
}
