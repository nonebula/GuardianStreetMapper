import React from 'react';
// import style from "./style.css"

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Stolen Items Reporting App</p>
      <div className="footer-buttons">
        <button onClick={() => window.alert('Privacy Notice')}>Privacy Notice</button>
        <button onClick={() => window.alert('Terms of Service')}>Terms of Service</button>
      </div>
    </footer>
  );
}

export default Footer;