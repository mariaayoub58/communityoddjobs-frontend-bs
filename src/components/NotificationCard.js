import React from "react";
import {
    Card
} from "react-bootstrap";

// props: title description

export default function NotificationCard(props) {
    return (
        <Card className="my-3">
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}