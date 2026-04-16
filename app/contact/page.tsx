import type { Metadata } from "next";
import { CONTACT_HERO } from "@/utils/contact";
import ContactLeft from "@/components/contact/ContactLeft";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";
import Navbar from "@/components/Common/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | TEAM FURY",
  description:
    "Get in touch with TEAM FURY via WhatsApp, Discord, or Instagram. Fast support for all your Valorant account queries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <Navbar />
      {/* Hero */}
      <section className="text-center pt-20 pb-12 px-6 max-w-2xl mx-auto">
        <div className="text-6xl mb-4">{CONTACT_HERO.emoji}</div>
        <h1 className="text-4xl font-extrabold mb-3">{CONTACT_HERO.heading}</h1>
        <p className="text-white/50 text-base">{CONTACT_HERO.subheading}</p>
      </section>

      {/* Left / Right split */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <ContactLeft />
        <ContactForm />
      </section>

      <ContactFAQ />
    </div>
  );
}
