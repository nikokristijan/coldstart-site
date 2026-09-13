"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT, CTA } from "@/lib/site-config";

const LINKS = [
  { href: "/#whats-inside", label: "What's Inside" },
  { href: "/#free-kit", label: "Free Kit" },
  { href: "/affiliate", label: "Affiliate Program" },
  { href: "/faq", label: "FAQ" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center text-[var(--cream)]"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-[var(--line)] bg-[var(--navy-1)] px-6 py-6">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-[var(--ink)] transition-colors hover:text-[var(--gold)]"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href={CHECKOUT.coldStart}>{CTA.primary}</a>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
