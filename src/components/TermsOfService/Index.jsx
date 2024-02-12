import React from 'react';

import styles from "./TermsOfService.module.css"


function TermsOfService() {
  return (
<div className={styles.container}>
  <h2 className={styles.heading}>Terms of Service</h2>
      <p className={styles.paragraph}>
        These Terms of Service ("Terms") govern your use of Guardian Street Mapper crime reporting website [Your Website URL] and any related services, applications, or features offered by us. By accessing or using the Website or Services, you agree to be bound by these Terms.
      </p>
      <h3 className={styles.heading}>1. Acceptance of Terms</h3>
      <p className={styles.paragraph}>
        By accessing or using the Website or Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Website or Services.
      </p>
      <h3 className={styles.heading}>2. Use of Services</h3>
      <p className={styles.paragraph}>
        You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to:
      </p>
      <ul>
        <li>Violate any applicable laws, regulations, or third-party rights</li>
        <li>Use the Services in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Services</li>
        <li>Attempt to gain unauthorized access to any part of the Services or bypass any measures we may use to prevent or restrict access to the Services</li>
      </ul>
      <h3 className={styles.heading}>3. User Contributions</h3>
      <p className={styles.paragraph}>
        You may have the opportunity to submit content or information through the Services, including crime reports or incident details. By submitting such content or information, you grant us a non-exclusive, perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content or information in connection with the Services.
      </p>
      <h3 className={styles.heading}>4. Intellectual Property Rights</h3>
      <p className={styles.paragraph}>
        The Website, Services, and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by us or our licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <h3 className={styles.heading}>5. Limitation of Liability</h3>
      <p className={styles.paragraph}>
        In no event shall we, our affiliates, directors, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses, arising out of or relating to your use of or inability to use the Services.
      </p>
      <h3 className={styles.heading}>6. Governing Law</h3>
      <p className={styles.paragraph}>
        These Terms shall be governed by and construed in accordance with the laws of Greater London, without regard to its conflict of law provisions.
      </p>
      <h3 className={styles.heading}>7. Changes to Terms</h3>
      <p className={styles.paragraph}>
        We reserve the right to update or change these Terms at any time. Any changes will be effective immediately upon posting the updated Terms on the Website. Your continued use of the Website or Services after any such changes constitutes your acceptance of the new Terms.
      </p>
      <h3 className={styles.heading}>8. Contact Us</h3>
      <p className={styles.paragraph}>
        If you have any questions or concerns about these Terms, please contact us at [Your Contact Information].
      </p>
    </div>
  );
}

export default TermsOfService;