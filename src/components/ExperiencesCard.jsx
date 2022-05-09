import { useEffect, useState } from "react";
import "../stylesheets/experiencesCard-stylesheet.css";
import AddExperience from "./AddExperience";
import Experience from "./Experience";
import ProfileModal from "./ProfileModal";

const ExperiencesCard = ({ setProfileData, profileData }) => {
  const [experiences, setExperiences] = useState();
  const [profileId, setProfileId] = useState();
  const [content, setContent] = useState(<AddExperience />);
  const [modalShow, setModalShow] = useState(false);

  const fetchExperiences = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTE1Nzc5MTAsImV4cCI6MTY1Mjc4NzUxMH0.dsdmzZvDcP2azLGh2MGVZ8-C7UCxWzuy8sAPtKFDYg4",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setExperiences(data);
        console.log("experiences: ", data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    setProfileId("626fc30317c4e00015d7a082");
    fetchExperiences("626fc30317c4e00015d7a082");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sidebar-container  ">
      <div className="d-flex justify-content-between m-3">
        <div>
          <h3>Experiences</h3>
        </div>
        <div>
          <i
            className="bi bi-plus-lg mr-3"
            onClick={() => setModalShow(true)}
          ></i>
        </div>
      </div>
      {experiences &&
        experiences.map((exp) => <Experience key={exp._id} experience={exp} />)}
      <ProfileModal
        show={modalShow}
        content={content}
        onHide={() => setModalShow(false)}
        title={"Edit Experience"}
      />
    </div>
  );
};
export default ExperiencesCard;
