import { useEffect, useState } from "react";
import "../stylesheets/experiencesCard-stylesheet.css";
import AddExperience from "./AddExperience";
import Experience from "./Experience";
import ProfileModal from "./ProfileModal";

const ExperiencesCard = ({ setProfileData, profileData }) => {
  const [experiences, setExperiences] = useState([]);
  const [profileId, setProfileId] = useState();
  const [content, setContent] = useState(
    <AddExperience setExperiences={setExperiences} experiences={experiences} />
  );
  const [modalShow, setModalShow] = useState(false);
  console.log(experiences);
  const fetchExperiences = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDk2NWQ2MmIzNTAwMTVlZDM5N2EiLCJpYXQiOjE2NTIxNjQ5NjUsImV4cCI6MTY1MzM3NDU2NX0.Vcz2Utp2Ywc5uYa4hGPLHyTOWn3hsrAdiYC4JtURBz8",
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
    setProfileId("627a0965d62b350015ed397a");
    fetchExperiences("627a0965d62b350015ed397a");
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
        experiences.map((exp) => (
          <Experience
            key={exp._id}
            experience={exp}
            setExperiences={setExperiences}
          />
        ))}
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
