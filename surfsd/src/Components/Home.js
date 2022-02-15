import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useParams } from "react-router-dom";

function Home(props) {
  //A variable for the spot ID, each beach has a unique spot ID
  const [beach,setBeach]=useState([
    {name:"Pacific Beach",spotID:"5842041f4e65fad6a7708841"},
    {name:"Ocean Beach",spotID:"5842041f4e65fad6a770883f"},
    {name:"Imperial Beach",spotID:"5842041f4e65fad6a7708847"},
])
  const { spot } = useParams();
  //Base URL
  const beachFinder = `https://services.surfline.com/kbyg/spots/reports?spotId=5842041f4e65fad6a7708847`;
  const [beachData, setBeachData] = useState(null);
  //Set initialBeach to null to avoid loading a URL without a spot ID on initial launch
  let initialBeach = null;
  //Gather data from the URL
  const findBeach = () => {
    fetch(beachFinder)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeachData(data);
      });
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