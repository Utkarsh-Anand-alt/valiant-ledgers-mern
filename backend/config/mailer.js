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

  const isGmail = SMTP_HOST.includes('gmail');

  const baseConfig = isGmail
    ? {
        // Nodemailer's built-in "service" shorthand resolves the correct
        // host/port/TLS settings for Gmail internally — more reliable on
        // cloud hosts (Render, Railway, etc.) than a manual host/port config.
        service: 'gmail',
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      }
    : {
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 465,
        secure: String(SMTP_SECURE) === 'true',
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      };

  return nodemailer.createTransport({
    ...baseConfig,
    // Fail fast instead of hanging for minutes if the host/port is blocked
    // or misconfigured on the hosting platform.
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
}

module.exports = buildTransporter;