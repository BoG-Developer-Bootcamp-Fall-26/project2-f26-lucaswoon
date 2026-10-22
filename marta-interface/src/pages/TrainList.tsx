import Train from '../components/Train';

export default function TrainList({stationData, stationFilter, arrivingFilter, directionsFilter}) {

  // filter trains by filtered station and display them
  
  const trains = stationData
    // filter by station
    .filter((train) => {
      if (stationFilter === "ALL STATIONS") {
        return train;
      } else {
        return train.MARTA_STATION === stationFilter;
      }
    })
    // filter by arriving
    .filter((train) => {
      if (arrivingFilter === "All") {
        return train;
      } else if (arrivingFilter === "Arriving") {
        return train.WAITING_TIME === "Arriving";
      } else {
        return train.WAITING_TIME !== "Arriving";
      }
    })
    // filter by direction
    .filter((train) => {
      if (directionsFilter === "All") {
        return train;
      } else {
        return train.DIRECTION === directionsFilter[0];
      }
    })
    .map((train) => {
      // if you have time fine unique keys (train.TRAIN_ID is not unique)
      return (
        <Train {...train}/>
      )
  })

  return (
    <>
      {trains}
    </>
  );
}