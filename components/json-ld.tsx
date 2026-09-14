/**
 * Renders a single JSON-LD <script> tag from a plain object. No fabricated
 * fields are ever passed in here (no ratings/reviews that don't exist) —
 * see call sites in app/layout.tsx, app/page.tsx and app/faq/page.tsx.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
