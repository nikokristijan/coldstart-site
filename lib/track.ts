declare global {
  interface Window {
    whop?: { track: (...args: unknown[]) => void };
  }
}

/**
 * Fires a named analytics event through the existing Whop tracking pipeline
 * (the required snippet in app/layout.tsx is never touched or duplicated —
 * this just calls the `track` function it already installs on `window`).
 * Used on CTAs and plan selection so the funnel below "pageview" is visible
 * in Whop analytics: pageview -> cta_click -> plan_select -> checkout_click.
 */
export function trackEvent(name: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.whop?.track(name, props);
}
