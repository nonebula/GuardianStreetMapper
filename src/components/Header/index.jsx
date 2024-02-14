import logo from "./logo.png";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.heading}>
      <Navbar className={styles.navbar} expand="lg">
          <Navbar.Brand className={styles.logo} href="/">
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
      </Navbar>
    </header>
  );
}

export default Header;