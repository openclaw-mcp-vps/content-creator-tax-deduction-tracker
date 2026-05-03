import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorWrite — Tax Deduction Tracker for Content Creators",
  description:
    "Automatically categorize and track tax-deductible expenses for YouTubers, streamers, and content creators. AI-powered receipt OCR, bank sync, and IRS-ready reports."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="034345c3-7a18-416d-b4c9-fb2eb90d330d"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
