import ExploreAllFlat from "@/components/ui/Homepage/ExploreAllFlat";
import HeroSection from "@/components/ui/Homepage/HeroSection";
import SearchShowCardSection from "@/components/ui/Homepage/SearchShowCardSection";

export default function HomePage() {
  return (
    <main className=" mx-auto container">
      <HeroSection />
      {/* <SearchShowCardSection /> */}
      <ExploreAllFlat />
    </main>
  );
}
