"use client";

import * as React from "react";
import NextLink from "next/link";
import { trackEvent } from "@/lib/track";

/**
 * Thin client-side wrappers around <a> and next/link's <Link> that fire a
 * named analytics event on click. These exist so pages/sections can stay
 * Server Components (event handlers can't be passed as props from a Server
 * Component) while still getting click tracking on individual CTAs — only
 * this leaf is a Client Component, nothing above it needs to be.
 */

interface TrackedAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  event: string;
  eventProps?: Record<string, unknown>;
}

export const TrackedAnchor = React.forwardRef<HTMLAnchorElement, TrackedAnchorProps>(
  ({ event, eventProps, onClick, ...rest }, ref) => (
    <a
      ref={ref}
      {...rest}
      onClick={(e) => {
        trackEvent(event, eventProps);
        onClick?.(e);
      }}
    />
  )
);
TrackedAnchor.displayName = "TrackedAnchor";

interface TrackedLinkProps extends React.ComponentProps<typeof NextLink> {
  event: string;
  eventProps?: Record<string, unknown>;
}

export const TrackedLink = React.forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  ({ event, eventProps, onClick, ...rest }, ref) => (
    <NextLink
      ref={ref}
      {...rest}
      onClick={(e) => {
        trackEvent(event, eventProps);
        onClick?.(e);
      }}
    />
  )
);
TrackedLink.displayName = "TrackedLink";
