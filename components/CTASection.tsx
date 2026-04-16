import { SITE_CONFIG, TRUST_BADGES } from "@/utils/config";

export default function CTASection() {
  return (
    <section className="py-20 px-6 text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-4">
        Ready to Own Your{" "}
        <span className="text-red-500">Dream Account?</span>
      </h2>
      <p className="text-white/50 mb-10 text-base">
        Don&apos;t spend months collecting skins. Get your premium Valorant
        account with exclusive items today.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href={SITE_CONFIG.shopUrl}
          className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Browse All Accounts
        </a>
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Get Help Choosing
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-white/40 text-xs">
        {TRUST_BADGES.map((b) => (
          <span key={b} className="flex items-center gap-1">
            <span className="text-green-400">✓</span> {b}
          </span>
        ))}
      </div>
    </section>
  );
}
