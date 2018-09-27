import * as React from "react";
import * as CanvasJSReact from "./canvas/canvasjs.react";

class Chart extends React.Component {
  public render() {
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
      animationEnabled: true,
      data: [
        {
          dataPoints: [
            { label: "apple", y: 10 },
            { label: "orange", y: 15 },
            { label: "banana", y: 25 },
            { label: "mango", y: 30 },
            { label: "grape", y: 28 }
          ],
          type: "column"
        }
      ],
      theme: "dark2",
      title: {
        text: "My First Chart in CanvasJS"
      }
    };
    return <CanvasJSChart options={options} />;
  }
}

export default Chart;
