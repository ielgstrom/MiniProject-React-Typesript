import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BsSquare } from "react-icons/bs";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
