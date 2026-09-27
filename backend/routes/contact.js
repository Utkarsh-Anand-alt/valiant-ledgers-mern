const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const buildTransporter = require('../config/mailer');

router.post('/', async (req, res) => {
  const { name, email, phone, entity, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Name, email, and message are required.' });
  }

  let saved = null;
  try {
    saved = await Contact.create({ name, email, phone, entity, message });
  } catch (err) {
    console.error('Could not save contact submission to MongoDB:', err.message);
    // Continue — we still try to send the email even if the DB write failed.
  }

  const transporter = buildTransporter();
  let emailSent = false;

  if (transporter) {
    try {
      const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;
      const fromName = process.env.FROM_NAME || 'Website Contact Form';

      await transporter.sendMail({
        from: `"${fromName}" <${process.env.SMTP_USER}>`,
        to: toEmail,
        replyTo: email,
        subject: `New Connection Request from ${name}`,
        text:
          `You have a new connection/proposal request from the website.\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone || 'N/A'}\n` +
          `Entity: ${entity || 'N/A'}\n\n` +
          `Message:\n${message}\n`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width:560px; margin:0 auto;">
            <h2 style="color:#0f1e36;">New Connection Request</h2>
            <table style="width:100%; border-collapse: collapse; font-size:14px;">
              <tr><td style="padding:6px 0;"><strong>Name</strong></td><td>${name}</td></tr>
              <tr><td style="padding:6px 0;"><strong>Email</strong></td><td>${email}</td></tr>
              <tr><td style="padding:6px 0;"><strong>Phone</strong></td><td>${phone || 'N/A'}</td></tr>
              <tr><td style="padding:6px 0;"><strong>Entity</strong></td><td>${entity || 'N/A'}</td></tr>
            </table>
            <p style="margin-top:16px;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background:#f5f5f5; padding:12px; border-radius:8px;">${message}</p>
          </div>
        `,
      });

      emailSent = true;

      if (saved) {
        saved.emailSent = true;
        await saved.save().catch(() => {});
      }
    } catch (err) {
      console.error('Failed to send connection-request email:', err.message);
    }
  }

  return res.status(200).json({
    ok: true,
    savedToDatabase: Boolean(saved),
    emailSent,
    message: 'Request received. Thank you for reaching out — we will respond within 24 hours.',
  });
});

module.exports = router;
