import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Schmidt",
  description:
    "Computer science graduate building agentic platforms and 3D synthesis software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth antialiased", cormorant.variable, sourceSerif.variable)}
    >
      <body className="paper-surface min-h-full flex flex-col font-body text-ink">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
