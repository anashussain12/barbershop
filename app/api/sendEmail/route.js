// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   // 1. Get all booking details from request
//   const {
//     firstName,
//     lastName,
//     email,
//     barber,
//     location,
//     phone,
//     service,
//     date,
//     time,
//     notes,
//     services // array of selected services
//   } = await request.json();

//   try {
//     // 2. Configure transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     // 3. Create email content with all booking details
//     const emailText = `
//       Hi ${firstName} ${lastName},

//       Your booking details:

//       Barber: ${barber}
//       Location: ${location}
//       Date: ${date}
//       Time: ${time}
//       Phone: ${phone}
//       Services: ${services.join(', ')}

//       ${notes ? `Notes: ${notes}` : ''}

//       Thank you for booking with us!
//     `;

//     const emailHtml = `
//       <div>
//         <h2>Hi ${firstName} ${lastName},</h2>
//         <p>Your booking details:</p>
//         <ul>
//           <li><strong>Barber:</strong> ${barber}</li>
//           <li><strong>Location:</strong> ${location}</li>
//           <li><strong>Date:</strong> ${date}</li>
//           <li><strong>Time:</strong> ${time}</li>
//           <li><strong>Phone:</strong> ${phone}</li>
//           <li><strong>Services:</strong> ${services.join(', ')}</li>
//           ${notes ? `<li><strong>Notes:</strong> ${notes}</li>` : ''}
//         </ul>
//         <p>Thank you for booking with us!</p>
//       </div>
//     `;

//     // 4. Send email
//     await transporter.sendMail({
//       from: `"Mr.BarberUnisexBeautySalon" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: 'Booking Confirmation',
//       text: emailText,
//       html: emailHtml, // HTML version for better formatting
//     });

//     // 5. Return success response
//     return new Response(
//       JSON.stringify({ message: 'Email sent successfully' }),
//       {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' }
//       }
//     );
//   } catch (error) {
//     console.error("Email error:", error);
//     return new Response(
//       JSON.stringify({ message: error.message }),
//       {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' }
//       }
//     );
//   }
// }

import nodemailer from "nodemailer";

export async function POST(request) {
  // 1. Get all booking details from request
  const {
    firstName,
    lastName,
    email,
    barber,
    location,
    phone,
    service,
    date,
    time,
    notes,
    services, // array of selected services
  } = await request.json();

  try {
    // 2. Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // 3. Create email content for customer
    const customerEmailText = `
      Hi ${firstName} ${lastName},
      
      Your booking details:
      
      Barber: ${barber}
      Location: ${location}
      Date: ${date}
      Time: ${time}
      Phone: ${phone}
      Services: ${services.join(", ")}
      
      ${notes ? `Notes: ${notes}` : ""}
      
      Thank you for booking with us!
    `;

    const customerEmailHtml = `
      <div>
        <h2>Hi ${firstName} ${lastName},</h2>
        <p>Your booking details:</p>
        <ul>
          <li><strong>Barber:</strong> ${barber}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Services:</strong> ${services.join(", ")}</li>
          ${notes ? `<li><strong>Notes:</strong> ${notes}</li>` : ""}
        </ul>
        <p>Thank you for booking with us!</p>
      </div>
    `;

    // 4. Create email content for admin
    const adminEmailText = `
      New Booking Received:
      
      Customer: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      
      Booking Details:
      Barber: ${barber}
      Location: ${location}
      Date: ${date}
      Time: ${time}
      Services: ${services.join(", ")}
      
      ${notes ? `Customer Notes: ${notes}` : "No additional notes"}
    `;

    const adminEmailHtml = `
      <div>
        <h2>New Booking Received</h2>
        <h3>Customer Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Barber:</strong> ${barber}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Services:</strong> ${services.join(", ")}</li>
          ${notes ? `<li><strong>Notes:</strong> ${notes}</li>` : ""}
        </ul>
      </div>
    `;

    // 5. Send email to customer
    await transporter.sendMail({
      from: `"Mr.BarberUnisexBeautySalon" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Booking Confirmation",
      text: customerEmailText,
      html: customerEmailHtml,
    });

    // 6. Send email to admin
    await transporter.sendMail({
      from: `"Mr.BarberUnisexBeautySalon" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // Make sure to set this in your environment variables
      subject: `New Booking: ${firstName} ${lastName} - ${date} at ${time}`,
      text: adminEmailText,
      html: adminEmailHtml,
    });

    // 7. Return success response
    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
