import Script from 'next/script'

interface StructuredDataProps {
  type?: 'person' | 'website' | 'article' | 'project' | 'faq' | 'job'
  data?: any
}

export default function StructuredData({ type = 'person', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    }

    switch (type) {
      case 'person':
        return {
          ...baseData,
          '@type': 'Person',
          name: 'Navin Barange',
          jobTitle: 'Full Stack Developer & AI Engineer',
          description: 'Full Stack Developer & AI Engineer specializing in Java, React, Python, and cloud architecture.',
          url: 'https://nrknavin.in',
          image: 'https://i.ibb.co/BBPbZb7/1705208737383.jpg',
          sameAs: [
            'https://github.com/developernrk',
            'https://linkedin.com/in/navinbarange',
            'https://x.com/nrk_navin',
          ],
          knowsAbout: [
            'Java',
            'React',
            'Python',
            'Spring Boot',
            'Microservices',
            'Cloud Architecture',
            'Artificial Intelligence',
            'Machine Learning',
            'Full Stack Development',
            'Software Engineering',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
          },
        }

      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: 'Navin Barange Portfolio',
          description: 'Full Stack Developer & AI Engineer portfolio showcasing projects, skills, and technical expertise.',
          url: 'https://nrknavin.in',
          author: {
            '@type': 'Person',
            name: 'Navin Barange',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://nrknavin.in/blog?search={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }

      case 'article':
        return {
          ...baseData,
          '@type': 'Article',
          headline: data?.title || 'Blog Post',
          description: data?.description || '',
          image: data?.coverImage?.image || 'https://i.ibb.co/BBPbZb7/1705208737383.jpg',
          datePublished: data?.date || data?._createdAt,
          dateModified: data?._updatedAt || data?._createdAt,
          author: {
            '@type': 'Person',
            name: data?.author?.name || 'Navin Barange',
          },
          publisher: {
            '@type': 'Person',
            name: 'Navin Barange',
            url: 'https://nrknavin.in',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://nrknavin.in/blog/${data?.slug}`,
          },
        }

      case 'project':
        return {
          ...baseData,
          '@type': 'CreativeWork',
          name: data?.name || 'Project',
          description: data?.tagline || data?.description || '',
          image: data?.coverImage?.image || data?.logo,
          url: data?.projectUrl || `https://nrknavin.in/projects/${data?.slug}`,
          author: {
            '@type': 'Person',
            name: 'Navin Barange',
          },
          dateCreated: data?._createdAt,
          programmingLanguage: data?.technologies || [],
        }

      case 'faq':
        return {
          ...baseData,
          '@type': 'FAQPage',
          mainEntity: data?.faqs || [
            {
              '@type': 'Question',
              name: 'What technologies do you specialize in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'I specialize in full-stack development with Java, Spring Boot, React, Next.js, Python, and cloud technologies including AWS and microservices architecture.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are you available for freelance work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, I am available for freelance projects, consulting work, and full-time opportunities. Feel free to reach out through my contact page.',
              },
            },
            {
              '@type': 'Question',
              name: 'What kind of projects do you work on?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'I work on a variety of projects including web applications, microservices architecture, AI/ML integration, cloud-native solutions, and enterprise software development.',
              },
            },
          ],
        }

      case 'job':
        return {
          ...baseData,
          '@type': 'JobPosting',
          title: data?.jobTitle || 'Full Stack Developer',
          description: data?.description || 'Full Stack Developer with expertise in Java, React, and AI integration',
          datePosted: data?.startDate || new Date().toISOString(),
          employmentType: data?.employmentType || 'FULL_TIME',
          hiringOrganization: {
            '@type': 'Organization',
            name: data?.name || 'Company',
            url: data?.url || '',
          },
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'IN',
            },
          },
          skills: [
            'Java',
            'Spring Boot',
            'React',
            'Python',
            'Microservices',
            'Cloud Architecture',
            'AI/ML',
          ],
        }

      default:
        return baseData
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}