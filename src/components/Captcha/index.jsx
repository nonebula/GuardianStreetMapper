import { useEffect, useState } from "react";

import styles from "./Captcha.module.css";

const Captcha = () => {
  const [captchaToken, setCaptchaToken] = useState('');

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6Lfx9GspAAAAAKlMVg6QmlZakk_MqNqt-UAgbTd-"; 
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    console.log(captchaToken);
  };

  const executeCaptcha = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6Lfx9GspAAAAAKlMVg6QmlZakk_MqNqt-UAgbTd-", { action: "submit" }) 
        .then(handleCaptchaChange);
    });
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post('/verify-recaptcha', { token: captchaToken });
  //     const { success } = response.data;
  //     if (success) {
  //       console.log('reCAPTCHA verified, submitting form...');
  //       triggerFormSubmission(); 
  //     } else {
  //       console.log('reCAPTCHA verification failed');
  //     }
  //   } catch (error) {
  //     console.error('Error verifying reCAPTCHA:', error);
  //   }
  // };

  return (
    <div>
      <button className={styles.submitButton} onClick={executeCaptcha}>Submit Incident</button>
    </div>
  );
};

export default Captcha;