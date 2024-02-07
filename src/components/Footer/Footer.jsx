import React from 'react';
<<<<<<< HEAD
// import styles from "./module.css"
=======
import styles from "./Footer.module.css"
>>>>>>> 986c9da4bc1f34d259a2a493074897ed709a11e6

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