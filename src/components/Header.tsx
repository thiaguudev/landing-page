import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="Logotipo" width={179} height={32} />
        </div>
        <nav>
          <ul className="flex gap-5 items-center">
            <li>
              <a
                href="#contact"
                className="text-base text-[#009379] font-semibold"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#get-a-demo"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "py-4 px-[50px] w-full max-w-[221px] h-[48px] bg-[#E5F4F2] text-[#009379] text-md"
                )}
              >
                Comece gratuitamente
              </a>
            </li>
            <li>
              <a
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "py-4 px-[50px] w-full max-w-[221px] h-[48px] bg-[#009379] text-md font-semibold"
                )}
              >
                Entrar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
