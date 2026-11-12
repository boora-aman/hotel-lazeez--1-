import nodemailer from "nodemailer"

const esc = (v: unknown) =>
  String(v ?? "")
    .slice(0, 2000)
    .replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

export async function sendEnquiry(subject: string, fields: Record<string, unknown>, replyTo?: string) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error("GMAIL_USER / GMAIL_APP_PASSWORD not configured")
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  })
  const rows = Object.entries(fields)
    .map(([k, v]) => `<p><strong>${esc(k)}:</strong> ${esc(v) || "-"}</p>`)
    .join("")
  const text = Object.entries(fields)
    .map(([k, v]) => `${k}: ${String(v ?? "-").slice(0, 2000)}`)
    .join("\n")
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.BOOKING_EMAIL_TO || process.env.GMAIL_USER,
    subject: subject.replace(/[\r\n]/g, " ").slice(0, 150),
    text,
    html: `<h2>${esc(subject)}</h2>${rows}`,
    replyTo: typeof replyTo === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo) ? replyTo : undefined,
  })
}
