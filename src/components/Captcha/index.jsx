import React, { useEffect } from "react";

import styles from "./Captcha.module.css";
// v2 only - import ReCAPTCHA from 'react-google-recaptcha';

// reCAPTCHA should be added and attached to submission of a theft and/or incident.
// Site key = 6Lfx9GspAAAAAKlMVg6QmlZakk_MqNqt-UAgbTd-
// Secret key = 6Lfx9GspAAAAAOKwj0buS33iXzGCtRESPcDKqf0K

// v3
const Captcha = () => {
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

  const handleCaptchaChange = () => {
    console.log("CAPTCHA verified");
  };

  const executeCaptcha = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6Lfx9GspAAAAAKlMVg6QmlZakk_MqNqt-UAgbTd-", {
          action: "submit",
        })
        .then(handleCaptchaChange);
    });
  };

  return (
    <div>
      <button onClick={executeCaptcha}>Submit Incident</button>
    </div>
  );
};

// v2 version
// const Captcha = () => {
//     const handleCaptchaChange = (value) => {
//         console.log("CAPTCHA value:", value);
//     };

//     return (
//         <div>
//           <h1>Captcha Verification</h1>
//           <ReCAPTCHA
//             sitekey="6Lfx9GspAAAAAKlMVg6QmlZakk_MqNqt-UAgbTd-"
//             onChange={handleCaptchaChange}
//             />
//             </div>
//     );
// };

export default Captcha;
