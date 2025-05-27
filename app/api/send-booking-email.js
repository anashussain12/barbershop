import { Resend } from 'resend';
import BookingConfirmation from '../../components/emails/BookingConfirmation';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const emailHtml = render(
      <BookingConfirmation bookingDetails={req.body.bookingDetails} />
    );

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM,
      to: req.body.to,
      subject: `Booking Confirmed - ${req.body.bookingDetails.date}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error });
    }

    console.log('Email sent:', data);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message });
  }
}