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
import AboutMe from "./Components/AboutMe";

function App() {

//This night time / day time theme only works on start up
//if the code is altered, the page refreshes and the 
//ids get confusing and it wont render anything

  let displayData = null;
  //Create a new variable for the Date
  var newDate = new Date();
  //Use getHours() to get the Hour of the day
  var time = newDate.getHours();
  //Preset the body for day time on start up
  document.getElementById('body').id="body1";
  //If statement for if the hour from new date is greater than 7pm and less than 6am, its night time
  if (time > 19 || time < 6) {
    document.getElementById('body1').id="body2";
    //Once day hits at 6am, day time theme starts again.
  } else {
    document.getElementById('body1').id="body1";
  }

  return (
    <div className="homepage">
      <Link to="/aboutme">
        <button className="button">About Me</button>
      </Link>

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
          <Route path="/aboutme" element={<AboutMe />} />
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
