export type ClassifierKey =
  | "covidPolicy"
  | "vaccineMandate"
  | "censorship"
  | "lgbtqDonations"
  | "wokeDonations";

export type Grade = "A+" | "A" | "B" | "C" | "D" | "F";

export type VendorKind = "incumbent" | "alternative";

export type StackCategory =
  | "cloud"
  | "email"
  | "productivity"
  | "identity"
  | "analytics"
  | "comms"
  | "payments"
  | "search"
  | "devtools"
  | "ai";

export interface Receipt {
  year: number;
  title: string;
  detail: string;
  sourceLabel: string;
  sourceUrl: string;
  classifier: ClassifierKey;
}

export interface ClassifierScore {
  key: ClassifierKey;
  label: string;
  score: number;
  summary: string;
}

export interface Company {
  slug: string;
  name: string;
  shortName: string;
  kind: VendorKind;
  categories: StackCategory[];
  tagline: string;
  hq: string;
  employees: string;
  scores: Record<ClassifierKey, number>;
  summaries: Record<ClassifierKey, string>;
  receipts: Receipt[];
  alternatives: string[];
  spendNote: string;
  smbRisk: string;
}

export interface Alternative {
  slug: string;
  name: string;
  category: StackCategory;
  replaces: string[];
  pitch: string;
  monthlyFrom: string;
  lockIn: "low" | "medium" | "high";
  selfHost: boolean;
  tradeoffs: string[];
}

export interface PlaybookPhase {
  name: string;
  weeks: string;
  work: string[];
  rollback: string;
  success: string;
}

export interface Playbook {
  slug: string;
  title: string;
  fromStack: string;
  toStack: string;
  category: StackCategory;
  audience: string;
  costBand: string;
  timeline: string;
  disruption: "low" | "medium" | "high";
  phases: PlaybookPhase[];
  notes: string;
}
