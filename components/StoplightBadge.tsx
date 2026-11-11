import { letterGrade } from "@/lib/scoring";
import type { Grade } from "@/lib/types";

function stoplightColor(score: number): { bg: string; text: string; ring: string; label: string } {
  if (score >= 75) return { bg: "bg-emerald-500", text: "text-white", ring: "ring-emerald-400/50", label: "Excellent" };
  if (score >= 50) return { bg: "bg-lime-400", text: "text-ink-900", ring: "ring-lime-300/50", label: "Good" };
  if (score >= 25) return { bg: "bg-amber-400", text: "text-ink-900", ring: "ring-amber-300/50", label: "Poor" };
  return { bg: "bg-rose-500", text: "text-white", ring: "ring-rose-400/50", label: "Bad" };
}

export function StoplightBadge({
  score,
  size = "md",
  showLabel = true,
}: {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}) {
  const tone = stoplightColor(score);
  const grade = letterGrade(score);
  const dim =
    size === "lg" ? "h-28 w-28 text-4xl" : size === "sm" ? "h-10 w-10 text-xs" : "h-16 w-16 text-xl";

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`grid place-items-center rounded-full font-bold shadow-lg ring-4 ${dim} ${tone.bg} ${tone.text} ${tone.ring}`}
      >
        {score}
      </div>
      {showLabel && (
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-ink-100">{tone.label}</div>
          <div className="text-[10px] text-ink-300">{grade}</div>
        </div>
      )}
    </div>
  );
}
