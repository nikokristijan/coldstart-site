import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CHECKOUT, PRICE } from "@/lib/site-config";

export function AiPack() {
  return (
    <section id="aipack" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="grid gap-8 rounded-md border border-[var(--line)] bg-[var(--card)] p-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
                Optional Add-On
              </span>
              <h2 className="mt-3 font-serif text-[22px] font-medium text-[var(--cream)]">
                Make Every Script Sound Like <em>You</em> Wrote It
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--ink)]">
                The AI Personalization Pack is 8 ready-to-use AI prompts that turn any
                Cold Start script into a message that sounds researched, not
                copy-pasted. Works with the free version of ChatGPT or Claude — no new
                software required. Sold separately; not required to use Cold Start.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="font-serif text-[32px] font-medium text-[var(--teal)]">
                ${PRICE.aiPackMonthly}
                <span className="text-[14px] font-sans font-normal text-[var(--ink-dim)]">
                  /mo
                </span>
              </div>
              <p className="mt-1 text-[12px] text-[var(--ink-dim)]">Free for 3 days first</p>
              <Button asChild variant="teal" className="mt-4">
                <a href={CHECKOUT.aiPack}>Try the AI Pack Free</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
