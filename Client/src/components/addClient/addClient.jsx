import React, { useState } from "react";
import axios from "axios";
import "./addClient.css";

function AddClient({ onBackClick, fetchClients }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("No se ha encontrado el ID del usuario.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/clients/createClient",
        {
          fullName,
          email,
          age: parseInt(age, 10),
          phoneNum: phone,
          status: "Habilitado",
          userId,
        }
      );

      console.log("Cliente añadido:", response.data);
      alert("Cliente añadido exitosamente.");
      fetchClients();
      onBackClick();
    } catch (error) {
      alert("Ya tienes registrado un Cliente con este email.");
    }
  };

  return (
    <div className="add-client-container">
      <button className="back-button" onClick={onBackClick}>
        &lt;
      </button>
      <h2 className="add-client-title">Añadir Cliente</h2>
      <form className="add-client-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Nombre y Apellido"
            className="form-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Edad"
            className="form-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Numero de Teléfono"
            className="form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-client-button">
          Añadir
        </button>
      </form>
    </div>
  );
}

export default AddClient;
