import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import HamburgerButton from "@/components/HamburgerButton";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Millenium Digital",
  description:
    "Millenium Digital, talepleriniz için en hızlı ve en keskin çözümler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        <main className="lg:ms-[300px]">{children}</main>
      </body>
    </html>
  );
}
