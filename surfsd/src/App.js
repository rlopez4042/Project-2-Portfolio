import "./App.css";
import "./App.scss";
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
      <h1 id="SDMobile">SD</h1>
      <h1 id="SD">San Diego Surf Report</h1>
          <h4 id="tagline">Updated surf reports for the best beaches in San Diego. Take your pick and get after it</h4>

      <nav>
        <ul className = "navbar">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/pb">
            <p>Pacific Beach</p>
          </Link>
          <Link to="/ob">
            <p>Ocean Beach</p>
          </Link>
          <Link to="/mb">
            <p>Mission Beach</p>
          </Link>
          <Link to="/cb">
            <p>Cornado Beach</p>
          </Link>
          <Link to="/lj">
            <p>La Jolla</p>
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
