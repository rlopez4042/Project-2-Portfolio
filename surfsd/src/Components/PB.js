import { useEffect, useState } from "react";
import spotIDs from "../spotID-data";
import "../App.css";


function PB() {
  //Base URL
  const beachFinder = `https://services.surfline.com/kbyg/spots/reports?spotId=`;

  const [beachData, setBeachData] = useState("");

  const findBeach = async () => {
    fetch(beachFinder + spotIDs[0])
      .then((res) => res.json())
      .then((data) => {
        setBeachData(data);
      });
  };

  useEffect(() => {
    findBeach();
  }, []);

  let displayData = null;
  if (beachData) {
    displayData = (
      
      <div className = "container">

        {/* A summary of the beach, fun factor/other stuff like that */}
        <section className = "summary" >
        {/* The main title and the description  */}
        <h1 id = "mainTitle" >{beachData.spot.name}</h1>
        <p id = "description" >{beachData.spot.travelDetails.description}</p>
          <section id = "specifcs" >
            <p>01. crowd factor: {beachData.spot.travelDetails.crowdFactor.description}</p>
            <p>02. local vibe: {beachData.spot.travelDetails.localVibe.description}</p>
            <p>03. shoulder burn: {beachData.spot.travelDetails.shoulderBurn.description}</p>
            <p>04. spot rating: {beachData.spot.travelDetails.spotRating.description}</p>
            <p>05. water uality: {beachData.spot.travelDetails.waterQuality.description}</p>
          </section>
        </section>

        {/* Current conditions, these update throughout the day */}
        <section className = "currently">
        {/* Currently title */}
        <h1 id = "currently" >Currently:</h1>
        <section id = "conditions" >
            <p>Conditions: {beachData.forecast.conditions.value}</p>
            <p>Wave Range: {beachData.forecast.waveHeight.min} to{" "}{beachData.forecast.waveHeight.max} ft. - {beachData.forecast.waveHeight.humanRelation}</p>
            <p> Tide: {beachData.forecast.tide.current.type}</p>
            <p> Water temp between {beachData.forecast.waterTemp.min} and {beachData.forecast.waterTemp.max}</p>
            <p> Air Temp: {beachData.forecast.weather.temperature} F</p>
            </section>
        </section>
        
      </div>
    );
  }
  return (
    <div>
      {displayData}
      {/* <h1>{test}</h1> */}
    </div>
  );
}
export default PB;
