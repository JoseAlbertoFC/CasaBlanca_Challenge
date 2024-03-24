import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password)
      const response = await axios.post('http://localhost:3001/users/loginUser', {
        email,
        password
      });

      const { userId, userName, accessToken } = response.data;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      window.alert("Hubo un problema al intentar ingresar.");
    }
  };
  

  return (
    <div className="login-page-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">CRM</h2>
        <div className="login-input-container">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="login-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-container">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            className="login-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <h5 className="signUp-link">
          ¿Aun no te haz registrado? Para registrarte haz 
          <Link to="/signup" className="signUp-link-anchor"> click aqui</Link>.
        </h5>
        <button className="login-button" type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;


