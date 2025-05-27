import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // Set proper headers first
    res.setHeader("Content-Type", "application/json");

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        // Verify environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            throw new Error("Email credentials not configured in server environment");
        }

        const { to, bookingDetails } = req.body;

        // Input validation
        if (!to || !bookingDetails || !bookingDetails.date || !bookingDetails.barber || !bookingDetails.services) {
            throw new Error("Missing or invalid required fields: to or bookingDetails");
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"MR.BARBER UNISEX SALON" <${process.env.EMAIL_USER}>`,
            to,
            subject: `Booking Confirmation - ${bookingDetails.date}`,
            html: `<p>Your booking with ${bookingDetails.barber} on ${bookingDetails.date} is confirmed!</p>
                   <p>Services: ${bookingDetails.services}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Email send error:", error.stack);
        const errorMessage = error.response ? "Failed to send email. Please try again later." : error.message;
        return res.status(500).json({
            error: errorMessage,
            details: process.env.NODE_ENV === "development" ? error.stack : undefined,
        });
    }
}
