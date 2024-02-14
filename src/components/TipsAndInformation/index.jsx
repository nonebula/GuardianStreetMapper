import styles from "./TipsAndInformation.module.css";

const TipsAndInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Tips & Information</h1>
      <p className={styles.paragraph}>
        Welcome to the &quot;Tips & Information&quot; section of the Guardian
        Street Mapper App. This section provides valuable guidance on using the
        app effectively, contributing to the community safety, and understanding
        important information related to crime reporting.
      </p>
      <h2 className={styles.heading}>Reporting Guidelines</h2>
      <ol className={styles.paragraph}>
        When using the Guardian Street Mapper App, follow these best practices
        to enhance the accuracy and effectiveness of your incident reports:
        <li>
          <b>Location Accuracy:</b> Pinpoint the exact location of the incident
          on the map for precise reporting.
        </li>
        <li>
          <b>Detailed Descriptions:</b> Provide clear and concise details about
          the incident, including the type of crime, location, date, and time.
        </li>
        <li>
          <b>Media Attachments:</b> Whenever possible, include photos or videos
          related to the incident to provide additional context.
        </li>
        <li>
          <b>Witness Information:</b> If applicable, include information about
          any witnesses to the crime.
        </li>
        <li>
          <b>Contact Information:</b> Provide your contact information in case
          authorities need to follow up on the report.
        </li>
      </ol>
      <h2 className={styles.heading}>Safety Tips</h2>
      <ol className={styles.paragraph}>
        Help promote personal and community safety by following these general
        safety tips:
        <li>
          <b>Stay Informed:</b> Stay updated on the city and comunity crime
          trends and safety measures to better protect yourself and your
          community.
        </li>
        <li>
          <b>Report Suspicious Activity:</b> If you witness suspicious behavior,
          report it promptly through the app or contact local law enforcement.
        </li>
        <li>
          <b>Home Security:</b> Implement basic home security measures, such as
          ensuring proper lighting and secure locks.
        </li>
        <li>
          <b>Emergency Contacts:</b> Keep emergency contact numbers readily
          available for quick access.
        </li>
        <li>
          <b>Community Watch Programs:</b> Participate in or support community
          watch programs to collectively enhance community safety.
        </li>
      </ol>
      <h2 className={styles.heading}>Community Engagement</h2>
      <ol className={styles.paragraph}></ol>
      Contribute to a safer global community by actively engaging with the
      Guardian Street Mapper App:
      <li>
        <b>Spread Awareness:</b> Share information about the app with friends,
        family, and neighbors to encourage widespread usage.
      </li>
      <li>
        <b>Educational Initiatives:</b> Host or participate in events that
        educate the global community about crime prevention and the importance
        of reporting.
      </li>
      <li>
        <b>Collaborate with Authorities:</b> Work collaboratively with city and
        community law enforcement to address safety concerns and foster a sense
        of community security.
      </li>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <p className={styles.paragraph}></p>
      Visit our [FAQ page]() for answers to common questions about using the
      Guardian Street Mapper App.
      <h2 className={styles.heading}>Contact and Support</h2>
      <p className={styles.paragraph}></p>
      For additional assistance or inquiries, please contact our Guardian Street
      Mapper support team at support@guardianstreetmapperapp.com.
    </div>
  );
};

export default TipsAndInfo;
