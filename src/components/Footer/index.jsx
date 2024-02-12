import React from "react";
import PrivacyNotice from "../PrivacyNotice";
import TermsOfService from "../TermsOfService";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link to="/privacy">
          <button className={styles.footerButton}>Privacy Notice</button>
        </Link>
        <Link to="/terms">
          <button className={styles.footerButton}>Terms of Service</button>
        </Link>
        <p className={styles.copyright}>&copy; 2024 Guardian Street Mapper App</p>
      </div>
    </footer>
  );
}
export default Footer;
