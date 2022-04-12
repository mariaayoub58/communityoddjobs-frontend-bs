import React from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../Style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardListing from "../components/CardListing";

export default function () {
  return (
    <>
      <Header admin />
      <Container>
        <Col lg={10} md={6} sm={12} className="p-5 m-auto rounded-lg">
          <InputGroup className="col-6 mt-5">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
        {/**
        <h1
          style={{ color: "#6f42c1", textShadow: "5px 5px 25px grey" }}
          className="mt-5 p-3  text-center rounded"
        >
          Job Listing
        </h1>
         */}
        <Row>
          <Col lg={10} md={6} sm={12} className="p-5 m-auto rounded-lg">
            <CardListing
              admin
              title="Job Title"
              description="Job Description"
              update="Update"
              delete="Delete"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
