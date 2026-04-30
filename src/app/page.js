import Hero from "@/components/Hero";
import AboutSnippet from "@/components/AboutSnippet";
import StatsBanner from "@/components/StatsBanner";
import BentoGrid from "@/components/BentoGrid";
import CampusSlider from "@/components/CampusSlider";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AboutSnippet />
      <StatsBanner />
      <BentoGrid />
      <CampusSlider />
      <Testimonials />
    </div>
  );
}
