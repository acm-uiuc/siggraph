import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar expand="md" variant="light" bg="light" sticky="top">
    <Navbar.Brand as={NavLink} exact to="/">
      ACM Siggraph University of Illinois
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} exact to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/projects">
          Projects
        </Nav.Link>
        <Nav.Link as={NavLink} to="/gallery">
          Gallery
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
