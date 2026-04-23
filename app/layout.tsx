import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zamfara State EMIS Proposal",
  description: "Nigerian Ministry of Education - Presentation Deck",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-grid-pattern bg-[#fcfcfc]">{children}</body>
    </html>
  );
}
