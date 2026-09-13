import { Reveal } from "@/components/reveal";

const ROWS = [
  ["1 opener, 1 follow-up, 1 objection response", "20+ scripts across every channel and stage"],
  ["Text-based reference", "Full course + outreach tracker spreadsheet"],
  [
    "Covers the first message",
    "Covers pricing objections, ghosting, and every “not now” in between",
  ],
  ["No structure beyond day one", "30-day, day-by-day outreach action plan"],
];

export function CompareTable() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
              Free vs Paid
            </span>
            <h2 className="mt-3 font-serif text-[26px] font-medium text-[var(--cream)] sm:text-[30px]">
              What the Kit Starts. What the System <em>Finishes</em>.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 overflow-x-auto rounded-md border border-[var(--line)]">
            <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-[var(--line)]">
                  <th className="px-5 py-4 font-medium text-[var(--ink-dim)]">
                    Free Starter Kit
                  </th>
                  <th className="bg-[var(--card)] px-5 py-4 font-medium text-[var(--cream)]">
                    Full Cold Start System
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([free, paid], i) => (
                  <tr key={i} className="border-b border-[var(--line)] last:border-0">
                    <td className="px-5 py-4 text-[var(--ink-dim)]">{free}</td>
                    <td className="bg-[var(--card)] px-5 py-4 text-[var(--ink)]">{paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
