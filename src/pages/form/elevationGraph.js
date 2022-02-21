import { formValues } from "./form";

function ElevationGraph() {
  function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return {x:  x, y: y };
  }

  const addPointToGraph = (event) => {
    const canvas = document.getElementById("graph");
    const { x, y } = getCursorPosition(canvas, event);
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
    ctx.fill();
    const currentValues = formValues.getValue();
    currentValues.graphPoints.push({x: x, y:y})
  };

  return (
    <>
      <div className="text-xl">
        <p>Elevation graph</p>
        <canvas
          onClick={addPointToGraph}
          id="graph"
          height="400"
          width="768"
          className="m-auto border-8 mt-2 border-rose-500"
          onMouseDown={addPointToGraph}
        ></canvas>
      </div>
    </>
  );
}

export default ElevationGraph;
