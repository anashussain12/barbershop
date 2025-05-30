import { initEmailJS, sendEmail } from './service';
import { TEMPLATES } from './template';

// Initialize on import (runs once)
initEmailJS();

const sendBookingCompletedEmail = async (booking) => {
  const template = TEMPLATES.BOOKING_COMPLETED;
  return sendEmail(template.id, template.params(booking));
};

export { sendBookingCompletedEmail };
// Export other email functions as needed