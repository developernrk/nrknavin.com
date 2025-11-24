import { socialLinks } from "../../data/social";
import RefLink from "./RefLink";

export default function Social({ type }: { type: string }) {
  return (
    <ul className="flex items-center flex-wrap gap-x-2 xs:gap-x-3 sm:gap-x-5 gap-y-2 xs:gap-y-3 sm:gap-y-4 my-4 xs:my-6 sm:my-10">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <RefLink
              href={value.url}
              className="inline-flex items-center gap-x-2 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 border-b dark:border-b-zinc-800 border-zinc-200 group hover:dark:bg-zinc-900/30 hover:bg-zinc-100/30 rounded transition-all duration-300 text-xs xs:text-sm sm:text-base"
            >
              <value.icon
                className="flex-shrink-0 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 transition-colors duration-300"
                aria-hidden="true"
              />
              <span className="hidden sm:inline">{value.name}</span>
            </RefLink>
          </li>
        ))}
    </ul>
  );
}
