import {useState, useEffect} from 'react';
import Navbar from '../components/NavBar';
import TrainList from './TrainList';
import { useParams } from 'react-router';
import { Link } from 'react-router';

export default function LinesPage() {


  const paramColor = useParams().color;
  const [color, setColor] = useState("GOLD");
  const [stationData, setStationData] = useState([]);
  const [stationList, setStationList] = useState([]);
  const [directions, setDirections] = useState(["Northbound", "Southbound"]);
  const [stationFilter, setStationFilter] = useState("ALL STATIONS");
  const [arrivingFilter, setArrivingFilter] = useState("All");
  const [directionsFilter, setDirectionsFilter] = useState("All");

  // get color data from dynamic link 
  // (idk how to make it such that if its not any of the colours or undefined to redirect to Not Found Page)
  useEffect(() => {
    if (
      paramColor &&
      ["GOLD", "RED", "BLUE", "GREEN"].includes(paramColor.toUpperCase())
    ) {
      setColor(paramColor.toUpperCase());
    }
  }, [paramColor]);

  // get train data for color line
  useEffect(() => {
      const fetchData = async () => {
          const response  = await fetch("https://marta-bootcamp-api.vercel.app/arrivals/" + color);
          
          if (!response.ok) {
              throw new Error("Color data not found.")
          }
          
          const data = await response.json();
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
    if (color === "RED" || color === "GOLD") {
        setDirections(["Northbound", "Southbound"]);
    } else {
        setDirections(["Eastbound", "Westbound"]);
    }
  }, [color])

  // handle filtering by station
  const handleClickStation = (station: string) => {
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
    <div className="bg-white text-black">
      <div className="flex items-center justify-evenly gap-2 border-b border-gray-300 px-4 py-2">
        <Link to="/lines/GOLD" className="w-1/5 border border-black bg-[#ffd400] px-2 py-2 text-center font-semibold text-white hover:brightness-95">
          Gold
        </Link>
  
        <Link to="/lines/RED" className="w-1/5 border border-black bg-[#ff0000] px-2 py-2 text-center font-semibold text-white hover:brightness-95">
          Red
        </Link>
  
        <Link to="/lines/BLUE" className="w-1/5 border border-black bg-[#1600ff] px-2 py-2 text-center font-semibold text-white hover:brightness-95">
          Blue
        </Link>
  
        <Link to="/lines/GREEN" className="w-1/5 border border-black bg-[#008000] px-2 py-2 text-center font-semibold text-white hover:brightness-95">
          Green
        </Link>
      </div>
      <header className="flex items-center justify-center border-b border-gray-300">
        <h1 className="text-4xl font-bold">
          {color}
        </h1>
      </header>
  
      <div className="flex items-stretch">
        {/*not sure how to make navbar stretch down when there are many trains*/}
        <div className="min-h-[calc(100vh-100px)] h-full w-1/4 shrink-0 bg-[#231f20] px-5 py-4 text-white">
          <Navbar stationList={stationList} onClick={handleClickStation}/>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-evenly gap-3 border-b border-black px-3 py-4">
            {[ "Arriving", "Scheduled", directions[0], directions[1] ].map(
              (button) => (
                <button key={button} onClick={() => {
                    if (button === "Arriving" || button === "Scheduled") {
                      handleClickArriving(button);
                    } else {
                      handleClickDirection(button);
                    }
                  }}
                  className="min-w-28 rounded-lg border border-gray-600 px-5 py-2 font-medium hover:bg-gray-100"
                >
                  {button}
                </button>
              )
            )}
          </div>
  
          <TrainList
            stationData={stationData}
            stationFilter={stationFilter}
            arrivingFilter={arrivingFilter}
            directionsFilter={directionsFilter}
          />
        </div>
      </div>
    </div>
  );
}  