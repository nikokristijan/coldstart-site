import { Reveal } from "@/components/reveal";

export function Problem() {
  return (
    <section id="problem" className="border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:gap-16">
        <Reveal>
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
            The Real Problem
          </span>
          <h2 className="mt-3 font-serif text-[26px] font-medium leading-snug text-[var(--cream)] sm:text-[30px]">
            It Isn&apos;t a Skills Problem. It&apos;s an <em>Outreach Problem</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-[16px] leading-relaxed text-[var(--ink)]">
            Most freelancers who struggle for clients aren&apos;t bad at the work — they
            just have no system for consistently finding people to do it for. You
            refresh job boards, wait for referrals, and hope something lands. Cold
            Start replaces the waiting with outbound: exact scripts, an offer that gets
            a yes even with zero testimonials, and a daily plan that tells you exactly
            what to send and when.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
