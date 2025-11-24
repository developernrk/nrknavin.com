import Hero from "./components/pages/Hero";
import Job from "./components/pages/Job";
import GithubCalendarComponent from "./components/pages/GithubCalendarComponent";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Profile Data from Sanity */}
      <Hero />

      {/* Work Experience Section */}
      <Job />

      {/* Contribution Graph Section */}
      <GithubCalendarComponent />
    </main>
  );
}
