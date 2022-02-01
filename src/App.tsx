import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Privacy from "./Privacy";
import Agreement from "./Agreement";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <h1>
        <a href="/">Karaoke Tool</a>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="agreement" element={<Agreement />} />
      </Routes>
    </div>
  );
}

export default App;
