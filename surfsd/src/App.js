import "./App.css";
import React, { useState } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Spot from "./Components/Spot";
import Favorites from "./Components/Favorites";

function App() {
  const [team, addTeam] = useState([]);

  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/favorites">
            <h1>My Favorites</h1>
          </Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;