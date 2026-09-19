import type { ClassifierKey, Company, Grade } from "./types";

export const CLASSIFIERS: { key: ClassifierKey; label: string; short: string; weight: number }[] = [
  { key: "covidPolicy", label: "Corporate COVID policy", short: "COVID policy", weight: 1 },
  { key: "vaccineMandate", label: "Vaccine mandates", short: "Mandates", weight: 1 },
  { key: "censorship", label: "Censorship / deplatforming", short: "Censorship", weight: 1.2 },
  { key: "lgbtqDonations", label: "LGBTQ / Pride activism spend", short: "Pride spend", weight: 0.9 },
  { key: "wokeDonations", label: "Other politicized donations", short: "Activist spend", weight: 0.9 },
];

export function overallScore(company: Company): number {
  const weighted = CLASSIFIERS.reduce((sum, c) => sum + company.scores[c.key] * c.weight, 0);
  const denom = CLASSIFIERS.reduce((sum, c) => sum + 20 * c.weight, 0);
  return Math.round((weighted / denom) * 100);
}

export function letterGrade(score: number): Grade {
  if (score >= 95) return "A+";
  if (score >= 85) return "A";
  if (score >= 72) return "B";
  if (score >= 58) return "C";
  if (score >= 44) return "D";
  return "F";
}

export function gradeTone(grade: Grade): { bg: string; text: string; ring: string } {
  switch (grade) {
    case "A+":
    case "A":
      return { bg: "bg-emerald-500/15", text: "text-emerald-300", ring: "ring-emerald-400/40" };
    case "B":
      return { bg: "bg-teal-400/15", text: "text-teal-300", ring: "ring-teal-400/40" };
    case "C":
      return { bg: "bg-amber-400/15", text: "text-amber-300", ring: "ring-amber-400/40" };
    case "D":
      return { bg: "bg-orange-400/15", text: "text-orange-300", ring: "ring-orange-400/40" };
    default:
      return { bg: "bg-rose-500/15", text: "text-rose-300", ring: "ring-rose-400/40" };
  }
}

export function scoreColor(score: number): string {
  if (score >= 16) return "#34d399";
  if (score >= 12) return "#2BA2C2";
  if (score >= 8) return "#fbbf24";
  if (score >= 5) return "#fb923c";
  return "#f43f5e";
}
