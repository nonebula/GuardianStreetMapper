import React from "react";
import logo from "./logo.png";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <Navbar bg="body-tertiary" expand="lg">
        <div className={styles.container}>
          <Navbar.Brand href="/">
            <img src={logo} alt="Application Logo" width="150" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navLinks}>
              <Nav.Link className={styles.navLink} href="/about">About</Nav.Link>
              <Nav.Link className={styles.navLink} href="/tips">Tips & Information</Nav.Link>
              <Nav.Link className={styles.navLink} href="/support">Support</Nav.Link>
              <Nav.Link className={styles.navLink} href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
