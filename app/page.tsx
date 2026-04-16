import Navbar from "@/components/Common/Navbar";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroHomePage from "@/components/home-page/HeroHomePage";
import ScrollImageSequenceDemo from "@/components/ui/ScrollImageSequenceDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <Navbar />
      <HeroHomePage/>
      <Hero />
      <ScrollImageSequenceDemo />
      <PricingSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </div>
  );
}
