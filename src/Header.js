import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import favicon from "./assets/favicon.png";
import logo from "./assets/logo.png";

const Header = () => (
  <Navbar expand="md" variant="light" bg="light" sticky="top">
    <Navbar.Brand as={NavLink} exact to="/">
      <span className="full-brand">
        <img
          src={favicon}
          width="30"
          height="30"
          className="d-inline-block align-top mr-1"
          alt="siggraph logo"
        />
        ACM SIGGRAPH University of Illinois
      </span>
      <img className="abbrev-brand" height={50} src={logo}></img>
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
