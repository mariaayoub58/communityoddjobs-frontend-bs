import React from "react";
import { Card, Button } from "react-bootstrap";

// props: title description

export default function CardListing(props) {
  return (
    <Card className="my-3 shadow">
      <Card.Header as="h5">{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        {props.admin && props.admin ? (
          <>
            <Button className="shadow">{props.update}</Button>
            {"  "}
            <Button className="shadow">{props.delete}</Button>
          </>
        ) : (
          <>
            {" "}
            <Button className="shadow">{props.button}</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
