import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutWhySection from "@/components/about/AboutWhySection";
import Navbar from "@/components/Common/Navbar";

export const metadata: Metadata = {
  title: "About Us | TEAM FURY",
  description:
    "Learn about TEAM FURY — India's trusted Valorant account marketplace built by gamers, for gamers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <Navbar />
      <AboutHero />
      <AboutWhySection />
    </div>
  );
}
