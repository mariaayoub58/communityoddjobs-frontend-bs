import React from "react";
import { Card, Button } from "react-bootstrap";

// props: title description

export default function CardApplication(props) {
    return (
        <Card className="my-3 shadow">
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
                <Card.Text>{props.description}</Card.Text>
                {props.applicant && <Card.Text>Applicant: {props.applicant}</Card.Text>}
                <Button className="shadow" onClick={props.onReject && props.onReject}>{props.reject}</Button>
                {"  "}
                <Button className="shadow" onClick={props.onApprove && props.onApprove}>{props.approve}</Button>
            </Card.Body>
        </Card>
    );
}
