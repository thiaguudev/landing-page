import { Rocket } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="mt-[120px]">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-[90px] tracking-tighter font-bold leading-none text-center">
          Build landing pages with typeform embedded
        </h1>
        <p className="text-[28px]">
          With Anima, you can embed typeform in just a few steps.
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
