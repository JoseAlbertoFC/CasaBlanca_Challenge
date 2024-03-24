import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/login/login";
import Form from "./views/form/form";
import Home from "./views/home/home";

function App() {
  const PrivateRoute = ({ children }) => {
    const accessToken = localStorage.getItem("accessToken");

    return accessToken ? children : <Navigate to="/login" replace />;
  };
  
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Form />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
