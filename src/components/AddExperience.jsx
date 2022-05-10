import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import UploadExperiencePicture from "./UploadExperiencePicture";
import Experience from "./Experience";

const AddExperience = ({ setExperiences, experiences }) => {
  const [userExperience, setUserExperience] = useState();
  const [imageLink, setImageLink] = useState(
    "https://www.wpkube.com/wp-content/uploads/2019/02/503-unavailable-error-wpk.jpg"
  );

  let change = (e, field) => {
    setUserExperience({
      ...userExperience,
      [field]: e.target.value,
    });
    console.log("inside setUserExp: ", userExperience);
  };
  const postExperience = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/626fc30317c4e00015d7a082/experiences",

        {
          method: "POST",
          body: JSON.stringify(userExperience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDk2NWQ2MmIzNTAwMTVlZDM5N2EiLCJpYXQiOjE2NTIxNjQ5NjUsImV4cCI6MTY1MzM3NDU2NX0.Vcz2Utp2Ywc5uYa4hGPLHyTOWn3hsrAdiYC4JtURBz8",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("✅Experience has been added! ", data);
        const pushData = [experiences, data];
        console.log("Inside post: ", pushData);
        setExperiences();
      } else {
        console.log("❌Else error! ");
      }
      console.log("resp", response);
    } catch (error) {
      console.log(userExperience);
      console.log("❌There is an error! ", error);
    }
  };

  return (
    <Form>
      <h1>Add Experience</h1>
      <Form.Group>
        <br />
        <Form.Control
          required
          type="text"
          placeholder="Role"
          onChange={(e) => change(e, "role")}
        />

        <br />
        <Form.Control
          required
          type="date"
          placeholder="Start date"
          onChange={(e) => change(e, "startDate")}
        />
        <br />
        <Form.Control
          type="date"
          placeholder="End date"
          onChange={(e) => change(e, "endDate")}
        />

        <Form.Group
          required
          type="text"
          controlId="exampleForm.ControlTextarea1"
          onChange={(e) => change(e, "description")}
        >
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <br />
        <Form.Control
          required
          type="text"
          placeholder="Location"
          onChange={(e) => change(e, "area")}
        />

        <Form.Control
          required
          type="text"
          placeholder="Company"
          onChange={(e) => change(e, "company")}
        />
        <button
          type="button"
          onClick={() => {
            postExperience();
          }}
          className="btn btn-primary"
        >
          Post new experience
        </button>
      </Form.Group>
      <h5>Please post an experience and then upload a picture!</h5>
      <UploadExperiencePicture
        expId={userExperience && userExperience._id}
        setImageLink={setImageLink}
      />
    </Form>
  );
};

export default AddExperience;
