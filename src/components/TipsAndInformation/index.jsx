import React from "react";

import styles from "./TipsAndInformation.module.css"

const TipsAndInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Tips & Information</h1>
      <p className={styles.paragraph}>iPhone: Turn on 'Stolen Device Protection'</p>
      <h2 className={styles.heading}>If you've been stolen from, follow these steps now:</h2>
      <ol className={styles.numberedList}>
        <li className={styles.numberedItem}>
          iPhone Users - Report device stolen through your AppleID, put into
          lost mode.
        </li>
        <li className={styles.numberedItem}>Secure all sensitive information, passwords and banks.</li>
        <li className={styles.numberedItem}>Call the Police</li>
        <li className={styles.numberedItem}>Deactivate social media and contact friends and family</li>
        <li className={styles.numberedItem}>Contact credit reference agencies</li>
      </ol>
    </div>
  );
};

export default TipsAndInfo;
