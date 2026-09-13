import { Reveal } from "@/components/reveal";

const OBJECTIONS = [
  {
    q: "“I've already tried cold outreach.”",
    a: "Most people who say this never had scripts or a plan — just guesswork. Cold Start replaces the guessing with tested scripts and a day-by-day plan to run them.",
  },
  {
    q: "“I don't know what to say.”",
    a: "That's what the Script Vault is for — 20+ ready-to-send scripts for every stage of a conversation, from the first message to handling a “no.”",
  },
  {
    q: "“What if nobody replies?”",
    a: "Most conversations aren't won on the first message. The Objection-Handling Library and follow-up scripts are built specifically for that — so a quiet reply isn't the end.",
  },
  {
    q: "“Is this just another course?”",
    a: "No. Cold Start is designed around implementation — scripts, frameworks, templates and a concrete process you can actually use, not just theory to watch.",
  },
  {
    q: "“Do I need experience or a portfolio?”",
    a: "No. The Zero-Proof Offer Framework is built specifically for people starting with no portfolio or testimonials yet.",
  },
];

export function Objections() {
  return (
    <section id="objections" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Before You Decide
            </span>
            <h2 className="mt-3 font-serif text-[26px] font-medium text-[var(--cream)] sm:text-[30px]">
              You Might Be Thinking&hellip;
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {OBJECTIONS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <div className="h-full rounded-md border border-[var(--line)] p-5">
                <p className="font-serif text-[15px] italic text-[var(--cream)]">
                  {item.q}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--ink-dim)]">
                  {item.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
