# HANNO

**Yuka for smart consumers — built for SMBs that need alternative tech.**

HANNO grades vendors on five operational-risk classifiers:

- Corporate COVID policy
- Vaccine mandates
- Censorship / deplatforming
- LGBTQ / Pride activism spend
- Other politicized donations

Then it shows the receipts, a classifier graph, aligned alternatives, and a migration playbook with rollback.

Product home on REQtec: [reqtec.com/products/hanno](https://www.reqtec.com/products/hanno)

## Stack

- Next.js 15 (App Router) + React 19 + Tailwind
- Static vendor ledger in `lib/data`
- No database in v0.1 — the grade is the dataset

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Map

| Route | Purpose |
| --- | --- |
| `/` | Vendor directory + search |
| `/company/[slug]` | Grade, graphs, receipts, alternatives |
| `/assess` | Current-stack assessment |
| `/alternatives` | Curated replacements by layer |
| `/playbooks` | Phased exits with cost and rollback |
| `/methodology` | How the score is built |

## Who it is for

SMBs trying to leave Google Workspace, AWS, Microsoft 365, Slack, GA4, and PayPal without performing amateur DevOps. Pair with [STARTYR](https://www.reqtec.com/products/startyr) when they want the landing zone staffed.

## Disclaimer

Scores are alignment grades for buyers who treat speech enforcement and political spend as vendor risk. They are not moral scores of every employee, and they are not legal findings. Each vendor page links public sources.
