import {useState, useEffect} from 'react';
import Navbar from '../components/NavBar';
import TrainList from './TrainList';

export default function LinesPage() {

  const [color, setColor] = useState("GOLD");
  const [stationData, setStationData] = useState([]);
  const [stationList, setStationList] = useState([]);
  const [directions, setDirections] = useState(["Northbound", "Southbound"]);
  const [stationFilter, setStationFilter] = useState("ALL STATIONS");
  const [arrivingFilter, setArrivingFilter] = useState("All");
  const [directionsFilter, setDirectionsFilter] = useState("All");
 

  // get train data for color line
  useEffect(() => {
      const fetchData = async () => {
          const response  = await fetch("https://marta-bootcamp-api.vercel.app/arrivals/" + color);
          
          if (!response.ok) {
              throw new Error("Color data not found.")
          }
          
          const data = await response.json();
          console.log(data);
          setStationData(data);
      }
      fetchData();
  }, [color])
  
  // get list of stations for color line
  useEffect(() => {
    const fetchData = async () => {
        const response  = await fetch("https://marta-bootcamp-api.vercel.app/stations/" + color);
        
        if (!response.ok) {
            throw new Error("Station data not found.")
        }
        
        const data = await response.json();
        setStationList(data);
    }
    fetchData();
  }, [color])

  // reset filtering after color change
  useEffect(() => {
    setStationFilter("ALL STATIONS");

    // change direction buttons
    console.log(color);
    if (color === "RED" || color === "GOLD") {
        setDirections(["Northbound", "Southbound"]);
    } else {
        setDirections(["Eastbound", "Westbound"]);
    }
  }, [color])

  // handle filtering by station
  const handleClickStation = (station: string) => {
    console.log(station);
    if (station === stationFilter) {
      setStationFilter("ALL STATIONS");
    } else {
      setStationFilter(station)
    }
  }

  // handle filtering by arriving/scheduled
  const handleClickArriving = (button: string) => {
    if (arrivingFilter === button) {
        setArrivingFilter("All");
    } else {
        setArrivingFilter(button);
    }
  }

  const handleClickDirection = (button: string) => {
    if (directionsFilter === button) {
        setDirectionsFilter("All");
    } else {
        setDirectionsFilter(button);
    }
  }

  return (
    <>
      <div>
        <button onClick={() => setColor("GOLD")}>GOLD</button>
        <button onClick={() => setColor("RED")}>RED</button>
        <button onClick={() => setColor("BLUE")}>BLUE</button>
        <button onClick={() => setColor("GREEN")}>GREEN</button>
      </div>
      <h2>{color}</h2>
      <div>
        <button onClick={() => handleClickArriving("Arriving")}>Arriving</button>
        <button onClick={() => handleClickArriving("Scheduled")}>Scheduled</button>
        <button onClick={() => handleClickDirection(directions[0])}>{directions[0]}</button>
        <button onClick={() => handleClickDirection(directions[1])}>{directions[1]}</button>
      </div>
      <Navbar stationList={stationList} onClick={handleClickStation}/>
      <TrainList stationData={stationData} stationFilter={stationFilter} arrivingFilter={arrivingFilter} directionsFilter={directionsFilter}/>
    </>
  );
}