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
import BB from "./Components/BB";
import SC from "./Components/SC";
import WB from "./Components/WB";

function App() {
  let displayData = null;
  let dayOfTime = null;

  var newDate = new Date();

  var time = newDate.getHours();
  console.log(newDate);
  console.log(time);
  if (time > 19 || time < 6) {
    displayData = "Late one tonight";
    dayOfTime = "night";
  } else if (time > 16 && time < 19) {
    displayData = "Catch the Sunset";
    dayOfTime = "sunset";
  } else {
    displayData = "A good day to have a good day";
    dayOfTime = "day";
  }

  return (
    <div className="homepage">
      <h1 id="SDMobile">
        <Link id="homeButton" to="/">
          SD
        </Link>
      </h1>

      <h1 id="SDTablet">
        Surfs{" "}
        <Link id="homeButton" to="/">
          Up
        </Link>
      </h1>

      <h1 id="SD">
        San Diego{" "}
        <Link id="homeButton" to="/">
          Surf
        </Link>{" "}
        Report
      </h1>
      <h4 id="tagline">{displayData}</h4>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pb" element={<PB />} />
          <Route path="/ob" element={<OB />} />
          <Route path="/mb" element={<MB />} />
          <Route path="/cb" element={<CB />} />
          <Route path="/lj" element={<LJ />} />
          <Route path="/bb" element={<BB />} />
          <Route path="/sc" element={<SC />} />
          <Route path="/wb" element={<WB />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
