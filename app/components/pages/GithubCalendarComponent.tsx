import ContributionGraph from "./ContributionGraph";
import { Slide } from "@/app/animation/Slide";

export default function GithubCalendarComponent() {
  return (
    <section className="container-safe section-padding">
      <Slide delay={0.16} className="mb-6 xs:mb-8 sm:mb-10">
        <h2 className="font-incognito text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight dark:text-zinc-100 text-zinc-900">
          Contribution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <ContributionGraph />
      </Slide>
    </section>
  );
}
