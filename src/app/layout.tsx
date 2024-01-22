import type { Metadata } from "next";

import { fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Survey Apoli",
  description: "Home Page",
  keywords: [
    "survey",
    "surveys",
    "nps",
    "ces",
    "csat",
    "feedback",
    "feedback customer",
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased px-4 max-w-[1246px] mx-auto w-full bg-[#F8F9FF]",
          fontSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
