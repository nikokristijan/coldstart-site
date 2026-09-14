import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AffiliateHero } from "@/components/sections/affiliate-hero";
import { AffiliateSteps } from "@/components/sections/affiliate-steps";
import { AffiliatePromote } from "@/components/sections/affiliate-promote";
import { AffiliateFaq } from "@/components/sections/affiliate-faq";
import { Reveal } from "@/components/reveal";
import { CHECKOUT } from "@/lib/site-config";
import { TrackedAnchor } from "@/components/tracked-link";

export const metadata: Metadata = {
  title: "Cold Start Affiliate Program — Earn 50%",
  description:
    "Earn 50% commission on every Cold Start sale you refer, tracked and paid automatically through Whop.",
  alternates: { canonical: "/affiliate" },
};

export default function AffiliatePage() {
  return (
    <main>
      <AffiliateHero />
      <AffiliateSteps />
      <AffiliatePromote />
      <AffiliateFaq />

      <section id="final">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Ready to Earn?
            </span>
            <h2 className="mx-auto mt-3 max-w-xl font-serif text-[28px] font-medium text-[var(--cream)] sm:text-[32px]">
              Apply in Under a <em>Minute</em>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="gold" size="lg">
                <TrackedAnchor
                  href={CHECKOUT.affiliateApply}
                  event="cta_click"
                  eventProps={{ location: "affiliate_apply" }}
                >
                  Become an Affiliate
                </TrackedAnchor>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/">Back to Cold Start</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
