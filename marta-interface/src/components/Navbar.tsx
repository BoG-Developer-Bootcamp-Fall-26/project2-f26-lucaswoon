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
            <button onClick={() => onClick("ALL STATIONS")}>ALL STATIONS</button>
            {stationNavBar}
        </>
    )
}