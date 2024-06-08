import ExploreAllFlat from "@/components/ui/Homepage/ExploreAllFlat";
import HeroSection from "@/components/ui/Homepage/HeroSection";
import SearchShowCardSection from "@/components/ui/Homepage/SearchShowCardSection";
import Testimonial from "@/components/ui/Homepage/Testimonial";
import Tips from "@/components/ui/Homepage/Tips";

export default function HomePage() {
  return (
    <main className=" mx-auto container">
      <HeroSection />
      <ExploreAllFlat />
      <SearchShowCardSection />
      <Testimonial />
      <Tips />
    </main>
  );
}
