import { Reveal } from "@/components/reveal";
import { FaqList } from "@/components/faq-list";
import { COURSE_FAQS, AI_PACK_FAQS } from "@/lib/faq-data";

export function FaqBody() {
  return (
    <section id="faq-body" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
            About the Course
          </p>
          <div className="mt-2">
            <FaqList items={COURSE_FAQS} />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-12 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
            About the AI Personalization Pack
          </p>
          <div className="mt-2">
            <FaqList items={AI_PACK_FAQS} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
