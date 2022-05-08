import React from "react";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const EditJumbotronForm = (props) => {
  const [newData, setNewData] = useState(props.profiledata);

  console.log("newData: ", newData);
  console.log("props: ", props.profiledata);
  useEffect(() => setNewData(props.profiledata), [newData]);

  return (
    <Form>
      <Form.Group>
        <br />
        <Form.Control
          value={newData.name}
          type="text"
          placeholder="First Name"
          onChange={(e) => setNewData(e, "name")}
        />
        <br />
        <Form.Control
          value={newData.surname}
          type="text"
          placeholder="Last name"
          onChange={(e) => setNewData(e, "surname")}
        />
        <br />
        <Form.Control
          value={newData.email}
          type="email"
          placeholder="Email"
          onChange={(e) => setNewData(e, "email")}
        />
        <br />
        <Form.Group
          value={newData.bio}
          controlId="exampleForm.ControlTextarea1"
          onChange={(e) => setNewData(e, "bio")}
        >
          <Form.Control as="textarea" rows={3} placeholder="Bio" />
        </Form.Group>
        <br />
        <Form.Control value={newData.title} type="text" placeholder="Title" />
        <br />
        <Form.Control
          value={props.profiledata.area}
          type="text"
          placeholder="Location"
        />
        <br />
      </Form.Group>
    </Form>
  );
};

export default EditJumbotronForm;
