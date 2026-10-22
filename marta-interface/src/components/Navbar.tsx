export default function Navbar({stationList, onClick}) {
    const stationNavBar = stationList
        .map((station) => {
            const updatedStation = station.toUpperCase() + " STATION";
            return (
                <button key={station} onClick={() => onClick(updatedStation)}>{updatedStation}</button>
            )
        })
    return (
        <>
            <h5>Select your starting station</h5>
            <button onClick={() => onClick("ALL STATIONS")}>ALL STATIONS</button>
            {stationNavBar}
        </>
    )
}