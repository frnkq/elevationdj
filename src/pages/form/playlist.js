import { formValues } from "./form";

function Playlist() {
  const onInputCapture = (e) => {
    const current = formValues.getValue();
    current.playlist = e.nativeEvent.target.value;
    formValues.next(current);
  };
  return (
    <>
      <p>Playlist</p>
      <input
        onInputCapture={onInputCapture}
        className="rounded border-4 border-purple-400 p-2 mt-2"
        type="text"
        placeholder="Playlist"
      ></input>
    </>
  );
}

export default Playlist;
