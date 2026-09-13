import { Reveal } from "@/components/reveal";

export function FaqHero() {
  return (
    <section id="hero" className="bg-ambient border-b border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Reveal>
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
            FAQ &amp; Support
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 font-serif text-[32px] font-medium leading-tight text-[var(--cream)] sm:text-[40px]">
            Everything You&apos;re Wondering, Answered <em>Honestly</em>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
