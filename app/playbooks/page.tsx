import Link from "next/link";
import { PLAYBOOKS } from "@/lib/data/playbooks";
import { CATEGORY_META } from "@/lib/data/categories";

export default function PlaybooksPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-teal-300">Migration playbooks</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Phases, costs, rollback.</h1>
      <p className="mt-3 max-w-2xl text-ink-300">
        HANNO does not tell an SMB to “just self-host.” Each playbook is a sequenced exit with a
        way back if the cutover fails. Pair with REQtec / STARTYR if you want the work staffed.
      </p>
      <div className="mt-8 grid gap-4">
        {PLAYBOOKS.map((p) => (
          <Link
            key={p.slug}
            href={`/playbooks/${p.slug}`}
            className="rounded-2xl border border-white/10 bg-ink-800/50 p-5 hover:border-teal-400/40"
          >
            <div className="text-xs uppercase tracking-wider text-ink-300">
              {CATEGORY_META[p.category].label} · disruption {p.disruption}
            </div>
            <h2 className="mt-1 text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-ink-300">{p.audience}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-teal-300">
              <span>{p.timeline}</span>
              <span>{p.costBand}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
