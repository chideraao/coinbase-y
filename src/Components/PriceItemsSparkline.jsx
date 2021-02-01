import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
	PriceItemsCryptosContext,
	PriceItemsSparklineContext,
} from "../State/PriceItemsContext";

function PriceItemsSparkline() {
	const [sparkline, setSparkline] = useContext(PriceItemsSparklineContext);
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
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

	console.log(sparkline);

	/**creating empty arrays for the chart data and pushing the props gotten from home component */

	useEffect(() => {
		let prices = [];
		let timestamps = [];

		if (sparkline.length) {
			sparkline[0].prices.forEach((item) => {
				prices.push(item[1]);
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
					borderColor: " #1652f0",
					fill: false,
					borderWidth: 1.5,
				},
			],
		});
	}, [sparkline]);

	return (
		<div className="card">
			<div className="chart-duration">
				<ul className="flex">
					<li>24H</li>
					<li>1W</li>
					<li>1M</li>
					<li>1Y</li>
					<li>ALL</li>
				</ul>
			</div>
			<Line data={dataChart} options={chartOptions} />
		</div>
	);
}

export default PriceItemsSparkline;
