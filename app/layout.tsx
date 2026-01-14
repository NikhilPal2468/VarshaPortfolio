import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varsha Prasanna | Portfolio",
  description: "Product Manager - Transforming ideas into successful products",
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
