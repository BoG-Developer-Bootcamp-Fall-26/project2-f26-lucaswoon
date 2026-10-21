export default function Train({DELAY, DESTINATION, MARTA_STATION, LINE, WAITING_TIME}) {
    return (
        <div>
            <h4>{MARTA_STATION} --&gt; {DESTINATION.toUpperCase()} STATION</h4>
            <div>{LINE}</div>
            <p>{DELAY === "T0S" ? "On Time" : "Delayed"}</p>
            <p>{WAITING_TIME}</p>
        </div>
    )
}