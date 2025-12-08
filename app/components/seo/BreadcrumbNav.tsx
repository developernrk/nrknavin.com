import Link from "next/link";
import { BiChevronRight, BiHome } from "react-icons/bi";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbNavProps {
    items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
    // Generate JSON-LD structured data for breadcrumbs
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nrknavin.in"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": `https://nrknavin.in${item.href}`
            }))
        ]
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Visible Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="container-safe py-4">
                <ol className="flex items-center gap-2 text-sm flex-wrap">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center gap-1 dark:text-zinc-400 text-zinc-600 dark:hover:text-primary-color hover:text-secondary-color transition-colors"
                        >
                            <BiHome className="text-base" />
                            <span>Home</span>
                        </Link>
                    </li>

                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={item.href} className="flex items-center gap-2">
                                <BiChevronRight className="dark:text-zinc-600 text-zinc-400" />
                                {isLast ? (
                                    <span
                                        className="dark:text-zinc-100 text-zinc-900 font-medium"
                                        aria-current="page"
                                    >
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="dark:text-zinc-400 text-zinc-600 dark:hover:text-primary-color hover:text-secondary-color transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
