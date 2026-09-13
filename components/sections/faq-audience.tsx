import { Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

const FOR_YOU = [
  "You're a freelancer or service provider tired of waiting for referrals",
  "You have skills but no consistent way to find clients",
  "You've tried cold outreach before and gotten nothing",
  "You want a proven system instead of guessing what to say",
];

const NOT_FOR_YOU = [
  "You're looking for a push-button, get-rich-overnight hack",
  "You're unwilling to send messages every day for 30 days",
];

export function FaqAudience() {
  return (
    <section id="audience" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Card className="p-6">
              <h3 className="text-[15px] font-medium text-[var(--teal)]">
                This is for you if
              </h3>
              <ul className="mt-4 space-y-3">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--ink)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card className="p-6">
              <h3 className="text-[15px] font-medium text-[#c98a6f]">
                This is NOT for you if
              </h3>
              <ul className="mt-4 space-y-3">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--ink)]">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-[#c98a6f]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
