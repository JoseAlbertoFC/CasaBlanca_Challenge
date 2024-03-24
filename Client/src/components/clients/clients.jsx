import React from "react";
import { useState } from "react";
import AddClient from "../addClient/addClient";
import "./clients.css";

const clientList = [
  { id: 1, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 2, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 3, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 4, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 5, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 6, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 7, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 8, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 9, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 10, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 11, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 12, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
  { id: 13, fullName: 'Nombre Apellido', age: 'Edad', email: 'Email', phoneNum: 'Teléfono', status: 'Status' },
];

function Clients() {
  const [addingClient, setAddingClient] = useState(false);

  const handleAddClientClick = () => {
    setAddingClient(true);
  };

  const handleBackClick = () => {
    setAddingClient(false);
  };

  if (addingClient) {
    return <AddClient onBackClick={handleBackClick} />;
  }

  return (
    <div className="clients-container">
      <h2 className="clients-title">Mis Clientes</h2>
      <button className="add-client-button" onClick={handleAddClientClick}>Añadir Cliente</button>
      <div className="clients-list">
        {clientList.map(client => (
          <div key={client.id} className="client-item">
            <span>{client.fullName}</span>
            <span>{client.age}</span>
            <span>{client.email}</span>
            <span>{client.phoneNum}</span>
            <span>{client.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
