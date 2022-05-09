import React from "react";
import ProfileModal from "./ProfileModal";
import { useState, useEffect } from "react";
import EditExperience from "./EditExperience";
import AddExperience from "./AddExperience";
import { parseISO, format } from "date-fns";

const Experience = ({ experience }) => {
  const [modalShow, setModalShow] = useState(false);
  const [content, setContent] = useState(
    <EditExperience experience={experience} />
  );
  return (
    <div className="row d-flex  justify-content-between">
      <div className="col-2 d-flex justify-content-center ">
        <img
          src={experience.image}
          style={{ height: "65px", width: "65px", objectFit: "cover" }}
          alt="CBS"
          className="ml-3"
        />
      </div>
      <div className="col-7 p-0">
        <div>
          <h5 className="header-text">{experience.role}</h5>
        </div>
        <p className="text-under-header">{experience.company}</p>
        <p className="year-text">
          Start:{format(parseISO(experience.startDate), "MMMM do yyyy")} End:{" "}
          -end date
        </p>
        <p className="year-text">area</p>
      </div>
      <div>
        <i className="bi bi-pencil mr-5" onClick={() => setModalShow(true)}></i>
      </div>
      <ProfileModal
        show={modalShow}
        content={content}
        onHide={() => setModalShow(false)}
        title={"Edit Experience"}
      />
    </div>
  );
};

export default Experience;
