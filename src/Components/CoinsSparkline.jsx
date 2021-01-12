import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";

export default function ChartTest() {
	const [dataChart, setDataChart] = useState({});

	const [chartOptions, setChartOptions] = useState({
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
	});
	const [api, setApi] = useState({});

	useEffect(() => {
		Axios.get(
			`https://api.nomics.com/v1/currencies/sparkline?key=f120f033bda2bb941c1e6925f7ecfbe1&ids=BTC,ETH,XRP&start=2021-01-03T00%3A00%3A00Z&end=2021-01-04T00%3A00%3A00Z`
		)
			.then((res) => {
				setApi(res.data);
				setDataChart({
					labels: [...api[0].timestamps],

					datasets: [
						{
							backgroundColor: "rgba(0,0,0,0)",
							// borderColor: "rgba(0,0,0,0)",
							label: "Prices",
							data: [...api[0].prices],
						},
					],
				});
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {}, []);
	return (
		<div className="container">
			<Line data={dataChart} />
		</div>
	);
}
