import "./App.css";
import React, { useState } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import PB from "./Components/PB";
import OB from "./Components/OB";
import MB from "./Components/MB";
import CB from "./Components/CB";
import LJ from "./Components/LJ";

function App() {
  const [team, addTeam] = useState([]);

  return (
    
    <div className = "homepage">
      <nav>
        <ul className = "navbar">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/pb">
            <h1>PB</h1>
          </Link>
          <Link to="/ob">
            <h1>OB</h1>
          </Link>
          <Link to="/mb">
            <h1>MB</h1>
          </Link>
          <Link to="/cb">
            <h1>CB</h1>
          </Link>
          <Link to="/lj">
            <h1>LJ</h1>
          </Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pb" element={<PB />} />
          <Route path="/ob" element={<OB />} />
          <Route path="/mb" element={<MB />} />
          <Route path="/cb" element={<CB />} />
          <Route path="/lj" element={<LJ />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
