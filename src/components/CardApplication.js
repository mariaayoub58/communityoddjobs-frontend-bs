import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

// props: title description

export default function CardApplication(props) {
    return (
        <Card className="my-3 shadow">
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
                <Card.Text><b>Job Description:</b> {props.description}</Card.Text>
                {props.applicant && <Card.Text><b>Applicant:</b> {props.applicant}</Card.Text>}
                <Card.Text><b>Meta Tags:</b> {props.metaTags}</Card.Text>
                <Card.Text><b>Location:</b> {props.location}</Card.Text>
                <Card.Text><b>Date of Service:</b> {props.dateOfService}</Card.Text>
                <Button className="shadow" onClick={props.onReject && props.onReject}>{props.reject}</Button>
                {"  "}
                <Button className="shadow" onClick={props.onApprove && props.onApprove}>{props.approve}</Button>
            </Card.Body>
        </Card>
    );
}
