import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import PageHeading from "../components/shared/PageHeading";
import { Slide } from "../animation/Slide";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import StructuredData from "../components/seo/StructuredData";

export const metadata: Metadata = {
    title: "About Me - Full Stack Developer Journey",
    description:
        "Learn about my journey as a Full Stack Developer and AI Engineer. From building scalable Java Spring Boot applications to crafting modern React frontends, discover my technical philosophy, problem-solving approach, and passion for creating elegant solutions.",
    keywords:
        "About Navin Barange, Full Stack Developer journey, software engineer background, AI engineer story, developer philosophy, technical expertise, career path, professional developer, Java Spring Boot expert, React developer background",
    openGraph: {
        title: "About Navin Barange - Full Stack Developer & AI Engineer Journey",
        url: "https://nrknavin.in/about",
        description:
            "Discover my journey from learning to code to becoming a Full Stack Developer and AI Engineer specializing in Java, React, Python, and cloud architecture.",
        images: [
            {
                url: "https://i.ibb.co/BBPbZb7/1705208737383.jpg",
                width: 1200,
                height: 630,
                alt: "Navin Barange - Full Stack Developer & AI Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Navin Barange - Full Stack Developer Journey",
        description:
            "From Java backends to React frontends, discover my journey as a Full Stack Developer and AI Engineer.",
    },
};

export default async function AboutPage() {
    const [profileData] = (await sanityFetch({
        query: profileQuery,
        tags: ["profile"],
    })) as ProfileType[];

    return (
        <main className="min-h-screen flex flex-col">
            <StructuredData type="faq" />
            <PageHeading
                title="About Me"
                description="My journey, philosophy, and approach to building exceptional software"
            />

            <section className="container-safe section-padding flex-1">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Introduction with Profile Image */}
                    <Slide delay={0.1}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="md:col-span-2 space-y-4">
                                <h2 className="text-heading-md">👋 Hello, I&apos;m Navin</h2>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-lg dark:text-zinc-300 text-zinc-700 leading-relaxed">
                                        I&apos;m a <strong>Full Stack Developer</strong> and <strong>AI Engineer</strong> who believes
                                        that great software is built at the intersection of elegant code, user experience,
                                        and scalable architecture. With expertise spanning from Java Spring Boot backends
                                        to React frontends and AI integration, I craft solutions that are both powerful
                                        and maintainable.
                                    </p>
                                </div>
                            </div>
                            {profileData?.profileImage && (
                                <div className="flex justify-center md:justify-end">
                                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 dark:border-zinc-700 border-zinc-300">
                                        <Image
                                            src={profileData.profileImage.image}
                                            alt={profileData.profileImage.alt || profileData.fullName}
                                            fill
                                            className="object-cover"
                                            placeholder="blur"
                                            blurDataURL={profileData.profileImage.lqip}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </Slide>

                    {/* Professional Journey */}
                    <Slide delay={0.2}>
                        <div className="space-y-4">
                            <h2 className="text-heading-md">🚀 My Professional Journey</h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-base dark:text-zinc-300 text-zinc-700 leading-relaxed">
                                    My coding journey began with curiosity and evolved into a passion for solving
                                    complex problems through technology. Over the years, I&apos;ve had the privilege of
                                    working on diverse projects—from building microservices architectures that handle
                                    millions of requests to crafting intuitive user interfaces that delight users.
                                </p>
                                <p className="text-base dark:text-zinc-300 text-zinc-700 leading-relaxed">
                                    I specialize in the <strong>full stack</strong>: designing RESTful APIs with
                                    Java and Spring Boot, creating responsive frontends with React and Next.js,
                                    integrating AI/ML models into production systems, and architecting cloud-native
                                    solutions that scale. Each layer of the stack presents unique challenges, and
                                    I thrive on mastering them all.
                                </p>
                            </div>
                        </div>
                    </Slide>

                    {/* Technical Philosophy */}
                    <Slide delay={0.3}>
                        <div className="space-y-4">
                            <h2 className="text-heading-md">💭 Technical Philosophy</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="text-xl font-semibold mb-3 dark:text-primary-color text-secondary-color">
                                        Clean Code First
                                    </h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                        I believe code should be written for humans first, computers second.
                                        Readable, maintainable code with clear abstractions saves countless hours
                                        in the long run.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="text-xl font-semibold mb-3 dark:text-primary-color text-secondary-color">
                                        User-Centric Design
                                    </h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                        The best technical solution is worthless if users can&apos;t understand it.
                                        I prioritize intuitive interfaces and seamless user experiences in every
                                        project.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="text-xl font-semibold mb-3 dark:text-primary-color text-secondary-color">
                                        Scalability Matters
                                    </h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                        Building for today is easy; building for tomorrow&apos;s scale is an art.
                                        I architect systems with growth in mind, from database design to
                                        microservices patterns.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="text-xl font-semibold mb-3 dark:text-primary-color text-secondary-color">
                                        Continuous Learning
                                    </h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                        Technology evolves rapidly, and so must we. I dedicate time to learning
                                        new frameworks, best practices, and emerging technologies to stay at the
                                        cutting edge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    {/* Problem-Solving Approach */}
                    <Slide delay={0.4}>
                        <div className="space-y-4">
                            <h2 className="text-heading-md">🎯 How I Solve Problems</h2>
                            <div className="space-y-6">
                                <div className="border-l-4 dark:border-primary-color border-secondary-color pl-6">
                                    <h3 className="text-lg font-semibold mb-2">1. Understand Deeply</h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                        Before writing a single line of code, I invest time in understanding the
                                        problem domain, user needs, and business requirements. The best solutions
                                        come from asking the right questions.
                                    </p>
                                </div>

                                <div className="border-l-4 dark:border-primary-color border-secondary-color pl-6">
                                    <h3 className="text-lg font-semibold mb-2">2. Design Before Building</h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                        I sketch out architectures, consider edge cases, and plan for scalability.
                                        This upfront planning prevents costly refactoring and ensures robust solutions.
                                    </p>
                                </div>

                                <div className="border-l-4 dark:border-primary-color border-secondary-color pl-6">
                                    <h3 className="text-lg font-semibold mb-2">3. Iterate and Refine</h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                        First versions are rarely perfect. I build iteratively, gather feedback,
                                        and continuously refine both code and user experience until the solution
                                        truly shines.
                                    </p>
                                </div>

                                <div className="border-l-4 dark:border-primary-color border-secondary-color pl-6">
                                    <h3 className="text-lg font-semibold mb-2">4. Test Rigorously</h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                        Comprehensive testing—unit, integration, and end-to-end—ensures reliability.
                                        I write tests not as an afterthought but as an integral part of development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    {/* What I&apos;m Working On */}
                    <Slide delay={0.5}>
                        <div className="space-y-4">
                            <h2 className="text-heading-md">🔨 Current Focus</h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-base dark:text-zinc-300 text-zinc-700 leading-relaxed">
                                    Currently, I&apos;m diving deeper into <strong>AI integration patterns</strong>,
                                    exploring how to seamlessly integrate machine learning models into production
                                    applications. I&apos;m also refining my expertise in <strong>cloud-native
                                        architectures</strong> with Kubernetes and serverless technologies, and
                                    staying updated with the latest in <strong>React ecosystem</strong> including
                                    Next.js 16+ and Server Components.
                                </p>
                            </div>
                        </div>
                    </Slide>

                    {/* Full Bio from Sanity */}
                    {profileData?.fullBio && (
                        <Slide delay={0.6}>
                            <div className="space-y-4">
                                <h2 className="text-heading-md">📖 More About Me</h2>
                                <div className="prose dark:prose-invert max-w-none">
                                    <PortableText
                                        value={profileData.fullBio}
                                        components={CustomPortableText}
                                    />
                                </div>
                            </div>
                        </Slide>
                    )}

                    {/* Call to Action */}
                    <Slide delay={0.7}>
                        <div className="p-8 rounded-2xl dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-800 bg-gradient-to-br from-zinc-50 to-zinc-100 border dark:border-zinc-700 border-zinc-300 text-center">
                            <h2 className="text-2xl font-bold mb-4">Let&apos;s Build Something Great</h2>
                            <p className="text-base dark:text-zinc-300 text-zinc-700 mb-6 max-w-2xl mx-auto">
                                Whether you have a challenging project, need technical expertise, or just want
                                to discuss the latest in tech, I&apos;d love to connect.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="/resume"
                                    className="px-6 py-3 rounded-lg dark:bg-primary-color bg-secondary-color text-white font-semibold hover:opacity-90 transition-opacity"
                                >
                                    View My Resume
                                </a>
                                <a
                                    href={`mailto:${profileData?.email || 'navin.work360@gmail.com'}`}
                                    className="px-6 py-3 rounded-lg dark:bg-zinc-800 bg-zinc-200 dark:text-white text-zinc-900 font-semibold dark:hover:bg-zinc-700 hover:bg-zinc-300 transition-colors"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
        </main>
    );
}
