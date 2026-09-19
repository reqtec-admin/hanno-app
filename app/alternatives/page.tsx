import Link from "next/link";
import { ALTERNATIVES } from "@/lib/data/alternatives";
import { CATEGORY_META, CATEGORY_ORDER } from "@/lib/data/categories";

export default function AlternativesPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-teal-300">Curated stacks</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Leave without becoming a hobbyist sysadmin.</h1>
      <p className="mt-3 max-w-2xl text-ink-300">
        Each row is a vendor HANNO will put in front of an SMB that wants off the default Big Tech
        option. Tradeoffs are listed because sovereign choices that lie about cost are just another
        sales deck.
      </p>
      <div className="mt-10 space-y-10">
        {CATEGORY_ORDER.map((cat) => {
          const items = ALTERNATIVES.filter((a) => a.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat}>
              <h2 className="text-xl font-semibold">{CATEGORY_META[cat].label}</h2>
              <p className="text-sm text-ink-300">Replaces {CATEGORY_META[cat].incumbents}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {items.map((a) => (
                  <article key={a.slug} className="rounded-2xl border border-white/10 bg-ink-800/50 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-medium">{a.name}</h3>
                      <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink-300">
                        lock-in {a.lockIn}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink-300">{a.pitch}</p>
                    <p className="mt-3 text-sm text-teal-300">{a.monthlyFrom}</p>
                    <p className="mt-1 text-xs text-ink-300">Replaces {a.replaces.join(", ")}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-ink-300">
                      {a.tradeoffs.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    {a.selfHost && (
                      <p className="mt-3 text-xs uppercase tracking-wider text-teal-300">Self-host available</p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <p className="mt-10 text-sm text-ink-300">
        Want the migration sequenced against your current stack?{" "}
        <Link className="text-teal-300" href="/assess">
          Run the assessment
        </Link>
        .
      </p>
    </div>
  );
}
