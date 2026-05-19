import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Email Audit — Audit email lists for GDPR compliance",
  description: "Scan your email marketing lists, identify subscribers without proper consent, and generate downloadable GDPR compliance reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3832330d-b441-4c60-b9a7-47063db56a88"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
