import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

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
        <Analytics mode="development" />
        <Script
          id="hotjar"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3838147,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        <Script
          id="crisp"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="e8e6b6f4-7b42-4ef5-a1a8-79ecab73e03f";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
