import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import PersonalTraining from "./Pages/PersonalTraining";
import { Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Store from './Pages/Store';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Cart from '../src/Pages/Store/components/Cart/';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes >
    </div >
  );
}

export default App;
