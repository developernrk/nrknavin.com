"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";

export default function Theme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted)
    return (
      <span className="animate-pulse min-w-[32px] min-h-[32px] p-2 rounded-full dark:bg-zinc-800/50 bg-zinc-200/50 border dark:border-zinc-700/50 border-zinc-300/50"></span>
    );

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className={`relative dark:bg-zinc-800/80 bg-zinc-100/80 backdrop-blur-sm dark:text-primary-color text-zinc-700 hover:text-primary-color border dark:border-zinc-700/50 border-zinc-300/50 rounded-full p-2 duration-300 transition-all hover:scale-110 ${resolvedTheme === "light" ? "-rotate-180" : "rotate-0"
        }`}
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "light" ? <LuSun className="w-5 h-5" /> : <MdOutlineDarkMode className="w-5 h-5" />}
    </button>
  );
}
