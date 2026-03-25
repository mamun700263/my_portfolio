import { NextRequest, NextResponse } from "next/server";
import { getCalendar } from "@/lib/google";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, date, slot, message } = body;
  if (!name || !email || !date || !slot) {
    console.log(body);
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    const calendar = await getCalendar();

    const startTime = new Date(`${date}T${slot}:00`);
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

    await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: {
        summary: `Meeting with ${name}`,
        description: message
          ? `Message from ${name}:\n\n${message}`
          : `Meeting booked via portfolio.`,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "Europe/London",
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "Europe/London",
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 60 },
            { method: "popup", minutes: 15 },
          ],
        },
      },
    });

    // meet.google.com/new instantly creates a fresh Meet room when clicked
    const meetLink = "https://meet.google.com/new";

    const readableDate = startTime.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const readableTime = startTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Confirmation to client
    await transporter.sendMail({
      from: `"Abdullah" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Meeting confirmed — ${readableDate}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #111;">
          <h2 style="font-size: 20px; margin-bottom: 8px;">Your meeting is confirmed</h2>
          <p>Hi ${name},</p>
          <p>Thanks for booking — looking forward to speaking with you.</p>
          <table style="border-collapse: collapse; width: 100%; margin: 24px 0;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px;">Date</td>
              <td style="padding: 8px 0; font-weight: 500;">${readableDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Time</td>
              <td style="padding: 8px 0; font-weight: 500;">${readableTime} (London)</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Duration</td>
              <td style="padding: 8px 0; font-weight: 500;">30 minutes</td>
            </tr>
          </table>
          <a href="${meetLink}" style="
            display: inline-block;
            background: #1a73e8;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
          ">Join Google Meet</a>
          <p style="color: #666; font-size: 14px; margin-top: 24px;">
            Need to reschedule? Just reply to this email.
          </p>
        </div>
      `,
    });

    // Notification to yourself
    await transporter.sendMail({
      from: `"Portfolio Booking" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New booking: ${name} — ${readableDate} at ${readableTime}`,
      html: `
        <p><strong>${name}</strong> (${email}) has booked a meeting.</p>
        <p><strong>Date:</strong> ${readableDate} at ${readableTime}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      `,
    });

    return NextResponse.json({ success: true, meetLink });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json({ error: "Failed to create booking." }, { status: 500 });
  }
}