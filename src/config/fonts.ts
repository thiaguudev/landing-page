import { Outfit as FontSans, Lora as FontMono } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
