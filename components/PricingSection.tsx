import { PRICING_TIERS } from "@/utils/config";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.tier} {...tier} />
        ))}
      </div>
    </section>
  );
}
