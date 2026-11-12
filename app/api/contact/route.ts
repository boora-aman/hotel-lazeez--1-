import { NextResponse } from "next/server"
import { sendEnquiry } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const d = await request.json()
    if (!d.name || !d.phone || !d.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    await sendEnquiry(
      `Website enquiry: ${d.subject || "General"} – ${d.name}`,
      { Name: d.name, Phone: d.phone, Email: d.email, Subject: d.subject, Message: d.message },
      d.email,
    )
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
