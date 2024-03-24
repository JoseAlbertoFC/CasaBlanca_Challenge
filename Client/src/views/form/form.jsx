import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./form.css";

function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const newUser = { fullName, email, password };
      await axios.post('http://localhost:3001/users/createUser', newUser);
      alert("Registro exitoso. Por favor, ingresa con tu cuenta.");
      navigate('/login');
    } catch (error) {
      console.error('Error de registro:', error);
      alert("Hubo un problema al intentar registrarse.");
    }
  };

  return (
    <div className="form-container">
      <form className="registration-form" onSubmit={handleRegister}>
        <h2 className="form-title">Registro</h2>
        <div className="form-input-container">
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
        <div className="form-input-container">
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
        <div className="form-input-container">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-input-container">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repetir Contraseña"
            className="form-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <h5 className="login-link">¿Ya estas registrado? Para ingresar 
        <Link to="/login" className="login-link-anchor"> click aqui</Link>.
        </h5>
        <button className="form-button" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Form;
