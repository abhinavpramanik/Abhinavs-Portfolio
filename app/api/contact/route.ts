import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "abhinavatcode@gmail.com",
      subject: `New message from ${validated.name}`,
      text: `Name: ${validated.name}\nEmail: ${validated.email}\nMessage: ${validated.message}`,
    });

    console.log("Contact form submission sent via Resend:", validated);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid form data" },
      { status: 400 }
    );
  }
}
