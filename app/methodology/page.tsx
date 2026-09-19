import { CLASSIFIERS } from "@/lib/scoring";

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.25em] text-teal-300">How the grade is built</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Not a vibe. A ledger.</h1>
      <p className="mt-4 text-ink-300">
        HANNO is Yuka for people who buy software. Food scanners show additives. HANNO shows whether
        a vendor used its workplace, platform, or treasury to coerce speech, medical choices, or
        political fashion — because those habits become your outage when the same firm hosts your
        mail.
      </p>
      <h2 className="mt-8 text-xl font-semibold">The five classifiers</h2>
      <ol className="mt-4 space-y-3">
        {CLASSIFIERS.map((c) => (
          <li key={c.key} className="rounded-2xl border border-white/10 p-4">
            <div className="font-medium">
              {c.label} <span className="text-sm text-ink-300">weight {c.weight}</span>
            </div>
            <p className="mt-1 text-sm text-ink-300">{copy[c.key]}</p>
          </li>
        ))}
      </ol>
      <h2 className="mt-8 text-xl font-semibold">Math</h2>
      <p className="mt-3 text-ink-300">
        Each classifier is 0–20. Twenty means the vendor stayed out of the coercive pattern. Zero
        means it was a primary actor. The overall score is a weighted percent. Letter grades: A 85+,
        B 72+, C 58+, D 44+, else F.
      </p>
      <h2 className="mt-8 text-xl font-semibold">What this is not</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-300">
        <li>Not a credit rating, security audit, or uptime SLA.</li>
        <li>Not a claim that every employee at a low-grade firm agrees with HQ.</li>
        <li>Not legal advice. Read the linked receipts.</li>
        <li>
          Not a request that vendors drop lawful benefits. The Pride and donation classifiers track
          whether political fashion is part of the product you are buying.
        </li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Who it is for</h2>
      <p className="mt-3 text-ink-300">
        Primary customer: an SMB that needs alternative tech and cannot afford a frozen processor,
        a closed cloud account, or a workspace login that doubles as a speech tribunal. That is the
        HANNO brief on reqtec.com — mobile-first guidance, tradeoffs, cost bands, and rollback.
      </p>
    </div>
  );
}

const copy: Record<string, string> = {
  covidPolicy:
    "Did the company turn official COVID narratives into product policy — labels, removals, workplace rules that outlasted the emergency?",
  vaccineMandate:
    "Did it condition employment or campus access on vaccination in 2021–2022, and how hard did it push contractors?",
  censorship:
    "Did it remove apps, freeze funds, or throttle lawful publishers under political pressure? Parler, convoy accounts, and YouTube medical policy live here.",
  lgbtqDonations:
    "Is Pride / HRC-style scoring a procurement and brand program the SMB inherits, or a quiet internal benefit?",
  wokeDonations:
    "Post-2020 racial-equity pledges, NGO 'disinfo' partnerships, advertiser boycotts, and ESG supplier rules that travel downstream.",
};
