"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import {
  CHECKOUT,
  PRICE,
  VALUE_STACK,
  VALUE_STACK_TOTAL,
} from "@/lib/site-config";
import { trackEvent } from "@/lib/track";

const ANCHORS = [
  {
    label: "Do It Yourself",
    points: [
      "Guess what to send",
      "Spend months testing",
      "No repeatable process",
      "Constantly search for advice",
    ],
    icon: X,
  },
  {
    label: "1:1 Coaching",
    points: [
      "Real, personalized guidance",
      "Priced for people already making money from clients",
      "Usually billed per session or per month",
    ],
    icon: X,
  },
  {
    label: "Cold Start",
    points: ["A clear system", "Scripts for every stage", "A follow-up plan", "An offer framework", "A day-by-day plan to run it"],
    icon: Check,
    highlight: true,
  },
];

type PlanKey = "monthly" | "yearly" | "lifetime";

const PLANS: Record<
  PlanKey,
  {
    label: string;
    checkout: string;
    badge?: string;
    priceWhole: string;
    priceSuffix: string;
    subline: string;
    cta: string;
  }
> = {
  monthly: {
    label: "Monthly",
    checkout: CHECKOUT.coldStart,
    badge: `33% off the regular $${PRICE.coldStartWasMonthly}/mo price`,
    priceWhole: `${PRICE.coldStartMonthly}`,
    priceSuffix: "/mo",
    subline: "Billed monthly · Cancel anytime · No long-term contract",
    cta: `Get Cold Start – $${PRICE.coldStartMonthly}/mo`,
  },
  yearly: {
    label: "Yearly",
    checkout: CHECKOUT.coldStartYearly,
    badge: "Best value — 2 months free vs. monthly",
    priceWhole: `${PRICE.coldStartYearly}`,
    priceSuffix: "/yr",
    subline: `Works out to ~$${PRICE.coldStartYearlyEffectiveMonthly}/mo · Billed once a year · Cancel anytime`,
    cta: `Get Cold Start – $${PRICE.coldStartYearly}/yr`,
  },
  lifetime: {
    label: "Lifetime",
    checkout: CHECKOUT.coldStartLifetime,
    badge: "Pay once, keep it forever",
    priceWhole: `${PRICE.coldStartLifetime}`,
    priceSuffix: " once",
    subline: "One-time payment · No recurring charge · Yours for good",
    cta: `Get Lifetime Access – $${PRICE.coldStartLifetime}`,
  },
};

export function Pricing() {
  const [plan, setPlan] = useState<PlanKey>("monthly");
  const active = PLANS[plan];

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
              The goal isn&apos;t to collect another course — it&apos;s a complete
              client-acquisition system, including the AI Personalization Pack,
              bundled in at every plan. Here&apos;s everything Cold Start hands you,
              and what it would cost to piece together on your own.
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
                <ul className="mt-3 space-y-1.5">
                  {a.points.map((point) => (
                    <li
                      key={point}
                      className={`text-[13px] leading-relaxed ${
                        a.highlight ? "text-[var(--ink)]" : "text-[var(--ink-dim)]"
                      }`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
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
              {/* Plan picker */}
              <div className="mx-auto flex max-w-sm gap-1.5 rounded-full border border-[var(--line)] bg-[var(--navy-2)] p-1">
                {(Object.keys(PLANS) as PlanKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setPlan(key);
                      trackEvent("plan_select", { plan: key });
                    }}
                    className={`flex-1 rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                      plan === key
                        ? "bg-[var(--gold)] text-[var(--navy-1)]"
                        : "text-[var(--ink-dim)] hover:text-[var(--cream)]"
                    }`}
                  >
                    {PLANS[key].label}
                  </button>
                ))}
              </div>

              {active.badge && (
                <span className="mt-5 inline-block rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--gold)]">
                  {active.badge}
                </span>
              )}

              <div className="mt-4 flex items-baseline justify-center gap-1 font-serif text-[44px] font-medium text-[var(--cream)]">
                <span className="text-[20px] text-[var(--ink-dim)]">$</span>
                <span>{active.priceWhole}</span>
                <span className="text-[16px] font-sans font-normal text-[var(--ink-dim)]">
                  {active.priceSuffix}
                </span>
              </div>
              <p className="mt-2 text-[13px] text-[var(--ink-dim)]">{active.subline}</p>

              <Button asChild size="lg" className="mt-6 w-full">
                <a
                  href={active.checkout}
                  onClick={() => trackEvent("checkout_click", { location: "pricing", plan })}
                >
                  {active.cta}
                </a>
              </Button>

              <p className="mx-auto mt-5 max-w-sm text-[13px] leading-relaxed text-[var(--ink-dim)]">
                One client can cover the cost of Cold Start many times over. You
                don&apos;t need dozens of clients for the system to make sense — just a
                repeatable way to start conversations that can turn into
                opportunities.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
