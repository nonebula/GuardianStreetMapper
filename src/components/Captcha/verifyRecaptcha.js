const axios = require('axios');

const verifyRecaptcha = async (token) => {
  const secretKey = '6Lfx9GspAAAAAOKwj0buS33iXzGCtRESPcDKqf0K';
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;
  const data = {
    secret: secretKey,
    response: token
  };

  try {
    const response = await axios.post(verificationUrl, data);
    return response.data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
};

module.exports = verifyRecaptcha;