import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity.client'
import { postsQuery, projectsQuery } from '@/lib/sanity.query'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nrknavin.in'
  
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  try {
    // Fetch blog posts
    const posts = await client.fetch(postsQuery)
    const blogRoutes: MetadataRoute.Sitemap = posts
      .filter((post: any) => post.isPublished)
      .map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post._createdAt),
        changeFrequency: 'yearly' as const,
        priority: 0.75,
      }))

    // Fetch projects
    const projects = await client.fetch(projectsQuery)
    const projectRoutes: MetadataRoute.Sitemap = projects.map((project: any) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(project._createdAt || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    return [...staticRoutes, ...blogRoutes, ...projectRoutes]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static routes if dynamic content fails
    return staticRoutes
  }
}