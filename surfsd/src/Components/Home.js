
import { Link } from "react-router-dom";

function Home() {

  let homePageMenu = (
    <div className="container">
      <ul className = "homeNav">

          <Link to="/pb">
            <p id="hl">Pacific Beach</p>
          </Link>
          <Link to="/ob">
            <p id="hl">Ocean Beach</p>
          </Link>
          <Link to="/mb">
            <p id="hl">Mission Beach</p>
          </Link>
          <Link to="/cb">
            <p id="hl">Cornado Beach</p>
          </Link>
          <Link to="/lj">
            <p id="hl">La Jolla</p>
          </Link>
          <Link to="/bb">
            <p id="hl">Blacks</p>
          </Link>
          <Link to="/sc">
            <p id="hl">Sunset Cliffs</p>
          </Link>
          
        </ul>
    </div>
  )
  return <div>{homePageMenu}</div>
  
}

export default Home;

// ----------------------------------------------------------------Original----------------------------------------------------------------

// import { render } from "@testing-library/react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // import axios from "axios";
// import { useParams } from "react-router-dom";
// import spotIDs from "../spotID-data";
// // import Spot from "./Spot";

// function Home() {
//   //Base URL
//   const beachFinder = `https://services.surfline.com/kbyg/spots/reports?spotId=`;

//   const [beachList, setBeachList] = useState([]);
//   const [beachData, setBeachData] = useState("");

//   //Gather data from the URL
//   const findBeach = async () => {
//     var arrayLength = spotIDs.length;
//     for (var i = 0; i < arrayLength; i++) {
//       fetch(beachFinder + spotIDs[i])
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setBeachList(data);
//           setBeachData(data);
//         });
//     }
//   };
//   useEffect(() => {
//     findBeach();
//   }, [beachFinder]);

//   const fullList = beachData.map((item) => {
//     return (<h1>{item}</h1>);});

//   let displayData = null;
//   //Display Beach Data
//   if (beachData) {
//     displayData = (
//       <div>
//         <h1 id = "MainTitle" >{beachData.spot.name}</h1>
//         <p id = "description">{beachData.spot.travelDetails.description}</p>
//         <section id = "summary">
//             <p>summary:</p>
//             <p>01. crowd Factor: {beachData.spot.travelDetails.crowdFactor.description}</p>
//             <p>02. local Vibe: {beachData.spot.travelDetails.localVibe.description}</p>
//             <p>03. shoulder Burn: {beachData.spot.travelDetails.shoulderBurn.description}</p>
//             <p>04. spot Rating: {beachData.spot.travelDetails.spotRating.description}</p>
//             <p>05. water Quality: {beachData.spot.travelDetails.waterQuality.description}</p>
//         </section>
//         <h1>Currently:</h1>
//         <section id="currently">
//             <p>Conditions: {beachData.forecast.conditions.value}</p>
//             <p>
//                 Wave Range: {beachData.forecast.waveHeight.min} to{" "}
//                 {beachData.forecast.waveHeight.max} ft. - {beachData.forecast.waveHeight.humanRelation}
//             </p>
//             <p> Tide: {beachData.forecast.tide.current.type}</p>
//             <p> Water temp between {beachData.forecast.waterTemp.min} and {beachData.forecast.waterTemp.max}</p>
//             <p> Air Temp: {beachData.forecast.weather.temperature} F</p>
//         </section>
//       </div>
//     );
//   }

//   return <div>{displayData}{fullList}</div>;
// }

// export default Home;

// ----------------------------------------------------------------Original----------------------------------------------------------------
