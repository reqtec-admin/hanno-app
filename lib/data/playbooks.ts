import type { Playbook } from "../types";

export const PLAYBOOKS: Playbook[] = [
  {
    slug: "workspace-to-proton",
    title: "Google Workspace → Proton + Nextcloud",
    fromStack: "Google Workspace",
    toStack: "Proton Business + Nextcloud",
    category: "email",
    audience: "10–80 person SMBs whose mail, calendar, and Drive live in Google",
    costBand: "$8–14 / user / mo + one-time cutover",
    timeline: "3–5 weeks",
    disruption: "medium",
    phases: [
      {
        name: "Inventory",
        weeks: "Week 1",
        work: [
          "Export user list, groups, shared drives, and marketplace apps",
          "Flag the 10 mailboxes that actually matter (exec, billing, support)",
          "Stand up Proton Business and a Nextcloud project folder",
        ],
        rollback: "Google remains primary. No MX change yet.",
        success: "Every mailbox has a Proton twin and a named Drive owner.",
      },
      {
        name: "Dual delivery",
        weeks: "Weeks 2–3",
        work: [
          "Add Proton as a secondary destination or forwarding path",
          "Move shared drives to Nextcloud with permission mapping",
          "Rebuild calendar on Proton; keep Google as busy-write for 14 days",
        ],
        rollback: "Turn forwarding off. Google is still authoritative.",
        success: "Staff can work a full day in Proton without opening Gmail.",
      },
      {
        name: "Cut MX",
        weeks: "Week 4",
        work: [
          "Lower TTL 48 hours out",
          "Cut MX on a Friday afternoon",
          "Watch bounce logs and the five critical aliases",
        ],
        rollback: "Revert MX. Proton stays as archive.",
        success: "Zero lost invoices. Support SLA intact.",
      },
      {
        name: "Deprovision",
        weeks: "Week 5",
        work: [
          "Vault the Google export",
          "Kill marketplace tokens",
          "Cancel Workspace after one billing cycle of quiet",
        ],
        rollback: "Re-enable a billing admin if a forgotten SaaS still uses Google login.",
        success: "No Google login remains on a production system.",
      },
    ],
    notes: "Identity is the trap. If staff still sign into third-party SaaS with Google, fix that in the identity playbook before you cancel Workspace.",
  },
  {
    slug: "aws-to-hetzner",
    title: "AWS → Hetzner / OVH + backups",
    fromStack: "Amazon Web Services",
    toStack: "Hetzner Cloud or OVHcloud",
    category: "cloud",
    audience: "SMBs running a few VMs, RDS, and S3 — not a 200-service platform",
    costBand: "Often 50–80% lower run-rate",
    timeline: "4–8 weeks",
    disruption: "high",
    phases: [
      {
        name: "Photograph the bill",
        weeks: "Week 1",
        work: [
          "List every account, region, IAM role, and data store",
          "Mark what is actually production",
          "Price the same shape on Hetzner dedicated or CPX boxes",
        ],
        rollback: "No changes in AWS.",
        success: "A one-page architecture that a new engineer can read.",
      },
      {
        name: "Build the twin",
        weeks: "Weeks 2–4",
        work: [
          "Stand up compute + object storage + offsite backups",
          "Rehearse restore from backup onto a clean box",
          "Put staging traffic on the new side",
        ],
        rollback: "Staging only. Production DNS stays on AWS.",
        success: "A restore test that an owner watched happen.",
      },
      {
        name: "Cut traffic",
        weeks: "Weeks 5–6",
        work: [
          "Move DNS with a low TTL",
          "Keep AWS read-only for 14 days",
          "Watch error budgets, not feelings",
        ],
        rollback: "Flip DNS back. AWS machines are still warm.",
        success: "Seven quiet days.",
      },
      {
        name: "Close the account gravity",
        weeks: "Weeks 7–8",
        work: [
          "Snapshot and vault remaining data",
          "Delete unused IPs and NAT gateways — they are how AWS keeps charging",
          "Close or freeze the org once the bill is a rounding error",
        ],
        rollback: "Keep a suspended account 30 days if a forgotten integration appears.",
        success: "The AWS bill is $0 or a documented leftover.",
      },
    ],
    notes: "If you are deep into Lambda + Dynamo + Cognito, do not pretend this is a VM lift. Scope a rewrite or keep a thin AWS island on purpose.",
  },
  {
    slug: "m365-to-nextcloud",
    title: "Microsoft 365 → Nextcloud + Authentik",
    fromStack: "Microsoft 365 / Entra ID",
    toStack: "Nextcloud Hub + Authentik",
    category: "productivity",
    audience: "Offices that bought 365 for mail and stayed for identity",
    costBand: "$6–12 / user / mo managed, or self-host capex",
    timeline: "5–7 weeks",
    disruption: "medium",
    phases: [
      {
        name: "Untangle identity",
        weeks: "Weeks 1–2",
        work: [
          "List every app using Entra / Office login",
          "Stand up Authentik and connect Nextcloud",
          "Pick a mail strategy (Proton or hosted Nextcloud Mail)",
        ],
        rollback: "Entra remains the only login.",
        success: "A spreadsheet of apps and their post-365 login plan.",
      },
      {
        name: "Move files",
        weeks: "Weeks 3–4",
        work: [
          "SharePoint / OneDrive → Nextcloud with permission mapping",
          "Rebuild the three shared libraries people actually use",
          "Leave archive libraries read-only in 365",
        ],
        rollback: "365 libraries untouched.",
        success: "Staff edit the live docs in Nextcloud for a week.",
      },
      {
        name: "Move mail and devices",
        weeks: "Weeks 5–6",
        work: [
          "Cut MX or keep mail in 365 one quarter if needed — files first is allowed",
          "Replace Intune-only assumptions with sane device policy",
        ],
        rollback: "MX back to 365.",
        success: "New devices do not require an Entra join to do work.",
      },
    ],
    notes: "Do not fight Windows licensing and 365 in the same week. Files and identity first, mail second.",
  },
];

export function getPlaybook(slug: string): Playbook | undefined {
  return PLAYBOOKS.find((p) => p.slug === slug);
}
