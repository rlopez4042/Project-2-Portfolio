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
            <p><span id = "color">01.</span> crowd factor: {beachData.spot.travelDetails.crowdFactor.description}</p>
            <p><span id = "color">02.</span> local vibe: {beachData.spot.travelDetails.localVibe.description}</p>
            <p><span id = "color">03.</span> shoulder burn: {beachData.spot.travelDetails.shoulderBurn.description}</p>
            <p><span id = "color">04.</span> spot rating: {beachData.spot.travelDetails.spotRating.description}</p>
            <p><span id = "color">05.</span> water uality: {beachData.spot.travelDetails.waterQuality.description}</p>
          </section>
        </section>

        {/* Current conditions, these update throughout the day */}
        <section className = "currently">
        {/* Currently title */}
        <h1 id = "currently" >Current Conditions</h1>
        <section id = "conditions" >
        <p>Conditions: <span id ="color2">{beachData.forecast.conditions.value}</span></p>
            <p>Wave Range: <span id ="color2">{beachData.forecast.waveHeight.min} to{" "}{beachData.forecast.waveHeight.max} ft. - {beachData.forecast.waveHeight.humanRelation}.</span></p>
            <p>Wind: <span id ="color2">{beachData.forecast.wind.speed} mph, direction is {" "}{beachData.forecast.wind.directionType}.</span></p>
            <p>Tide: <span id ="color2">{beachData.forecast.tide.current.type}</span></p>
            <p>Water temp between <span id ="color2">{beachData.forecast.waterTemp.min} and {beachData.forecast.waterTemp.max}</span></p>
            <p>Air Temp: <span id ="color2">{beachData.forecast.weather.temperature} F</span></p>
            {/* <video width="750" height="500" controls >
              <source src="https://camrewinds.cdn-surfline.com/live/wc-lajollashores.stream.20220216T180013155.mp4"  type="video/mp4"/>
            </video> */}
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
