import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import HeroHomePage from "@/components/home-page/HeroHomePage";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroHomePage />
      <Hero />
      <PricingSection />
      <WhyChooseSection />
      <CTASection />
    </div>
  );
}
