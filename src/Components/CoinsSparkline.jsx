import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export function BTCChart({ sparkLineData }) {
	const [dataChart, setDataChart] = useState({});

	/**chart js styling options */
	const chartOptions = {
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

	console.log(sparkLineData);

	/**creating empty arrays for the chart data and pushing the props gotten from home component */
	// useEffect(() => {
	// 	let prices = [];
	// 	let timestamps = [];
	// 	prices.push(sparkLineData[1].prices);
	// 	timestamps.push(sparkLineData[1].timestamps);

	// 	setDataChart({
	// 		labels: timestamps[0],
	// 		datasets: [
	// 			{
	// 				label: "prices",
	// 				data: prices[0],
	// 			},
	// 		],
	// 	});
	// }, [sparkLineData]);

	return (
		<div className="container">
			{/* <Line data={dataChart} options={chartOptions} /> */}
		</div>
	);
}

export function ETHChart({ sparkLineData }) {
	const [dataChart, setDataChart] = useState({});

	/**chart js styling options */
	const chartOptions = {
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
	console.log(sparkLineData);

	/**creating empty arrays for the chart data and pushing the props gotten from home component */

	// useEffect(() => {
	// 	let prices = [];
	// 	let timestamps = [];

	// 	if (sparkLineData !== {}) {
	// 		prices.push(sparkLineData[2].prices);
	// 		timestamps.push(sparkLineData[2].timestamps);

	// 		setDataChart({
	// 			labels: timestamps[0],
	// 			datasets: [
	// 				{
	// 					label: "prices",
	// 					data: prices[0],
	// 				},
	// 			],
	// 		});
	// 	}
	// }, [sparkLineData]);

	console.log(dataChart);

	return (
		<div className="container">
			{/* <Line data={dataChart} options={chartOptions} /> */}
		</div>
	);
}

export function LTCChart({ sparkLineData }) {
	const [dataChart, setDataChart] = useState({});

	/**chart js styling options */
	const chartOptions = {
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

	console.log(sparkLineData);

	/**creating empty arrays for the chart data and pushing the props gotten from home component */

	// useEffect(() => {
	// 	let prices = [];
	// 	let timestamps = [];
	// 	console.log(sparkLineData);

	// 	prices.push(sparkLineData[3].prices);
	// 	timestamps.push(sparkLineData[3].timestamps);

	// 	setDataChart({
	// 		labels: timestamps[0],
	// 		datasets: [
	// 			{
	// 				label: "prices",
	// 				data: prices[0],
	// 			},
	// 		],
	// 	});
	// }, [sparkLineData]);

	console.log(dataChart);

	return (
		<div className="container">
			{/* <Line data={dataChart} options={chartOptions} /> */}
		</div>
	);
}

export function BCHChart({ sparkLineData }) {
	const [dataChart, setDataChart] = useState({});

	console.log(sparkLineData);

	/**chart js styling options */
	const chartOptions = {
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
	// useEffect(() => {
	// 	let prices = [];
	// 	let timestamps = [];

	// 	prices.push(sparkLineData[0].prices);
	// 	timestamps.push(sparkLineData[0].timestamps);

	// 	setDataChart({
	// 		labels: timestamps[0],
	// 		datasets: [
	// 			{
	// 				label: "prices",
	// 				data: prices[0],
	// 			},
	// 		],
	// 	});
	// }, [sparkLineData]);

	console.log(dataChart);

	return (
		<div className="container">
			{/* <Line data={dataChart} options={chartOptions} /> */}
		</div>
	);
}
