import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { UserDataContext } from "../State/GlobalContext";
import {
	PriceItemsContext,
	PriceItemsCryptosContext,
	PriceItemsSparklineContext,
} from "../State/PriceItemsContext";
import {
	ALL_CHART,
	DAILY_CHART,
	MONTHLY_CHART,
	WEEKLY_CHART,
	YEARLY_CHART,
} from "../State/PriceItemsReducer";

/**Regex for commas after every three digits */

const addCommasToNumber = (num) => {
	return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const formatDate = (str) => {
	let newFormat = new Date(str);
	return newFormat.toUTCString();
};

let newFormat = new Date();
console.log(newFormat.toUTCString());

function PriceItemsSparkline() {
	const [sparkline, setSparkline] = useContext(PriceItemsSparklineContext);
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
	const [state, dispatch] = useContext(PriceItemsContext);
	const [dataChart, setDataChart] = useState({});
	const [userData, setUserData] = useContext(UserDataContext);
	const [arrIndex, setArrIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [option, setOption] = useState("1d");

	/**chart js styling options */
	const chartOptions = {
		// maintainAspectRatio: false,
		tooltips: {
			enabled: true,
		},
		elements: {
			point: { radius: 0 },
		},
		legend: {
			display: false,
		},
		scales: {
			xAxes: [
				{
					gridLines: {
						display: false,
					},
					distribution: "series",
					display: true,
					ticks: {
						fontSize: 17,
						lineHeight: 1.4,
						fontFamily: '"Roboto", sans-serif',
						fontWeight: "300",
						padding: 0,
						fontColor: "rgba(17, 51, 83, 0.3)",
						maxTicksLimit: 9,
						minRotation: 0,
						maxRotation: 0,
						callback: function (value, index, values) {
							if (option === "1d") {
								return value.slice(17, -4);
							} else if (option === "7d" || option === "30d") {
								return value.slice(5, -18);
							}
							return value.slice(8, -12);
						},
					},
				},
			],
			yAxes: [{ display: false }],
		},
	};

	console.log(sparkline);

	/**creating empty arrays for the chart data and pushing the props gotten from home component */

	useEffect(() => {
		let prices = [];
		let timestamps = [];

		if (sparkline.length) {
			sparkline[arrIndex].prices.forEach((item) => {
				prices.push(Math.round(item[1] * 100) / 100);
			});
			sparkline[arrIndex].prices.forEach((item) => {
				timestamps.push(formatDate(item[0]));
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
	}, [sparkline, arrIndex]);

	const handleDailyClick = (e) => {
		dispatch({ type: DAILY_CHART });
		setIsLoading(true);
		setOption("1d");
		setTimeout(() => {
			setArrIndex(e.target.value);
			setIsLoading(false);
		}, 500);
	};

	const handleWeeklyClick = (e) => {
		dispatch({ type: WEEKLY_CHART });
		setIsLoading(true);
		setOption("7d");
		setTimeout(() => {
			setArrIndex(e.target.value);
			setIsLoading(false);
		}, 500);
	};

	const handleMonthlyClick = (e) => {
		dispatch({ type: MONTHLY_CHART });
		setIsLoading(true);
		setOption("30d");
		setTimeout(() => {
			setArrIndex(e.target.value);
			setIsLoading(false);
		}, 500);
	};

	const handleYearlyClick = (e) => {
		dispatch({ type: YEARLY_CHART });
		setIsLoading(true);
		setOption("365d");
		setTimeout(() => {
			setArrIndex(e.target.value);
			setIsLoading(false);
		}, 500);
	};

	const handleAllClick = (e) => {
		dispatch({ type: ALL_CHART });
		setIsLoading(true);
		setOption("all");
		setTimeout(() => {
			setArrIndex(e.target.value);
			setIsLoading(false);
		}, 500);
	};

	console.log(cryptos);

	return (
		<div className="sparkline-container">
			{sparkline.length ? (
				<div className="card">
					<div className="coins-header flex">
						<div className="coins-header-text flex">
							<span className="currency-code">{userData.currency.code}</span>
							<h1 className="flex">
								{addCommasToNumber(Math.round(cryptos[0].price))}{" "}
								<span>.64</span>
							</h1>
							<span
								className={
									option !== "all"
										? cryptos[0][`${option}`].price_change_pct * 100 >= 0
											? "gains"
											: "loss"
										: "gains"
								}
							>
								{option !== "all"
									? cryptos[0][`${option}`].price_change_pct * 100 > 0
										? `+${
												Math.round(
													cryptos[0][`${option}`].price_change_pct * 10000
												) / 100
										  }%`
										: `${
												Math.round(
													cryptos[0][`${option}`].price_change_pct * 10000
												) / 100
										  }%`
									: "+90,000.54%"}
							</span>
						</div>
						<div className="chart-duration">
							<ul className="flex">
								<li
									value="0"
									onClick={handleDailyClick}
									className={option === "1d" ? "on-option" : ""}
								>
									24H
								</li>
								<li
									value="1"
									onClick={handleWeeklyClick}
									className={option === "7d" ? "on-option" : ""}
								>
									1W
								</li>
								<li
									value="2"
									onClick={handleMonthlyClick}
									className={option === "30d" ? "on-option" : ""}
								>
									1M
								</li>
								<li
									value="3"
									onClick={handleYearlyClick}
									className={option === "365d" ? "on-option" : ""}
								>
									1Y
								</li>
								<li
									value="4"
									onClick={handleAllClick}
									className={option === "all" ? "on-option" : ""}
								>
									ALL
								</li>
							</ul>
						</div>
					</div>

					{isLoading ? (
						<div className="flex">
							<FontAwesomeIcon
								className="font-awesome"
								fontWeight="light"
								icon="circle-notch"
								size="2x"
								spin
							/>
						</div>
					) : (
						<Line data={dataChart} options={chartOptions} />
					)}
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default PriceItemsSparkline;
