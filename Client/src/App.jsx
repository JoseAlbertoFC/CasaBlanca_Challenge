import React, {useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./views/login/login";
import Form from "./views/form/form";
import Home from "./views/home/home";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);
  
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Form />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
