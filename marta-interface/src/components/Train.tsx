export default function Train({ DELAY, DESTINATION, MARTA_STATION, LINE, WAITING_TIME }) {
    const lineColor = {
        GOLD: "bg-[#ffd400]",
        RED: "bg-[#ff0000]",
        BLUE: "bg-[#1600ff]",
        GREEN: "bg-[#008000]",
    }[LINE?.toUpperCase()] ?? "bg-gray-500";
    // bg-gray-500 if not recognised

    const isOnTime = DELAY === "T0S";

    return (
      <div className="flex items-center gap-5 border-b-2 border-black px-3 py-2">

        <div className="w-20 shrink-0 text-center font-serif text-6xl">M</div>
  
        <div className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-1">
          <div className="min-w-0">
            <h4 className="text-lg uppercase">{MARTA_STATION} --&gt; {DESTINATION.toUpperCase()} STATION</h4>
            <div className="flex flex-wrap items-center gap-8">
              <div className={`rounded-md ${lineColor} px-1.5 py-0.5 text-white`}>{LINE}</div>
              <div className={isOnTime ? "text-green-700" : "text-red-500"}>
                {isOnTime ? "On Time" : "Delayed"}
              </div>
            </div>
          </div>

          <p className="whitespace-nowrap text-lg text-green-700">
            {WAITING_TIME}
          </p>
        </div>
      </div>
    );
  }