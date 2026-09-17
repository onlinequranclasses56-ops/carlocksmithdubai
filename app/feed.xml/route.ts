import { BLOG_POSTS } from '@/lib/blogPosts'
import { BUSINESS, SITE_URL } from '@/lib/business'

export const revalidate = 86400 // 24h

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}/`
      const pubDate = new Date(post.publishDate).toUTCString()
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <author>${escapeXml(BUSINESS.email)} (${escapeXml(post.author)})</author>
    </item>`
    })
    .join('')

  const lastBuildDate = new Date(posts[0]?.publishDate ?? new Date()).toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(BUSINESS.name)} — Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>${escapeXml(BUSINESS.description)}</description>
    <language>en-ae</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <managingEditor>${escapeXml(BUSINESS.email)} (${escapeXml(BUSINESS.name)})</managingEditor>
    <webMaster>${escapeXml(BUSINESS.email)}</webMaster>
    <ttl>1440</ttl>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/android-chrome-512x512.png</url>
      <title>${escapeXml(BUSINESS.name)}</title>
      <link>${SITE_URL}/</link>
    </image>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}
