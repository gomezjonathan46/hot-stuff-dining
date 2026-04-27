import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hot Stuff Dining",
  description: "Hot Stuff Dining Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
