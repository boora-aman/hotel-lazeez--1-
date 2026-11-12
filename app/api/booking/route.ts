import { NextResponse } from "next/server"
import { sendEnquiry } from "@/lib/email"
import { rooms } from "@/lib/site"

export async function POST(request: Request) {
  try {
    const d = await request.json()
    if (!d.name || !d.phone || !d.checkIn || !d.checkOut) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    const room = rooms.find((r) => r.slug === d.roomType)
    await sendEnquiry(
      `Booking request: ${room?.name ?? "Room"} – ${d.name}`,
      {
        Name: d.name,
        Phone: d.phone,
        Email: d.email,
        "Check-in": d.checkIn,
        "Check-out": d.checkOut,
        Room: room ? `${room.name} (₹${room.price}/night)` : d.roomType,
        Guests: d.guests,
        "Special requests": d.message,
      },
      d.email,
    )
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Booking form error:", error)
    return NextResponse.json({ error: "Failed to process booking request" }, { status: 500 })
  }
}
