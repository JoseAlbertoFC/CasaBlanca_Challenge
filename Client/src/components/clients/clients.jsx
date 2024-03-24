import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import AddClient from "../addClient/addClient";
import "./clients.css";

function Clients() {
  const [addingClient, setAddingClient] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      try {
        const response = await axios.get(`http://localhost:3001/clients/showClients`, {
          headers: { userId }
        });
        setClients(response.data);
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
      }
    }
  };

  const toggleClientStatus = async (client) => {
    const updatedClient = {
      ...client,
      status: client.status === 'Habilitado' ? 'Deshabilitado' : 'Habilitado'
    };

    try {
      await axios.put(`http://localhost:3001/clients/updateClient/${client.id}`, updatedClient);
      fetchClients(); 
    } catch (error) {
      console.error('Error al cambiar el estado del cliente:', error);
    }
  };
  

  const deleteClient = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
      try {
        await axios.delete(`http://localhost:3001/clients/deleteClient/${id}`);
        fetchClients(); 
      } catch (error) {
        console.error('Error al eliminar el cliente:', error);
      }
    }
  };

  const handleAddClientClick = () => {
    setAddingClient(true);
  };

  const handleBackClick = () => {
    setAddingClient(false);
    fetchClients();
  };

  if (addingClient) {
    return <AddClient onBackClick={handleBackClick} fetchClients={fetchClients}/>;
  }

  return (
    <div className="clients-container">
      <h2 className="clients-title">Mis Clientes</h2>
      <button className="add-client-button" onClick={handleAddClientClick}>Añadir Cliente</button>
      <div className="clients-list">
        {clients.map(client => (
          <div key={client.id} className="client-item">
            <span>{client.fullName}</span>
            <span>{client.age}</span>
            <span>{client.email}</span>
            <span>{client.phoneNum}</span>
            <span>
              <label>
                <input
                  type="checkbox"
                  checked={client.status === 'Habilitado'}
                  onChange={() => toggleClientStatus(client)}
                /> {client.status}
              </label>
            </span>
            <button onClick={() => deleteClient(client.id)} className="delete-client-button">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
