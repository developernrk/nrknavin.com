import { Slide } from "../../animation/Slide";
import { BiUser, BiBookOpen, BiEnvelope, BiRocket } from "react-icons/bi";
import Link from "next/link";

export default function QuickLinks() {
    const links = [
        {
            icon: BiUser,
            title: "My Story",
            description: "From 'Hello World' to Hello AI! 🚀",
            subtitle: "Spoiler: It involves lots of coffee and Stack Overflow",
            href: "/about",
            color: "from-blue-500/20 to-purple-500/20",
            hoverColor: "hover:border-blue-500/50",
        },
        {
            icon: BiBookOpen,
            title: "The Resume",
            description: "Warning: May cause spontaneous job offers 📄",
            subtitle: "More impressive than it sounds (I promise)",
            href: "/resume",
            color: "from-green-500/20 to-teal-500/20",
            hoverColor: "hover:border-green-500/50",
        },
        {
            icon: BiEnvelope,
            title: "Let's Talk",
            description: "Sliding into DMs, professionally 💼",
            subtitle: "I promise I reply faster than a promise.resolve()",
            href: "/contact",
            color: "from-pink-500/20 to-rose-500/20",
            hoverColor: "hover:border-pink-500/50",
        },
        {
            icon: BiRocket,
            title: "My Work",
            description: "Code that doesn't just work... it sparkles ✨",
            subtitle: "Zero bugs were harmed (okay, maybe a few)",
            href: "/projects",
            color: "from-orange-500/20 to-yellow-500/20",
            hoverColor: "hover:border-orange-500/50",
        },
    ];

    return (
        <section className="container-safe section-padding">
            <div className="max-w-6xl mx-auto">
                <Slide delay={0.1}>
                    <div className="text-center mb-12">
                        <h2 className="text-heading-md mb-4">
                            Explore My Digital Universe
                        </h2>
                        <p className="text-base dark:text-zinc-400 text-zinc-600 max-w-2xl mx-auto">
                            Not sure where to start? These links will guide you through my professional journey
                            (with a side of personality)
                        </p>
                    </div>
                </Slide>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {links.map((link, index) => (
                        <Slide key={link.href} delay={0.2 + index * 0.1}>
                            <Link href={link.href}>
                                <div
                                    className={`group p-6 rounded-2xl bg-gradient-to-br ${link.color} border dark:border-zinc-800 border-zinc-200 ${link.hoverColor} transition-all duration-300 hover:scale-105 cursor-pointer h-full`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl dark:bg-zinc-900/50 bg-white/50 group-hover:scale-110 transition-transform duration-300">
                                            <link.icon className="text-3xl dark:text-primary-color text-secondary-color" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 group-hover:dark:text-primary-color group-hover:text-secondary-color transition-colors">
                                                {link.title}
                                            </h3>
                                            <p className="text-base font-medium mb-2 dark:text-zinc-300 text-zinc-700">
                                                {link.description}
                                            </p>
                                            <p className="text-sm dark:text-zinc-400 text-zinc-600 italic">
                                                {link.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Slide>
                    ))}
                </div>

                {/* Fun CTA */}
                <Slide delay={0.6}>
                    <div className="mt-12 text-center">
                        <p className="text-sm dark:text-zinc-500 text-zinc-500 italic">
                            💡 Pro tip: Start with &quot;My Story&quot; if you want the full origin story,
                            or jump straight to &quot;The Resume&quot; if you&apos;re all business.
                        </p>
                    </div>
                </Slide>
            </div>
        </section>
    );
}
