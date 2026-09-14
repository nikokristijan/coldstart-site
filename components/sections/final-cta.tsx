import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CHECKOUT, CTA } from "@/lib/site-config";
import { TrackedAnchor, TrackedLink } from "@/components/tracked-link";

export function FinalCta({
  eyebrow = "Ready?",
  heading,
  sub,
}: {
  eyebrow?: string;
  heading: ReactNode;
  sub?: string;
}) {
  return (
    <section id="final">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Reveal>
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
            {eyebrow}
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-[28px] font-medium text-[var(--cream)] sm:text-[32px]">
            {heading}
          </h2>
          {sub && (
            <p className="mx-auto mt-3 max-w-lg text-[15px] text-[var(--ink-dim)]">{sub}</p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="ghost">
              <TrackedLink
                href="/#free-kit"
                event="cta_click"
                eventProps={{ location: "final_cta_free_kit" }}
              >
                Free Starter Kit
              </TrackedLink>
            </Button>
            <Button asChild>
              <TrackedAnchor
                href={CHECKOUT.coldStart}
                event="cta_click"
                eventProps={{ location: "final_cta_main" }}
              >
                {CTA.primaryWithPrice}
              </TrackedAnchor>
            </Button>
          </div>
          <p className="mt-5 text-[12.5px] uppercase tracking-wide text-[var(--ink-dim)]">
            AI Personalization Pack included · Cancel anytime · Instant access
          </p>
        </Reveal>
      </div>
    </section>
  );
}
