import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/business'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all major search engines + AI crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      // Google — full access
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Googlebot-Image', allow: '/' },
      // Bing — full access
      { userAgent: 'bingbot', allow: '/' },
      { userAgent: 'msnbot', allow: '/' },
      // OpenAI / ChatGPT — allow crawling for AI Overviews training
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      // Anthropic / Claude
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      // Perplexity AI
      { userAgent: 'PerplexityBot', allow: '/' },
      // Google AI / Gemini
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Googlebot-Extended', allow: '/' },
      // Apple / Siri
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Common Crawl — trains many LLMs
      { userAgent: 'CCBot', allow: '/' },
      // Meta AI
      { userAgent: 'FacebookBot', allow: '/' },
      // DuckDuckGo / You.com
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
      // Baidu
      { userAgent: 'Baiduspider', allow: '/' },
      // Cohere
      { userAgent: 'cohere-ai', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
