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

export default function CreateJob() {
  return (
    <>
      <Header admin />
      <Container>
        <h1
          style={{ color: "#6f42c1" }}
          className=" mt-5 p-3  text-center rounded"
        >
          Create Job
        </h1>
        <Row>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-lg">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control className="shadow" placeholder="Employer Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="shadow"
                  type="email"
                  placeholder="Employer Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicJobTitle">
                <Form.Control className="shadow" placeholder="Job Title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Control className="shadow" placeholder="Location" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDateofService">
                <Form.Control
                  className="shadow"
                  type="date"
                  placeholder="Date of Service"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicHours">
                <Form.Control className="shadow" placeholder="Hours" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Control className="shadow" placeholder="Description" />
              </Form.Group>
              <Button className="shadow" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
