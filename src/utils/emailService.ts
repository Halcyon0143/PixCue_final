
import { init, send } from 'emailjs-com';

// Initialize EmailJS with user ID
export const initEmailService = (userId: string) => {
  init(userId);
};

// Send email using EmailJS
export const sendContactEmail = async (
  serviceId: string,
  templateId: string,
  params: Record<string, unknown>,
  userId: string
) => {
  try {
    const response = await send(
      serviceId,
      templateId,
      params,
      userId
    );
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
