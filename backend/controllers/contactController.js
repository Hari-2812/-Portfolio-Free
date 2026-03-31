import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function createContactMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const contact = await Contact.create({ name, email, message });

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail({
        from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Portfolio Inquiry from ${name}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Received:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
        `,
      });
    }

    return res.status(201).json({ message: 'Message sent successfully!', contact });
  } catch (error) {
    return res.status(500).json({ message: 'Server error while sending message.', error: error.message });
  }
}
