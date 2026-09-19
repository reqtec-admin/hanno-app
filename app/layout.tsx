import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HANNO — Grade the stack. Leave on purpose.",
  description:
    "Yuka for smart consumers and SMBs. HANNO grades vendors on coercive COVID policy, vaccine mandates, censorship, and politicized spend — then maps a path onto aligned alternative tech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Nav />
        <main className="mx-auto max-w-6xl px-4 pb-20 pt-8">{children}</main>
        <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-ink-300">
          HANNO is a REQtec product for SMBs leaving vendor lock-in. Grades are alignment scores for
          buyers who treat speech, mandates, and political spend as operational risk — not a
          government rating. Sources are listed on each vendor page.
          <div className="mt-2">
            <a className="text-teal-300" href="https://www.reqtec.com">
              reqtec.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
