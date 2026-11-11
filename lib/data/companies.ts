import type { Company } from "../types";

export const COMPANIES: Company[] = [
  {
    slug: "google",
    name: "Google / Alphabet",
    shortName: "Google",
    kind: "incumbent",
    categories: ["cloud", "email", "productivity", "search", "analytics", "identity", "ai"],
    tagline: "Workspace, Cloud, Search, and Analytics — the default SMB stack with the longest policy memory.",
    hq: "Mountain View, CA",
    employees: "180k+",
    scores: { publicHealthPolicy: 4, vaccineMandate: 3, censorship: 2, lgbtqDonations: 3, wokeDonations: 3 },
    summaries: {
      publicHealthPolicy:
        "YouTube and Search treated official public-health guidance as a speech floor. Contradicting content was removed or demonetized for years, then quietly relaxed.",
      vaccineMandate:
        "In 2021 Google required U.S. employees to be vaccinated to work on site, with limited exceptions. Contractors followed the same rule.",
      censorship:
        "Repeated account, app, and video removals across elections, public-health debate, and political figures. YouTube is a de facto gate for SMB video reach.",
      lgbtqDonations:
        "Long-running HRC Corporate Equality Index 100 scores, Pride campaigns, and internal ERG funding that SMBs inherit as brand adjacency.",
      wokeDonations:
        "Google.org and employee-match programs funded a wide social-justice slate after 2020, alongside advertising boycotts of disfavored publishers.",
    },
    receipts: [
      {
        year: 2021,
        title: "U.S. employee vaccine requirement",
        detail:
          "Google announced that U.S. employees and on-site vendors had to be vaccinated to come to the office. Non-compliance meant no campus access.",
        sourceLabel: "Google workplace safety update",
        sourceUrl: "https://blog.google/inside-google/life-at-google/update-on-covid-safety-measures/",
        classifier: "vaccineMandate",
      },
      {
        year: 2021,
        title: "YouTube medical misinformation policy",
        detail:
          "YouTube banned content that contradicted WHO or local health-authority guidance on vaccines, transmission, and treatments. The policy was later narrowed after the emergency ended.",
        sourceLabel: "YouTube Help — medical misinformation",
        sourceUrl: "https://support.google.com/youtube/answer/9891785",
        classifier: "publicHealthPolicy",
      },
      {
        year: 2021,
        title: "YouTube suspension of Donald Trump",
        detail:
          "YouTube removed the official Donald Trump channel from upload privileges after January 6, 2021 and kept the restriction in place for years.",
        sourceLabel: "YouTube official blog",
        sourceUrl: "https://blog.youtube/news-and-events/information-on-trump-videos/",
        classifier: "censorship",
      },
      {
        year: 2017,
        title: "James Damore termination",
        detail:
          "Google fired engineer James Damore after an internal memo criticizing the firm's diversity programs leaked. The episode set the tone for employee speech risk at the company.",
        sourceLabel: "Contemporaneous coverage",
        sourceUrl: "https://www.nytimes.com/2017/08/07/business/google-women-engineer-fired-memo.html",
        classifier: "censorship",
      },
      {
        year: 2024,
        title: "HRC Corporate Equality Index",
        detail:
          "Alphabet entities have repeatedly posted perfect or near-perfect HRC CEI scores, which the index awards for benefits, supplier rules, and external advocacy.",
        sourceLabel: "HRC Corporate Equality Index",
        sourceUrl: "https://www.hrc.org/resources/corporate-equality-index",
        classifier: "lgbtqDonations",
      },
    ],
    alternatives: ["proton", "hetzner", "plausible", "reqtec"],
    orgs: [
      {
        name: "Human Rights Campaign (HRC)",
        ein: "52-1243457",
        relation: "Corporate Equality Index partner / Pride sponsor",
        year: 2024,
        highlights:
          "HRC CEI awards high scores for benefits, supplier diversity rules, and external advocacy. Alphabet entities have repeatedly received perfect or near-perfect scores. 990s show HRC's grantmaking and advocacy spend.",
        sourceLabel: "HRC CEI + ProPublica Nonprofit Explorer",
        sourceUrl: "https://projects.propublica.org/nonprofits/organizations/521243457",
      },
      {
        name: "Google.org",
        relation: "Corporate philanthropy arm",
        highlights:
          "Google.org directs grants toward racial-justice, education-tech, and crisis-response nonprofits. Many grants appear on 990 filings of recipient or intermediary organizations.",
        sourceLabel: "Google.org + ProPublica",
        sourceUrl: "https://www.google.org/",
      },
      {
        name: "Equal Justice Initiative",
        relation: "Grant recipient via Google.org",
        highlights:
          "Public records and Google.org reports list support for racial-justice organizations including EJI. 990s of the recipient show grant income and program spend.",
        sourceLabel: "Google.org impact / ProPublica",
        sourceUrl: "https://projects.propublica.org/nonprofits/",
      },
      {
        name: "ACLU and related advocacy groups",
        relation: "Grant and partnership activity",
        highlights:
          "Google.org and related programs have funded civil-liberties and advocacy organizations. Specific grants appear on recipient 990 filings.",
        sourceLabel: "Google.org + ProPublica search",
        sourceUrl: "https://projects.propublica.org/nonprofits/",
      },
    ],
    spendNote: "Workspace + Cloud is usually the single largest software line item for a 10–50 person firm.",
    smbRisk:
      "Account loss, ad-account shutdowns, and YouTube/Search ranking swings are operational risks, not culture-war abstractions.",
  },
  {
    slug: "amazon",
    name: "Amazon / AWS",
    shortName: "Amazon",
    kind: "incumbent",
    categories: ["cloud", "ai"],
    tagline: "The default cloud. Also the company that showed a mid-size social network can vanish in a weekend.",
    hq: "Seattle, WA",
    employees: "1.5M+",
    scores: { publicHealthPolicy: 5, vaccineMandate: 4, censorship: 4, lgbtqDonations: 4, wokeDonations: 4 },
    summaries: {
      publicHealthPolicy:
        "Warehouse and corporate public-health rules were aggressive by industry standards. Corporate offices required vaccination for on-site work.",
      vaccineMandate:
        "Amazon required corporate employees in the U.S. to be vaccinated by November 2021, with testing as a temporary bridge.",
      censorship:
        "AWS dropped Parler in January 2021 after political pressure. That is the canonical lock-in story for SMBs hosting speech-adjacent products.",
      lgbtqDonations:
        "Amazon has been a high-visibility Pride sponsor and HRC CEI perfect-score company for years.",
      wokeDonations:
        "Amazon's racial-equity pledges after 2020 and climate/ESG packaging are part of the procurement story vendors sell to enterprises.",
    },
    receipts: [
      {
        year: 2021,
        title: "AWS suspended Parler",
        detail:
          "Amazon Web Services terminated Parler's hosting days after January 6, 2021, taking the network offline. Apple and Google had already removed the apps.",
        sourceLabel: "AWS / contemporaneous reporting",
        sourceUrl: "https://www.justice.gov/d9/2023-06/sel.parler_.letter_in_opposition_to_motion_to_compel_3.15.21.pdf",
        classifier: "censorship",
      },
      {
        year: 2021,
        title: "Corporate vaccine requirement",
        detail:
          "Amazon required U.S. corporate employees to be vaccinated to work on site beginning November 1, 2021.",
        sourceLabel: "Amazon workplace updates",
        sourceUrl: "https://www.aboutamazon.com/news/company-news/amazon-updates-covid-19-vaccination-requirements",
        classifier: "vaccineMandate",
      },
      {
        year: 2020,
        title: "Climate Pledge and equity commitments",
        detail:
          "Amazon used The Climate Pledge and post-2020 racial-equity commitments as core brand programs, including supplier expectations that flow downstream.",
        sourceLabel: "About Amazon",
        sourceUrl: "https://www.aboutamazon.com/news/sustainability",
        classifier: "wokeDonations",
      },
    ],
    alternatives: ["hetzner", "ovhcloud", "vultr", "reqtec"],
    orgs: [
      {
        name: "Human Rights Campaign (HRC)",
        ein: "52-1243457",
        relation: "Pride sponsor / CEI partner",
        highlights: "Amazon has long held perfect or near-perfect HRC CEI scores. 990s detail HRC's advocacy and grant activity.",
        sourceLabel: "HRC CEI + ProPublica",
        sourceUrl: "https://projects.propublica.org/nonprofits/organizations/521243457",
      },
      {
        name: "Amazon Sustainability / Climate Pledge partners",
        relation: "Corporate program partners",
        highlights: "The Climate Pledge and related equity programs involve partnerships with environmental and social nonprofits. Grant details appear in partner 990s.",
        sourceLabel: "About Amazon",
        sourceUrl: "https://www.aboutamazon.com/news/sustainability",
      },
      {
        name: "Local community and education nonprofits",
        relation: "Employee match and regional grants",
        highlights: "Amazon's employee-match and regional programs fund education and community organizations. Specific recipients appear on those nonprofits' 990s.",
        sourceLabel: "Amazon community programs",
        sourceUrl: "https://www.aboutamazon.com/news/community",
      },
    ],
    spendNote: "AWS bills compound via data egress and managed-service gravity. Leaving late is the expensive version of leaving.",
    smbRisk: "If your product can be framed as 'harmful speech,' a single ToS review can take the company offline.",
  },
  {
    slug: "paypal",
    name: "PayPal",
    shortName: "PayPal",
    kind: "incumbent",
    categories: ["payments"],
    tagline: "The consumer wallet that has already shown it will freeze lawful funds over politics.",
    hq: "San Jose, CA",
    employees: "27k+",
    scores: { publicHealthPolicy: 6, vaccineMandate: 6, censorship: 2, lgbtqDonations: 4, wokeDonations: 3 },
    summaries: {
      publicHealthPolicy: "Less a workplace public-health story than a payments-as-speech story during the protest years.",
      vaccineMandate: "Followed standard Bay Area corporate vaccination norms; not the primary risk vector.",
      censorship:
        "Froze accounts tied to the 2022 Canadian trucker protests and proposed AUP fines for 'misinformation' before walking the language back.",
      lgbtqDonations: "Long-time HRC perfect-score company and Pride campaigner.",
      wokeDonations: "Partnerships with activist nonprofits and a public 'responsible business' slate.",
    },
    receipts: [
      {
        year: 2022,
        title: "Canadian convoy fundraising freezes",
        detail:
          "PayPal and other processors restricted accounts tied to the Freedom Convoy protests after the Canadian government invoked the Emergencies Act.",
        sourceLabel: "Contemporaneous reporting",
        sourceUrl: "https://www.reuters.com/world/americas/canada-police-have-frozen-millions-protest-related-accounts-finance-minister-2022-02-20/",
        classifier: "censorship",
      },
      {
        year: 2022,
        title: "AUP 'misinformation' fine language",
        detail:
          "PayPal published acceptable-use updates that opponents read as allowing $2,500 fines for 'misinformation.' The company said the language was an error and removed it.",
        sourceLabel: "PayPal AUP / walk-back coverage",
        sourceUrl: "https://newsroom.paypal-corp.com/",
        classifier: "censorship",
      },
    ],
    alternatives: ["btcpay", "helcim"],
    orgs: [
      {
        name: "Human Rights Campaign (HRC)",
        ein: "52-1243457",
        relation: "Pride sponsor / CEI partner",
        highlights: "PayPal has been a long-time perfect-score HRC CEI company. 990s show HRC's advocacy and grantmaking.",
        sourceLabel: "HRC CEI + ProPublica",
        sourceUrl: "https://projects.propublica.org/nonprofits/organizations/521243457",
      },
      {
        name: "Various responsible-business partners",
        relation: "Corporate philanthropy and partnerships",
        highlights: "PayPal has public partnerships with nonprofit organizations around financial inclusion and social programs. Details appear in partner 990s and company reports.",
        sourceLabel: "PayPal impact reports",
        sourceUrl: "https://newsroom.paypal-corp.com/",
      },
    ],
    spendNote: "Chargebacks plus political AUP risk is a working-capital problem, not a branding problem.",
    smbRisk: "A frozen balance can stop payroll. Have a second processor before you need one.",
  },
  {
    slug: "proton",
    name: "Proton",
    shortName: "Proton",
    kind: "alternative",
    categories: ["email", "productivity"],
    tagline: "Swiss mail, calendar, drive, and pass. Built as an alternative to Workspace surveillance.",
    hq: "Geneva, Switzerland",
    employees: "500+",
    scores: { publicHealthPolicy: 17, vaccineMandate: 18, censorship: 16, lgbtqDonations: 15, wokeDonations: 16 },
    summaries: {
      publicHealthPolicy: "No U.S.-style workplace-mandate campaign. Product is privacy infrastructure, not a public-health bureau.",
      vaccineMandate: "No public U.S. employee vaccine-mandate record of the Google/Amazon type.",
      censorship: "Has declined some abusive accounts under Swiss law. Not a political deplatforming engine for U.S. speech.",
      lgbtqDonations: "No material Pride-as-procurement program.",
      wokeDonations: "Positioning is privacy and jurisdiction, not domestic culture-war philanthropy.",
    },
    receipts: [
      {
        year: 2024,
        title: "Workspace alternative suite",
        detail:
          "Proton Mail, Calendar, Drive, and Pass are sold as a European-jurisdiction replacement for Google Workspace, with paid SMB tiers.",
        sourceLabel: "Proton for Business",
        sourceUrl: "https://proton.me/business",
        classifier: "censorship",
      },
    ],
    alternatives: [],
    orgs: [
      {
        name: "Privacy-focused European nonprofits",
        relation: "Alignment by jurisdiction, not grants",
        highlights: "Proton's model is Swiss/EU privacy infrastructure. No material U.S. activist-grant program appears in public records.",
        sourceLabel: "Proton transparency",
        sourceUrl: "https://proton.me/blog/transparency",
      },
    ],
    spendNote: "Mail + calendar swap is the highest-leverage first move for most SMBs.",
    smbRisk: "Bridge mode (forwarding) is required for a clean MX cutover. Budget a DNS weekend.",
  },
  {
    slug: "hetzner",
    name: "Hetzner",
    shortName: "Hetzner",
    kind: "alternative",
    categories: ["cloud"],
    tagline: "German dedicated and cloud servers. The price and posture most SMBs actually need.",
    hq: "Gunzenhausen, Germany",
    employees: "400+",
    scores: { publicHealthPolicy: 17, vaccineMandate: 18, censorship: 15, lgbtqDonations: 18, wokeDonations: 17 },
    summaries: {
      publicHealthPolicy: "European hoster. No U.S. culture-war HR program.",
      vaccineMandate: "No U.S. employee vaccine-mandate campaign.",
      censorship: "Enforces German/EU law (illegal content, phishing). Not an English-language political referee.",
      lgbtqDonations: "No Pride-as-brand program aimed at U.S. procurement.",
      wokeDonations: "Sells compute. Does not sell a moral narrative.",
    },
    receipts: [
      {
        year: 2025,
        title: "Standard EU-law AUPs",
        detail:
          "Hetzner terminates clearly illegal or abusive tenants under German law. It does not run a U.S. disinformation desk.",
        sourceLabel: "Hetzner legal / AUP",
        sourceUrl: "https://www.hetzner.com/legal/terms-and-conditions/",
        classifier: "censorship",
      },
    ],
    alternatives: [],
    orgs: [
      {
        name: "No material U.S. activist associations",
        relation: "European infrastructure provider",
        highlights: "Hetzner sells compute under German law. Public records do not show significant U.S. nonprofit grant or Pride-procurement programs.",
        sourceLabel: "Hetzner legal",
        sourceUrl: "https://www.hetzner.com/legal/",
      },
    ],
    spendNote: "Often 50–80% cheaper than equivalent AWS for steady VMs. You own more ops.",
    smbRisk: "No managed fairy dust. Pair with a thin ops playbook or REQtec-managed layer.",
  },
  {
    slug: "plausible",
    name: "Plausible",
    shortName: "Plausible",
    kind: "alternative",
    categories: ["analytics"],
    tagline: "EU, cookie-less, open source. The cleanest GA replacement for an SMB site.",
    hq: "Tallinn, Estonia",
    employees: "10+",
    scores: { publicHealthPolicy: 18, vaccineMandate: 18, censorship: 17, lgbtqDonations: 17, wokeDonations: 17 },
    summaries: {
      publicHealthPolicy: "Tiny EU product company. No U.S. HR-mandate record.",
      vaccineMandate: "Not applicable at Big Tech scale.",
      censorship: "No ad-network or speech desk.",
      lgbtqDonations: "No material activist-spend program.",
      wokeDonations: "Bootstrapped analytics. Not a grants machine.",
    },
    receipts: [
      {
        year: 2025,
        title: "GA replacement positioning",
        detail: "Plausible markets a privacy-first, script-light analytics product with a self-host option — the usual first HANNO analytics move.",
        sourceLabel: "Plausible",
        sourceUrl: "https://plausible.io/",
        classifier: "wokeDonations",
      },
    ],
    alternatives: [],
    orgs: [
      {
        name: "Open-source / privacy tooling community",
        relation: "Product alignment, not corporate grants",
        highlights: "Plausible is a small EU analytics company. No significant activist nonprofit funding or HRC-style programs appear in public records.",
        sourceLabel: "Plausible",
        sourceUrl: "https://plausible.io/",
      },
    ],
    spendNote: "Tens of dollars a month instead of a Google tag that trains an ad network on your customers.",
    smbRisk: "Less funnel detail than GA4. Most SMBs do not need GA4.",
  },
  {
    slug: "mattermost",
    name: "Mattermost",
    shortName: "Mattermost",
    kind: "alternative",
    categories: ["comms"],
    tagline: "Self-host Slack alternative used by teams that do not want Salesforce as their hallway.",
    hq: "Palo Alto, CA",
    employees: "200+",
    scores: { publicHealthPolicy: 15, vaccineMandate: 16, censorship: 15, lgbtqDonations: 15, wokeDonations: 15 },
    summaries: {
      publicHealthPolicy: "No hyperscaler mandate record.",
      vaccineMandate: "No notable public mandate campaign.",
      censorship: "Self-host option means you set the rules.",
      lgbtqDonations: "Ordinary SaaS, not a Pride-procurement actor.",
      wokeDonations: "Sells team chat.",
    },
    receipts: [
      {
        year: 2025,
        title: "Slack alternative",
        detail: "Mattermost offers team messaging with self-host and gov-adjacent deployments — the usual Slack exit for SMBs that want the transcript on their disk.",
        sourceLabel: "Mattermost",
        sourceUrl: "https://mattermost.com/",
        classifier: "censorship",
      },
    ],
    alternatives: [],
    orgs: [
      {
        name: "Self-host / open-source community",
        relation: "Product posture",
        highlights: "Mattermost sells team chat with a self-host option. No material U.S. activist-grant or Pride-procurement program is documented.",
        sourceLabel: "Mattermost",
        sourceUrl: "https://mattermost.com/",
      },
    ],
    spendNote: "Cheaper at 40 seats than Slack. Migration is the cost.",
    smbRisk: "Integrations are the lock. Inventory them before you move.",
  },
  {
    slug: "reqtec",
    name: "REQtec / STARTYR",
    shortName: "REQtec",
    kind: "alternative",
    categories: ["cloud", "ai", "devtools"],
    tagline: "Managed alternative stack for SMBs that want the migration done, not just diagrammed.",
    hq: "United States",
    employees: "boutique",
    scores: { publicHealthPolicy: 18, vaccineMandate: 18, censorship: 18, lgbtqDonations: 17, wokeDonations: 17 },
    summaries: {
      publicHealthPolicy: "Positions as politically neutral infrastructure. No mandate-era record.",
      vaccineMandate: "No corporate vaccine-mandate program.",
      censorship: "Built specifically so SMBs can leave vendors that deplatform.",
      lgbtqDonations: "Not a Pride-procurement brand.",
      wokeDonations: "Public posture is 'no political baggage' versus hyperscalers.",
    },
    receipts: [
      {
        year: 2026,
        title: "HANNO + STARTYR product line",
        detail:
          "REQtec lists HANNO as the migration guide and STARTYR as the managed alternative ecosystem for ethically minded SMBs.",
        sourceLabel: "REQtec Our Work",
        sourceUrl: "https://www.reqtec.com/our-work",
        classifier: "censorship",
      },
    ],
    alternatives: [],
    orgs: [
      {
        name: "No material activist nonprofit associations",
        relation: "Neutral infrastructure positioning",
        highlights: "REQtec positions as an alternative stack without the grant and Pride programs of the hyperscalers. No significant 990-linked activist funding is documented.",
        sourceLabel: "REQtec",
        sourceUrl: "https://www.reqtec.com/",
      },
    ],
    spendNote: "Consulting + managed infra. Priced against the cost of staying.",
    smbRisk: "Boutique vendor. Contracts and exports should be explicit on day one.",
  }
];

export function getCompany(slug: string): Company | undefined {
  return COMPANIES.find((c) => c.slug === slug);
}

export function getCompanies(slugs: string[]): Company[] {
  return slugs.map(getCompany).filter((c): c is Company => Boolean(c));
}
