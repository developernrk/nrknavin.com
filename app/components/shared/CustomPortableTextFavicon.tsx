import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import Favicon from "../../utils/favicon";
import RefLink from "./RefLink";

export const CustomPortableTextFavicon: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-4 xs:before:-left-4.5 sm:before:-left-5 before:text-base xs:before:text-lg sm:before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-base xs:text-lg sm:text-2xl mt-4 xs:mt-5 sm:mt-6 mb-2">
        <Link
          href={`#${children?.toString().toLowerCase().replaceAll(" ", "-")}`}
        >
          {children}
        </Link>
      </h3>
    ),
    normal: ({ children }) => <p className="mt-1.5 xs:mt-2 sm:mt-3 mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-xs xs:text-sm sm:text-base leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <RefLink
          href={value?.href}
          className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
        >
          <Favicon domain={value?.href} alt={value?.href} />
          {children}
        </RefLink>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none mt-2.5 xs:mt-3 sm:mt-4 ml-1.5 xs:ml-2 sm:ml-3 dark:text-zinc-400 text-zinc-600 space-y-1.5 xs:space-y-2 sm:space-y-3">
        {children}
      </ul>
    ),
  },
  listItem: { bullet: ({ children }) => <li className="text-xs xs:text-sm sm:text-base">{children}</li> },
};
