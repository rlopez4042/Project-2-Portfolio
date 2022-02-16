import { useEffect, useState } from "react";
import spotIDs from "../spotID-data";

function LJ() {
  //Base URL
  const beachFinder = `https://services.surfline.com/kbyg/spots/reports?spotId=`;

  const [beachData, setBeachData] = useState("");

  const findBeach = async () => {
    fetch(beachFinder + spotIDs[4])
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
      <div>
        <h1 id = "MainTitle" >{beachData.spot.name}</h1>
        <p id = "description">{beachData.spot.travelDetails.description}</p>
        <section id = "summary">
            <p>summary:</p>
            <p>01. crowd Factor: {beachData.spot.travelDetails.crowdFactor.description}</p>
            <p>02. local Vibe: {beachData.spot.travelDetails.localVibe.description}</p>
            <p>03. shoulder Burn: {beachData.spot.travelDetails.shoulderBurn.description}</p>
            <p>04. spot Rating: {beachData.spot.travelDetails.spotRating.description}</p>
            <p>05. water Quality: {beachData.spot.travelDetails.waterQuality.description}</p>
        </section>
        <h1>Currently:</h1>
        <section id="currently">
            <p>Conditions: {beachData.forecast.conditions.value}</p>
            <p>
                Wave Range: {beachData.forecast.waveHeight.min} to{" "}
                {beachData.forecast.waveHeight.max} ft. - {beachData.forecast.waveHeight.humanRelation}
            </p>
            <p> Tide: {beachData.forecast.tide.current.type}</p>
            <p> Water temp between {beachData.forecast.waterTemp.min} and {beachData.forecast.waterTemp.max}</p>
            <p> Air Temp: {beachData.forecast.weather.temperature} F</p>
        </section>
      </div>
    );
  }
  return <div>{displayData}</div>;
}
export default LJ;
