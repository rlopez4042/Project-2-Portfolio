import "./App.css";
import "./App.scss";
import React, { useState } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import PB from "./Components/BeachComponents/PB";
import OB from "./Components/BeachComponents/OB";
import MB from "./Components/BeachComponents/MB";
import CB from "./Components/BeachComponents/CB";
import LJ from "./Components/BeachComponents/LJ";
import BB from "./Components/BeachComponents/BB";
import SC from "./Components/BeachComponents/SC";
import WB from "./Components/BeachComponents/WB";
import AboutMe from "./Components/AboutMe";
import tags from "./randomQuotes";

function App() {

  let displayData = null;
  var items = tags;
  var item = items[Math.floor(Math.random() * items.length)];
  displayData = item;

  // ----------------------------------------------------------------Code Snippet----------------------------------------------------------------
  
    //This night time / day time theme only works on start up
  //if the code is altered, the page refreshes and the
  //ids get confusing and it wont render anything

  // let displayData = null;
  //Create a new variable for the Date
  var newDate = new Date();
  //Use getHours() to get the Hour of the day
  var time = newDate.getHours();
  console.log(time);
  //Preset the body for day time on start up
  document.getElementById("body").id = "body1";
  //If statement for if the hour from new date is greater than 7pm and less than 6am, its night time
  if (time > 17.5 || time < 6) {
    document.getElementById("body1").id = "body2";
    displayData = item;
    //Once day hits at 6am, day time theme starts again.
  } else {
    document.getElementById("body1").id = "body1";
    // displayData=("")
  }

  // ----------------------------------------------------------------Code Snippet----------------------------------------------------------------


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
