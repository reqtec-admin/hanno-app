import { gradeTone } from "@/lib/scoring";
import type { Grade } from "@/lib/types";

export function GradeBadge({
  grade,
  score,
  size = "md",
}: {
  grade: Grade;
  score?: number;
  size?: "sm" | "md" | "lg";
}) {
  const tone = gradeTone(grade);
  const box =
    size === "lg" ? "h-20 w-20 text-3xl" : size === "sm" ? "h-9 w-9 text-sm" : "h-12 w-12 text-lg";
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid place-items-center rounded-2xl font-semibold tracking-tight ring-1 ${box} ${tone.bg} ${tone.text} ${tone.ring}`}
      >
        {grade}
      </div>
      {score !== undefined && (
        <div className="leading-tight">
          <div className="text-2xl font-semibold text-ink-50">{score}</div>
          <div className="text-xs uppercase tracking-wider text-ink-300">alignment</div>
        </div>
      )}
    </div>
  );
}
