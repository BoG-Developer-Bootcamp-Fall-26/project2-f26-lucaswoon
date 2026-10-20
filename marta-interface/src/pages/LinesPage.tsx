import { useState, useEffect } from 'react'
import TrainList from "./TrainList"
  
export default function LinesPage() {
    const [color, setColor] = useState('gold');
    

    return (
        <TrainList color={color}/>
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