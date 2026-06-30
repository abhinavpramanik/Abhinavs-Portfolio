import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter to store IP requests
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
    
    // Rate limit configuration: 2 requests per day (24 hours)
    const WINDOW_MS = 24 * 60 * 60 * 1000;
    const MAX_REQUESTS = 2;

    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (record) {
      if (now - record.lastReset > WINDOW_MS) {
        // Reset the window if 24 hours have passed
        rateLimitMap.set(ip, { count: 1, lastReset: now });
      } else if (record.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { message: "Rate limit exceeded. You can only send 2 messages per day." },
          { status: 429 }
        );
      } else {
        record.count += 1;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const body = await request.json();
    const validated = contactSchema.parse(body);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "abhinavatcode@gmail.com", // suggested to put this in ENV
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
