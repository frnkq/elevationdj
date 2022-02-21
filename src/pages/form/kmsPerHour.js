import { formValues } from "./form";

function KmsPerHour() {
  const onInputCapture = (e) => {
    const current = formValues.getValue();
    current.kmsPerHour = e.nativeEvent.target.value;
    formValues.next(current);
  };
  return (
    <>
      <p>Kilometers Per hour</p>
      <input
        onInputCapture={onInputCapture}
        className="rounded border-4 border-purple-400 p-2 mt-2"
        type="number"
        placeholder="KMs/h"
      ></input>
    </>
  );
}

export default KmsPerHour;
