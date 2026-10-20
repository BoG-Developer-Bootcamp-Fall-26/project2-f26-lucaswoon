/*
This component should have a prop specifying the line color 
(i.e. blue, gold, red, or green), and would contain the 
interface for all trains in the given line. The current line 
that's being displayed should be stored as a state in the 
LinesPage component. Here's some barebones code for some idea 
of what the structure should look like:
*/
import {useState, useEffect} from 'react'
import Train from '../components/Train';

export default function LinesPage({color}) {

  const [stationData, setStationData] = useState([]);

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
  }, [])
  
  const trains = stationData.map((train) => {
    return (
      <Train {...train}/>
    )
  })
  return (
    <p>{trains}</p>
    /*
    <div>
      // YOUR JSX CODE
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
      // YOUR JSX CODE
    </div>
    */
  );
}