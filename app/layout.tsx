import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catalyst Collective — A community for what's next",
  description:
    "Catalyst Collective is a small community for ambitious students and early-career people exploring startups, VC, consulting, biotech and beyond.",
  openGraph: {
    title: "Catalyst Collective — A community for what's next",
    description:
      "A small community for ambitious people exploring what comes next.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
