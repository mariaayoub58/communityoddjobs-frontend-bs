import { render } from "@testing-library/react";
import React from "react";
import {
    Container,
    Button
} from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotificationCard from "../components/NotificationCard";
import { ToastError } from "../service/toast/Toast";
import { ToastSuccess } from "../service/toast/Toast";
import { clearNotifications } from "../controllers/UserActions"
import { ToastContainer } from "react-toastify";

export default function Notifications() {

    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    var renderNothing = () => {
        return (
            <div className="d-flex">
                <div className="mx-auto m-3">Nothing to see</div>
            </div>
        )
    }

    var clearNotificationsClick = () => {
        clearNotifications(user.email,
            (res) => {
                if (res.status === "success") {
                    console.log(res)
                    ToastSuccess(res.message)
                } else if (res.status === "error") {
                    ToastError(res.message)
                } else {
                    ToastError("Something went wrong")
                }
            },
            (err) => {
                ToastError("Internal error")
            })
    }

    var viewAllNotifications = () => {
        console.log(user.notifications)
        const notifications = user.notifications.map(element => {
            return (<NotificationCard title={element.title} description={element.message} />)
        });
        // append button at the end
        return [notifications, (<Button onClick={clearNotificationsClick}>Clear all notifications</Button>)];
    }

    return (
        <>
            <Header />
            <ToastContainer />
            <Container>
                {
                    (user && user.notifications && user.notifications.length > 0) ?
                        viewAllNotifications() :
                        renderNothing()
                }
            </Container>
            <Footer />
        </>
    )
}