import type { Company } from "../types";
import { INCUMBENTS } from "./incumbents";
import { ALTS_A } from "./alts-a";
import { ALTS_B } from "./alts-b";

export const COMPANIES: Company[] = [...INCUMBENTS, ...ALTS_A, ...ALTS_B];

export function getCompany(slug: string): Company | undefined {
  return COMPANIES.find((c) => c.slug === slug);
}

export function getCompanies(slugs: string[]): Company[] {
  return slugs.map(getCompany).filter((c): c is Company => Boolean(c));
}
