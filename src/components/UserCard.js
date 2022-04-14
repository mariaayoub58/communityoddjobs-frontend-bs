import React from "react";
import { Card, Button } from "react-bootstrap";

// props: title description

export default function UserCard(props) {
  return (
    <Card className="my-3 shadow">
      <Card.Header as="h5">{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>{props.email}</Card.Text>
        <Card.Text>{props.contact}</Card.Text>
        <>
          <Button className="shadow" onClick={props.onEdit && props.onEdit}>
            {props.edit}
          </Button>
          {"  "}
          <Button className="shadow" onClick={props.onDelete && props.onDelete}>
            {props.delete}
          </Button>
        </>
      </Card.Body>
    </Card>
  );
}
