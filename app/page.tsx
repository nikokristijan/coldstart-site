import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { WhatsInside } from "@/components/sections/whats-inside";
import { FreeKit } from "@/components/sections/free-kit";
import { CompareTable } from "@/components/sections/compare-table";
import { Objections } from "@/components/sections/objections";
import { Pricing } from "@/components/sections/pricing";
import { AiPack } from "@/components/sections/ai-pack";
import { AffiliateTeaser } from "@/components/sections/affiliate-teaser";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";
import { SITE, PRICE } from "@/lib/site-config";
import { HOME_FAQ_PREVIEW } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Cold Start — Get Clients Without Paid Ads",
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: SITE.name,
          description: SITE.description,
          brand: { "@type": "Brand", name: SITE.name },
          offers: {
            "@type": "Offer",
            url: SITE.url,
            priceCurrency: "USD",
            price: PRICE.coldStartMonthly,
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ_PREVIEW.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <Hero />
      <Problem />
      <WhatsInside />
      <FreeKit />
      <CompareTable />
      <Objections />
      <Pricing />
      <AiPack />
      <AffiliateTeaser />
      <FaqPreview />
      <FinalCta
        heading="Stop Waiting for Clients to Find You."
        sub="Build a pipeline you control — the scripts, the follow-ups, and the day-by-day plan to run them."
      />
    </main>
  );
}
