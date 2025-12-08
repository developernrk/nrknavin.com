import Hero from "./components/pages/Hero";
import Job from "./components/pages/Job";
import GithubCalendarComponent from "./components/pages/GithubCalendarComponent";
import Stats from "./components/pages/Stats";
import QuickLinks from "./components/pages/QuickLinks";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Profile Data from Sanity */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Quick Links to New Pages */}
      <QuickLinks />

      {/* Work Experience Section */}
      <Job />

      {/* Contribution Graph Section */}
      <GithubCalendarComponent />
    </main>
  );
}
