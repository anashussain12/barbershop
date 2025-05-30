import emailjs from '@emailjs/browser';

// Initialize EmailJS (browser-only)
const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
  }
};

// Generic email sender
const sendEmail = async (templateId, templateParams) => {
  if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
    throw new Error('EmailJS Service ID not configured');
  }

  try {
    return await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId,
      templateParams
    );
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send email');
  }
};

export { initEmailJS, sendEmail };