import { render } from "@testing-library/react";
import React from "react";
import {
    Container,
    Button,
} from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotificationCard from "../components/NotificationCard";

export default function Notifications() {

    var renderNothing = () => {
        return (
            <div className="d-flex">
                <div className="mx-auto m-3">Nothing to see</div>
            </div>
        )
    }

    return (
        <>
            <Header />
            <Container>
                <NotificationCard title='Notification title' description='Notification description' />
                <Button>Clear all notifications</Button>
                {/* {renderNothing()} */}
            </Container>
            <Footer />
        </>
    )
}