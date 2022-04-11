import React, { useState } from "react";
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
import { saveJobListing } from "../controllers/UserActions";
import { ToastError } from "../service/toast/Toast";
import { ToastSuccess } from "../service/toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function CreateJob() {
  const [employerName, setEmployerName] = useState("");
  const [employerEmail, setEmployerEmail] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfService, setDateOfService] = useState("");
  const [ratePerHour, setRatePerHour] = useState("");
  const [description, setDescription] = useState("");
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numberPattern = new RegExp(/^[0-9\b]+$/);

  const validateAndSaveJobListing = () => {
    if (!employerName.trim() || !employerEmail.trim() || !title.trim() ||
      !location.trim() || !dateOfService || !ratePerHour.trim() || !description.trim()) {
      ToastError("Please fill all required fields");
    } else {
      if (employerEmail && !emailPattern.test(employerEmail)) {
        ToastError("Please enter a valid Employer Email");
        return;
      }
      if ((ratePerHour && (!numberPattern.test(ratePerHour) || ratePerHour.length == 0))) {
        ToastError("Please enter a valid Rate Per Hour");
        return;
      }
      let payload = {
        adminId: "624606e38d77a630d4c4e8f6", //TODO
        employerName: employerName,
        employerEmail: employerEmail,
        title: title,
        location: location,
        dateOfService: dateOfService,
        ratePerHour: ratePerHour,
        description: description,
      };
      saveJobListing(
        payload,
        (data) => {
          if (data.status === 'success') {
            ToastSuccess("Job List saved successfully");
          } else {
            ToastError(data.message);
          }
        },
        (err) => {
          ToastError("Unexpected error during Job List Save");
        }
      );
    }
  }

  return (
    <>
      <Header admin />
      <ToastContainer />
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
                <Form.Control className="shadow" value={employerName}
                  onChange={e => setEmployerName(e.target.value)} placeholder="Employer Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="shadow" value={employerEmail}
                  onChange={e => setEmployerEmail(e.target.value)}
                  type="email"
                  placeholder="Employer Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicJobTitle">
                <Form.Control className="shadow" value={title}
                  onChange={e => setTitle(e.target.value)} placeholder="Job Title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Control className="shadow" value={location}
                  onChange={e => setLocation(e.target.value)} placeholder="Location" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDateofService">
                <Form.Control
                  className="shadow" value={dateOfService}
                  type="date" onChange={e => setDateOfService(e.target.value)}
                  placeholder="Date of Service"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicHours">
                <Form.Control className="shadow" value={ratePerHour}
                  onChange={e => setRatePerHour(e.target.value)} placeholder="Rate Per Hour" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Control className="shadow" value={description}
                  onChange={e => setDescription(e.target.value)} placeholder="Description" />
              </Form.Group>
              <Button className="shadow" onClick={validateAndSaveJobListing}>
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
