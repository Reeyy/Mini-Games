import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./Components/Main";
import LandingPage from "./Components/LandingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="Main" element={<Main />} />
    </Routes>
  );
}

export default App;
