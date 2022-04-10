import React from "react";
import {
  Form,
  FormControl,
  Container,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { userLogin } from "../controllers/LoginController"

export default function Login() {

  const [email, setEmail] = React.useState("shihabawal0007@gmail.com");
  const [password, setPassword] = React.useState("shihabawal");
  const history = useHistory();

  // check if user logged in
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"))

  var loginClick = () => {
    userLogin(email, password,
      (res) => {
        if (res.status === "success") {
          history.push("/Search");
          sessionStorage.setItem("loggedInUser", JSON.stringify(res.data))
        }
      },
      (err) => {
        console.log(err);
      })
  }

  // if logged in go directly to search page else view login screen on /
  return user ? history.push("/Search") : (
    <>
      <Container>
        <h1
          style={{ color: "#6f42c1", textShadow: "5px 5px 25px grey" }}
          className="mt-5 p-3 text-center"
        >
          Login
        </h1>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto rounded-lg"
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="shadow" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="shadow" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button className="shadow" type="button" onClick={loginClick}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
