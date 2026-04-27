import { Star } from "lucide-react";
import { REVIEW_STATS } from "@/utils/reviews";

export default function ReviewStats() {
  const bars = [
    { label: "5 stars", pct: REVIEW_STATS.fiveStarPercent, color: "bg-yellow-400" },
    { label: "4 stars", pct: REVIEW_STATS.fourStarPercent, color: "bg-yellow-400/70" },
    { label: "3 stars", pct: REVIEW_STATS.threeStarPercent, color: "bg-yellow-400/40" },
    { label: "2 stars", pct: 0, color: "bg-yellow-400/20" },
    { label: "1 star",  pct: 0, color: "bg-yellow-400/10" },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center animate-fade-in">
      {/* Big score */}
      <div className="text-center shrink-0">
        <p className="text-7xl font-extrabold text-white">{REVIEW_STATS.averageRating}</p>
        <div className="flex justify-center gap-1 my-2">
          {[1,2,3,4,5].map((s) => (
            <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-white/40 text-sm">{REVIEW_STATS.totalReviews.toLocaleString()}+ reviews</p>
      </div>

      {/* Bars */}
      <div className="flex-1 w-full flex flex-col gap-2">
        {bars.map((b) => (
          <div key={b.label} className="flex items-center gap-3">
            <span className="text-xs text-white/40 w-12 shrink-0">{b.label}</span>
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${b.color} transition-all duration-700`}
                style={{ width: `${b.pct}%` }}
              />
            </div>
            <span className="text-xs text-white/40 w-8 text-right">{b.pct}%</span>
          </div>
        ))}
      </div>

      {/* Trust */}
      <div className="flex flex-col gap-3 shrink-0">
        {[
          { icon: "✅", label: "Verified Purchases" },
          { icon: "🔒", label: "Anti-Scam Guarantee" },
          { icon: "⚡", label: "Instant Delivery" },
        ].map((t) => (
          <div key={t.label} className="flex items-center gap-2 text-sm text-white/60">
            <span>{t.icon}</span> {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}
