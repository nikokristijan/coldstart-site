import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

const STEPS = [
  { num: "01", title: "Apply", body: "Apply through the affiliate tab on the Cold Start Whop page." },
  { num: "02", title: "Get Your Link", body: "Whop generates a personal tracking link tied to your account." },
  {
    num: "03",
    title: "Share It",
    body: "Social posts, DMs, email, YouTube descriptions, communities you're part of.",
  },
  {
    num: "04",
    title: "Get Paid",
    body: "Whop tracks the sale and pays your 50% cut automatically. No invoicing.",
  },
];

export function AffiliateSteps() {
  return (
    <section id="steps" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              How It Works
            </span>
            <h2 className="mt-3 font-serif text-[26px] font-medium text-[var(--cream)] sm:text-[30px]">
              Four Steps. Fully <em>Automated</em>.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <Card key={step.num} className="p-5">
                <span className="font-serif text-[26px] italic text-[var(--gold)]">
                  {step.num}
                </span>
                <h3 className="mt-2 text-[15px] font-medium text-[var(--cream)]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--ink-dim)]">
                  {step.body}
                </p>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[14.5px] leading-relaxed text-[var(--ink-dim)]">
            Cookie window: <span className="text-[var(--cream)]">30 days</span>. If
            someone clicks your link and buys within 30 days, you get credit even if
            they don&apos;t purchase immediately. New affiliates go through a short
            application before their link goes live.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
