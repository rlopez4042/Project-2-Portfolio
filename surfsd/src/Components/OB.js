import { useEffect, useState } from "react";
import spotIDs from "../spotID-data";

function OB() {
  //Base URL
  const beachFinder = `https://services.surfline.com/kbyg/spots/reports?spotId=`;

  const [beachData, setBeachData] = useState("");

  const findBeach = async () => {
    fetch(beachFinder + spotIDs[1])
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
        <h1 id = "pb" >{beachData.spot.name}</h1>
        <p>.01 summary: </p>
        <p>.02. crowd Factor: {beachData.spot.travelDetails.crowdFactor.description}</p>
        <p>.03 local Vibe: {beachData.spot.travelDetails.localVibe.description}</p>
        <p>.04 shoulder Burn: {beachData.spot.travelDetails.shoulderBurn.description}</p>
        <p>.05 spot Rating: {beachData.spot.travelDetails.spotRating.description}</p>
        <p>.06 water Quality: {beachData.spot.travelDetails.waterQuality.description}</p>
        <p>Description: {beachData.spot.travelDetails.description}</p>
        {/* <p>Description: {beachData.spot.travelDetails.crowdFactor.description}</p> */}
        <h1>Currently: </h1>
        <h3>Conditions: {beachData.forecast.conditions.value}</h3>
        <h3>
          Wave Range: {beachData.forecast.waveHeight.min} to{" "}
          {beachData.forecast.waveHeight.max} ft. - {beachData.forecast.waveHeight.humanRelation}
        </h3>
        <h4> Tide: {beachData.forecast.tide.current.type}</h4>
        <h4> Water temp between {beachData.forecast.waterTemp.min} and {beachData.forecast.waterTemp.max}</h4>
        <h4> Air Temp: {beachData.forecast.weather.temperature} F</h4>
        {/* <h3>Conditions: {beachData.report.body}</h3> */}
      </div>
    );
  }
  return <div>{displayData}</div>;
}
export default OB;
