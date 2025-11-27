export const seoConfig = {
  // Basic site information
  siteName: "Navin Barange Portfolio",
  siteUrl: "https://nrknavin.in",
  defaultTitle: "Navin Barange | Full Stack Developer & AI Engineer",
  defaultDescription: "Full Stack Developer & AI Engineer specializing in Java, React, Python, and cloud architecture. Building scalable solutions from frontend to AI integration.",
  
  // Author information
  author: {
    name: "Navin Barange",
    email: "navin.work360@gmail.com",
    twitter: "@nrk_navin",
    linkedin: "https://linkedin.com/in/navinbarange",
    github: "https://github.com/developernrk",
  },
  
  // Default images
  defaultOgImage: "https://i.ibb.co/BBPbZb7/1705208737383.jpg",
  defaultTwitterImage: "https://i.ibb.co/BBPbZb7/1705208737383.jpg",
  
  // Keywords
  defaultKeywords: [
    "Full Stack Developer",
    "AI Engineer", 
    "Java Developer",
    "React Developer",
    "Python Developer",
    "Spring Boot",
    "Cloud Architecture",
    "Microservices",
    "Software Engineer",
    "Web Development",
    "Machine Learning",
    "Navin Barange"
  ],
  
  // Social media
  social: {
    twitter: "nrk_navin",
    linkedin: "navinbarange",
    github: "developernrk",
  },
  
  // Analytics and verification
  googleSiteVerification: "liHDrCXXJIwMQAMnvIthc0FniieeAz5MOkpnV_51uTI",
  
  // Structured data
  organization: {
    "@type": "Person",
    name: "Navin Barange",
    url: "https://nrknavin.in",
    logo: "https://nrknavin.in/logo.png",
    sameAs: [
      "https://github.com/developernrk",
      "https://linkedin.com/in/navinbarange",
      "https://x.com/nrk_navin",
    ],
  },
}

export const generatePageMetadata = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
}) => {
  const pageTitle = title 
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle
  
  const pageDescription = description || seoConfig.defaultDescription
  const pageKeywords = keywords 
    ? [...seoConfig.defaultKeywords, ...keywords]
    : seoConfig.defaultKeywords
  const pageImage = image || seoConfig.defaultOgImage
  const pageUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords.join(", "),
    openGraph: {
      type,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: seoConfig.siteName,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: `@${seoConfig.social.twitter}`,
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}