import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButtons from '@/components/CTAButtons'

export const metadata: Metadata = {
  title: 'Page Not Found | Car Locksmith Dubai',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-5xl font-black text-white font-display mb-3">404</h1>
        <p className="text-xl text-zinc-400 mb-2">Page not found</p>
        <p className="text-zinc-500 text-sm mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-5 py-3 bg-brand-gold text-zinc-950 font-bold rounded-xl hover:bg-brand-gold-light transition-colors"
          >
            Go to Homepage
          </Link>
          <CTAButtons size="md" />
        </div>
      </div>
    </div>
  )
}
