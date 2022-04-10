import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../Style.css";

export default function () {
  return (
    <>
      <Container>
        <h1
          style={{ color: "#6f42c1" }}
          className="shadow-sm  mt-5 p-3  text-center rounded"
        >
          Job Listing
        </h1>
        <Row>
          <Col
            lg={10}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Card>
              <Card.Header as="h5">Job Title</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button>Apply</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Job Title</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button>Apply</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Job Title</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button>Apply</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Job Title</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button>Apply</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Job Title</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button>Apply</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">Job Title</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button>Apply</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
