"use client";

import { MailMinus } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Subscribe() {
  const schema = z.object({
    emailAddress: z.string().email(),
  });

  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (d) =>
    console.log(d);

  return (
    <section className="bg-[#E5F4F2] h-[311px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-[16px]">
        <h3 className="text-[38px] font-bold -tracking-tight">
          Subscribe and Get 25% Off
        </h3>
        <p>
          Get weekly update about our product on your email, no spam guaranteed
          we promise ✌️
        </p>
        <form
          className="flex w-full gap-2 mt-10 relative justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("emailAddress")}
            placeholder="Enter your email here"
            className="h-[85px] max-w-[465px] w-full placeholder:text-xl py-4 px-5 rounded-[20px] outline-none"
          />
          <button
            type="submit"
            className="absolute end-10 bottom-0 h-[85px] w-full max-w-[206px] text-lg bg-[#009379] text-white font-semibold flex items-center justify-center rounded-[20px] py-4 px-[50px]"
          >
            <MailMinus className="mr-2" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
