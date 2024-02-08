import React from 'react';
import PrivacyNotice from '../PrivacyNotice';
import TermsOfService from '../TermsOfService';

// import style from "./style.css"

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Stolen Items Reporting App</p>
      <div className="footer-buttons">
        <button onClick={() => window.alert('<PrivacyNotice />')}>Privacy Notice</button>
        <button onClick={() => window.alert('Terms of Service')}>Terms of Service</button>
      </div>
    </footer>
  );
}

export default Footer;