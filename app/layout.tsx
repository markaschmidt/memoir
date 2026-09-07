import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Mark Schmidt",
  description:
    "Computer science graduate building agentic platforms and 3D synthesis software.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="paper-surface min-h-full flex flex-col font-body text-ink">
        <NavBar />
        {children}
        <Toaster theme="light" position="bottom-center" richColors closeButton />
      </body>
    </html>
  );
}
