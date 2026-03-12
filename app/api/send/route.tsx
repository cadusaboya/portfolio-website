import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const sanitize = (str: string) =>
  str.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] || c)
  );

export async function POST(request: Request) {
  const { subject, body, name, email } = await request.json();

  // Validation
  if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
    return NextResponse.json({ error: 'Invalid name.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length === 0 || subject.length > 200) {
    return NextResponse.json({ error: 'Invalid subject.' }, { status: 400 });
  }
  if (!body || typeof body !== 'string' || body.trim().length === 0 || body.length > 5000) {
    return NextResponse.json({ error: 'Invalid message.' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'myportfoliowebsite@resend.dev',
      to: process.env.CONTACT_EMAIL || 'carlosepsaboya@gmail.com',
      subject: sanitize(subject),
      html: `<p><strong>From:</strong> ${sanitize(name)}</p>
             <p><strong>Email:</strong> ${sanitize(email)}</p>
             <p>${sanitize(body).replace(/\n/g, '<br>')}</p>`,
    });
    return NextResponse.json({ message: 'Email sent!' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
