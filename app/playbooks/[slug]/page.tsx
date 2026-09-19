import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlaybook, PLAYBOOKS } from "@/lib/data/playbooks";
import { CATEGORY_META } from "@/lib/data/categories";

export function generateStaticParams() {
  return PLAYBOOKS.map((p) => ({ slug: p.slug }));
}

export default async function PlaybookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getPlaybook(slug);
  if (!book) notFound();

  return (
    <article>
      <Link href="/playbooks" className="text-sm text-teal-300">
        ← Playbooks
      </Link>
      <p className="mt-4 text-xs uppercase tracking-[0.22em] text-ink-300">
        {CATEGORY_META[book.category].label} · {book.disruption} disruption
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{book.title}</h1>
      <p className="mt-3 max-w-2xl text-ink-300">{book.audience}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Timeline", book.timeline],
          ["Cost band", book.costBand],
          ["From → to", `${book.fromStack} → ${book.toStack}`],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl border border-white/10 bg-ink-800/50 p-4">
            <div className="text-xs uppercase tracking-wider text-ink-300">{k}</div>
            <div className="mt-1 text-sm text-ink-50">{v}</div>
          </div>
        ))}
      </div>
      <ol className="mt-10 space-y-4">
        {book.phases.map((phase, i) => (
          <li key={phase.name} className="rounded-2xl border border-white/10 bg-ink-800/40 p-5">
            <div className="text-xs uppercase tracking-wider text-teal-300">
              Phase {i + 1} · {phase.weeks}
            </div>
            <h2 className="mt-1 text-xl font-semibold">{phase.name}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-300">
              {phase.work.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 p-3 text-sm">
                <div className="text-xs uppercase tracking-wider text-ink-300">Rollback</div>
                <p className="mt-1 text-ink-100">{phase.rollback}</p>
              </div>
              <div className="rounded-xl border border-white/10 p-3 text-sm">
                <div className="text-xs uppercase tracking-wider text-ink-300">Success</div>
                <p className="mt-1 text-ink-100">{phase.success}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 rounded-2xl border border-teal-400/20 bg-teal-400/5 p-5 text-sm text-ink-300">
        {book.notes}
      </p>
    </article>
  );
}
