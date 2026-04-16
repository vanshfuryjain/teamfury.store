import { SITE_CONFIG } from "@/utils/config";

export default function Hero() {
  return (
    <section className="text-center py-24 px-6 max-w-4xl mx-auto">
      <p className="text-red-500 text-sm font-bold tracking-[0.3em] uppercase mb-3">
        {SITE_CONFIG.tagline}
      </p>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        Get Your <span className="text-red-500">Dream</span> Valorant Account
      </h1>
      <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
        {SITE_CONFIG.description}
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {SITE_CONFIG.stats.map((s) => (
          <span
            key={s.label}
            className="bg-white/5 border border-white/10 text-white/70 text-sm px-4 py-1.5 rounded-full"
          >
            {s.label}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
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
    </section>
  );
}
