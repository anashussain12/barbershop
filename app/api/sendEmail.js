import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { 
    firstName, 
    lastName, 
    email, 
    phone, 
    service,
    date, 
    time, 
    notes,
    barber,
    location,
    servicesWithPrices
  } = req.body;

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format services with prices
    const servicesList = servicesWithPrices.map(service => 
      `${service.name} - ${service.price}${service.tax || ''}`
    ).join('\n');

    // Email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Booking Confirmation',
      text: `Hi ${firstName} ${lastName},\n\nThank you for booking with us!\n\nBooking Details:\n
      Barber: ${barber}\n
      Location: ${location}\n
      Date: ${date}\n
      Time: ${time}\n
      Services:\n${servicesList}\n
      Notes: ${notes || 'None'}\n\n
      We'll see you soon!\n\nBest regards,\nThe Barber Team`,
    };


    // Send emails
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}