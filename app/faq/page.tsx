import type { Metadata } from "next";
import { FaqHero } from "@/components/sections/faq-hero";
import { FaqAudience } from "@/components/sections/faq-audience";
import { FaqBody } from "@/components/sections/faq-body";
import { FaqSupport } from "@/components/sections/faq-support";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";
import { COURSE_FAQS, AI_PACK_FAQS } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Cold Start — FAQ & Support",
  description:
    "Answers about the Cold Start course and AI Personalization Pack, plus how to get support.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [...COURSE_FAQS, ...AI_PACK_FAQS].map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <FaqHero />
      <FaqAudience />
      <FaqBody />
      <FaqSupport />
      <FinalCta heading="Pick Your Starting Point" />
    </main>
  );
}
