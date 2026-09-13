import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

const PROMOTE = [
  "Organic posts on X, Instagram, TikTok, LinkedIn, or Threads",
  "YouTube videos (description or pinned comment)",
  "Newsletter or email list mentions",
  "Communities you're a member or admin of",
  "Personal website, blog, or link-in-bio page",
  "Direct, honest DMs to people who'd genuinely benefit",
];

const PAYOUTS = [
  "Commissions tracked and paid through Whop's built-in affiliate system",
  "Payouts follow Whop's standard payout schedule",
  "Real-time clicks, sales, and pending earnings in your affiliate dashboard",
  "30-day cookie window on every click",
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--ink)]">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function AffiliatePromote() {
  return (
    <section id="promote" className="border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-16 md:grid-cols-2">
        <Reveal>
          <Card className="p-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Where You Can Promote
            </span>
            <List items={PROMOTE} />
          </Card>
        </Reveal>
        <Reveal delay={0.05}>
          <Card className="p-6">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Payouts &amp; Tracking
            </span>
            <List items={PAYOUTS} />
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
