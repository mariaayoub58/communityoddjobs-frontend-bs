import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../Style.css";

export default function Header1() {
  return (
    <Navbar expand="lg" dark="true">
      <Container fluid>
        <Nav className="nav">
          <Nav.Link href="#home" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#home" style={{ color: "white" }}>
            Notifications
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
