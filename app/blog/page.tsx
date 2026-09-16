import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTAButtons from '@/components/CTAButtons'
import { SITE_URL } from '@/lib/business'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Car Key Tips & Guides | Car Locksmith Dubai Blog',
  description:
    'Helpful guides about car keys in Dubai. Learn about key types, what to do when you lose your keys, key programming, and how to find a reliable car locksmith.',
  alternates: {
    canonical: SITE_URL + '/blog/',
  },
}

const BLOG_POSTS = [
  {
    slug: 'what-to-do-if-you-lose-car-keys-dubai',
    title: 'What to Do If You Lose Your Car Keys in Dubai',
    excerpt:
      'Losing your car keys in Dubai can be stressful, but there are clear steps you can follow to resolve the situation quickly and safely.',
    category: 'Guide',
    readTime: '4 min read',
  },
  {
    slug: 'types-of-car-keys-explained',
    title: 'Types of Car Keys Explained: Standard, Transponder, Smart and More',
    excerpt:
      'Modern vehicles use several different key technologies. Understanding what type of key your car uses helps you know what to ask for when you need a spare or replacement.',
    category: 'Guide',
    readTime: '5 min read',
  },
  {
    slug: 'car-key-repair-vs-replacement-dubai',
    title: 'Car Key Repair vs Replacement: Which Do You Need?',
    excerpt:
      'Not every damaged car key needs to be replaced entirely. This guide explains what can be repaired and when a full replacement is the better option.',
    category: 'Advice',
    readTime: '3 min read',
  },
  {
    slug: 'car-key-programming-dubai-guide',
    title: 'Car Key Programming in Dubai: What You Need to Know',
    excerpt:
      'Key programming ensures your replacement or spare key communicates correctly with your vehicle\'s immobiliser. Here is how the process works.',
    category: 'Guide',
    readTime: '4 min read',
  },
  {
    slug: 'choosing-car-locksmith-dubai',
    title: 'How to Choose a Car Locksmith in Dubai',
    excerpt:
      'With many locksmiths operating in Dubai, understanding what to look for helps you make a safe and informed choice when you need car key assistance.',
    category: 'Advice',
    readTime: '4 min read',
  },
  {
    slug: 'documents-needed-car-key-replacement-dubai',
    title: 'Documents Required for Car Key Replacement in Dubai',
    excerpt:
      'Before any car key can be cut and programmed in Dubai, ownership must be verified. This article explains exactly what documentation you will need.',
    category: 'Information',
    readTime: '3 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog/' },
            ])
          ),
        }}
      />

      {/* Header */}
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
                className="bg-[#111111] border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 bg-brand-gold/10 text-brand-gold rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-zinc-600 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-white font-bold text-base leading-snug mb-3 font-display group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <p className="text-zinc-600 text-sm italic">
                  Full article coming soon.
                </p>
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
            Skip the reading — call or WhatsApp us directly.
          </p>
          <CTAButtons size="lg" className="justify-center" />
        </div>
      </section>
    </>
  )
}
