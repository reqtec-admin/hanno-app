import { CLASSIFIERS, scoreColor } from "@/lib/scoring";
import type { Company } from "@/lib/types";

export function ScoreBars({ company }: { company: Company }) {
  return (
    <div className="space-y-3">
      {CLASSIFIERS.map((c) => {
        const value = company.scores[c.key];
        const pct = (value / 20) * 100;
        return (
          <div key={c.key}>
            <div className="mb-1 flex items-baseline justify-between gap-3">
              <span className="text-sm text-ink-100">{c.label}</span>
              <span className="text-xs tabular-nums text-ink-300">{value}/20</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, background: scoreColor(value) }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SparkBars({ company }: { company: Company }) {
  return (
    <div className="flex h-8 items-end gap-1">
      {CLASSIFIERS.map((c) => {
        const value = company.scores[c.key];
        return (
          <div
            key={c.key}
            title={`${c.short}: ${value}/20`}
            className="w-2 rounded-sm"
            style={{ height: `${Math.max(12, (value / 20) * 100)}%`, background: scoreColor(value) }}
          />
        );
      })}
    </div>
  );
}
