import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import PageHeading from "../components/shared/PageHeading";
import { Slide } from "../animation/Slide";
import Social from "../components/shared/Social";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export const metadata: Metadata = {
    title: "Contact - Get In Touch",
    description:
        "Get in touch with Navin Barange for software development projects, collaborations, or opportunities. Available for full-stack development, AI integration, and technical consulting.",
    keywords:
        "Contact Navin Barange, hire full stack developer, software development contact, AI engineer hire, project inquiry, technical consulting, developer collaboration, freelance developer contact",
    openGraph: {
        title: "Contact Navin Barange | Full Stack Developer & AI Engineer",
        url: "https://nrknavin.in/contact",
        description:
            "Let's build something great together. Contact me for full-stack development, AI integration, or technical consulting opportunities.",
        images: [
            {
                url: "https://i.ibb.co/BBPbZb7/1705208737383.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Navin Barange - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Navin Barange | Full Stack Developer",
        description:
            "Get in touch for software development projects and collaborations.",
    },
};

export default async function ContactPage() {
    const [profileData] = (await sanityFetch({
        query: profileQuery,
        tags: ["profile"],
    })) as ProfileType[];

    return (
        <main className="min-h-screen flex flex-col">
            <PageHeading
                title="Let's Connect"
                description="Have a project in mind? Let's discuss how we can work together"
            />

            <section className="container-safe section-padding flex-1">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <Slide delay={0.1}>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                                    <p className="text-base dark:text-zinc-300 text-zinc-700 leading-relaxed mb-6">
                                        I&apos;m always interested in hearing about new projects, creative ideas,
                                        or opportunities to be part of your visions. Whether you have a question
                                        or just want to say hi, feel free to reach out!
                                    </p>
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-4">
                                    {profileData?.email && (
                                        <div className="flex items-start gap-4 p-4 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                            <div className="p-3 rounded-lg dark:bg-primary-color/10 bg-secondary-color/10">
                                                <BiEnvelope className="text-2xl dark:text-primary-color text-secondary-color" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1">Email</h3>
                                                <a
                                                    href={`mailto:${profileData.email}`}
                                                    className="text-sm dark:text-zinc-400 text-zinc-600 hover:dark:text-primary-color hover:text-secondary-color transition-colors break-all"
                                                >
                                                    {profileData.email}
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {profileData?.location && (
                                        <div className="flex items-start gap-4 p-4 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                            <div className="p-3 rounded-lg dark:bg-primary-color/10 bg-secondary-color/10">
                                                <BiMap className="text-2xl dark:text-primary-color text-secondary-color" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1">Location</h3>
                                                <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                                    {profileData.location}
                                                </p>
                                                <p className="text-xs dark:text-zinc-500 text-zinc-500 mt-1">
                                                    Available for remote work worldwide
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-4 p-4 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                        <div className="p-3 rounded-lg dark:bg-primary-color/10 bg-secondary-color/10">
                                            <BiPhone className="text-2xl dark:text-primary-color text-secondary-color" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold mb-1">Response Time</h3>
                                            <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                                Usually within 24-48 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div>
                                    <h3 className="font-semibold mb-4">Connect on Social Media</h3>
                                    <Social type="social" />
                                </div>
                            </div>
                        </Slide>

                        {/* Contact Form / Quick Links */}
                        <Slide delay={0.2}>
                            <div className="space-y-6">
                                <div className="p-8 rounded-2xl dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-800 bg-gradient-to-br from-zinc-50 to-zinc-100 border dark:border-zinc-700 border-zinc-300">
                                    <h3 className="text-xl font-bold mb-4">What I Can Help With</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-lg dark:text-primary-color text-secondary-color mt-1">•</span>
                                            <div>
                                                <strong className="block mb-1">Full Stack Development</strong>
                                                <span className="text-sm dark:text-zinc-400 text-zinc-600">
                                                    End-to-end web application development with React, Next.js, Java, and Spring Boot
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-lg dark:text-primary-color text-secondary-color mt-1">•</span>
                                            <div>
                                                <strong className="block mb-1">AI Integration</strong>
                                                <span className="text-sm dark:text-zinc-400 text-zinc-600">
                                                    Machine learning model integration, NLP solutions, and AI-powered features
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-lg dark:text-primary-color text-secondary-color mt-1">•</span>
                                            <div>
                                                <strong className="block mb-1">Cloud Architecture</strong>
                                                <span className="text-sm dark:text-zinc-400 text-zinc-600">
                                                    Scalable cloud solutions, microservices architecture, and DevOps practices
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-lg dark:text-primary-color text-secondary-color mt-1">•</span>
                                            <div>
                                                <strong className="block mb-1">Technical Consulting</strong>
                                                <span className="text-sm dark:text-zinc-400 text-zinc-600">
                                                    Architecture reviews, code audits, and technology stack recommendations
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="font-semibold mb-4">Before You Reach Out</h3>
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600 mb-4">
                                        To help me understand your needs better, please include:
                                    </p>
                                    <ul className="text-sm dark:text-zinc-400 text-zinc-600 space-y-2">
                                        <li>✓ Brief project description</li>
                                        <li>✓ Expected timeline</li>
                                        <li>✓ Budget range (if applicable)</li>
                                        <li>✓ Technology preferences</li>
                                    </ul>
                                </div>

                                <div className="text-center p-8 rounded-2xl dark:bg-primary-color/10 bg-secondary-color/10 border dark:border-primary-color/20 border-secondary-color/20">
                                    <p className="text-sm dark:text-zinc-400 text-zinc-600 mb-4">
                                        Prefer email? Send me a message directly:
                                    </p>
                                    <a
                                        href={`mailto:${profileData?.email || 'navin.work360@gmail.com'}`}
                                        className="inline-block px-8 py-4 rounded-lg dark:bg-primary-color bg-secondary-color text-white font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Send Email
                                    </a>
                                </div>
                            </div>
                        </Slide>
                    </div>

                    {/* Additional Info */}
                    <Slide delay={0.3}>
                        <div className="mt-12 p-6 rounded-xl dark:bg-zinc-900/30 bg-zinc-50/50 border dark:border-zinc-800 border-zinc-200 text-center">
                            <p className="text-sm dark:text-zinc-400 text-zinc-600">
                                <strong>Pro tip:</strong> Check out my{" "}
                                <a href="/resume" className="dark:text-primary-color text-secondary-color hover:underline">
                                    resume
                                </a>{" "}
                                and{" "}
                                <a href="/projects" className="dark:text-primary-color text-secondary-color hover:underline">
                                    projects
                                </a>{" "}
                                to see if my expertise aligns with your needs before reaching out.
                            </p>
                        </div>
                    </Slide>
                </div>
            </section>
        </main>
    );
}
