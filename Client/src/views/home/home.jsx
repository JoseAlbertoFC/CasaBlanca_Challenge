import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/sideBar/sideBar";
import Clients from "../../components/clients/clients";
import Users from "../../components/users/users";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./home.css";

function Home() {
  const [selectedSection, setSelectedSection] = useState("clients");
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <SideBar onSelectedSection={setSelectedSection} />
      <div className="main-content">
        <header className="user-header">
        <h2 className="user-name">
            {userName || "Nombre de Usuario"}
            <FontAwesomeIcon icon={faUser} /> 
          </h2>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </header>
        <div className="content">
          {selectedSection === "clients" && <Clients />}
          {selectedSection === "users" && <Users />}
        </div>
      </div>
    </div>
  );
}

export default Home;
