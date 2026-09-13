import { Search, Send, Handshake, RefreshCcw, Repeat } from "lucide-react";
import { Reveal } from "@/components/reveal";

const STAGES = [
  {
    n: "01",
    icon: Search,
    title: "Find",
    detail:
      "The Outreach Tracker keeps your prospect list organized, so you always know exactly who's next instead of guessing.",
  },
  {
    n: "02",
    icon: Send,
    title: "Reach",
    detail:
      "20+ ready-to-send scripts across cold email, DM, and in-person outreach — the Script Vault, for every stage of a conversation.",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Convert",
    detail:
      "The Zero-Proof Offer Framework — how to package your offer so prospects say yes, even with no portfolio or testimonials.",
  },
  {
    n: "04",
    icon: RefreshCcw,
    title: "Follow Up",
    detail:
      "The Objection-Handling Library covers every common “no,” including the pricing objection — so a quiet reply isn't the end.",
  },
  {
    n: "05",
    icon: Repeat,
    title: "Repeat",
    detail:
      "The 30-day, day-by-day action plan turns one-off sends into a repeatable pipeline you run every week.",
  },
];

export function WhatsInside() {
  return (
    <section id="whats-inside" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              What&apos;s Actually Inside
            </span>
            <h2 className="mt-3 font-serif text-[28px] font-medium text-[var(--cream)] sm:text-[32px]">
              No Fluff. Just the <em>System</em>.
            </h2>
            <p className="mt-3 text-[15.5px] text-[var(--ink-dim)]">
              11 modules, built around five stages — everything below is real content
              from the course, not a mocked-up example.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {STAGES.map((stage) => (
            <Reveal key={stage.n} delay={Number(stage.n) * 0.03}>
              <div className="h-full rounded-md border border-[var(--line)] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[22px] text-[var(--gold)]">
                    {stage.n}
                  </span>
                  <stage.icon size={16} className="text-[var(--teal)]" />
                </div>
                <h3 className="mt-3 text-[14.5px] font-semibold text-[var(--cream)]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--ink-dim)]">
                  {stage.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-md border border-[var(--line)] bg-[var(--navy-1)]">
            <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--navy-3)] px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--cream)]">
                Cold Opener Script
              </span>
              <span className="rounded-full border border-[var(--teal)] px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-[var(--teal)]">
                DM / Email
              </span>
            </div>
            <div className="px-5 py-5 text-[14px] italic leading-relaxed text-[var(--ink)]">
              &ldquo;Hey [NAME], I help [TYPE OF BUSINESS] with [ONE SPECIFIC RESULT].
              Not sure if that&apos;s something you&apos;re dealing with right now, but
              figured I&apos;d reach out. Happy to share a quick example of what
              that&apos;s looked like for someone else if you&apos;re curious, no
              pressure either way.&rdquo;
            </div>
            <div className="border-t border-[var(--line)] px-5 py-3 text-[12px] text-[var(--ink-dim)]">
              That&apos;s the actual opener script from the course, not a paraphrase —
              see the full system for the other 20+.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
