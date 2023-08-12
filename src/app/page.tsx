import { PageHero } from "./_hero/Hero";
import { HowItWorks } from "./_howitworks/HowItWorks";
export default function Home() {
  return (
    <main className="min-h-screen md:px-4 px-0 flex flex-col container mx-auto">
      <div className="w-full">
        <PageHero />
      </div>
      <div className="w-full">
        <HowItWorks />
      </div>
    </main>
  );
}
