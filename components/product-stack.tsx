import { Search, MessageSquare, RefreshCcw, Handshake } from "lucide-react";

const FLOW = [
  { icon: Search, label: "Find leads" },
  { icon: MessageSquare, label: "Start conversations" },
  { icon: RefreshCcw, label: "Follow up" },
  { icon: Handshake, label: "Close clients" },
];

const CHIPS = ["Scripts", "Templates", "Playbooks", "Action Plan"];

/**
 * A static, brand-native visualization of what Cold Start actually is: a
 * system of a script vault, a 30-day plan, and a repeatable outreach flow —
 * not a screenshot, not a fake dashboard, no third-party logos.
 */
export function ProductStack() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-sm select-none sm:h-[420px]" aria-hidden="true">
      <div className="absolute right-1 top-2 w-36 -rotate-3 rounded-md border border-[var(--line)] bg-[var(--navy-2)]/80 p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] sm:right-2 sm:top-4 sm:w-56 sm:-rotate-6 sm:p-4">
        <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--teal)] sm:text-[10px]">
          Script Vault
        </span>
        <p className="mt-1.5 text-[11px] leading-snug text-[var(--ink-dim)] sm:mt-2 sm:text-[12px]">
          20+ cold email &amp; DM scripts
        </p>
      </div>

      <div className="absolute left-1 top-12 w-32 rotate-3 rounded-md border border-[var(--line)] bg-[var(--navy-2)]/80 p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] sm:left-0 sm:top-16 sm:w-52 sm:rotate-6 sm:p-4">
        <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--teal)] sm:text-[10px]">
          30-Day Action Plan
        </span>
        <p className="mt-1.5 text-[11px] leading-snug text-[var(--ink-dim)] sm:mt-2 sm:text-[12px]">
          Day-by-day outreach schedule
        </p>
      </div>

      <div className="absolute inset-x-2 bottom-0 top-24 rounded-lg border border-[var(--line)] bg-[var(--navy-1)] p-5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.75)] sm:inset-x-4 sm:top-28 sm:p-6">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 26 26" aria-hidden="true">
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
          <span className="font-serif text-[15px] text-[var(--cream)]">Cold Start</span>
        </div>
        <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[var(--ink-dim)]">
          Client Acquisition System
        </p>

        <div className="relative mt-6 space-y-4 pl-1">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-[var(--line)]" />
          {FLOW.map((step) => (
            <div key={step.label} className="relative flex items-center gap-3">
              <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--navy-1)] text-[var(--gold)]">
                <step.icon size={13} />
              </span>
              <span className="text-[13.5px] text-[var(--ink)]">{step.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--line)] pt-4">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[10px] uppercase tracking-wide text-[var(--ink-dim)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
