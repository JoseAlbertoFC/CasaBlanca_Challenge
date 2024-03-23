import React from "react";
import SideBar from "../../components/sideBar/sideBar";
import Clients from "../../components/clients/clients";
import Users from "../../components/users/users";

function Home() {
  return (
    <div>
      <h2>Nombre del Usuario</h2>
      <SideBar />
      <Clients />
      <Users />
    </div>
  );
}

export default Home;
