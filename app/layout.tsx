import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Portfolio Valentina",
  description: "Frontend Developer and UX|UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/memoji-2.png" />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
