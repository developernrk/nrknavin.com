import "@/app/styles/globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import { FloatingNav } from "./components/global/floating-navbar";
import Footer from "./components/global/Footer";
import StructuredData from "./components/seo/StructuredData";
import WebsiteLoader from "./components/global/WebsiteLoader";
import { Providers } from "./providers";
import Theme from "./components/global/Theme";
import MobileMenu from "./components/global/MobileMenu";
import Navbar from "./components/global/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Navin Barange | Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer & AI Engineer specializing in Java, React, Python, and cloud architecture. Building scalable solutions from frontend to AI integration. Expert in Spring Boot, microservices, and modern web technologies.",
  url: "https://nrknavin.in",
  ogImage:
    "https://i.ibb.co/BBPbZb7/1705208737383.jpg",
  keywords: "Full Stack Developer, AI Engineer, Java Developer, React Developer, Python, Spring Boot, Cloud Architecture, Microservices, Software Engineer, Web Development, Machine Learning, Navin Barange, Remote Developer, Freelance Developer, India Developer, nrknavin",
};

export const metadata: Metadata = {
  title: {
    default: options.title,
    template: "%s | Navin Barange - Full Stack Developer & AI Engineer",
  },
  metadataBase: new URL(options.url),
  description: options.description,
  keywords: options.keywords,
  authors: [{ name: "Navin Barange", url: "https://nrknavin.in" }],
  creator: "Navin Barange",
  publisher: "Navin Barange",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en-US",
    url: options.url,
    title: options.title,
    description: options.description,
    siteName: "Navin Barange Portfolio",
    images: [
      {
        url: options.ogImage,
        width: 1200,
        height: 630,
        alt: "Navin Barange - Full Stack Developer & AI Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: options.title,
    description: options.description,
    images: [options.ogImage],
    creator: "@nrk_navin",
    site: "@nrk_navin",
  },
  alternates: {
    canonical: options.url,
    languages: {
      'en-US': options.url,
      'en': options.url,
    },
  },
  verification: {
    google: "liHDrCXXJIwMQAMnvIthc0FniieeAz5MOkpnV_51uTI",
  },
  manifest: "/manifest.json",
  category: "technology",
  applicationName: "Navin Barange Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Navin Barange",
  },
  classification: "Portfolio Website",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "7 days",
    "language": "English",
    "target": "all",
    "audience": "developers, recruiters, businesses",
    "coverage": "Worldwide",
    "designer": "Navin Barange",
    "owner": "Navin Barange",
    "reply-to": "navin.work360@gmail.com",
    "url": options.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Resume", href: "/resume" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} dark:bg-zinc-950 bg-white dark:text-white text-zinc-900 font-medium antialiased`}
        suppressHydrationWarning
      >
        <WebsiteLoader />
        <Providers>
          <StructuredData type="person" />
          <StructuredData type="website" />
          {/* <FloatingNav navItems={navItems}>
            <Theme />
            <MobileMenu />
          </FloatingNav> */}
          <Navbar />
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
          <Footer />
          {/* <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          /> */}
        </Providers>
      </body>
    </html>
  );
}
