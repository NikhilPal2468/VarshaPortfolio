import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varsha Simpadipura Prasanna | Portfolio",
  description: "Project Manager with 3 years of experience driving business strategy and execution across fintech and EV-focused products, impacting 500K+ users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
