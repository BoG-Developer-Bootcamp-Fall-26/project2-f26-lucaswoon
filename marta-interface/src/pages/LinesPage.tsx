import {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import TrainList from './TrainList';
import Train from '../components/Train';

export default function LinesPage() {

  const [color, setColor] = useState("gold");
  const [stationData, setStationData] = useState([]);
  const [stationFilter, setStationFilter] = useState("All Stations");
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
  const handleClick = (station) => {
    console.log(station);
    if (station === stationFilter) {
      setStationFilter("All Stations");
    } else {
      setStationFilter(station)
    }
  }

  return (
    <>
      <Navbar stationList={stationList} onClick={handleClick}/>
      <TrainList stationData={stationData} stationFilter={stationFilter}/>
    </>
  );
}