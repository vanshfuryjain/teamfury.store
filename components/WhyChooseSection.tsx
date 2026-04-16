import { WHY_CHOOSE } from "@/utils/config";

export default function WhyChooseSection() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold mb-2">
        Why Choose <span className="text-red-500">TEAM FURY?</span>
      </h2>
      <p className="text-white/40 mb-12 text-sm">
        Trusted by thousands of Valorant players
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {WHY_CHOOSE.map((item) => (
          <div
            key={item.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-red-500/40 transition-colors"
          >
            <span className="text-4xl">{item.icon}</span>
            <h4 className="font-bold text-sm">{item.title}</h4>
            <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
