import { NextResponse } from "next/server";

import { resend } from "@/lib/resend";
import KoalaWelcomeEmail from "@/emails";

export async function POST() {
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tthiaguinho749@gmail.com",
    subject: "hello world",
    react: KoalaWelcomeEmail({ userFirstname: "John Doe" }),
  });

  console.log(response);

  return NextResponse.json({ status: "Ok" });
}
