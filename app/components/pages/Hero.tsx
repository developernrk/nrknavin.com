import Image from "next/image";
import { sanityFetch } from "@/lib/sanity.client";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { Slide } from "../../animation/Slide";
import Social from "../shared/Social";
import HeroSvg from "../../assets/icons/HeroSvg";
import SkillsByCategory from "./SkillsByCategory";

export default async function Hero() {
  const [profileData] = (await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  })) as ProfileType[];

  if (!profileData) {
    return null;
  }

  return (
    <section className="container-safe section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-3 xs:space-y-4 sm:space-y-6">
          <Slide>
            <div className="space-y-3">
              {/* Profile Image - Mobile Only */}
              {profileData.profileImage && (
                <div className="lg:hidden mb-6 flex justify-center">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                    <Image
                      src={profileData.profileImage.image}
                      alt={profileData.profileImage.alt || profileData.fullName}
                      width={200}
                      height={200}
                      placeholder="blur"
                      blurDataURL={profileData.profileImage.lqip}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              )}

              {/* Tagline Badge */}
              <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full dark:bg-zinc-800/60 bg-zinc-100/60 border dark:border-zinc-700 border-zinc-300 w-fit">
                <p className="text-xs sm:text-sm font-semibold dark:text-primary-color text-secondary-color">
                  Full Stack Developer & AI Engineer
                </p>
              </div>

              {/* Headline */}
              <h1 className="text-hero sm:text-start leading-tight sm:leading-snug md:leading-normal">
                Building Tomorrow&#39;s Tech Today
              </h1>
            </div>
          </Slide>

          {/* Short Bio */}
          <Slide delay={0.1}>
            <p className="text-base sm:text-lg dark:text-zinc-400 text-zinc-600 leading-relaxed max-w-xl">
                Crafting scalable solutions from React frontends to Java backends, with AI integration and cloud architecture. I transform complex challenges into elegant, production-ready applications.
            </p>
          </Slide>

          {/* Social Links */}
          <Slide delay={0.2}>
            <Social type="social" />
          </Slide>
        </div>

        {/* Right - Hero Illustration & Profile Image */}
        <Slide delay={0.3}>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-color/20 to-secondary-color/20 rounded-3xl blur-3xl" />
              <div className="relative flex items-center justify-center w-full h-full">
                {profileData.profileImage ? (
                  <div className="relative w-full h-full overflow-hidden rounded-3xl border border-primary-color/10 dark:border-primary-color/20">
                    <Image
                      src={profileData.profileImage.image}
                      alt={profileData.profileImage.alt || profileData.fullName}
                      fill
                      placeholder="blur"
                      blurDataURL={profileData.profileImage.lqip}
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <HeroSvg />
                )}
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}