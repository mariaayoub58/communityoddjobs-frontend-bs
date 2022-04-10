import React from "react";
import {
  Form,
  FormControl,
  Container,
  Button,
  Col,
  Row,
} from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Container>
        <h1
          style={{ color: "#6f42c1" }}
          className="shadow-sm  mt-5 p-3  text-center rounded"
        >
          Login
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
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
