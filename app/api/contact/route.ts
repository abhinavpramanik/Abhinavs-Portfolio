import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // TODO: Integrate Resend for email delivery
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio Contact <onboarding@resend.dev>",
    //   to: "your-email@gmail.com",
    //   subject: `New message from ${validated.name}`,
    //   text: `Name: ${validated.name}\nEmail: ${validated.email}\nMessage: ${validated.message}`,
    // });

    // Stub: log and return success
    console.log("Contact form submission:", validated);

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
