import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Album from "./Pages/Album";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/album/:albumIdentifier" element={<Album />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
