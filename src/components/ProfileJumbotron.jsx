import React from "react";

import DescriptionProfile from "./DescriptionProfile";
import ProfileModal from "./ProfileModal";
import { useState } from "react";
import { Row } from "react-bootstrap";
import EditJumbotronForm from "./EditJumbotronForm";
import UploadProfilePicture from "./UploadProfilePicture";

const ProfileJumbotron = ({ profileData, setProfileData, putprofiledata }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [action, setAction] = useState(putprofiledata);

  return (
    <div className="profile-jumbotron ">
      <Row>
        <img
          className="profile-cover"
          src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />

        <div
          className={`edit-cover-btn d-flex justify-content-center align-items-center `}
          style={{ right: "2rem", top: "1rem" }}
        >
          <i
            className="bi bi-pencil-fill mr-4 mt-4  "
            style={{ position: "absolute", bottom: "0.5rem", left: "9px" }}
          ></i>
        </div>
      </Row>

      <Row>
        <img
          className="profile-img"
          src={profileData.image}
          alt=""
          onClick={() => {
            console.log("cliock");
            setAction("close");
            setModalContent(<UploadProfilePicture />);
            setModalShow(true);
          }}
        />

        <div
          className={`edit-info-btn d-flex  justify-content-center align-items-center`}
          style={{ top: "11rem", right: "2rem" }}
          onClick={() => {
            setModalContent(
              <EditJumbotronForm
                profileData={profileData}
                setProfileData={setProfileData}
              />
            );
            setModalShow(true);
          }}
        >
          <i
            className="bi bi-pencil-fill mr-4 mt-4  "
            style={{
              position: "absolute",
              bottom: "0.5rem",
              left: "9px",
            }}
          ></i>
        </div>
      </Row>
      <Row>
        <ProfileModal
          content={modalContent}
          profiledata={profileData}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <DescriptionProfile profiledata={profileData} />
      </Row>
    </div>
  );
};

export default ProfileJumbotron;
