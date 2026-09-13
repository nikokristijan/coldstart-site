import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { WhatsInside } from "@/components/sections/whats-inside";
import { FreeKit } from "@/components/sections/free-kit";
import { CompareTable } from "@/components/sections/compare-table";
import { Pricing } from "@/components/sections/pricing";
import { AiPack } from "@/components/sections/ai-pack";
import { AffiliateTeaser } from "@/components/sections/affiliate-teaser";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cold Start — Get Clients Without Paid Ads",
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatsInside />
      <FreeKit />
      <CompareTable />
      <Pricing />
      <AiPack />
      <AffiliateTeaser />
      <FaqPreview />
      <FinalCta
        heading="Send Your First Message Today"
        sub="Start free, or get the full system now — either way, you can send something today."
      />
    </main>
  );
}
