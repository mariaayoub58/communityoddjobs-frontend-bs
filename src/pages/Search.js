import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../Style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardListing from "../components/CardListing";

import { retrieveJobListing, searchJob, applyJob } from "../controllers/UserActions"
import { ToastError, ToastSuccess } from "../service/toast/Toast";
import { ToastContainer } from "react-toastify";

export default function () {

  // let user;
  const [user, setUser] = useState();
  const [listings, setListings] = useState();
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("loggedInUser")))
    retrieveJobListing({}, (res) => {
      if (res.status === "success") {
        setListings(res.data)
      } else {
        ToastError('Something went wrong')
      }
    },
      (err) => {
        ToastError('Internal error')
      })
  }, [])

  var renderNothing = () => {
    return (
      <div className="d-flex">
        <div className="mx-auto m-3">Nothing to see</div>
      </div>
    )
  }

  var applyClicked = (listingId) => {
    if (user) {
      applyJob(listingId, { ...user }, (res) => {
        if (res.status === "success") {
          ToastSuccess(res.message)
          searchListing(search)
        } else if (res.status === "error") {
          ToastError(res.message)
        } else {
          ToastError('Something went wrong')
        }
      }, (err) => {
        ToastError('Internal error')
      })
    } else {
      ToastError("Need to login first");
    }
  }

  var searchTyping = (e) => {
    var val = e.target.value
    setSearch(val)
    if (!searching) {
      setSearching(true)
      setTimeout(() => {
        // console.log("e.target.value", e.target.value)
        searchJob({ searchString: e.target.value }, (res) => {
          if (res.status === "success") {
            setListings(res.data)
          } else {
            ToastError('Something went wrong')
          }
        },
          (err) => {
            ToastError('Internal error')
          })

        setSearching(false);
      }, 1000)
    }
  }

  var searchListing = (value) => {
    if (!searching) {
      setSearching(true)
      setTimeout(() => {
        // console.log("e.target.value", e.target.value)
        searchJob({ searchString: value }, (res) => {
          if (res.status === "success") {
            setListings(res.data)
          } else {
            ToastError('Something went wrong')
          }
        },
          (err) => {
            ToastError('Internal error')
          })

        setSearching(false);
      }, 1000)
    }
  }

  return (
    <>
      <Header admin={user && user.admin} />
      <ToastContainer />
      <Container>
        <h1
          style={{ color: "#6f42c1" }}
          className="mt-5 p-3  text-center rounded"
        >
          Job Listing
        </h1>
        <Row>
          <Col lg={10} md={6} sm={12} className="px-5 m-auto rounded-lg">

            <Form>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control
                  className="shadow" value={search}
                  onChange={e => searchTyping(e)}
                  type="email"
                  placeholder="Name"
                />
              </Form.Group>

            </Form>
          </Col>
        </Row>
        {(listings && listings.length && listings.length > 0) ?
          listings.map((element) => {
            return (
              <Row key={element._id}>
                <Col lg={10} md={6} sm={12} className="px-5 m-auto rounded-lg">
                  <CardListing
                    title={element.title}
                    description={element.description}
                    button="Apply"
                    onApply={() => applyClicked(element._id)}
                  />
                </Col>
              </Row>
            );
          })
          :
          renderNothing()
        }
      </Container>
      <Footer />
    </>
  );
}
