/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { SparklineContext } from "../State/GlobalContext";

export function BTCChart() {
  const [dataChart, setDataChart] = useState({});
  const [sparkline, setSparkline] = useContext(SparklineContext);

  /**chart js styling options */
  const chartOptions = {
    tooltips: {
      enabled: false,
    },
    elements: {
      point: { radius: 0 },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{ display: false }],
      yAxes: [{ display: false }],
    },
  };

  /**creating empty arrays for the chart data and pushing the props gotten from home component */
  useEffect(() => {
    let prices = [];
    let timestamps = [];

    if (sparkline.length) {
      sparkline[0].prices.forEach((item) => {
        prices.push(Math.round(item[1] * 100) / 100);
      });
      sparkline[0].prices.forEach((item) => {
        timestamps.push(item[0]);
      });
    }

    setDataChart({
      labels: timestamps,
      datasets: [
        {
          label: "prices",
          data: prices,
          borderColor: "rgba(17, 51, 83, 0.5)",
          fill: false,
          borderWidth: 2.5,
        },
      ],
    });
  }, [sparkline]);

  return (
    <div className="sparkline-container">
      <Line data={dataChart} options={chartOptions} />
    </div>
  );
}

export function ETHChart() {
  const [dataChart, setDataChart] = useState({});
  const [sparkline, setSparkline] = useContext(SparklineContext);
  /**chart js styling options */
  const chartOptions = {
    // maintainAspectRatio: false,
    tooltips: {
      enabled: false,
    },
    elements: {
      point: { radius: 0 },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{ display: false }],
      yAxes: [{ display: false }],
    },
  };

  /**creating empty arrays for the chart data and pushing the props gotten from home component */

  useEffect(() => {
    let prices = [];
    let timestamps = [];

    if (sparkline.length) {
      sparkline[1].prices.forEach((item) => {
        prices.push(Math.round(item[1] * 100) / 100);
      });
      sparkline[1].prices.forEach((item) => {
        timestamps.push(item[0]);
      });
    }

    setDataChart({
      labels: timestamps,
      datasets: [
        {
          label: "prices",
          data: prices,
          borderColor: "rgba(17, 51, 83, 0.5)",
          fill: false,
          borderWidth: 2.5,
        },
      ],
    });
  }, [sparkline]);

  return (
    <div className="sparkline-container">
      <Line data={dataChart} options={chartOptions} />
    </div>
  );
}

export function LTCChart() {
  const [dataChart, setDataChart] = useState({});
  const [sparkline, setSparkline] = useContext(SparklineContext);
  /**chart js styling options */
  const chartOptions = {
    tooltips: {
      enabled: false,
    },
    elements: {
      point: { radius: 0 },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{ display: false }],
      yAxes: [{ display: false }],
    },
  };

  /**creating empty arrays for the chart data and pushing the props gotten from home component */

  useEffect(() => {
    let prices = [];
    let timestamps = [];

    if (sparkline.length) {
      sparkline[2].prices.forEach((item) => {
        prices.push(Math.round(item[1] * 100) / 100);
      });
      sparkline[2].prices.forEach((item) => {
        timestamps.push(item[0]);
      });
    }

    setDataChart({
      labels: timestamps,
      datasets: [
        {
          label: "prices",
          data: prices,
          borderColor: "rgba(17, 51, 83, 0.5)",
          fill: false,
          borderWidth: 2.5,
        },
      ],
    });
  }, [sparkline]);

  return (
    <div className="sparkline-container">
      <Line data={dataChart} options={chartOptions} />
    </div>
  );
}

export function BCHChart() {
  const [dataChart, setDataChart] = useState({});
  const [sparkline, setSparkline] = useContext(SparklineContext);

  /**chart js styling options */
  const chartOptions = {
    tooltips: {
      enabled: false,
    },
    elements: {
      point: { radius: 0 },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{ display: false }],
      yAxes: [{ display: false }],
    },
  };

  /**creating empty arrays for the chart data and pushing the props gotten from home component */

  useEffect(() => {
    let prices = [];
    let timestamps = [];

    if (sparkline.length) {
      sparkline[3].prices.forEach((item) => {
        prices.push(Math.round(item[1] * 100) / 100);
      });
      sparkline[3].prices.forEach((item) => {
        timestamps.push(item[0]);
      });
    }

    setDataChart({
      labels: timestamps,
      datasets: [
        {
          label: "prices",
          data: prices,
          borderColor: "rgba(17, 51, 83, 0.5)",
          fill: false,
          borderWidth: 2.5,
        },
      ],
    });
  }, [sparkline]);

  return (
    <div className="sparkline-container">
      <Line data={dataChart} options={chartOptions} />
    </div>
  );
}
