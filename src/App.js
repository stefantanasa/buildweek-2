import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
// import NavBar from "./components/NavBar";

// import EducationCard from "./components/EducationCard"
import "./App.css";
import "./stylesheets/profile-jumbotron.css";
import NavBar from "./components/Navbar";
import Newsfeed from "./components/Newsfeed";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [profileData, setProfileData] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);

  const fetchAllProfiles = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDk2NWQ2MmIzNTAwMTVlZDM5N2EiLCJpYXQiOjE2NTIxNjQ5NjUsImV4cCI6MTY1MzM3NDU2NX0.Vcz2Utp2Ywc5uYa4hGPLHyTOWn3hsrAdiYC4JtURBz8",
        },
      }
    );

    const data = await response.json();

    console.log(data.slice(0, 8));
    setAllProfiles(data);
  };

  const fetchProfileData = async () => {
    const linkToFetch = `https://striveschool-api.herokuapp.com/api/profile/me`;
    const response = await fetch(linkToFetch, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDk2NWQ2MmIzNTAwMTVlZDM5N2EiLCJpYXQiOjE2NTIxNjQ5NjUsImV4cCI6MTY1MzM3NDU2NX0.Vcz2Utp2Ywc5uYa4hGPLHyTOWn3hsrAdiYC4JtURBz8",
      },
    });

    const data = await response.json();

    setProfileData(data);
    console.log("Fetched data app.js ", profileData._id);
  };

  useEffect(() => {
    fetchProfileData();
    fetchAllProfiles();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path={"/profile-page"}
            element={
              <ProfilePage
                profileData={profileData}
                setProfileData={setProfileData}
                allProfiles={allProfiles}
              />
            }
          />
          <Route
            path={"/profile-page/:userId"}
            element={
              <ProfilePage
                profileData={profileData}
                setProfileData={setProfileData}
                allProfiles={allProfiles}
              />
            }
          />
          <Route
            path={"/feed"}
            element={<Newsfeed profiledata={profileData} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
