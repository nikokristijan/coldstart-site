"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    whop?: { track: (...args: unknown[]) => void };
  }
}

/**
 * The Whop snippet in the root layout already calls whop.track("page") once
 * on the initial (server-rendered) load. This component re-fires it on every
 * subsequent client-side route change (Home -> /affiliate -> /faq), so a
 * pageview is still counted for in-app navigation without touching or
 * duplicating the required snippet itself.
 */
export function AnalyticsPageview() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.whop?.track("page");
  }, [pathname]);

  return null;
}
