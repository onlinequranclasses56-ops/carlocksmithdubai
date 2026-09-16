import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/business'
import { SERVICES } from '@/lib/services'
import { AREA_PAGES } from '@/lib/areas'
import { BLOG_POSTS } from '@/lib/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/areas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}${service.href}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const areaPages: MetadataRoute.Sitemap = AREA_PAGES.map((area) => ({
    url: `${SITE_URL}/areas/${area.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: post.publishDate,
    changeFrequency: 'yearly' as const,
    priority: 0.65,
  }))

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages]
}
