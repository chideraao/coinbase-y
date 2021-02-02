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
		setTimeout(() => {
			setArrIndex(e.target.value);
			setOption("1d");
			setIsLoading(false);
		}, 500);
	};

	const handleWeeklyClick = (e) => {
		dispatch({ type: WEEKLY_CHART });
		setIsLoading(true);
		setTimeout(() => {
			setArrIndex(e.target.value);
			setOption("7d");
			setIsLoading(false);
		}, 500);
	};

	const handleMonthlyClick = (e) => {
		dispatch({ type: MONTHLY_CHART });
		setIsLoading(true);
		setTimeout(() => {
			setArrIndex(e.target.value);
			setOption("30d");
			setIsLoading(false);
		}, 500);
	};

	const handleYearlyClick = (e) => {
		dispatch({ type: YEARLY_CHART });
		setIsLoading(true);
		setTimeout(() => {
			setArrIndex(e.target.value);
			setOption("365d");
			setIsLoading(false);
		}, 500);
	};

	const handleAllClick = (e) => {
		dispatch({ type: ALL_CHART });
		setIsLoading(true);
		setTimeout(() => {
			setArrIndex(e.target.value);
			setOption("");
			setIsLoading(false);
		}, 500);
	};

	console.log(cryptos);

	return (
		<div className="">
			{sparkline.length ? (
				<div className="card">
					<div className="coins-header flex">
						<div className="coins-header-text flex">
							<span>{userData.currency.code}</span>
							<h1>
								{addCommasToNumber(Math.round(cryptos[0].price * 100) / 100)}
							</h1>
							<span
								className={
									cryptos[0][`${option}`] !== undefined
										? cryptos[0][`${option}`].price_change_pct * 100 >= 0
											? "gains"
											: "loss"
										: "gains"
								}
							>
								{cryptos[0][`${option}`] !== undefined
									? cryptos[0][`${option}`].price_change_pct * 100 > 0
										? `+${
												Math.round(
													cryptos[0][`${option}`].price_change_pct * 1000
												) / 10
										  }%`
										: `${
												Math.round(
													cryptos[0][`${option}`].price_change_pct * 1000
												) / 10
										  }%`
									: "+90,000.54%"}
							</span>
						</div>
						<div className="chart-duration">
							<ul className="flex">
								<li value="0" onClick={handleDailyClick}>
									24H
								</li>
								<li value="1" onClick={handleWeeklyClick}>
									1W
								</li>
								<li value="2" onClick={handleMonthlyClick}>
									1M
								</li>
								<li value="3" onClick={handleYearlyClick}>
									1Y
								</li>
								<li value="4" onClick={handleAllClick}>
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
