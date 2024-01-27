"use client";
import { Rocket } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Hero() {
  return (
    <section className="mt-[120px]">
      <div className="flex flex-col items-center justify-center gap-5">
        <motion.h1
          transition={{ duration: 0.5, ease: "linear" }}
          initial={{ x: -1750 }}
          animate={{ x: [-1750, 0] }}
          className="whitespace-nowrap xl:text-[90px] text-3xl md:text-4xl lg:text-4xl tracking-tighter font-bold leading-snug text-center"
        >
          O jeito mais simples de colher a{" "}
          <motion.span
            className={cn(
              "bg-[#009379] text-white py-2 xl:px-16 rounded-2xl block px-5 xl:mt-7 xl:py-8"
            )}
          >
            avaliação dos seus clientes
          </motion.span>
        </motion.h1>
        <p className="text-lg md:text-2xl font-semibold text-center">
          Faça sua empresa decolar!
        </p>
        <a
          href="#get-a-demo"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "py-4 px-[50px] w-full max-w-[260px] h-[48px] bg-[#E5F4F2] text-[#009379] text-md flex items-center gap-2"
          )}
        >
          <span>
            <Rocket />
          </span>{" "}
          Comece gratuitamente
        </a>
      </div>
    </section>
  );
}
