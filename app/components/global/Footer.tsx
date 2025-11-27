import Link from "next/link";
import {
  HiOutlineMail 
} from "react-icons/hi";
import UnmountStudio from "./Unmount";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: "Skills", href: "/skills" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Gallery", href: "/gallery" },
  ];

  const socialLinks = [
    // { icon: HiOutlineGithub, href: "https://github.com", label: "GitHub" },
    // { icon: HiOutlineTwitter, href: "https://twitter.com", label: "Twitter" },
    // { icon: HiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: HiOutlineMail, href: "mailto:navin.work360@gmail.com", label: "Email" },
  ];

  return (
    <UnmountStudio>
      <footer className="relative mt-16 sm:mt-20 md:mt-24 border-t dark:border-zinc-800 border-zinc-200">
        {/* Gradient Background */}
        <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zinc-900/0 dark:via-zinc-900/50 dark:to-zinc-950 bg-gradient-to-b from-white/0 via-white/50 to-zinc-50 pointer-events-none" />
        
        <div className="relative container-safe section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-8 mb-6 xs:mb-8 sm:mb-10">
            {/* Brand Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                  <Image
                      src={Logo}
                      width={32}
                      height={32}
                      alt="Navin's logo"
                      className="w-16 h-8 rounded-md"
                  />
              </div>
                <span className="font-incognito font-bold dark:text-white text-zinc-900 text-base">Navin Barange | NRk</span>

              <p className="text-xs dark:text-zinc-400 text-zinc-600 leading-relaxed">
                Full-stack developer × Technical writer × Professional bug hunter 🐛 → feature builder
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-incognito font-semibold dark:text-white text-zinc-900 mb-3 text-sm">
                Navigation
              </h3>
              <ul className="space-y-1.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs dark:text-zinc-400 text-zinc-600 hover:text-primary-color dark:hover:text-primary-color transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-incognito font-semibold dark:text-white text-zinc-900 mb-3 text-sm">
                Connect
              </h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg dark:bg-zinc-800/60 bg-zinc-100/60 dark:hover:bg-primary-color dark:hover:text-zinc-900 hover:bg-primary-color hover:text-white transition-all duration-300 group"
                    >
                      <Icon className="text-base group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="font-incognito font-semibold dark:text-white text-zinc-900 mb-2 text-sm">
                Get Updates
              </h3>
              <p className="text-xs dark:text-zinc-400 text-zinc-600 mb-3">
                No spam, just code stories & dev wisdom ☕
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-2.5 py-1.5 rounded-lg text-xs dark:bg-zinc-800 bg-zinc-100 dark:border-zinc-700 border border-zinc-300 dark:text-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary-color"
                />
                <button className="btn-primary !px-2.5 !py-1.5 text-xs">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px dark:bg-zinc-800 bg-zinc-200 mb-6" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs dark:text-zinc-400 text-zinc-600">
            <p>
              © {currentYear} <span className="font-semibold dark:text-white text-zinc-900">NRk</span>. All rights reserved.
            </p>
            {/*<p>*/}
            {/*  Designed with ❤️ • Built with <span className="text-primary-color font-semibold">Passion</span>*/}
            {/*</p>*/}
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}
