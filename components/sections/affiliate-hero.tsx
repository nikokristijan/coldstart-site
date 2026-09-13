import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CHECKOUT } from "@/lib/site-config";

export function AffiliateHero() {
  return (
    <section id="hero" className="bg-ambient border-b border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
            Cold Start Affiliate Program
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mx-auto mt-6 max-w-xl rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/[0.05] px-8 py-10">
            <div className="font-serif text-[40px] font-medium text-[var(--gold)]">
              Up to 50%
            </div>
            <p className="mt-3 text-[16px] leading-relaxed text-[var(--cream)]">
              Commission on every Cold Start course or AI Pack sale you refer (30% on
              the Starter Kit trial). No caps, no minimum audience.
            </p>
            <Button asChild variant="gold" size="lg" className="mt-6">
              <a href={CHECKOUT.affiliateApply}>Apply Now</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
