import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-color">
      <Navbar.Brand href="#home" className="navbar-color navbar-brand-padding">
        BrandName
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
            <Link
              to="home"
              smooth={true}
              duration={900}
              className="nav-link navbar-color nav-link-padding"
            >
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="nav-link navbar-color nav-link-padding"
            >
              Services
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link navbar-color nav-link-padding"
            >
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
