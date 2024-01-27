import { Outfit as FontSans } from "next/font/google";
import localFont from "next/font/local";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
// });

export const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/Outfit-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
