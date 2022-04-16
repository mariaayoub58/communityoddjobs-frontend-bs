import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Icon,
  InputGroup,
  Form,
  FormControl,
} from "react-bootstrap";
import "../Style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";
import {
  retrieveUsers,
  searchUser,
  deleteUser,
} from "../controllers/UserActions";
import { ToastError, ToastSuccess } from "../service/toast/Toast";
import { ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function () {
  // let user;
  const [user, setUser] = useState("");
  const [users, setUsers] = useState();
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("loggedInUser")));
    let payload = {
      adminId: "624606e38d77a630d4c4e8f6",
    };
    retrieveUsers(
      payload,
      (res) => {
        if (res.status === "success") {
          setUsers(res.data);
        } else {
          ToastError("Something went wrong");
        }
      },
      (err) => {
        ToastError("Internal error");
      }
    );
  }, []);

  var renderNothing = () => {
    return (
      <div className="d-flex">
        <div className="mx-auto m-3">Nothing to see</div>
      </div>
    );
  };

  var editClicked = (userId) => {
    history.push("/CreateUser");
    sessionStorage.setItem("UserId", userId);
  }

  var deleteClicked = (userId) => {
    let payload = {
      adminId: "624606e38d77a630d4c4e8f6",
    };
    if (user) {
      deleteUser(
        userId,
        payload,
        (res) => {
          if (res.status === "success") {
            ToastSuccess(res.message);
            searchUsers(search);
          } else if (res.status === "error") {
            ToastError(res.message);
          } else {
            ToastError("Something went wrong");
          }
        },
        (err) => {
          ToastError("Internal error");
        }
      );
    } else {
      ToastError("Need to login first");
    }
  };

  var searchTyping = (e) => {
    var val = e.target.value;
    setSearch(val);
    if (!searching) {
      setSearching(true);
      setTimeout(() => {
        searchUser(
          { searchString: e.target.value },
          (res) => {
            if (res.status === "success") {
              setUsers(res.data);
            } else {
              ToastError("Something went wrong");
            }
          },
          (err) => {
            ToastError("Internal error");
          }
        );

        setSearching(false);
      }, 1000);
    }
  };

  var searchUsers = (value) => {
    if (!searching) {
      setSearching(true);
      setTimeout(() => {
        searchUser(
          { searchString: value },
          (res) => {
            if (res.status === "success") {
              setUsers(res.data);
            } else {
              ToastError("Something went wrong");
            }
          },
          (err) => {
            ToastError("Internal error");
          }
        );

        setSearching(false);
      }, 1000);
    }
  };

  return (
    <>
      <Header admin={user && user.admin} />
      <ToastContainer />
      <Container>
        <Row>
          <Col lg={10} md={6} sm={12} className="p-5 m-auto rounded-lg">
            <InputGroup className="col-6 mt-5">
              <FormControl
                className="shadow"
                value={search}
                onChange={(e) => searchTyping(e)}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <Button
                className="shadow"
                variant="outline-secondary"
                id="button-addon2"
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
        {users && users.length && users.length > 0
          ? users.map((element) => {
            return (
              <Row key={element._id}>
                <Col
                  lg={10}
                  md={6}
                  sm={12}
                  className="px-5 m-auto rounded-lg"
                >
                  <UserCard
                    name={element.name}
                    email={element.email}
                    contact={element.contact}
                    address={element.address}
                    admin={user && user.admin}
                    edit={user && user.admin && "Edit"}
                    onEdit={() => editClicked(element._id)}
                    delete={user && user.admin && "Delete"}
                    onDelete={() => deleteClicked(element._id)}
                  />
                </Col>
              </Row>
            );
          })
          : renderNothing()}
      </Container>
      <div className="my-4"></div>
      <Footer />
    </>
  );
}
