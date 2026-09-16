import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import FAQAccordion from '@/components/FAQAccordion'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/blogPosts'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}/`,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [BUSINESS.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE_URL}/blog/${post.slug}/#article`,
        headline: post.title,
        description: post.metaDescription,
        author: {
          '@type': 'Organization',
          name: BUSINESS.name,
          url: SITE_URL,
        },
        publisher: {
          '@id': `${SITE_URL}/#business`,
        },
        datePublished: post.publishDate,
        dateModified: post.publishDate,
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
        inLanguage: 'en-AE',
        about: { '@id': `${SITE_URL}/#business` },
        keywords: ['car key Dubai', 'car locksmith Dubai', post.title],
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}/` },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/blog/${post.slug}/#webpage`,
        url: `${SITE_URL}/blog/${post.slug}/`,
        name: post.metaTitle,
        description: post.metaDescription,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#business` },
        inLanguage: 'en-AE',
        datePublished: post.publishDate,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.article-intro', '.speakable'],
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-24 md:pt-28 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Breadcrumb items={[
            { name: 'Blog', href: '/blog/' },
            { name: post.title, href: `/blog/${post.slug}/` },
          ]} />
          <div className="mt-6 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-medium uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-zinc-600 text-xs">{post.readTime}</span>
              <time dateTime={post.publishDate} className="text-zinc-600 text-xs">
                {new Date(post.publishDate).toLocaleDateString('en-AE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white font-display mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="article-intro speakable text-zinc-400 text-lg leading-relaxed">
              {post.content.intro}
            </p>
          </div>
        </div>
      </div>

      {/* Article body + sidebar */}
      <article className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article content */}
            <div className="lg:col-span-2">
              <div className="prose-custom space-y-8">
                {post.content.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-xl md:text-2xl font-black text-white font-display mb-3">
                      {section.heading}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                ))}

                <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-6">
                  <p className="text-zinc-300 leading-relaxed speakable">
                    {post.content.conclusion}
                  </p>
                </div>
              </div>

              {/* FAQ */}
              {post.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-black text-white font-display mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion items={post.faqs} />
                </div>
              )}

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-black text-white font-display mb-5">
                    Related Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}/`}
                        className="group p-5 bg-[#111111] border border-zinc-800 rounded-xl hover:border-brand-gold/40 transition-all"
                      >
                        <span className="text-xs px-2 py-0.5 bg-brand-gold/10 text-brand-gold rounded-full mb-2 inline-block">{related.category}</span>
                        <p className="text-white font-semibold text-sm font-display group-hover:text-brand-gold transition-colors leading-snug">
                          {related.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to blog */}
              <div className="mt-10">
                <Link href="/blog/" className="text-zinc-500 hover:text-brand-gold transition-colors text-sm">
                  ← Back to all guides
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-lg mb-2 font-display">Need Car Key Help?</h3>
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    Mobile service across all Dubai areas, 24/7.
                  </p>
                  <CTAButtons size="md" layout="column" />
                  <div className="mt-5 pt-5 border-t border-zinc-800 space-y-1 text-xs text-zinc-600">
                    <p>{BUSINESS.addressDisplay}</p>
                    <p>Mobile: <span className="text-brand-gold/70">{BUSINESS.hours.mobile}</span></p>
                  </div>
                </div>

                <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                  <h3 className="text-zinc-400 text-xs uppercase tracking-wider mb-3">Services</h3>
                  <nav>
                    <ul className="space-y-1 text-sm">
                      {[
                        { href: '/car-key-service-dubai/', label: 'Car Key Service' },
                        { href: '/car-key-replacement-dubai/', label: 'Key Replacement' },
                        { href: '/car-key-repair-dubai/', label: 'Key Repair' },
                        { href: '/car-key-programming-dubai/', label: 'Key Programming' },
                        { href: '/lost-car-keys-dubai/', label: 'Lost Car Keys' },
                      ].map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="block px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div className="bg-[#111111] border border-zinc-800 rounded-xl p-5">
                  <h3 className="text-zinc-400 text-xs uppercase tracking-wider mb-3">More Guides</h3>
                  <nav>
                    <ul className="space-y-1 text-sm">
                      {BLOG_POSTS.filter((p) => p.slug !== post.slug).map((p) => (
                        <li key={p.slug}>
                          <Link href={`/blog/${p.slug}/`} className="block px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors leading-snug">
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
