import React from "react";

import styles from "./About.module.css";


const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About</h1>
      <p className={styles.paragraph}>
        Welcome to Guardian Street Mapper. As you are probably aware, thefts are
        sky-high and happening at impossible rates in the current day. Theft is
        a violating and hurtful experience. As someone who has been robbed in
        the past, the repurcussions can last a long time. The sole mission of
        Guardian Street Mapper is to map any thefts that take place to raise
        awareness. This information is readily available to citizens and the
        police.{" "}
      </p>
    </div>
  );
};

export default ContactUs;
