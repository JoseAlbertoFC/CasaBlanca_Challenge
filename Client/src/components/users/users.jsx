import React from 'react';
import "./users.css";

const userList = [
  { id: 1, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 2, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 3, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 4, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 5, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 6, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 7, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 8, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 9, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 10, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 11, fullName: 'Nombre Apellido', email: 'email@example.com' },
  { id: 12, fullName: 'Nombre Apellido', email: 'email@example.com' },
];

function Users() {
  return (
    <div className="users-container">
      <h2 className="users-title">Usuarios</h2>
      <div className="users-list">
        {userList.map(user => (
          <div key={user.id} className="user-item">
            <span className="user-name">{user.fullName}</span>
            <span className="user-email">{user.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
