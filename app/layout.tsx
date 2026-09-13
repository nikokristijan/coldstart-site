import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsPageview } from "@/components/analytics-pageview";
import { SITE } from "@/lib/site-config";

// Self-hosted (not next/font/google) — this network can't reach
// fonts.googleapis.com at build time, and self-hosting is faster/more
// private in production anyway. Same two typefaces as the original site.
const fraunces = localFont({
  variable: "--font-fraunces",
  display: "swap",
  src: [
    { path: "./fonts/Fraunces-Variable.ttf", weight: "300 700", style: "normal" },
    { path: "./fonts/Fraunces-Italic-Variable.ttf", weight: "300 700", style: "italic" },
  ],
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [{ path: "./fonts/Inter-Variable.ttf", weight: "400 700", style: "normal" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Cold Start — Get Clients Without Paid Ads",
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[var(--navy-0)] text-[var(--ink)] antialiased">
        {/*
          Whop tracking — required exactly as provided (business id
          biz_85IV8HsOvyNE5k). beforeInteractive guarantees this is injected
          into <head> and runs before hydration on every route, since it
          lives in the root layout that wraps Home, /affiliate and /faq.
          AnalyticsPageview (client component) below re-fires whop.track on
          client-side route changes so navigation between pages is still
          counted — the snippet itself is untouched.
        */}
        <Script id="whop-tracking" strategy="beforeInteractive">
          {`!function(w,d,s,u,n,a,b){if(w[n])return;a=w[n]={q:[],t:+new Date,s:[],o:u,track:function(){a.q.push([+new Date].concat([].slice.call(arguments)))},setScope:function(){a.s=[].slice.call(arguments).filter(function(x){return typeof x==="string"});a.q.push([+new Date,"setScope"].concat(a.s))},scope:function(){var c=[].slice.call(arguments);return{track:function(){a.q.push([+new Date].concat([].slice.call(arguments)).concat([{__scope:c}]))}}}};b=d.createElement(s);b.async=1;b.src=u+"/s.js";d.getElementsByTagName(s)[0].parentNode.insertBefore(b,d.getElementsByTagName(s)[0])}(window,document,"script","https://t.whop.tw","whop");
whop.setScope("biz_85IV8HsOvyNE5k");
whop.track("page");`}
        </Script>
        <AnalyticsPageview />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
