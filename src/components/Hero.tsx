import { Rocket } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
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
        <Button
          className={cn(
            buttonVariants({ variant: "default" }),
            "py-4 px-[50px] w-full max-w-[200px] h-[48px] bg-[#009379] font-semibold text-md"
          )}
        >
          <span className="mr-3">
            <Rocket />
          </span>{" "}
          Start now for free
        </Button>
      </div>
    </section>
  );
}
