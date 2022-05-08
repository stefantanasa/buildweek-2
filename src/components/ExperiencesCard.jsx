import { useEffect, useState } from "react";
import "../stylesheets/experiencesCard-stylesheet.css";
import Experience from "./Experience";

const ExperiencesCard = (props) => {
  const [experiences, setExperiences] = useState([]);
  const [action, setAction] = useState();

  const getAction = (action) => {
    setAction(action);
  };

  const fetchNewId = async (id) => {
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
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    if (props.profileId) {
      fetchNewId(props.profileId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.profileId, props.profiledata]);

  return (
    <div className="sidebar-container  ">
      <div className="d-flex justify-content-between m-3">
        <div>
          <h3>Experiences</h3>
        </div>
      </div>
      {experiences &&
        experiences.map((exp) => (
          <Experience
            profiledata={props.profiledata}
            setprofiledata={props.setProfileData}
            key={exp._id}
            getaction={getAction}
            experience={exp}
            setexperiences={setExperiences}
            allExperiences={experiences}
            action={action}
          />
        ))}
      {/* <ExperiencesUser users={user} /> */}
    </div>
  );
};
export default ExperiencesCard;
