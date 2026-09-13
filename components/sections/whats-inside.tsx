import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

const ITEMS = [
  "11 modules covering cold email, DM, and in-person outreach, start to finish",
  "20+ ready-to-send scripts for every stage of a conversation",
  "An offer framework built specifically for people with zero testimonials or portfolio",
  "A 30-day, day-by-day outreach action plan — not vague “be consistent” advice",
  "Objection-handling scripts for every common “no,” including the pricing objection",
  "Outreach tracking sheets and checklists — no CRM or paid tools required",
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
              Everything below is real content from the course — not a mocked-up
              example.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <ul className="space-y-4">
              {ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                  <span className="text-[15px] leading-relaxed text-[var(--ink)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--navy-1)]">
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
      </div>
    </section>
  );
}
