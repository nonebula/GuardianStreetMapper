import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Captcha from "../Captcha";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ReportForm.module.css";

const ReportForm = () => {
  const [stolenItem, setStolenItem] = useState("");
  const [stolenTime, setStolenTime] = useState("");
  const [theftDescription, setTheftDescription] = useState("");
  const [location, setLocation] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      console.log("Executing Captcha...");
      executeCaptcha();
      return;
    }

    const formData = { stolenItem, stolenTime, theftDescription, location };
    console.log("Form submitted:", formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    setShowNotification(true);
    setFormSubmitted(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const executeCaptcha = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6Lfx9GspAAAAAKlMVg6QmlZakk_MqNqt-UAgbTd-", {
          action: "submit",
        })
        .then((token) => {
          if (token) {
            console.log("CAPTCHA verified");
            setCaptchaVerified(true);
          } else {
            console.log("CAPTCHA verification failed");
            setCaptchaVerified(false);
          }
        });
    });
  };

  return (
    <div className={styles.ReportForm}>
      {!formSubmitted && (
        <>
          <h2 className={styles.heading}>Stolen Item Report</h2>
          <Form className={styles.formItems} onSubmit={handleSubmit}>
            <Form.Group className={styles.formGroup} controlId="stolenItem">
              <Form.Label className={styles.formLabels}>
                What has been stolen?
              </Form.Label>
              <Form.Control
                className={styles.formInput}
                type="text"
                placeholder="Enter stolen item"
                value={stolenItem}
                onChange={(e) => setStolenItem(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={styles.formGroup} controlId="stolenTime">
              <Form.Label className={styles.formLabels}>
                When was it stolen?
              </Form.Label>
              <Form.Control
                className={styles.formInput}
                type="date"
                placeholder="Enter date and time of theft"
                value={stolenTime}
                onChange={(e) => setStolenTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className={styles.formGroup} controlId="location">
              <Form.Label className={styles.formLabels}>
                Location of theft:
              </Form.Label>
              <Form.Control
                className={styles.formInput}
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className={styles.formGroup}
              controlId="theftDescription"
            >
              <Form.Label className={styles.formLabels}>
                Brief description of the theft:
              </Form.Label>
              <Form.Control
                className={styles.formInput}
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={theftDescription}
                onChange={(e) => setTheftDescription(e.target.value)}
              />
            </Form.Group>
            {!captchaVerified && (
              <Captcha setCaptchaVerified={setCaptchaVerified} />
            )}
            {captchaVerified && (
              <Button
                className={styles.submitButton}
                variant="primary"
                type="submit"
              >
                Confirm Submission
              </Button>
            )}
          </Form>
        </>
      )}
      {formSubmitted && (
        <div className={styles.thankYouMessage}>
          <h3>Thank you for submitting!</h3>
          <p>
            Your report has been added to our map. If you have not already,
            please visit our Tips and Information and Support pages for more
            info on what to do next!
          </p>
        </div>
      )}
      {showNotification && (
        <div className={styles.notification}>Form submitted!</div>
      )}
    </div>
  );
};

export default ReportForm;
