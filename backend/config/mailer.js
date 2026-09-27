const nodemailer = require('nodemailer');

// Builds a transporter from whatever mail configuration is in .env.
// Swap the .env values to point this at Gmail, Outlook, Zoho, a custom
// domain mailbox, etc. — no code changes needed.
function buildTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(
      'Mail configuration is incomplete (SMTP_HOST / SMTP_USER / SMTP_PASS missing in .env). ' +
      'Contact form submissions will still be saved (if MongoDB is connected) but no email will be sent.'
    );
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: String(SMTP_SECURE) === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
}

module.exports = buildTransporter;
