import type { Metadata } from "next";
import { FaqHero } from "@/components/sections/faq-hero";
import { FaqAudience } from "@/components/sections/faq-audience";
import { FaqBody } from "@/components/sections/faq-body";
import { FaqSupport } from "@/components/sections/faq-support";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Cold Start — FAQ & Support",
  description:
    "Answers about the Cold Start course and AI Personalization Pack, plus how to get support.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main>
      <FaqHero />
      <FaqAudience />
      <FaqBody />
      <FaqSupport />
      <FinalCta heading="Pick Your Starting Point" />
    </main>
  );
}
