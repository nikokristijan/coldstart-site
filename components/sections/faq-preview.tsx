import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQ_PREVIEW } from "@/lib/faq-data";

export function FaqPreview() {
  return (
    <section id="faq-preview" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <div className="text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Questions
            </span>
            <h2 className="mt-3 font-serif text-[26px] font-medium text-[var(--cream)]">
              Before You Get Started
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="mt-10">
            {HOME_FAQ_PREVIEW.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--gold)] transition-colors hover:text-[var(--cream)]"
            >
              See all FAQs <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
