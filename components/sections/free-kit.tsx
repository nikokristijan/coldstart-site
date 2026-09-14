import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CHECKOUT, PRICE } from "@/lib/site-config";
import { TrackedAnchor } from "@/components/tracked-link";

export function FreeKit() {
  return (
    <section id="free-kit" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-md border border-[var(--line)] bg-[var(--card)] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
                Start Here — Free Trial
              </span>
              <h2 className="mt-3 font-serif text-[22px] font-medium text-[var(--cream)]">
                Start With 3 Free Scripts
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--ink)]">
                Grab the Outreach Starter Kit: one cold opener, one no-guilt
                follow-up, and one objection response — the exact three moments
                that decide whether a first conversation goes anywhere. Free for 3
                days, then ${PRICE.starterKitMonthly}/mo. Cancel anytime.
              </p>
            </div>
            <Button asChild variant="ghost" className="shrink-0">
              <TrackedAnchor href={CHECKOUT.starterKit} event="cta_click" eventProps={{ location: "free_kit" }}>
                Start Free Trial
              </TrackedAnchor>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
