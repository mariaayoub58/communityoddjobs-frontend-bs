import React, { useState, useEffect, useContext } from "react";
import {
    Button,
    Container,
    Row,
    Col,
    InputGroup,
    FormControl,
    FormLabel,
} from "react-bootstrap";
import "../Style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardApplication from "../components/CardApplication";

import { retrieveApplications, searchJob, deleteJob, approveJob, rejectJob } from "../controllers/UserActions"
import { ToastError, ToastSuccess } from "../service/toast/Toast";
import { ToastContainer } from "react-toastify";

export default function () {

    // let user;
    const [user, setUser] = useState();
    const [listings, setListings] = useState();
    const [search, setSearch] = useState("");
    const [searching, setSearching] = useState(false);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("loggedInUser")))
        retrieveApplications({ searchString: "" }, (res) => {
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

    var approveClicked = (listingId) => {
        if (user) {
            approveJob(
                listingId,
                { adminId: user._id },
                (res) => {
                    if (res.status === "success") {
                        ToastSuccess(res.message)
                        searchListing(search)
                    } else if (res.status === "error") {
                        ToastError(res.message)
                    } else {
                        ToastError('Something went wrong')
                    }
                },
                (err) => {
                    ToastError('Internal error')
                }
            )
        } else {
            ToastError("Need to login first");
        }
    }

    var rejectClicked = (listingId) => {
        if (user) {
            rejectJob(
                listingId,
                { adminId: user._id },
                (res) => {
                    if (res.status === "success") {
                        ToastSuccess(res.message)
                        searchListing(search)
                    } else if (res.status === "error") {
                        ToastError(res.message)
                    } else {
                        ToastError('Something went wrong')
                    }
                },
                (err) => {
                    ToastError('Internal error')
                }
            )
        } else {
            ToastError("Need to login first");
        }
    }

    useEffect(() => {
        searchTyping(search, fromDate, toDate)
    }, [search, fromDate, toDate])

    var searchTyping = (value, from, to) => {
        var query = { searchString: value };
        if (from !== "") {
            query.startDate = from;
            setFromDate(from);
        }
        if (to !== "") {
            query.stopDate = to;
            setToDate(to);
        }
        setSearch(value)
        if (!searching) {
            setSearching(true)
            setTimeout(() => {
                retrieveApplications(query, (res) => {
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
                retrieveApplications({ searchString: value }, (res) => {
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
                <Row>
                    <Col lg={10} md={6} sm={12} className="px-5 m-auto rounded-lg">
                        <InputGroup className="col-6 mt-5">
                            <FormControl
                                className="shadow"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <Button onClick={() => searchTyping(search, fromDate, toDate)} className="shadow" variant="outline-secondary" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1} md={3} sm={12} className="px-1 rounded-lg" />
                    <Col lg={5} md={3} sm={12} className="px-5 rounded-lg">
                        <InputGroup className="mt-3">
                            <FormLabel className="col-12">From: </FormLabel>
                            <FormControl
                                className="shadow col-12"
                                type="date"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                                placeholder="From date"
                                aria-label="From date"
                                aria-describedby="basic-addon2"
                            />
                            {fromDate !== "" && <Button onClick={() => setFromDate("")} className="shadow" variant="outline-secondary" id="button-addon2">
                                Clear
                            </Button>}
                        </InputGroup>
                    </Col>
                    <Col lg={5} md={3} sm={12} className="px-5 rounded-lg">
                        <InputGroup className="mt-3">
                            <FormLabel className="col-12">To: </FormLabel>
                            <FormControl
                                className="shadow col-12"
                                type="date"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                                placeholder="To date"
                                aria-label="To date"
                                aria-describedby="basic-addon2"
                            />
                            {toDate !== "" && <Button onClick={() => setToDate("")} className="shadow" variant="outline-secondary" id="button-addon2">
                                Clear
                            </Button>}
                        </InputGroup>
                    </Col>
                    <Col lg={1} md={3} sm={12} className="px-1 rounded-lg" />
                </Row>
                {(listings && listings.length && listings.length > 0) ?
                    listings.map((element) => {
                        return (
                            <Row key={element._id}>
                                <Col lg={10} md={6} sm={12} className="px-5 m-auto rounded-lg">
                                    <CardApplication
                                        title={element.title}
                                        description={element.description}
                                        metaTags={element.metaTags}
                                        location={element.location}
                                        dateOfService={element.dateOfService}
                                        applicant={element.applicant && element.applicant.name}
                                        reject="Reject"
                                        onReject={() => rejectClicked(element._id)}
                                        approve="Approve"
                                        onApprove={() => approveClicked(element._id)}
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
