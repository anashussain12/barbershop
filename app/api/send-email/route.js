// // app/api/send-email/route.js
// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { email, firstName, barber, service, date, location } = await req.json();

//   // Create transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,       // Use env vars for security
//       pass: process.env.GMAIL_PASSWORD,   // Your Gmail App Password
//     },
//   });

//   const mailOptions = {
//     from: 'Your Barber Shop <hussainanas68@gmail.com>',
//     to: email,
//     subject: `Your Booking with ${barber} is Completed`,
//     html: `
//       <h2>Booking Completed</h2>
//       <p>Hello ${firstName},</p>
//       <p>Your booking with ${barber} has been marked as completed.</p>
//       <ul>
//         <li><strong>Service:</strong> ${service}</li>
//         <li><strong>Barber:</strong> ${barber}</li>
//         <li><strong>Date:</strong> ${new Date(date).toLocaleString()}</li>
//         <li><strong>Location:</strong> ${location}</li>
//       </ul>
//       <p>Thank you for choosing us!</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error('Email sending error:', error);
//     return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
//   }
// }
