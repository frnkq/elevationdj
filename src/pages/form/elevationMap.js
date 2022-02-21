import { formValues } from "./form";

function ElevationMap() {
  const onInputCapture = (e) => {
    const current = formValues.getValue();
    current.elevationMap = e.nativeEvent.target.value;
    formValues.next(current);
  };
  return (
    <>
      <div className="my-6 text-xl">
        <p>Mapa de elevación</p>
      </div>
    </>
  );
}

export default ElevationMap;
