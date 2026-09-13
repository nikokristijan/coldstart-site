import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import {
  CHECKOUT,
  CTA,
  PRICE,
  VALUE_STACK,
  VALUE_STACK_TOTAL,
} from "@/lib/site-config";

const ANCHORS = [
  {
    label: "Do It Yourself",
    detail: "Months of trial and error, guessing what to send and cold DMs that go nowhere.",
    icon: X,
  },
  {
    label: "1:1 Coaching",
    detail: "Real guidance, but priced for people already making money from clients.",
    icon: X,
  },
  {
    label: "Cold Start",
    detail: "One system: the scripts, the templates, and the day-by-day plan to run it.",
    icon: Check,
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Then Get The Full System
            </span>
            <h2 className="mt-3 font-serif text-[28px] font-medium text-[var(--cream)] sm:text-[32px]">
              Here&apos;s Exactly What You Get.
            </h2>
            <p className="mt-3 text-[15.5px] text-[var(--ink-dim)]">
              The goal isn&apos;t to collect another course — it&apos;s to build a
              repeatable client pipeline. Here&apos;s everything Cold Start hands you to
              do that, and what it would cost to piece together on your own.
            </p>
          </div>
        </Reveal>

        {/* Price anchor — opportunity cost, not fabricated market prices */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {ANCHORS.map((a) => (
              <div
                key={a.label}
                className={`rounded-md border p-5 ${
                  a.highlight
                    ? "border-[var(--gold)]/50 bg-[var(--gold)]/[0.06]"
                    : "border-[var(--line)] bg-transparent"
                }`}
              >
                <div className="flex items-center gap-2">
                  <a.icon
                    size={14}
                    className={a.highlight ? "text-[var(--gold)]" : "text-[var(--ink-dim)]"}
                  />
                  <span
                    className={`text-[12.5px] font-semibold uppercase tracking-wide ${
                      a.highlight ? "text-[var(--gold)]" : "text-[var(--ink-dim)]"
                    }`}
                  >
                    {a.label}
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--ink-dim)]">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* The single offer — value stack */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-lg border border-[var(--gold)]/30 bg-[var(--navy-1)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="border-b border-[var(--line)] px-8 py-7">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 26 26" aria-hidden="true">
                  <circle cx="5" cy="13" r="4" fill="#cda860" />
                  <path
                    d="M11 13H21M21 13L16 8M21 13L16 18"
                    stroke="#f3efe6"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <span className="font-serif text-[17px] text-[var(--cream)]">Cold Start</span>
              </div>
              <p className="mt-1 text-[13px] text-[var(--ink-dim)]">
                Complete Client Acquisition System
              </p>
            </div>

            <div className="divide-y divide-[var(--line)] px-8">
              {VALUE_STACK.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-6 py-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[14.5px] font-medium text-[var(--cream)]">
                        {item.label}
                      </span>
                      {item.bonus && (
                        <span className="rounded-full border border-[var(--teal)]/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[var(--teal)]">
                          Bonus
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[13px] text-[var(--ink-dim)]">{item.detail}</p>
                  </div>
                  <span className="shrink-0 whitespace-nowrap text-[14px] text-[var(--ink-dim)]">
                    ${item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-[var(--line)] bg-[var(--navy-2)] px-8 py-4">
              <span className="text-[13px] uppercase tracking-wide text-[var(--ink-dim)]">
                Total Value
              </span>
              <span className="text-[16px] font-medium text-[var(--ink-dim)] line-through">
                ${VALUE_STACK_TOTAL}
              </span>
            </div>

            <div className="px-8 py-8 text-center">
              <span className="inline-block rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--gold)]">
                20% off ${PRICE.coldStartWasMonthly} — today only
              </span>
              <div className="mt-4 flex items-baseline justify-center gap-1 font-serif text-[44px] font-medium text-[var(--cream)]">
                <span className="text-[20px] text-[var(--ink-dim)]">$</span>
                <span>{PRICE.coldStartMonthly}</span>
                <span className="text-[16px] font-sans font-normal text-[var(--ink-dim)]">
                  /mo
                </span>
              </div>
              <p className="mt-2 text-[13px] text-[var(--ink-dim)]">
                Cancel anytime. No long-term contract.
              </p>

              <Button asChild size="lg" className="mt-6 w-full">
                <a href={CHECKOUT.coldStart}>{CTA.primaryWithPrice}</a>
              </Button>

              <p className="mx-auto mt-5 max-w-sm text-[13px] leading-relaxed text-[var(--ink-dim)]">
                If Cold Start helps you land even one client, it can pay for itself
                many times over.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
