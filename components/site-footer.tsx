import Link from "next/link";
import { CHECKOUT } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-[13px] text-[var(--ink-dim)] sm:flex-row sm:justify-between">
        <span>© Cold Start</span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/affiliate" className="transition-colors hover:text-[var(--gold)]">
            Affiliate Program
          </Link>
          <Link href="/faq" className="transition-colors hover:text-[var(--gold)]">
            FAQ &amp; Support
          </Link>
          <a
            href={CHECKOUT.whopCommunity}
            className="transition-colors hover:text-[var(--gold)]"
          >
            Whop Community
          </a>
        </div>
      </div>
    </footer>
  );
}
