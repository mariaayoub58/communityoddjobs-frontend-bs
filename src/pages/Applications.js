import React, { useState, useEffect } from "react";
import {
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


    var deleteClicked = (listingId) => {
        let payload = {
            adminId: "624606e38d77a630d4c4e8f6"
        };
        if (user) {
            deleteJob(listingId, payload, (res) => {
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
                retrieveApplications({ searchString: e.target.value }, (res) => {
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
                    <Col lg={10} md={6} sm={12} className="p-5 m-auto rounded-lg">
                        <InputGroup className="col-6 mt-5">
                            <FormControl
                                className="shadow"
                                value={search}
                                onChange={e => searchTyping(e)}
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <Button className="shadow" variant="outline-secondary" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                {(listings && listings.length && listings.length > 0) ?
                    listings.map((element) => {
                        return (
                            <Row key={element._id}>
                                <Col lg={10} md={6} sm={12} className="px-5 m-auto rounded-lg">
                                    <CardApplication
                                        title={element.title}
                                        description={element.description}
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
