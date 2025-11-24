/* eslint-disable @next/next/no-img-element */
export default function Buymeacoffee() {
  return (
    <a
      href="https://www.buymeacoffee.com/nrknavin"
      className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 xs:gap-3 sm:gap-4 min-h-[90px] xs:min-h-[100px] sm:min-h-[110px] dark:bg-primary-bg bg-secondary-bg hover:dark:bg-[#2e290e44] rounded-lg border dark:border-zinc-800 border-zinc-200 hover:dark:border-[#ffdd0060] hover:border-[#e6d14fe7] duration-300 px-3 xs:px-4 sm:px-6 py-4 xs:py-6 group text-center sm:text-start"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="text-xs xs:text-sm sm:text-base font-medium">Do you feel like supporting my work? 🙂</span>
      <img
        className="grayscale group-hover:grayscale-0 duration-300 w-full sm:w-auto max-w-xs"
        alt="Buymeacoffee button"
        loading="lazy"
        src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=nrknavin&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
      />
    </a>
  );
}
