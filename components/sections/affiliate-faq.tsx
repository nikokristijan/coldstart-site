import { Reveal } from "@/components/reveal";
import { FaqList } from "@/components/faq-list";
import { AFFILIATE_FAQS } from "@/lib/affiliate-faq-data";

export function AffiliateFaq() {
  return (
    <section id="affiliate-faq" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <div className="text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Affiliate FAQ
            </span>
            <h2 className="mt-3 font-serif text-[26px] font-medium text-[var(--cream)]">
              Common Questions
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10">
            <FaqList items={AFFILIATE_FAQS} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
