import React from 'react';
import logo from './logo.png';
import { Navbar, Nav } from 'react-bootstrap';
// import style from "./style.css"

function Header() {
  return (
    <header className="header">
      <Navbar bg="body-tertiary" expand="lg">
        <div className="container">
          <Navbar.Brand href="#">
            <img src={logo} alt="Application Logo" width="150" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Tips & Information</Nav.Link>
              <Nav.Link href="#">Support</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
