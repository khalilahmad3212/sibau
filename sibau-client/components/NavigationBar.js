import React from "react";
import style from "../styles/home/navigationBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      id="mainNav"
      className={style.navbar}
      collapseOnSelect
      expand="lg"
      bg=""
      variant="dark"
    >
      <Navbar.Brand id="brandLogo" href="/" className={style.navbar__brand}>
        <img src="./logo-white.png" className="logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={`${style.nav__bar} me-auto`}>
          <Nav.Link className={style.nav__link} href="/">
            Home
          </Nav.Link>
          <Nav.Link className={style.nav__link} href="/about">
            About
          </Nav.Link>
          <NavDropdown
            className={style.nav__item}
            title="Academics"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/">Overview</NavDropdown.Item>
            <NavDropdown.Item href="/">Undergraduate</NavDropdown.Item>
            <NavDropdown.Item href="/">Graduate</NavDropdown.Item>
            <NavDropdown.Item href="/">Online Education</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className={style.nav__link} href="/">
            Admission
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
