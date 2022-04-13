import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "../Style.css";

export default function Header(props) {
  return (
    <Navbar expand="lg" dark="true">
      <Container fluid>
        <Nav className="nav">
          <Nav.Link href="/" style={{ color: "white" }}>
            Home
          </Nav.Link>
          {props.admin && props.admin ? (
            <>
              <NavDropdown title="Users" color="white" id="nav-dropdown">
                <NavDropdown.Item href="/CreateUser" eventKey="4.1">
                  Create User
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Manage User</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Jobs" id="nav-dropdown">
                <NavDropdown.Item href="/CreateJob" eventKey="4.1">
                  Create Job
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Applications</NavDropdown.Item>
              </NavDropdown>
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
          <Nav.Link
            onClick={() => {
              sessionStorage.removeItem("loggedInUser");
            }}
            href="/"
            style={{ color: "white" }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
