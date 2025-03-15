import nodemailer from "nodemailer"

// Create a transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use an app password, not your regular password
  },
})

export interface EmailData {
  to?: string
  subject: string
  text: string
  html: string
}

export async function sendEmail(data: EmailData) {
  const { to, subject, text, html } = data

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: to || process.env.GMAIL_USER, // If no recipient is specified, send to yourself
    subject,
    text,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

// Helper function to format booking data into HTML
export function formatBookingEmail(data: any) {
  return `
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
}

// Helper function to format contact form data into HTML
export function formatContactEmail(data: any) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `
}

