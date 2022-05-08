import React from "react";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const EditJumbotronForm = ({ profileData, setProfileData }) => {
  const [newData, setNewData] = useState(profileData);

  const handleChange = (e, field) => {
    setNewData({ ...newData, [field]: e.target.value });
  };

  const putProfileData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          body: JSON.stringify(newData),
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s",
            "Content-type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("newData: ", data);
      setProfileData(data);
      console.log("✅Everything went well, infos were updated!", data);
    } catch (error) {
      console.log("❌ something went wrong: ", error);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <br />
          <Form.Control
            value={newData.name}
            type="text"
            placeholder="First Name"
            onChange={(e) => handleChange(e, "name")}
          />
          <br />
          <Form.Control
            value={newData.surname}
            type="text"
            placeholder="Last name"
            onChange={(e) => handleChange(e, "surname")}
          />
          <br />
          <Form.Control
            value={newData.email}
            type="email"
            placeholder="Email"
            onChange={(e) => handleChange(e, "email")}
          />
          <br />
          <Form.Group
            value={newData.bio}
            controlId="exampleForm.ControlTextarea1"
            onChange={(e) => handleChange(e, "bio")}
          >
            <Form.Control as="textarea" rows={3} placeholder={newData.bio} />
          </Form.Group>
          <br />
          <Form.Control
            value={newData.title}
            type="text"
            placeholder="Title"
            onChange={(e) => handleChange(e, "title")}
          />
          <br />
          <Form.Control
            value={newData.area}
            type="text"
            placeholder="Area"
            onChange={(e) => handleChange(e, "area")}
          />
        </Form.Group>
      </Form>
      <button
        type="button"
        onClick={() => {
          console.log("Profile details saved!");

          putProfileData();
        }}
        className="btn btn-primary"
      >
        Save
      </button>
    </div>
  );
};

export default EditJumbotronForm;
