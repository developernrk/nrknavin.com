import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { profileQuery, jobQuery } from "@/lib/sanity.query";
import type { ProfileType, JobType } from "@/types";
import PageHeading from "../components/shared/PageHeading";
import { Slide } from "../animation/Slide";
import { BiDownload, BiEnvelope, BiMap, BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Resume - Hire Full Stack Developer",
    description:
        "View Navin Barange's professional resume. Experienced Full Stack Developer & AI Engineer with expertise in Java, Spring Boot, React, Python, cloud architecture, and microservices. Available for hire.",
    keywords:
        "Navin Barange resume, hire full stack developer, Java developer resume, React developer CV, AI engineer resume, software engineer hire, Spring Boot developer, full stack developer for hire, professional resume, developer CV",
    openGraph: {
        title: "Resume - Navin Barange | Full Stack Developer & AI Engineer",
        url: "https://nrknavin.in/resume",
        description:
            "Experienced Full Stack Developer & AI Engineer available for hire. Expertise in Java, React, Python, and cloud architecture with proven track record.",
        images: [
            {
                url: "https://i.ibb.co/BBPbZb7/1705208737383.jpg",
                width: 1200,
                height: 630,
                alt: "Navin Barange Resume - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Resume - Navin Barange | Full Stack Developer",
        description:
            "Hire an experienced Full Stack Developer & AI Engineer. View my professional resume and work experience.",
    },
};

export default async function ResumePage() {
    const [profileData] = (await sanityFetch({
        query: profileQuery,
        tags: ["profile"],
    })) as ProfileType[];


    const jobs: JobType[] = await sanityFetch({
        query: jobQuery,
        tags: ["job"],
    });

    return (
        <main className="min-h-screen flex flex-col">
            <PageHeading
                title="Resume"
                description="My professional experience, skills, and qualifications"
            />

            <section className="container-safe section-padding flex-1">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Header with Profile Info */}
                    <Slide delay={0.1}>
                        <div className="p-8 rounded-2xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                <div className="flex items-center gap-6">
                                    {profileData?.profileImage && (
                                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 dark:border-primary-color border-secondary-color flex-shrink-0">
                                            <Image
                                                src={profileData.profileImage.image}
                                                alt={profileData.profileImage.alt || profileData.fullName}
                                                fill
                                                className="object-cover"
                                                placeholder="blur"
                                                blurDataURL={profileData.profileImage.lqip}
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <h1 className="text-3xl font-bold mb-2">{profileData?.fullName}</h1>
                                        <p className="text-lg dark:text-primary-color text-secondary-color font-semibold mb-3">
                                            {profileData?.headline}
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-sm dark:text-zinc-400 text-zinc-600">
                                            {profileData?.email && (
                                                <div className="flex items-center gap-2">
                                                    <BiEnvelope className="text-base" />
                                                    <span>{profileData.email}</span>
                                                </div>
                                            )}
                                            {profileData?.location && (
                                                <div className="flex items-center gap-2">
                                                    <BiMap className="text-base" />
                                                    <span>{profileData.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {profileData?.resumeURL && (
                                    <a
                                        href={profileData.resumeURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg dark:bg-primary-color bg-secondary-color text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                                    >
                                        <BiDownload className="text-lg" />
                                        Download PDF
                                    </a>
                                )}
                            </div>
                        </div>
                    </Slide>

                    {/* Professional Summary */}
                    {profileData?.shortBio && (
                        <Slide delay={0.2}>
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold dark:text-primary-color text-secondary-color">
                                    Professional Summary
                                </h2>
                                <p className="text-base dark:text-zinc-300 text-zinc-700 leading-relaxed">
                                    {profileData.shortBio}
                                </p>
                            </div>
                        </Slide>
                    )}

                    {/* Work Experience */}
                    <Slide delay={0.3}>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold dark:text-primary-color text-secondary-color">
                                Work Experience
                            </h2>

                            {jobs && jobs.length > 0 ? (
                                <div className="space-y-6">
                                    {jobs.map((job, index) => (
                                        <div
                                            key={job._id}
                                            className="p-6 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold mb-1">{job.name}</h3>
                                                    <p className="text-base dark:text-primary-color text-secondary-color font-medium">
                                                        {job.jobTitle}
                                                    </p>
                                                </div>
                                                <div className="text-sm dark:text-zinc-400 text-zinc-600 whitespace-nowrap">
                                                    {job.startDate} - {job.endDate || "Present"}
                                                </div>
                                            </div>

                                            {job.description && (
                                                <p className="text-sm dark:text-zinc-300 text-zinc-700 leading-relaxed mb-4">
                                                    {job.description}
                                                </p>
                                            )}

                                            {job.url && (
                                                <a
                                                    href={job.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm dark:text-primary-color text-secondary-color hover:underline"
                                                >
                                                    View Company
                                                    <BiLinkExternal />
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm dark:text-zinc-400 text-zinc-600 italic">
                                    Experience details available upon request
                                </p>
                            )}
                        </div>
                    </Slide>

                    {/* Key Skills Highlight */}
                    <Slide delay={0.4}>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold dark:text-primary-color text-secondary-color">
                                Technical Expertise
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-5 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="font-semibold mb-3 text-lg">Backend Development</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Java", "Spring Boot", "Python", "Microservices", "REST APIs"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-xs rounded-full dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="font-semibold mb-3 text-lg">Frontend Development</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-xs rounded-full dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="font-semibold mb-3 text-lg">AI & Machine Learning</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["LangChain", "LangGraph", "Agentic AI", "RAG"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-xs rounded-full dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200">
                                    <h3 className="font-semibold mb-3 text-lg">Cloud & DevOps</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["GCP", "Docker", "Kubernetes", "CI/CD", "Git"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-xs rounded-full dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-300 text-zinc-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <a
                                    href="/skills"
                                    className="inline-flex items-center gap-2 text-sm dark:text-primary-color text-secondary-color hover:underline font-medium"
                                >
                                    View Complete Skills Portfolio
                                    <BiLinkExternal />
                                </a>
                            </div>
                        </div>
                    </Slide>

                    {/* Projects Highlight */}
                    <Slide delay={0.5}>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold dark:text-primary-color text-secondary-color">
                                Featured Projects
                            </h2>
                            <p className="text-base dark:text-zinc-300 text-zinc-700">
                                I&apos;ve built scalable web applications, AI-powered solutions, and enterprise-grade systems.
                                From microservices architectures to responsive frontends, my portfolio showcases
                                real-world problem-solving.
                            </p>
                            <a
                                href="/projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg dark:bg-zinc-800 bg-zinc-200 dark:text-white text-zinc-900 font-semibold dark:hover:bg-zinc-700 hover:bg-zinc-300 transition-colors"
                            >
                                Explore My Projects
                                <BiLinkExternal />
                            </a>
                        </div>
                    </Slide>

                    {/* Call to Action */}
                    <Slide delay={0.6}>
                        <div className="p-8 rounded-2xl dark:bg-gradient-to-br dark:from-primary-color/20 dark:to-secondary-color/20 bg-gradient-to-br from-secondary-color/10 to-primary-color/10 border dark:border-primary-color/30 border-secondary-color/30 text-center">
                            <h2 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h2>
                            <p className="text-base dark:text-zinc-300 text-zinc-700 mb-6 max-w-2xl mx-auto">
                                I&apos;m always interested in hearing about new opportunities, challenging projects,
                                and innovative ideas. Feel free to reach out!
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href={`mailto:${profileData?.email || 'navin.work360@gmail.com'}`}
                                    className="px-6 py-3 rounded-lg dark:bg-primary-color bg-secondary-color text-white font-semibold hover:opacity-90 transition-opacity"
                                >
                                    Email Me
                                </a>
                                <a
                                    href="https://linkedin.com/in/navinbarange"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-lg dark:bg-zinc-800 bg-zinc-200 dark:text-white text-zinc-900 font-semibold dark:hover:bg-zinc-700 hover:bg-zinc-300 transition-colors"
                                >
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
        </main>
    );
}
