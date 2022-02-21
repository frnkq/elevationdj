import { formValues } from "./form";

function Submit() {
  function sortPlaylist() {
    console.log("submit", formValues.getValue());
  }

  return (
    <>
      <button
        className="py-2 px-3 bg-purple-700 disabled:opacity-50 rounded text-2xl"
        onClick={sortPlaylist}
      >
        Ordenar playlist
      </button>
    </>
  );
}

export default Submit;
