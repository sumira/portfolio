import Mailgun from 'mailgun.js';
import formData from 'form-data';

if (!process.env.MAILGUN_API_KEY) {
  throw new Error('MAILGUN_API_KEY is not defined');
}

if (!process.env.MAILGUN_DOMAIN) {
  throw new Error('MAILGUN_DOMAIN is not defined');
}

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY
});

export async function POST(req: Request) {
  try {
    const {email, message } = await req.json();

    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `${email} <${process.env.MAILGUN_SENDER_EMAIL}>`,
      to: [process.env.RECIPIENT_EMAIL!],
      subject: `New Contact from ${email}`,
      text: `
        Email: ${email}
        Message: ${message}
      `
    });

    return new Response(JSON.stringify({ success: true, messageId: response.id }), { 
      status: 200 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { 
      status: 500 
    });
  }
}