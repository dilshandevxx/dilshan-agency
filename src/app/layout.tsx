import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexis Portfolio",
  description: "I am a designer from London working with agencies and creatives.",
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
