"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORY_META, CATEGORY_ORDER } from "@/lib/data/categories";
import { PLAYBOOKS } from "@/lib/data/playbooks";
import type { StackCategory } from "@/lib/types";

const OPTIONS: Record<StackCategory, { id: string; label: string; risk: number }[]> = {
  cloud: [
    { id: "aws", label: "AWS", risk: 5 },
    { id: "azure", label: "Azure", risk: 5 },
    { id: "gcp", label: "Google Cloud", risk: 5 },
    { id: "hetzner", label: "Hetzner / OVH / Vultr", risk: 1 },
    { id: "colo", label: "Colo / on-prem", risk: 1 },
  ],
  email: [
    { id: "gws", label: "Google Workspace", risk: 5 },
    { id: "m365", label: "Microsoft 365", risk: 4 },
    { id: "proton", label: "Proton / Fastmail", risk: 1 },
    { id: "self", label: "Self-hosted mail", risk: 1 },
  ],
  productivity: [
    { id: "gdrive", label: "Google Drive / Docs", risk: 5 },
    { id: "o365", label: "OneDrive / SharePoint", risk: 4 },
    { id: "nextcloud", label: "Nextcloud / OnlyOffice", risk: 1 },
  ],
  identity: [
    { id: "google", label: "Google Identity", risk: 5 },
    { id: "entra", label: "Entra ID / Okta", risk: 4 },
    { id: "selfidp", label: "Authentik / Keycloak", risk: 1 },
  ],
  analytics: [
    { id: "ga", label: "Google Analytics", risk: 5 },
    { id: "plausible", label: "Plausible / Umami / Matomo", risk: 1 },
  ],
  comms: [
    { id: "slack", label: "Slack", risk: 4 },
    { id: "teams", label: "Teams", risk: 4 },
    { id: "zoom", label: "Zoom as only room", risk: 4 },
    { id: "mm", label: "Mattermost / Zulip / Jitsi", risk: 1 },
  ],
  payments: [
    { id: "paypal", label: "PayPal only", risk: 5 },
    { id: "stripe", label: "Stripe only", risk: 3 },
    { id: "dual", label: "Dual processor / BTCPay spare", risk: 1 },
  ],
  search: [
    { id: "google", label: "Google Search + Ads locked", risk: 4 },
    { id: "mixed", label: "Mixed / Kagi at the desk", risk: 2 },
  ],
  devtools: [
    { id: "github", label: "GitHub only", risk: 4 },
    { id: "mirror", label: "GitHub + Codeberg/Forgejo mirror", risk: 1 },
  ],
  ai: [
    { id: "openai", label: "OpenAI / Gemini as system of record", risk: 4 },
    { id: "local", label: "Local models for private work", risk: 1 },
  ],
};

export default function AssessPage() {
  const [picks, setPicks] = useState<Partial<Record<StackCategory, string>>>( {} );
  const result = useMemo(() => {
    const chosen = CATEGORY_ORDER.map((cat) => {
      const id = picks[cat];
      const opt = OPTIONS[cat].find((o) => o.id === id);
      return { cat, opt };
    }).filter((x) => x.opt);
    if (!chosen.length) return null;
    const risk = chosen.reduce((s, x) => s + (x.opt?.risk ?? 0), 0);
    const max = chosen.length * 5;
    const independence = Math.round(100 - (risk / max) * 100);
    return { chosen, independence, risk };
  }, [picks]);
  const suggested = PLAYBOOKS.filter((p) => {
    const pick = picks[p.category];
    if (!pick) return false;
    const opt = OPTIONS[p.category].find((o) => o.id === pick);
    return (opt?.risk ?? 0) >= 3;
  });
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-teal-300">Lightweight assessment</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">What are you actually on?</h1>
      <p className="mt-3 max-w-2xl text-ink-300">
        Pick the current tool in each layer. HANNO scores lock-in and coercive-vendor exposure, then
        points at a playbook. This is the assessment described on reqtec.com/products/hanno — built
        for SMBs, not enterprise architecture theater.
      </p>
      <div className="mt-8 space-y-4">
        {CATEGORY_ORDER.map((cat) => (
          <fieldset key={cat} className="rounded-2xl border border-white/10 bg-ink-800/40 p-4">
            <legend className="px-1 text-sm font-medium text-ink-50">{CATEGORY_META[cat].label}</legend>
            <p className="mb-3 text-xs text-ink-300">{CATEGORY_META[cat].blurb}</p>
            <div className="flex flex-wrap gap-2">
              {OPTIONS[cat].map((o) => {
                const on = picks[cat] === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setPicks((p) => ({ ...p, [cat]: o.id }))}
                    className={`rounded-full px-3 py-1.5 text-sm ${
                      on ? "bg-teal-400 text-ink-950" : "border border-white/10 text-ink-300"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      {result && (
        <section className="mt-8 rounded-2xl border border-teal-400/30 bg-teal-400/5 p-6">
          <div className="text-xs uppercase tracking-wider text-ink-300">Independence score</div>
          <div className="mt-1 text-5xl font-semibold text-ink-50">{result.independence}</div>
          <p className="mt-2 max-w-xl text-sm text-ink-300">
            100 means the layers you filled are already on quieter vendors. Low scores mean the
            company is one ToS review away from a bad week.
          </p>
          {suggested.length > 0 && (
            <div className="mt-5 space-y-2">
              <div className="text-sm font-medium">Start here</div>
              {suggested.map((p) => (
                <Link key={p.slug} href={`/playbooks/${p.slug}`} className="block text-sm text-teal-300">
                  {p.title} · {p.timeline}
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
