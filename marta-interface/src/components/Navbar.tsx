export default function Navbar({stationList, onClick}) {
    const stationNavBar = stationList
        .map((station) => {
            const updatedStation = station.toUpperCase() + " STATION";
            return (
                <button 
                    key={station} 
                    className="h-11 w-full border-t" 
                    onClick={() => onClick(updatedStation)}
                >
                    {updatedStation}
                </button>
            )
        })
    return (
        <>
            <h5 className="text-center leading-none">Select your starting station</h5>
            <br></br>
            <button className="h-11 w-full text-center" onClick={() => onClick("ALL STATIONS")}>ALL STATIONS</button>
            {stationNavBar}
        </>
    )
}