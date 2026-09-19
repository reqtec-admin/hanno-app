import type { StackCategory } from "../types";

export const CATEGORY_META: Record<
  StackCategory,
  { label: string; blurb: string; incumbents: string }
> = {
  cloud: {
    label: "Cloud & hosting",
    blurb: "Compute, object storage, and managed Kubernetes without hyperscaler lock-in.",
    incumbents: "AWS, Azure, Google Cloud",
  },
  email: {
    label: "Email & calendar",
    blurb: "Mailbox, calendar, and DNS that you can actually leave.",
    incumbents: "Google Workspace, Microsoft 365",
  },
  productivity: {
    label: "Docs & office",
    blurb: "Documents, sheets, and files that are not a subscription trap.",
    incumbents: "Google Docs, Microsoft 365, Adobe",
  },
  identity: {
    label: "Identity & access",
    blurb: "SSO and directory you control instead of a permanent IdP tax.",
    incumbents: "Okta, Entra ID, Google Identity",
  },
  analytics: {
    label: "Analytics",
    blurb: "Site and product analytics without shipping customer data to ad networks.",
    incumbents: "Google Analytics",
  },
  comms: {
    label: "Team comms",
    blurb: "Chat and meetings that do not sit inside a politicized consumer platform.",
    incumbents: "Slack, Teams, Zoom",
  },
  payments: {
    label: "Payments",
    blurb: "Processors less likely to freeze a lawful business over speech or politics.",
    incumbents: "PayPal, Stripe",
  },
  search: {
    label: "Search & ads",
    blurb: "Discovery that is not also a content-moderation bureau.",
    incumbents: "Google Search, Bing",
  },
  devtools: {
    label: "Dev tools",
    blurb: "Source, CI, and package hosting with a shorter cancellation radius.",
    incumbents: "GitHub, Google Cloud Build",
  },
  ai: {
    label: "AI & agents",
    blurb: "Models and agents you can run without training the vendor on your books.",
    incumbents: "OpenAI, Gemini, Azure OpenAI",
  },
};

export const CATEGORY_ORDER: StackCategory[] = [
  "cloud",
  "email",
  "productivity",
  "identity",
  "comms",
  "analytics",
  "payments",
  "search",
  "devtools",
  "ai",
];
