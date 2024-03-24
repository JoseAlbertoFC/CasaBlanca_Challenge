import React from 'react';
import { Link } from 'react-router-dom';
import "./sideBar.css";

function SideBar({ onSelectedSection }) {
  return (
    <div className="sidebar-container"> 
        <h1 className="sidebar-title">CRM</h1>
        <button onClick={() => onSelectedSection('clients')} className="sidebar-button">Clientes</button>
        <button onClick={() => onSelectedSection('users')} className="sidebar-button">Usuarios</button>
    </div>
  );
}

export default SideBar;
