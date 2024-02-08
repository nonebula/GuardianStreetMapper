import React from "react";
import PrivacyNotice from "../PrivacyNotice";
import TermsOfService from "../TermsOfService";
import { Link } from "react-router-dom";

// import style from "./style.css"
function Footer() {
  return (
    <footer>
      <div className="footer-buttons">
        <Link to="/privacy">
          <button>Privacy Notice</button>
        </Link>
        <Link to="/terms">
          <button>Terms of Service</button>
        </Link>
        <p>&copy; 2024 Stolen Items Reporting App</p>
      </div>
    </footer>
  );
}
export default Footer;
