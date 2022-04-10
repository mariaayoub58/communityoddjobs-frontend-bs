import React from "react";
import { Card, Button } from "react-bootstrap";

// props: title description

export default function CardListing(props) {
  return (
    <Card className="my-3 shadow">
      <Card.Header as="h5">{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Button className="shadow">{props.button}</Button>
      </Card.Body>
    </Card>
  );
}