import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const initEmailJS = () => {
  const publicKey = 'your_public_key';
  if (publicKey && publicKey !== 'your_public_key') {
    emailjs.init(publicKey);
  }
};

// Send email function
export const sendEmail = async (formData) => {
  const serviceId = 'your_service_id';
  const templateId = 'your_template_id';
  
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_email: 'shreepaintingservices@gmail.com',
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

// Initialize EmailJS when module loads
initEmailJS();