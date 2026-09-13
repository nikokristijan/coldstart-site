import { ArrowDown, X, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

const WITHOUT = ["No system", "Random outreach", "Few replies", "Frustration"];
const WITH = ["Find prospects", "Start conversations", "Follow up", "Build pipeline"];

export function Problem() {
  return (
    <section id="problem" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              The Real Problem
            </span>
            <h2 className="mt-3 font-serif text-[28px] font-medium leading-snug text-[var(--cream)] sm:text-[32px]">
              Your Problem Isn&apos;t Your Skill. It&apos;s Your <em>Pipeline</em>.
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[var(--ink-dim)]">
              You can be great at editing, design, development, writing, or any other
              skill — but if nobody knows you exist, skill alone doesn&apos;t create
              clients. Most freelancers who struggle for clients aren&apos;t bad at the
              work — they just have no system for consistently finding people to do it
              for.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 grid max-w-3xl items-stretch gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-[var(--line)] bg-transparent p-6">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--ink-dim)]">
                Without a System
              </span>
              <ul className="mt-4 space-y-3">
                {WITHOUT.map((step, i) => (
                  <li key={step}>
                    <div className="flex items-center gap-2.5">
                      <X size={13} className="shrink-0 text-[var(--ink-dim)]" />
                      <span className="text-[14px] text-[var(--ink-dim)]">{step}</span>
                    </div>
                    {i < WITHOUT.length - 1 && (
                      <ArrowDown size={12} className="ml-[5px] mt-2 text-[var(--line)]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/[0.04] p-6">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--gold)]">
                With Cold Start
              </span>
              <ul className="mt-4 space-y-3">
                {WITH.map((step, i) => (
                  <li key={step}>
                    <div className="flex items-center gap-2.5">
                      <Check size={13} className="shrink-0 text-[var(--gold)]" />
                      <span className="text-[14px] text-[var(--cream)]">{step}</span>
                    </div>
                    {i < WITH.length - 1 && (
                      <ArrowDown size={12} className="ml-[5px] mt-2 text-[var(--gold)]/30" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-[var(--ink)]">
            Cold Start replaces the waiting with outbound: exact scripts, an offer that
            gets a yes even with zero testimonials, and a daily plan that tells you
            exactly what to send and when.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
