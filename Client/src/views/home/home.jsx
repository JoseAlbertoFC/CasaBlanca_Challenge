import React from "react";
import { useState } from "react";
import SideBar from "../../components/sideBar/sideBar";
import Clients from "../../components/clients/clients";
import Users from "../../components/users/users";

function Home() {
  const [selectedSection, setSelectedSection] = useState('clients');

  return (
    <div className="home-container">
      <SideBar onSelectedSection={setSelectedSection} />
      {selectedSection === 'clients' && <Clients />}
      {selectedSection === 'users' && <Users />}
    </div>
  );
}

export default Home;
