// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData, title }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: title
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;