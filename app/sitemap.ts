import { MetadataRoute } from 'next'
import { sanityFetch } from '@/lib/sanity.client'
import { postsQuery, projectsQuery } from '@/lib/sanity.query'
import type { PostType, ProjectType } from '@/types'

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
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
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
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
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
    const posts = await sanityFetch<PostType[]>({
      query: postsQuery,
      tags: ['post']
    })
    const blogRoutes: MetadataRoute.Sitemap = posts
      .filter((post) => post.isPublished)
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post._createdAt),
        changeFrequency: 'yearly' as const,
        priority: 0.75,
      }))

    // Fetch projects
    const projects = await sanityFetch<ProjectType[]>({
      query: projectsQuery,
      tags: ['project']
    })
    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
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