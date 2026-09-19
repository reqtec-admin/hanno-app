import Link from "next/link";
import { notFound } from "next/navigation";
import { GradeBadge } from "@/components/GradeBadge";
import { ScoreBars } from "@/components/ScoreBars";
import { COMPANIES, getCompanies, getCompany } from "@/lib/data/companies";
import { CATEGORY_META } from "@/lib/data/categories";
import { PLAYBOOKS } from "@/lib/data/playbooks";
import { CLASSIFIERS, letterGrade, overallScore } from "@/lib/scoring";

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ slug: c.slug }));
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();

  const score = overallScore(company);
  const grade = letterGrade(score);
  const alts = getCompanies(company.alternatives);
  const books = PLAYBOOKS.filter(
    (p) => company.categories.includes(p.category) && company.kind === "incumbent",
  );

  return (
    <article>
      <Link href="/" className="text-sm text-teal-300">
        ← Directory
      </Link>
      <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-ink-300">
            {company.kind === "alternative" ? "Alternative vendor" : "Incumbent"} · {company.hq}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{company.name}</h1>
          <p className="mt-3 max-w-2xl text-ink-300">{company.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {company.categories.map((cat) => (
              <span key={cat} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-300">
                {CATEGORY_META[cat].label}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink-800/70 p-5">
          <GradeBadge grade={grade} score={score} size="lg" />
          <p className="mt-3 max-w-xs text-xs text-ink-300">
            Alignment score for SMBs that treat mandates, speech enforcement, and activist spend as
            vendor risk.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-5">
        <section className="rounded-2xl border border-white/10 bg-ink-800/60 p-5 md:col-span-2">
          <h2 className="text-sm uppercase tracking-wider text-ink-300">Classifier graph</h2>
          <div className="mt-4">
            <ScoreBars company={company} />
          </div>
        </section>
        <section className="grid gap-3 md:col-span-3">
          {CLASSIFIERS.map((c) => (
            <div key={c.key} className="rounded-2xl border border-white/10 bg-ink-800/40 p-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-ink-50">{c.label}</h3>
                <span className="text-sm tabular-nums text-teal-300">{company.scores[c.key]}/20</span>
              </div>
              <p className="mt-2 text-sm text-ink-300">{company.summaries[c.key]}</p>
            </div>
          ))}
        </section>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Historical receipts</h2>
        <p className="mt-2 text-sm text-ink-300">
          Public events used in the grade. Read the primary source before you treat any line as
          scripture.
        </p>
        <ol className="mt-5 space-y-3">
          {company.receipts.map((r) => (
            <li key={r.title} className="rounded-2xl border border-white/10 bg-ink-800/50 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-ink-50">
                  <span className="mr-2 text-teal-300">{r.year}</span>
                  {r.title}
                </h3>
                <span className="text-xs uppercase tracking-wider text-ink-300">{r.classifier}</span>
              </div>
              <p className="mt-2 text-sm text-ink-300">{r.detail}</p>
              <a href={r.sourceUrl} className="mt-2 inline-block text-sm text-teal-300" target="_blank">
                {r.sourceLabel} ↗
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-5">
          <h2 className="text-lg font-semibold">What an SMB actually spends</h2>
          <p className="mt-2 text-sm text-ink-300">{company.spendNote}</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-5">
          <h2 className="text-lg font-semibold">Operational risk</h2>
          <p className="mt-2 text-sm text-ink-300">{company.smbRisk}</p>
        </div>
      </section>

      {alts.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Aligned alternatives</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {alts.map((a) => {
              const s = overallScore(a);
              return (
                <Link
                  key={a.slug}
                  href={`/company/${a.slug}`}
                  className="rounded-2xl border border-teal-400/20 bg-teal-400/5 p-4 hover:border-teal-400/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{a.name}</div>
                    <div className="text-sm text-teal-300">
                      {letterGrade(s)} · {s}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-ink-300">{a.tagline}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {books.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Playbooks that move this category</h2>
          <div className="mt-4 space-y-2">
            {books.map((p) => (
              <Link
                key={p.slug}
                href={`/playbooks/${p.slug}`}
                className="block rounded-2xl border border-white/10 p-4 hover:border-teal-400/40"
              >
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-ink-300">
                  {p.timeline} · {p.costBand}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
