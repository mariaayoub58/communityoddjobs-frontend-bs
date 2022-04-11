import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../Style.css";

export default function Header(props) {
  return (
    <Navbar expand="lg" dark="true">
      <Container fluid>
        <Nav className="nav">
          <Nav.Link href="/Home" style={{ color: "white" }}>
            Home
          </Nav.Link>
          {props.admin && props.admin ? (
            <>
              <Nav.Link href="/CreateUser" style={{ color: "white" }}>
                Users
              </Nav.Link>
              <Nav.Link href="/CreateJob" style={{ color: "white" }}>
                Applications
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/Notifications" style={{ color: "white" }}>
                Notifications
              </Nav.Link>
            </>
          )}
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link onClick={() => { sessionStorage.removeItem("loggedInUser") }} href="/" style={{ color: "white" }}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
