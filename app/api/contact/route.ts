import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter
const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000; // 24 hours
const MAX_REQUESTS = 2;
const ipMap = new Map<string, number[]>();

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    if (ip !== "unknown") {
      const now = Date.now();
      const timestamps = ipMap.get(ip) || [];
      const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
      
      if (recentTimestamps.length >= MAX_REQUESTS) {
        return NextResponse.json(
          { message: "Daily email limit reached (2/day). Please try again tomorrow." },
          { status: 429 }
        );
      }
      
      recentTimestamps.push(now);
      ipMap.set(ip, recentTimestamps);
    }

    const body = await request.json();
    const validated = contactSchema.parse(body);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RESEND_EMAIL_ID as string,
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
