/* eslint-disable no-unused-vars */
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
import PriceItemsAbout from "./PriceItemsAbout";
import PriceItemsStories from "./PriceItemsStories";

/**Regex for commas after every three digits */
const addCommasToNumber = (num) => {
	return Intl.NumberFormat().format(num);
};

/**  number formatter */
const intlFormat = (num) => {
	return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
};
const abbr = (num) => {
	if (num >= 1000000000000) return intlFormat(num / 1000000000000) + "T";
	if (num >= 1000000000) return intlFormat(num / 1000000000) + "B";
	if (num >= 1000000) return intlFormat(num / 1000000) + "M";
	if (num >= 1000) return intlFormat(num / 1000) + "K";
	return intlFormat(num);
};

/** convert date from API to GMT standard */
const formatDate = (str) => {
	let newFormat = new Date(str);
	return newFormat.toUTCString();
};

function PriceItemsSparkline({ match }) {
	const [sparkline, setSparkline] = useContext(PriceItemsSparklineContext);
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
	const [state, dispatch] = useContext(PriceItemsContext);
	const [dataChart, setDataChart] = useState({});
	const [userData, setUserData] = useContext(UserDataContext);
	const [arrIndex, setArrIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [option, setOption] = useState("1d");
	const [mouseOver, setmouseOver] = useState({
		volumeMouseOver: false,
		marketCapMouseOver: false,
		circulationMouseOver: false,
	});

	/**chart js styling options */
	const chartOptions = {
		/** tooltips styling and logic */
		hover: { mode: "nearest", intersect: false, axis: "x" }, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
		tooltips: {
			//basic styling of the tooltip(onHover)
			mode: "nearest", //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
			intersect: false, //allow tooltip to show once the mouse is at the nearest defined data item rather than only once it intersects
			axis: "x",
			enabled: true,
			custom: function (tooltip) {
				if (!tooltip) return;
				tooltip.displayColors = false; //remove the tiny colored box in the tooltip label
			},
			titleFontFamily: '"Roboto", sans-serif',
			titleFontSize: 20,
			titleFontStyle: "lighter",
			titleSpacing: 3,
			titleMarginBottom: 16,
			caretPadding: 6,
			caretSize: 4,
			backgroundColor: "rgb(5, 15, 25)",
			xPadding: 12,
			yPadding: 12,
			titleAlign: "center",
			callbacks: {
				/** label color */
				labelColor: function (tooltipItem, chart) {
					return {
						borderColor: "rgb(5, 15, 25)",
						backgroundColor: "rgb(5, 15, 25)",
					};
				},

				labelTextColor: function (tooltipItem, chart) {
					return "rgb(144, 161, 184)";
				},
				/** switching title and label positioning */
				title: (tooltipItem, data) => {
					return `${userData.currency.code} ${addCommasToNumber(
						data["datasets"][0]["data"][tooltipItem[0]["index"]]
					)}`;
				},
				label: function (tooltipItem, data) {
					return data["labels"][tooltipItem["index"]].slice(4, -7);
				},
			},
		},
		elements: {
			point: { radius: 0 }, //removes all the axis intersection points
			line: { tension: 0.1 }, //makes the chart a little less curvy ;)
		},
		legend: {
			display: false,
		},
		scales: {
			xAxes: [
				{
					offset: true,
					gridLines: {
						color: "transparent",
						display: false, //removes gridline display
						drawBorder: false,
					},
					distribution: "series",
					display: true,
					ticks: {
						//basic styling of the ticks(axis)
						fontSize: 18,
						lineHeight: 1.2,
						fontFamily: '"Roboto", sans-serif',
						fontWeight: "300",
						padding: 0,
						fontColor: "rgba(17, 51, 83, 0.3)",
						maxTicksLimit: 8,
						minRotation: 0,
						maxRotation: 0,
						callback: function (value, index, values) {
							/** logic to render different x-axis labels for different set of data */
							if (option === "1d") {
								return value.slice(17, -7);
							} else if (option === "7d" || option === "30d") {
								return value.slice(5, -18);
							}
							return value.slice(8, -12);
						},
					},
				},
			],
			yAxes: [
				{
					display: true,
					ticks: {
						display: false,
					},
					gridLines: {
						color: "blue",
						display: false,
						drawBorder: false,
					},
				},
			],
		},
	};

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
					borderWidth: 1.7,
				},
			],
		});
	}, [sparkline, arrIndex]);

	/** all onClick declarations */

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

	/**handle mouse enter and leave */
	const handleVolumeMouseOver = () => {
		setmouseOver({
			volumeMouseOver: true,
			marketCapMouseOver: false,
			circulationMouseOver: false,
		});
	};

	const handleMarketCapMouseOver = () => {
		setmouseOver({
			volumeMouseOver: false,
			marketCapMouseOver: true,
			circulationMouseOver: false,
		});
	};

	const handleCirculationMouseOver = () => {
		setmouseOver({
			volumeMouseOver: false,
			marketCapMouseOver: false,
			circulationMouseOver: true,
		});
	};

	const handleMouseLeave = () => {
		// setTimeout(() => {
		setmouseOver({
			volumeMouseOver: false,
			marketCapMouseOver: false,
			circulationMouseOver: false,
		});
		// }, 4000);
	};

	return (
		<div className="sparkline-container">
			{cryptos.length ? (
				<div className="">
					<div className="crypto-name flex">
						<div className="img-container">
							<img src={cryptos[0].logo_url} alt="bitcoin logo" />
						</div>

						<div className="text-container">
							<h1>
								{cryptos[0].name} price&nbsp;
								<span>({cryptos[0].id})</span>
							</h1>
						</div>
					</div>
				</div>
			) : (
				""
			)}
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
									: "+90,000.44%"}
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

					<div className="crypto-stats-container flex">
						<div className="flex">
							{" "}
							<div className="market-cap-stats flex-column">
								<div
									className="link-heading"
									onMouseOver={handleMarketCapMouseOver}
									onMouseLeave={handleMouseLeave}
								>
									Market Cap{" "}
									<span>
										<FontAwesomeIcon
											className="font-awesome"
											fontWeight="light"
											icon="info-circle"
											size="2x"
										/>
									</span>
								</div>
								<p>{`${userData.currency.code} ${abbr(
									cryptos[0].market_cap
								)}`}</p>
							</div>
							{mouseOver.marketCapMouseOver ? (
								<div className="hover-div market-hover-div">
									<p>
										The current price of {cryptos[0].id} multiplied by its
										current circulating supply.
									</p>
								</div>
							) : (
								""
							)}
						</div>

						<div className="flex">
							{" "}
							<div className="volume-stats flex-column">
								<div
									className="link-heading"
									onMouseOver={handleVolumeMouseOver}
									onMouseLeave={handleMouseLeave}
								>
									Volume (24hours)
									<span>
										<FontAwesomeIcon
											className="font-awesome"
											fontWeight="light"
											icon="info-circle"
											size="2x"
										/>
									</span>
								</div>
								<p>{`${userData.currency.code} ${abbr(
									cryptos[0]["1d"].volume
								)}`}</p>
							</div>
							{mouseOver.volumeMouseOver ? (
								<div className="hover-div volume-hover-div">
									<p>
										The total dollar value of all {cryptos[0].id} transactions
										over the past 24 hours. Includes data from all exchanges,
										not just Basecoin.
									</p>
								</div>
							) : (
								""
							)}
						</div>

						<div className="flex">
							<div className="circulation-stats flex-column">
								<div
									className="link-heading"
									onMouseOver={handleCirculationMouseOver}
									onMouseLeave={handleMouseLeave}
								>
									Circulating supply{" "}
									<span>
										<FontAwesomeIcon
											className="font-awesome"
											fontWeight="light"
											icon="info-circle"
											size="2x"
										/>
									</span>
								</div>
								<p>{` ${abbr(cryptos[0].circulating_supply)} ${
									cryptos[0].id
								}`}</p>
							</div>
							{mouseOver.circulationMouseOver ? (
								<div className="hover-div circulation-hover-div">
									<p>
										The amount of {cryptos[0].id} that is currently liquid and
										in circulation.
									</p>
								</div>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			) : (
				""
			)}
			<PriceItemsAbout match={match} />
			<PriceItemsStories />
		</div>
	);
}

export default PriceItemsSparkline;
