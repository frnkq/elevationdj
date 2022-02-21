import { Routes } from "../routes";
import { formValues } from "./form";

function Submit() {
  async function sortPlaylist() {
    const payload = formValues.getValue();
    const { path, method } = Routes.sortPlaylist();
    const res = await fetch(path, {
      method: method,
      body: JSON.stringify(payload),
    });
    const body = await res.json();
    console.log(body);
  }

  return (
    <>
      <button
        className="py-2 px-3 bg-purple-700 disabled:opacity-50 rounded text-2xl"
        onClick={sortPlaylist}
      >
        Sort playlist
      </button>
    </>
  );
}

export default Submit;
