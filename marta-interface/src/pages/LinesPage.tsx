import {useState, useEffect} from 'react';
import Navbar from '../components/NavBar';
import TrainList from './TrainList';

export default function LinesPage() {

  const [color, setColor] = useState("GOLD");
  const [stationData, setStationData] = useState([]);
  const [stationFilter, setStationFilter] = useState("ALL STATIONS");
  const [stationList, setStationList] = useState([]);

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

  // handle filtering by station
  const handleClickStation = (station) => {
    console.log(station);
    if (station === stationFilter) {
      setStationFilter("ALL STATIONS");
    } else {
      setStationFilter(station)
    }
  }

  return (
    <>
      <button onClick={() => setColor("GOLD")}>GOLD</button>
      <button onClick={() => setColor("RED")}>RED</button>
      <button onClick={() => setColor("BLUE")}>BLUE</button>
      <button onClick={() => setColor("GREEN")}>GREEN</button>
      <h2>{color}</h2>
      <Navbar stationList={stationList} onClick={handleClickStation}/>
      <TrainList stationData={stationData} stationFilter={stationFilter}/>
    </>
  );
}