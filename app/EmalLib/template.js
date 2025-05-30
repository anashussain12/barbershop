export const TEMPLATES = {
  BOOKING_COMPLETED: {
    id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_default_template_id',
    params: (booking) => ({
      to_name: `${booking.firstName} ${booking.lastName}`,
      to_email: booking.email,
      service_name: booking.service,
      barber_name: booking.barber,
      booking_date: new Date(booking.date).toLocaleDateString(),
      location: booking.location,
      message: 'Your booking has been marked as completed!',
    }),
  },
  // Add more templates as needed
  PASSWORD_RESET: {
    id: 'password_reset_template_id',
    params: (user) => ({ /* ... */ }),
  }
};