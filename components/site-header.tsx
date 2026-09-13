import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { CHECKOUT, CTA } from "@/lib/site-config";

const LINKS = [
  { href: "/#whats-inside", label: "What's Inside" },
  { href: "/#free-kit", label: "Free Kit" },
  { href: "/affiliate", label: "Affiliate Program" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--navy-0)]/90 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold text-[var(--cream)]">
          <svg width="24" height="24" viewBox="0 0 26 26" aria-hidden="true">
            <circle cx="5" cy="13" r="4" fill="#cda860" />
            <path
              d="M11 13H21M21 13L16 8M21 13L16 18"
              stroke="#f3efe6"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          Cold Start
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-wide text-[var(--ink)] transition-colors hover:text-[var(--gold)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={CHECKOUT.coldStart}>{CTA.primaryWithPrice}</a>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
