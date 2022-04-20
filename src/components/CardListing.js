import React from "react";
import { Card, Button } from "react-bootstrap";

// props: title description

export default function CardListing(props) {
  return (
    <Card className="my-3 shadow">
      <Card.Header as="h5">{props.title}</Card.Header>
      <Card.Body>
        <Card.Text><b>Employer Email:</b> {props.employerEmail}</Card.Text>
        <Card.Text><b>Date of Service:</b> {props.dateOfService}</Card.Text>
        <Card.Text><b>Job Description:</b> {props.description}</Card.Text>
        <Card.Text><b>Rate Per Hour:</b> {props.ratePerHour}</Card.Text>
        <Card.Text><b>Meta Tags:</b> {props.metaTags}</Card.Text>
        <Card.Text><b>Location:</b> {props.location}</Card.Text>
        {props.admin && props.admin ? (
          <>
            <Button className="shadow" onClick={props.onEdit && props.onEdit}>{props.edit}</Button>
            {"  "}
            <Button className="shadow" onClick={props.onDelete && props.onDelete}>{props.delete}</Button>
          </>
        ) : (
          <>
            {" "}
            <Button className="shadow" onClick={props.onApply && props.onApply}>{props.button}</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
