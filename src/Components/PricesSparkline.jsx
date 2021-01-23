import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { PricesSparklineContext } from "../State/PricesContext";

export function PricesBTC() {
	const [sparkline, setSparkline] = useContext(PricesSparklineContext);
	const [dataChart, setDataChart] = useState({});

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
		prices.push(sparkline[0].prices);
		timestamps.push(sparkline[0].timestamps);

		setDataChart({
			labels: timestamps[0],
			datasets: [
				{
					label: "prices",
					data: prices[0],
					borderColor: "rgba(17, 51, 83, 0.3)",
					fill: false,
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

export function PricesXTZ() {
	const [sparkline, setSparkline] = useContext(PricesSparklineContext);
	const [dataChart, setDataChart] = useState({});

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
		prices.push(sparkline[1].prices);
		timestamps.push(sparkline[1].timestamps);

		setDataChart({
			labels: timestamps[0],
			datasets: [
				{
					label: "prices",
					data: prices[0],
					borderColor: "rgba(17, 51, 83, 0.3)",
					fill: false,
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

export function PricesGRT() {
	const [sparkline, setSparkline] = useContext(PricesSparklineContext);
	const [dataChart, setDataChart] = useState({});

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
		prices.push(sparkline[2].prices);
		timestamps.push(sparkline[2].timestamps);

		setDataChart({
			labels: timestamps[0],
			datasets: [
				{
					label: "prices",
					data: prices[0],
					borderColor: "rgba(17, 51, 83, 0.3)",
					fill: false,
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

export function PricesBAT() {
	const [sparkline, setSparkline] = useContext(PricesSparklineContext);
	const [dataChart, setDataChart] = useState({});

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
		prices.push(sparkline[3].prices);
		timestamps.push(sparkline[3].timestamps);

		setDataChart({
			labels: timestamps[0],
			datasets: [
				{
					label: "prices",
					data: prices[0],
					borderColor: "rgba(17, 51, 83, 0.3)",
					fill: false,
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
