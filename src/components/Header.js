import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../Style.css";

export default function Header() {
  return (
    <Navbar expand="lg" dark>
      <Container fluid>
        <Nav className="nav">
          <Nav.Link href="#home" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#home" style={{ color: "white" }}>
            Contact Us
          </Nav.Link>
          <Nav.Link href="#features" style={{ color: "white" }}>
            About Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
