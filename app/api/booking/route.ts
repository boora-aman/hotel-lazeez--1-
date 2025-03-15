import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.checkIn || !data.checkOut || !data.roomType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Format email content
    const htmlContent = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Check-in Date:</strong> ${data.checkIn}</p>
      <p><strong>Check-out Date:</strong> ${data.checkOut}</p>
      <p><strong>Number of Guests:</strong> ${data.guests}</p>
      <p><strong>Room Type:</strong> ${data.roomType}</p>
      <p><strong>Special Requests:</strong> ${data.specialRequests || "None"}</p>
    `

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `Booking Request: ${data.roomType}`,
      text: `New booking request from ${data.name}`,
      html: htmlContent,
      replyTo: data.email, // Set reply-to as the sender's email
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Booking form error:", error)
    return NextResponse.json({ error: "Failed to process booking request" }, { status: 500 })
  }
}

