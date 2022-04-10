import React from "react";
import {
  Form,
  FormControl,
  Container,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CreateUser() {
  return (
    <>
      <Header />
      <Container>
        <h1
          style={{ color: "#6f42c1" }}
          className="shadow-sm  mt-5 p-3  text-center rounded"
        >
          Create Individual Profile
        </h1>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="shadow"
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="shadow"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasiccontact">
                <Form.Control
                  className="shadow"
                  type="number"
                  placeholder="Contact number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicline1">
                <Form.Control className="shadow" placeholder="Address Line" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicState">
                <Form.Control className="shadow" placeholder="State" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Control className="shadow" placeholder="City" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Control className="shadow" placeholder="Country" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicZip">
                <Form.Control className="shadow" placeholder="Zip" />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
