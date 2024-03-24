import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../redux/actions";
import "./users.css";

function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user);

  useEffect(() => {
      dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="users-container">
      <h2 className="users-title">Usuarios</h2>
      <div className="users-list">
        {users.map(user => (
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
