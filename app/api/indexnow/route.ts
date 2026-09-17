import { NextResponse } from 'next/server'
import { SITE_URL } from '@/lib/business'
import { SERVICES } from '@/lib/services'
import { AREA_PAGES } from '@/lib/areas'
import { BLOG_POSTS } from '@/lib/blogPosts'

const INDEXNOW_KEY = 'f8d3e2a1b5c4f9e6d2a3b8c5f1e4d7a0'

function getAllUrls(): string[] {
  const static_urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/areas/`,
    `${SITE_URL}/blog/`,
    `${SITE_URL}/contact/`,
    `${SITE_URL}/car-key-duplication-dubai/`,
    `${SITE_URL}/car-unlock-service-dubai/`,
    `${SITE_URL}/car-key-battery-dubai/`,
  ]

  const serviceUrls = SERVICES.map((s) => `${SITE_URL}${s.href}`)
  const areaUrls = AREA_PAGES.map((a) => `${SITE_URL}/areas/${a.slug}/`)
  const blogUrls = BLOG_POSTS.map((p) => `${SITE_URL}/blog/${p.slug}/`)

  return [...static_urls, ...serviceUrls, ...areaUrls, ...blogUrls]
}

// POST /api/indexnow — submit all URLs to IndexNow (Bing, Yandex, Seznam, Naver)
export async function POST() {
  const urls = getAllUrls()
  const host = new URL(SITE_URL).hostname

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  // Submit to IndexNow API — covers Bing, Yandex, Seznam, Naver
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
  ]

  const results = await Promise.allSettled(
    endpoints.map((endpoint) =>
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      }).then((r) => ({ endpoint, status: r.status }))
    )
  )

  // Also ping Google sitemap (GET request — no key needed)
  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`)
  await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`).catch(() => null)

  const summary = results.map((r) =>
    r.status === 'fulfilled' ? r.value : { endpoint: 'unknown', status: 'error' }
  )

  return NextResponse.json({
    submitted: urls.length,
    urls,
    indexnow: summary,
    googlePing: 'sent',
  })
}

// GET /api/indexnow — trigger from cron job
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return POST()
}
