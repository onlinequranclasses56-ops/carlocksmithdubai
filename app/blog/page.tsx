import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import { SITE_URL } from '@/lib/business'
import { BLOG_POSTS } from '@/lib/blogPosts'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Car Key Tips & Guides Dubai | +971 52 642 6161',
  description:
    'Call +971 52 642 6161 — Practical car key guides for Dubai drivers. Lost keys, key types, repair vs replacement, documents needed. Mobile locksmith available now.',
  alternates: { canonical: SITE_URL + '/blog/' },
  openGraph: {
    title: 'Car Key Tips & Guides Dubai | +971 52 642 6161',
    description: 'Call +971 52 642 6161 — Car key guides for Dubai drivers. Lost keys, programming, repair vs replacement and more. Mobile locksmith available now.',
    url: SITE_URL + '/blog/',
    type: 'website',
  },
}

const blogListSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog/' },
    ]),
    {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog/#blog`,
      name: 'Car Locksmith Dubai — Car Key Guides',
      description: 'Practical guides and advice about car keys and locksmith services in Dubai.',
      url: `${SITE_URL}/blog/`,
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-AE',
      blogPost: BLOG_POSTS.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}/`,
        datePublished: post.publishDate,
        author: { '@type': 'Organization', name: 'Car Locksmith Dubai' },
        description: post.metaDescription,
      })),
    },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="pt-24 md:pt-28 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog/' }]} />
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-medium uppercase tracking-wide mb-4">
              Car Key Guides · Dubai
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white font-display mb-4 leading-tight">
              Car Key Tips &amp; Guides
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Practical information about car keys, locksmith services, and what to do in common
              car key situations in Dubai.
            </p>
          </div>
        </div>
      </div>

      {/* Blog posts */}
      <section className="py-12 md:py-16 bg-[#0D0D0D] border-y border-zinc-900" aria-label="Blog posts">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-[#111111] border border-zinc-800 rounded-xl p-6 hover:border-brand-gold/40 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 bg-brand-gold/10 text-brand-gold rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-zinc-600 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-white font-bold text-base leading-snug mb-3 font-display group-hover:text-brand-gold transition-colors">
                  <Link href={`/blog/${post.slug}/`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="inline-flex items-center gap-1.5 text-brand-gold text-sm font-medium hover:underline"
                >
                  Read guide
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white font-display mb-3">
            Need Immediate Car Key Help?
          </h2>
          <p className="text-zinc-400 mb-6">
            Skip the reading — call or WhatsApp us directly. Mobile service across{' '}
            <Link href="/areas/" className="text-brand-gold hover:underline">all Dubai areas</Link>.
          </p>
          <CTAButtons size="lg" className="justify-center" />
        </div>
      </section>
    </>
  )
}
