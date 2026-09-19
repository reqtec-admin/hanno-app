"use client";

import { useMemo, useState } from "react";
import { CompanyCard } from "@/components/CompanyCard";
import { COMPANIES } from "@/lib/data/companies";
import { CATEGORY_META, CATEGORY_ORDER } from "@/lib/data/categories";
import { letterGrade, overallScore } from "@/lib/scoring";
import type { StackCategory, VendorKind } from "@/lib/types";

export default function HomePage() {
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<"all" | VendorKind>("all");
  const [cat, setCat] = useState<"all" | StackCategory>("all");

  const rows = useMemo(() => {
    return COMPANIES.filter((c) => {
      if (kind !== "all" && c.kind !== kind) return false;
      if (cat !== "all" && !c.categories.includes(cat)) return false;
      if (!q.trim()) return true;
      const hay = `${c.name} ${c.tagline} ${c.categories.join(" ")}` .toLowerCase();
      return hay.includes(q.trim().toLowerCase());
    }).sort((a, b) => overallScore(b) - overallScore(a));
  }, [q, kind, cat]);

  const graded = COMPANIES.map((c) => ({ c, s: overallScore(c), g: letterGrade(overallScore(c)) }));

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-teal-300">REQtec · HANNO</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-ink-50 md:text-5xl">
        Yuka for the stack you actually pay.
      </h1>
      <p className="mt-4 max-w-2xl text-ink-300">
        HANNO grades vendors on coercive COVID policy, vaccine mandates, censorship and
        deplatforming, Pride-as-procurement spend, and other politicized donations. Then it hands an
        SMB a cheaper, quieter alternative and a playbook with a rollback.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          { k: "Vendors scored", v: String(COMPANIES.length) },
          { k: "A-grade alternatives", v: String(graded.filter((x) => x.g.startsWith("A")).length) },
          { k: "Migration playbooks", v: "6" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-white/10 bg-ink-800/60 px-4 py-3">
            <div className="text-2xl font-semibold text-ink-50">{s.v}</div>
            <div className="text-xs uppercase tracking-wider text-ink-300">{s.k}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 md:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search Google, AWS, Proton, Slack…"
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-ink-50 outline-none ring-teal-400/40 placeholder:text-ink-500 focus:ring-2"
        />
        <select
          value={kind}
          onChange={(e) => setKind(e.target.value as "all" | VendorKind)}
          className="rounded-xl border border-white/10 bg-ink-800 px-3 py-3 text-sm text-ink-50"
        >
          <option value="all">All vendors</option>
          <option value="incumbent">Incumbents</option>
          <option value="alternative">Alternatives</option>
        </select>
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value as "all" | StackCategory)}
          className="rounded-xl border border-white/10 bg-ink-800 px-3 py-3 text-sm text-ink-50"
        >
          <option value="all">All categories</option>
          {CATEGORY_ORDER.map((id) => (
            <option key={id} value={id}>
              {CATEGORY_META[id].label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {rows.map((c) => (
          <CompanyCard key={c.slug} company={c} />
        ))}
      </div>
      {rows.length === 0 && (
        <p className="mt-12 text-center text-ink-300">No vendors match that filter.</p>
      )}
    </div>
  );
}
