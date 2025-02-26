import { metaData } from "./config";
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/api/*',
          '/_next/*',
          '/admin/*',
          '/*.json$',
          '/*?*', // Disallow URLs with query parameters
        ],
        crawlDelay: 10,
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      }
    ],
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
    host: metaData.baseUrl,
  }
}
