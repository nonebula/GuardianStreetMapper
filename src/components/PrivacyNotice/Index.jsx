
import styles from './Privacy.module.css'

function PrivacyNotice() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Privacy Notice</h2>
      <p className={styles.paragraph}>
        This Privacy Notice explains how Guardian Street Mapper collects, uses, shares, and protects information obtained from users of our website [Your Website URL] and any related services, applications, or features offered by us.
      </p>
      <h3 className={styles.header}>Information We Collect</h3>
      <p className={styles.paragraph}>
        <strong>Location Information:</strong> When you interact with our Website and use our Services to input the location of a crime incident onto a map, we may collect location information such as GPS coordinates or address details.
      </p>
      <p className={styles.paragraph}>
        <strong>Crime Incident Details:</strong> In addition to location information, we may collect details of the crime incident that you input, including the type of crime, date and time of occurrence, description of the incident, and any other relevant information provided by you.
      </p>
      <h3 className={styles.header}>How We Use Your Information</h3>
      <p className={styles.paragraph}>
        We may use the information we collect from you for the following purposes:
      </p>
      <ul className={styles.list}>
        <li>Providing and improving our Services</li>
        <li>Displaying crime incident data on the map for public awareness and safety purposes</li>
        <li>Analyzing crime trends and patterns to enhance crime prevention efforts</li>
        <li>Communicating with you regarding updates, alerts, or important information related to crime incidents or our Services</li>
      </ul>
      <h3 className={styles.header}>Information Sharing</h3>
      <p className={styles.paragraph}>
        We may share your information in the following circumstances:
      </p>
      <ul className={styles.list}>
        <li>With law enforcement agencies or authorities as required by law or to assist in investigations related to reported crime incidents</li>
        <li>With third-party service providers who assist us in operating our Website and providing our Services</li>
        <li>With your consent or as otherwise permitted or required by applicable law</li>
      </ul>
      <h3 className={styles.header}>Data Security</h3>
      <p className={styles.paragraph}>
        We take appropriate measures to protect the information we collect from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no security measures are completely foolproof, and we cannot guarantee the security of your information.
      </p>
      <h3 className={styles.header}>Your Choices</h3>
      <p className={styles.paragraph}>
        You have the option to voluntarily input information about crime incidents onto our Website. However, please consider the sensitivity of the information you provide and ensure that it does not include personal or identifying information of individuals involved in the crime incident, unless necessary and with their consent.
      </p>
      <h3 className={styles.header}>Children's Privacy</h3>
      <p className={styles.paragraph}>
        Our Website and Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us to request deletion.
      </p>
      <h3 className={styles.header}>Changes to this Privacy Notice</h3>
      <p className={styles.paragraph}>
        We reserve the right to update or change this Privacy Notice at any time. Any changes will be effective immediately upon posting the updated Privacy Notice on our Website.
      </p>
      <h3 className={styles.header}>Contact Us</h3>
      <p className={styles.paragraph}>
        If you have any questions or concerns about this Privacy Notice or our privacy practices, please contact us at [Your Contact Information].
      </p>
    </div>
  );
}

export default PrivacyNotice;