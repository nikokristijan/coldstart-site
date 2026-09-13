import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function AffiliateTeaser() {
  return (
    <section id="affiliate-teaser" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/[0.05] px-8 py-12 text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Or Earn From It
            </span>
            <div className="mt-3 font-serif text-[34px] font-medium text-[var(--gold)]">
              Up to 50%
            </div>
            <h2 className="mx-auto mt-3 max-w-xl font-serif text-[22px] font-medium text-[var(--cream)]">
              Know a Freelancer Who Needs This? <em>Get Paid</em> to Share It.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--ink-dim)]">
              Earn up to 50% commission on every sale you refer, tracked and paid
              automatically through Whop. No minimum audience, 30-day cookie window.
            </p>
            <Button asChild variant="gold" className="mt-6">
              <Link href="/affiliate">Become an Affiliate</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
