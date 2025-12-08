import { Slide } from "../../animation/Slide";
import { BiCodeAlt, BiServer, BiMobile } from "react-icons/bi";

export default function Stats() {
    const stats = [
        {
            icon: BiCodeAlt,
            value: "3+",
            label: "Years Experience",
            description: "Build production-ready applications",
        },
        {
            icon: BiServer,
            value: "20+",
            label: "Projects Delivered",
            description: "From MVPs to enterprise solutions",
        },
        {
            icon: BiMobile,
            value: "15+",
            label: "Technologies Mastered",
            description: "Across full stack and AI/ML",
        },
    ];

    return (
        <section className="w-full max-w-full mx-auto section-padding bg-gradient-to-b dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 from-white via-zinc-50 to-white">
            <div className="max-w-5xl mx-auto">
                <Slide delay={0.1}>
                    <div className="text-center mb-12">
                        <h2 className="text-heading-md mb-4">By The Numbers</h2>
                        <p className="text-base dark:text-zinc-400 text-zinc-600 max-w-2xl mx-auto">
                            Proven track record of delivering high-quality software solutions
                        </p>
                    </div>
                </Slide>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <Slide key={stat.label} delay={0.2 + index * 0.1}>
                            <div className="p-8 rounded-2xl dark:bg-zinc-900/50 bg-zinc-50 border dark:border-zinc-800 border-zinc-200 text-center hover:scale-105 transition-transform duration-300">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 rounded-full dark:bg-primary-color/10 bg-secondary-color/10">
                                        <stat.icon className="text-4xl dark:text-primary-color text-secondary-color" />
                                    </div>
                                </div>
                                <div className="text-4xl lg:text-5xl font-bold mb-2 dark:text-primary-color text-secondary-color">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                                <div className="text-sm dark:text-zinc-400 text-zinc-600">
                                    {stat.description}
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
        </section>
    );
}
