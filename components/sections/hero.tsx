import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ProductStack } from "@/components/product-stack";
import { CHECKOUT, CTA } from "@/lib/site-config";
import { TrackedAnchor } from "@/components/tracked-link";

const FACTS = [
  { value: "11", label: "modules" },
  { value: "20+", label: "scripts" },
  { value: "$1.99", label: "from /mo" },
  { value: "3 days", label: "free trial" },
];

export function Hero() {
  return (
    <section id="hero" className="bg-ambient border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <Reveal>
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              For Freelancers Without a Pipeline
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance font-serif text-[38px] font-medium leading-[1.12] text-[var(--cream)] sm:text-[46px]">
              You Don&apos;t Have a Skill Problem.
              <br />
              You Have a <em>Pipeline Problem</em>.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-[var(--ink)]">
              No clients isn&apos;t about talent — it&apos;s about never reaching enough of
              the right people. Cold Start gives you the exact cold email scripts, DM
              templates, and a 30-day outreach system to start real conversations with
              potential clients, instead of waiting for referrals or job boards.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <TrackedAnchor href={CHECKOUT.coldStart} event="cta_click" eventProps={{ location: "hero" }}>
                  {CTA.primaryWithPrice}
                </TrackedAnchor>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/#whats-inside">See What&apos;s Inside</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-1.5">
                  <dt className="font-serif text-[15px] italic text-[var(--gold)]">
                    {fact.value}
                  </dt>
                  <dd className="text-[12px] uppercase tracking-wide text-[var(--ink-dim)]">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ProductStack />
        </Reveal>
      </div>
    </section>
  );
}
