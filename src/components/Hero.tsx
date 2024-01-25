import { Rocket } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";

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
        <h1 className="text-[90px] tracking-tighter font-bold leading-snug text-center">
          O jeito mais simples de colher a{" "}
          <span
            className={cn(
              "bg-[#009379] text-white py-3 xl:px-16 rounded-3xl 2xl:inline-block 2xl:px-10",
              cormorant.className
            )}
          >
            avaliação dos seus clientes
          </span>
        </h1>
        <p className="text-2xl">Faça sua empresa decolar!</p>
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
