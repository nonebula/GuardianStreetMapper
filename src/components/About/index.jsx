import React from "react";

import styles from "./About.module.css";


const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About</h1>
      <p className={styles.paragraph}>
      Welcome to Guardian Street Mapper App, a dedicated platform for empowering communities through vigilant crime reporting and fostering a safer environment. Our mission is to provide a user-friendly, efficient, and secure way for individuals to report and stay informed about criminal activities within their communities.{" "}
      </p>
      <h2 className={styles.header}>Our Vision</h2>
      <p className={styles.paragraph}>
      At the core of our vision is the belief that everyone has the right to live in a safe and secure community. We aim to facilitate a collective effort to combat crime by bridging the gap between citizens and law enforcement. Through this app, we empower individuals to contribute to the well-being of their communities and create a positive impact on public safety.
      </p>
      <h3 className={styles.header}>Key Features</h3>
      <ol className={styles.paragraph}>
      <li><b>User-Friendly Interface:</b> Our app offers an intuitive and easy-to-navigate interface, ensuring that users can quickly report incidents and access relevant information with minimal effort.
</li>

<li><b> Anonymous Reporting:</b> We understand the importance of privacy and security. Users can report incidents anonymously, providing a safe space for individuals who may fear reprisals.
</li>

<li><b> Real-Time Incident Updates:</b> Stay informed about incidents in your area with real-time updates. Our app provides timely notifications, ensuring that users are aware of the latest developments.
</li>

<li><b>Community Engagement:</b> Foster a sense of community by connecting with other users. Share insights, tips, and support within our platform, building a network of empowered and informed individuals.
</li>

<li><b>Emergency Services Integration:</b> In case of emergencies, our app seamlessly integrates with emergency services, enabling a rapid and coordinated response to critical situations.
</li>
      </ol>
    </div>
    
  );
};

export default ContactUs;
