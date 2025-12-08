"use client";
import React, { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

export const FloatingNav = ({
    navItems,
    className,
    children,
}: {
    navItems: {
        title: string;
        href: string;
        icon?: JSX.Element;
    }[];
    className?: string;
    children?: React.ReactNode;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            const direction = current - prevScrollY;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }

            setPrevScrollY(current);
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: 0,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit md:max-w-7xl fixed top-4 inset-x-0 mx-auto border dark:border-white/[0.2] border-zinc-200 rounded-full dark:bg-black/90 bg-white/90 backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-6 md:pl-8 py-2 items-center justify-between space-x-4",
                    className
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image src={Logo} width={40} height={40} alt="logo" priority />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.href}
                            className={cn(
                                "relative dark:text-neutral-50 text-zinc-700 items-center flex space-x-1 dark:hover:text-primary-color hover:text-zinc-900 transition-colors font-semibold"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="text-sm">{navItem.title}</span>
                        </Link>
                    ))}
                </nav>

                {/* Theme Toggle & Mobile Menu */}
                <div className="flex items-center space-x-2">
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
