import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export function FaqSupport() {
  return (
    <section id="support" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-xl px-6 py-16 text-center">
        <Reveal>
          <Card className="p-8">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Still Have Questions?
            </span>
            <h3 className="mt-2 font-serif text-[19px] font-medium text-[var(--cream)]">
              Reach Out Through Whop
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--ink-dim)]">
              Pre-purchase questions or support after buying — message through the
              Cold Start Whop community and we&apos;ll help you out.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
