import Link from "next/link";
import { GradeBadge } from "@/components/GradeBadge";
import { SparkBars } from "@/components/ScoreBars";
import { letterGrade, overallScore } from "@/lib/scoring";
import type { Company } from "@/lib/types";

export function CompanyCard({ company }: { company: Company }) {
  const score = overallScore(company);
  const grade = letterGrade(score);
  return (
    <Link
      href={`/company/${company.slug}`}
      className="group rounded-2xl border border-white/10 bg-ink-800/70 p-4 transition hover:border-teal-400/40 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-300">
            {company.kind === "alternative" ? "Alternative" : "Incumbent"}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-ink-50 group-hover:text-teal-300">
            {company.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-ink-300">{company.tagline}</p>
        </div>
        <GradeBadge grade={grade} size="sm" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <SparkBars company={company} />
        <div className="text-right">
          <div className="text-xl font-semibold tabular-nums text-ink-50">{score}</div>
          <div className="text-[10px] uppercase tracking-wider text-ink-300">score</div>
        </div>
      </div>
    </Link>
  );
}
