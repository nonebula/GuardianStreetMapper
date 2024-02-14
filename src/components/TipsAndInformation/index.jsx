import React from "react";

import styles from "./TipsAndInformation.module.css"

const TipsAndInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Tips & Information</h1>
      <p className={styles.paragraph}>
      Welcome to the "Tips & Information" section of the Guardian Street Mapper App. This section provides valuable guidance on using the app effectively, contributing to the community safety, and understanding important information related to crime reporting.
      </p>

      <h2 className={styles.heading}>Reporting Guidelines</h2>
      <ol className={styles.paragraph}>
      When using the Guardian Street Mapper App, follow these best practices to enhance the accuracy and effectiveness of your incident reports:
      <li><b>Location Accuracy:</b> Pinpoint the exact location of the incident on the map for precise reporting.
        </li>

        <li><b>Detailed Descriptions:</b> Provide clear and concise details about the incident, including the type of crime, location, date, and time.
        </li>

        <li><b>Media Attachments:</b> Whenever possible, include photos or videos related to the incident to provide additional context.
        </li>

        <li><b>Witness Information:</b> If applicable, include information about any witnesses to the crime.
        </li>

        <li><b>Contact Information:</b> Provide your contact information in case authorities need to follow up on the report.
        </li>
      </ol>

      <h2 className={styles.heading}>Safety Tips</h2>
      <ol className={styles.paragraph}>
        Help promote personal and community safety by following these general safety tips:
        <li><b>Stay Informed:</b> Stay updated on the city and comunity crime trends and safety measures to better protect yourself and your community.
        </li>

        <li><b>Report Suspicious Activity:</b> If you witness suspicious behavior, report it promptly through the app or contact local law enforcement.
        </li>

        <li><b>Home Security:</b> Implement basic home security measures, such as ensuring proper lighting and secure locks.
        </li>

        <li><b>Emergency Contacts:</b> Keep emergency contact numbers readily available for quick access.
        </li>

        <li><b>Community Watch Programs:</b> Participate in or support community watch programs to collectively enhance community safety.
        </li>


      </ol>
    </div>
  );
};

export default TipsAndInfo;
