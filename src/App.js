import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import PersonalTraining from "./Pages/PersonalTraining";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
      </Routes>
    </div>
  );
}

export default App;
