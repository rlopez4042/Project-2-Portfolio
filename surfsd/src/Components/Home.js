import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useParams } from "react-router-dom";
import spotIDs from "../spotID-data";

function Home(props) {
  //A variable for the spot ID, each beach has a unique spot ID
  //const { spot } = useParams();
  //Base URL
  const beachFinder = `https://services.surfline.com/kbyg/spots/reports?spotId=`;
  const [beachList, setBeachList] = useState([]);
  const [beachData, setBeachData] = useState("");

  //Set initialBeach to null to avoid loading a URL without a spot ID on initial launch
  let displayData = null;
  //Gather data from the URL
  const findBeach = async () => {
    var arrayLength = spotIDs.length;
    for (var i = 0; i < arrayLength; i++) {
      fetch(beachFinder + spotIDs[i])
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBeachList(data);
          setBeachData(data);
        });
    }
  };
  useEffect(() => {
    findBeach();
  }, []);

    const displayBeachList = beachList.map((beach, index) => {
      return <p key ={index}>{beach.spot.name}</p>;
    });

    console.log(displayBeachList)

  if (beachData) {
    displayData = (
      <div>
        <h1>{beachList.spot.name}</h1>
        <h3>
          Wave Range: {beachList.forecast.waveHeight.min} to{" "}
          {beachList.forecast.waveHeight.max} ft.
        </h3>
        <h4>{beachList.forecast.waveHeight.humanRelation}</h4>
        <h3>Conditions: {beachList.forecast.conditions.value}</h3>
        <h3>Conditions: {beachList.report.body}</h3>
      </div>
    );
  }

  return (
    <div>
      {displayData}
      {displayBeachList}
    </div>
  );
}

export default Home;
