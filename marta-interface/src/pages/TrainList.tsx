import Train from '../components/Train';

export default function TrainList({stationData, stationFilter}) {

  // filter trains by filtered station and display them
  
  const trains = stationData
    .filter((train) => {
      if (stationFilter === "ALL STATIONS") {
        return train;
      } else {
        return train.MARTA_STATION === stationFilter;
      }
    })
    .map((train) => {
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