import React, { useState, useEffect } from "react";
import { Form, Container, Button, Col, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { saveUser, editUser, retrieveUser } from "../controllers/UserActions";
import { ToastError } from "../service/toast/Toast";
import { ToastSuccess } from "../service/toast/Toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function CreateUser() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [line1, setLine1] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [id, setId] = useState("");
  const [addressId, setAddressId] = useState("");
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numberPattern = new RegExp(/^[0-9\b]+$/);


  useEffect(() => {
    if (sessionStorage.getItem("UserId")) {
      retrieveUser(sessionStorage.getItem("UserId"), (res) => {
        if (res.status === "success") {
          setUserName(res.data.name);
          setEmail(res.data.email);
          setPassword(res.data.password);
          setContact(res.data.contact);
          setLine1(res.data.address.line1);
          setState(res.data.address.state);
          setCity(res.data.address.city);
          setCountry(res.data.address.country);
          setZip(res.data.address.zip);
          setAddressId(res.data.address._id);
          setId(sessionStorage.getItem("UserId"));
          sessionStorage.removeItem("UserId");
        } else {
          ToastError('Something went wrong')
        }
      },
        (err) => {
          ToastError('Internal error')
        })
    }
  }, [])

  const validateAndSaveUser = () => {
    if (
      !userName.trim() ||
      !line1.trim() ||
      !country.trim() ||
      !state.trim() ||
      !city.trim() ||
      !zip.trim() ||
      !email.trim() ||
      !password.trim() ||
      !contact.toString().trim()
    ) {
      ToastError("Please fill all required fields");
    } else {
      if (email && !emailPattern.test(email)) {
        ToastError("Please enter a valid email address");
        return;
      }
      if (contact && (!numberPattern.test(contact.toString()))) {
        ToastError("Please enter a valid contact number");
        return;
      }
      let address = {
        line1: line1,
        city: city,
        state: state,
        country: country,
        zip: zip,
      };
      if (addressId != "" && addressId != null) {
        address._id = addressId;
      }
      let adminId = JSON.parse(sessionStorage.getItem("loggedInUser"))._id;
      let payload = {
        adminId: adminId,
        name: userName,
        email: email,
        password: password,
        contact: contact,
        address: address
      };
      if (id != "" && id != null) {
        payload._id = id;
      }
      let editPayload = {
        adminId: adminId,
        user: payload,
      };

      if (id) {
        editUser(id,
          editPayload,
          (data) => {
            if (data.status === "success") {
              ToastSuccess("User updated successfully");
              history.push("/UserList");
            } else {
              ToastError(data.message);
            }
          },
          (err) => {
            ToastError("Unexpected error during User Save");
          }
        );
      } else {
        saveUser(
          payload,
          (data) => {
            if (data.status === "success") {
              ToastSuccess("User Profile saved successfully");
              history.push("/UserList");
            } else {
              ToastError(data.message);
            }
          },
          (err) => {
            ToastError("Unexpected error during User Profile Save");
          }
        );
      }
    }
  };

  return (
    <>
      <Header admin />
      <ToastContainer />
      <Container>
        <h1
          style={{ color: "#6f42c1", textShadow: "5px 5px 25px grey" }}
          className=" mt-5 p-3  text-center rounded"
        >
          Create Individual Profile
        </h1>
        <Row>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-lg">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="shadow"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="email"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="shadow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="shadow"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasiccontact">
                <Form.Control
                  className="shadow"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="number"
                  placeholder="Contact number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicline1">
                <Form.Control
                  className="shadow"
                  value={line1}
                  onChange={(e) => setLine1(e.target.value)}
                  placeholder="Address Line"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicState">
                <Form.Control
                  className="shadow"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Control
                  className="shadow"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Control
                  className="shadow"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicZip">
                <Form.Control
                  className="shadow"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="Zip"
                />
              </Form.Group>
              <Button onClick={validateAndSaveUser}>Save</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
