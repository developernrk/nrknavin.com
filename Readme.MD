# Navin Barange - Portfolio Website

![Portfolio Banner](https://i.ibb.co/BBPbZb7/1705208737383.jpg)

## 🌐 Live Website
**[nrknavin.in](https://nrknavin.in)** | **[nrknavin.com](https://nrknavin.com)**

## 👨‍💻 About

This is my personal portfolio website showcasing my work as a **Full Stack Developer** and **AI Engineer**. Built with modern web technologies, it features my projects, technical skills, blog posts, and professional journey.

## ✨ Features

- 🎨 **Modern Design**: Clean, responsive UI with dark/light mode support
- 📝 **Blog Platform**: Technical articles and insights powered by Sanity CMS
- 💼 **Project Showcase**: Detailed portfolio of work with case studies
- 🛠️ **Skills Matrix**: Comprehensive technical skills with proficiency levels
- 🤖 **AI Integration**: Smart content management and dynamic features
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Built with Next.js for lightning-fast load times
- 🔍 **SEO Optimized**: Comprehensive meta tags and structured data
- 🎯 **Accessibility**: WCAG compliant with semantic HTML

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (React 18)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

### Backend & CMS
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Schema**: Custom content models for blog, projects, skills, jobs
- **API**: Next.js API routes with Sanity client

### Developer Experience
- **Linting**: ESLint with Next.js config
- **Type Safety**: Full TypeScript integration
- **Code Quality**: Prettier for code formatting
- **Version Control**: Git & GitHub

### Deployment & Hosting
- **Platform**: [Vercel](https://vercel.com/)
- **Domain**: Custom domain with SSL
- **CDN**: Global edge network for fast delivery
- **Analytics**: Integrated performance monitoring

## 📁 Project Structure

```
nrknavin/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── blog/                # Blog section
│   │   └── [post]/         # Individual blog posts
│   ├── components/          # React components
│   │   ├── global/         # Layout components (Navbar, Footer)
│   │   ├── pages/          # Page-specific components
│   │   ├── seo/            # SEO and structured data
│   │   └── shared/         # Reusable components
│   ├── gallery/            # Photos and visual work
│   ├── projects/           # Projects showcase
│   │   └── [project]/     # Individual project pages
│   ├── resume/             # Interactive resume
│   ├── skills/             # Technical skills page
│   └── styles/             # Global styles
├── lib/                     # Utility functions
│   ├── sanity.client.ts    # Sanity CMS client
│   ├── sanity.query.ts     # CMS queries
│   └── seo.config.ts       # SEO configuration
├── public/                  # Static assets
│   ├── robots.txt          # Search engine directives
│   └── sitemap.xml         # Sitemap for SEO
├── schemas/                 # Sanity CMS schemas
│   ├── author.ts           # Author schema
│   ├── post.ts             # Blog post schema
│   ├── project.ts          # Project schema
│   ├── skill.ts            # Skill schema
│   └── profile.ts          # Profile schema
├── types/                   # TypeScript type definitions
└── next.config.js          # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Sanity account for CMS (optional for development)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/developernrk/nrknavin.com.git
cd nrknavin.com
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
SANITY_API_TOKEN=your_api_token

# Optional: Analytics
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your_analytics_id
```

4. **Run the development server**
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Sanity Studio Setup

1. **Navigate to Sanity Studio**
```bash
# Access at http://localhost:3000/studio
```

2. **Seed initial data** (optional)
```bash
npm run seed:skills
```

## 📝 Content Management

This portfolio uses **Sanity CMS** for flexible content management:

- **Blog Posts**: Write and publish technical articles
- **Projects**: Showcase work with detailed descriptions
- **Skills**: Maintain up-to-date technical expertise
- **Work Experience**: Track professional journey
- **Profile**: Update bio and contact information

Access the CMS at `/studio` when running locally or at `nrknavin.in/studio` in production.

## 🎨 Customization

### Theming

The site supports dark and light modes. Theme configuration is in:
- `app/components/global/Theme.tsx` - Theme toggle component
- `tailwind.config.js` - Color palette and design tokens

### SEO Configuration

Update SEO settings in `lib/seo.config.ts`:
```typescript
export const seoConfig = {
  siteName: "Your Name Portfolio",
  siteUrl: "https://yoursite.com",
  defaultTitle: "Your Title",
  // ... more config
}
```

### Navigation

Modify the navigation in:
- `app/components/global/Navbar.tsx` - Main navigation
- `app/components/global/Footer.tsx` - Footer links

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Configure environment variables
   - Deploy!

### Build for Production

```bash
npm run build
npm run start
```

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Strategic caching for static and dynamic content

## 🔍 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Twitter Card optimization
- ✅ Structured data (JSON-LD)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Alt text for all images

## 🤝 Contributing

While this is a personal portfolio, suggestions and bug reports are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Navin Barange**
- Website: [nrknavin.in](https://nrknavin.in)
- Email: [navin.work360@gmail.com](mailto:navin.work360@gmail.com)
- LinkedIn: [linkedin.com/in/navinbarange](https://linkedin.com/in/navinbarange)
- GitHub: [@developernrk](https://github.com/developernrk)
- Twitter: [@nrk_navin](https://twitter.com/nrk_navin)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Sanity](https://www.sanity.io/) - Content management
- [Vercel](https://vercel.com/) - Hosting platform
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

**Built with ❤️ by Navin Barange**

*Last Updated: December 2024*
