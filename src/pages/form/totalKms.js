import { formValues } from "./form";

function TotalKms() {
  const onInputCapture = (e) => {
    const current = formValues.getValue();
    current.totalKms = e.nativeEvent.target.value;
    formValues.next(current);
  };
  return (
    <>
      <p>Total Kilometers</p>
      <input
        onInputCapture={onInputCapture}
        className="rounded border-4 border-purple-400 p-2 mt-2"
        type="number"
        placeholder="KMs"
      ></input>
    </>
  );
}

export default TotalKms;
