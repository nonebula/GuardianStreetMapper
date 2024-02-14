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
    </div>
  );
};

export default TipsAndInfo;
