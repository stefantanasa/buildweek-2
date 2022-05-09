import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import UploadExperiencePicture from "./UploadExperiencePicture";

const AddExperience = () => {
  const [userExperience, setUserExperience] = useState();

  // let change = (e, field) => {
  //   setUserExperience({
  //     ...userExperience,
  //     [field]: e.target.value,
  //   });
  //   setPostExp({
  //     ...userExperience,
  //     [field]: e.target.value,
  //   });

  //   console.log("inside setUserExp: ", userExperience);
  // };

  return (
    <Form>
      <h1>Add Experience</h1>
      <Form.Group>
        <br />
        <Form.Control
          type="text"
          placeholder="Role"
          onChange={(e) => console.log(e, "role")}
        />
        <br />
        <UploadExperiencePicture />
        <Form.Control
          type="text"
          placeholder="Company"
          onChange={(e) => console.log(e, "company")}
        />
        <br />
        <Form.Control
          type="date"
          placeholder="Start date"
          onChange={(e) => console.log(e, "startDate")}
        />
        <br />
        <Form.Control
          type="date"
          placeholder="End date"
          onChange={(e) => console.log(e, "endDate")}
        />
        <br />
        <Form.Group
          type="text"
          controlId="exampleForm.ControlTextarea1"
          onChange={(e) => console.log(e, "description")}
        >
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <br />
        <Form.Control
          type="text"
          placeholder="Location"
          onChange={(e) => console.log(e, "area")}
        />
        <br />
      </Form.Group>
    </Form>
  );
};

export default AddExperience;
