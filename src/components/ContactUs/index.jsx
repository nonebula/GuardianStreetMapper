import React from 'react';

import styles from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.header}>Contact Us</h1>
        <p className={styles.paragraph}>Should you wish to contact us, you can reach us at hello@guardianstreetmapper.com</p>
      </div>
    );
};

export default ContactUs;