import { BehaviorSubject } from "rxjs";
import ElevationGraph from "./elevationGraph";
import KmsPerHour from "./kmsPerHour";
import Playlist from "./playlist";
import Submit from "./submit";
import TotalKms from "./totalKms";
export const formValues = new BehaviorSubject({
  graphPoints: [],
  playlist: null,
  totalKms: null,
  kmsPerHour: null,
});

function Form() {
  return (
    <>
      <div className="flex flex-column grid text-center">{ElevationGraph()}</div>
      <div className="my-6 text-xl">{Playlist()}</div>
      <div className="my-6 text-xl">{TotalKms()}</div>
      <div className="my-6 text-xl">{KmsPerHour()}</div>
      <div className="my-6 text-xl">{Submit()}</div>
    </>
  );
}

export default Form;
