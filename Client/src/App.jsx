import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/home";
import Form from "./views/form/form";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
