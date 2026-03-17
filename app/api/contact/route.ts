import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // optional: some servers require this
  },
});

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const { name, email, message, subject, company } = await req.json();

    // reject if honeypot filled
    if (company) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

  if (!name || !email || !message || !subject)
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });

  if (!isValidEmail(email)) return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
  if (message.length > 2000) return NextResponse.json({ error: 'Message too long.' }, { status: 400 });
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New message: ${subject} | From ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    console.log('Email sent successfully!');
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (err: any) {
    console.error('SMTP send error:', err);
    return NextResponse.json({ error: err.message || 'Email failed' }, { status: 500 });
  }
}