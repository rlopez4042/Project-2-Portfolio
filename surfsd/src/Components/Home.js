import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useParams } from "react-router-dom";
import spotIDs from "../spotID-data";

function Home(props) {
  //A variable for the spot ID, each beach has a unique spot ID
  //const { spot } = useParams();
  //Base URL, loaded with IB data to isolate bugs
  //const beachFinder = `https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a7708847`;
  //Base URL
  const beachFinder = `https://services.surfline.com/kbyg/spots/reports?spotId=`;
  const [beachData, setBeachData] = useState(null);
  
  //Set initialBeach to null to avoid loading a URL without a spot ID on initial launch
  let initialBeach = null;
  //Gather data from the URL
  const findBeach = async () => {
    var arrayLength = spotIDs.length;
    for (var i = 0; i < arrayLength; i++) {
      fetch(beachFinder + spotIDs[i])
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBeachData(data);
        //initialBeach = data.spot.name;
        });
    }
  };
  useEffect(() => {
    findBeach();
  }, [beachFinder]);

  if (beachData) {
    initialBeach = <div>{beachData.spot.name}</div>;
  }

  return <div>{initialBeach}</div>;
}
export default Home;
