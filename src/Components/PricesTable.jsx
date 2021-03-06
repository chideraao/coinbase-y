/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../State/GlobalContext";
import {
	PricesContext,
	PricesCryptoContext,
	PricesSparklineContext,
	ShowcaseCryptosContext,
} from "../State/PricesContext";
import { ALL_ASSETS, TOP_GAINERS, TOP_LOSERS } from "../State/PricesReducer";

/**Defining API endpoints */
const api = {
	base: "https://api.nomics.com/v1/currencies/ticker?",
	key: process.env.REACT_APP_NOMICS_KEY,
	sparklineBase: "https://api.nomics.com/v1/currencies/sparkline?",
	zoneKey: process.env.REACT_APP_LOCATION_KEY,
	zoneBase: "https://api.ipgeolocation.io/ipgeo?",
};

/** SETTING UP SPARKLINE DATA FOR THE PAST 24 HOURS */
//Get today's date using the JavaScript Date object.
let ourDate = new Date();

//Change it so that it is the previous day
let pastDate = ourDate.getDate() - 1;
ourDate.setDate(pastDate);
let month = ourDate.getMonth() + 1;
let year = ourDate.getFullYear();
let day = ourDate.getDate();
let hour = ourDate.getHours();
let minute = ourDate.getMinutes();
let seconds = ourDate.getSeconds();

/**Regex for commas after every three digits */
const addCommasToNumber = (num) => {
	return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

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

function PricesTable() {
	const [cryptos, setCryptos] = useContext(PricesCryptoContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [state, dispatch] = useContext(PricesContext);
	const [isLoading, setIsLoading] = useState(false);
	const [input, setInput] = useState("");
	const [selectOption, setSelectOption] = useState("1d");
	const [sparkline, setSparkline] = useContext(PricesSparklineContext);
	const [showcaseCryptos, setShowcaseCryptos] = useContext(
		ShowcaseCryptosContext
	);

	const fetchCalls = useCallback((url, setState, retries = 7) => {
		fetch(url)
			.then((res) => {
				// check if successful. If so, return the response transformed to json
				if (res.ok) {
					return res.json();
				}
				// else, return a call to fetchRetry
				if (retries > 0) {
					return fetchCalls(url, setState, retries - 1);
				} else {
					throw new Error(res);
				}
			})
			.then((data) => {
				if (data !== undefined) {
					setState(data);
				}
				// Do something with the response
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				setUserData(response.data);
				fetchCalls(
					`${api.base}key=${api.key}&per-page=100&page=1&convert=${response.data.currency.code}&interval=1h,1d,7d,30d,365d`,
					setCryptos
				);
				fetchCalls(
					`${api.sparklineBase}key=${
						api.key
					}&ids=BTC,GRT,RUNE,XTZ,BAND&start=${year}-${
						month < 10 ? `0${month}` : month
					}-${day < 10 ? `0${day}` : day}T${hour < 10 ? `0${hour}` : hour}%3A${
						minute < 10 ? `0${minute}` : minute
					}%3A${seconds < 10 ? `0${seconds}` : seconds}Z&convert=${
						response.data.currency.code
					}`,
					setSparkline
				);
				fetchCalls(
					`${api.base}key=${api.key}&ids=BTC,GRT,XTZ,RUNE,BAND&convert=${response.data.currency.code}&interval=1d`,
					setShowcaseCryptos
				);
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {};
	}, [setCryptos, setUserData, setSparkline, setShowcaseCryptos, fetchCalls]);

	/**handling selectbox options and button click events, sorting, filtering, dispatch etc */
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSelect = (e) => {
		setSelectOption(e.target.value);
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			handleAllClick();
		}, 500);
	};

	const handleAllClick = () => {
		dispatch({ type: ALL_ASSETS });
		setIsLoading(true);
		setTimeout(() => {
			for (let index = 0; index < 100; index++) {
				cryptos.sort(function (b, a) {
					return a.market_cap - b.market_cap;
				});
			}
			setIsLoading(false);
		}, 700);
	};

	const handleGainClick = () => {
		dispatch({ type: TOP_GAINERS });
		setIsLoading(true);
		setTimeout(() => {
			for (let index = 0; index < 100; index++) {
				cryptos.sort((b, a) => {
					return (
						a[`${selectOption}`].price_change_pct -
						b[`${selectOption}`].price_change_pct
					);
				});
			}
			setIsLoading(false);
		}, 800);
	};

	const handleLossClick = () => {
		dispatch({ type: TOP_LOSERS });
		setIsLoading(true);
		setTimeout(() => {
			for (let index = 0; index < 100; index++) {
				cryptos.sort((a, b) => {
					return (
						a[`${selectOption}`].price_change_pct -
						b[`${selectOption}`].price_change_pct
					);
				});
			}
			setIsLoading(false);
		}, 1500);
	};

	const filtered = !input
		? cryptos
		: cryptos.filter((crypto) => {
				return (
					crypto.name.toLowerCase().includes(input.toLowerCase()) ||
					crypto.id.toLowerCase().includes(input.toLowerCase())
				);
		  });

	return (
		<div className="prices-table">
			<div className="prices-nav">
				<div className="order-options grid">
					<ul className="flex">
						<li
							className={state[0].onAllAssets ? "on-option" : "asset-order"}
							onClick={handleAllClick}
						>
							All assets
						</li>
						<li
							className={state[1].onTopGainers ? "on-option" : "asset-order"}
							onClick={handleGainClick}
						>
							Top gainers
						</li>
						<li
							className={state[2].onTopLosers ? "on-option" : "asset-order"}
							onClick={handleLossClick}
						>
							Top losers
						</li>
					</ul>
					<div className="">
						<select
							name="length"
							id="length"
							onChange={handleSelect}
							value={selectOption}
						>
							<option value="1h">1h</option>
							<option value="1d">1d</option>
							<option value="7d">7d</option>
							<option value="30d">30d</option>
							<option value="365d">365d</option>
						</select>
					</div>
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
			) : !cryptos.length ? (
				""
			) : (
				<div className="card">
					<div className="flex">
						<FontAwesomeIcon
							className="font-awesome-search"
							fontWeight="light"
							icon="search"
							size="2x"
						/>
						<div className="search-input">
							<input
								type="text"
								name=""
								key="random1"
								value={input}
								placeholder={"Search all assets..."}
								onChange={handleChange}
							/>
						</div>
					</div>

					<table role="table">
						<thead>
							<tr>
								<th className="table-serial">#</th>
								<th colSpan="2">Name</th>
								<th className="table-empty"></th>

								<th colSpan="2">Price</th>
								<th>Change</th>
								<th>Market cap</th>
								<th className="table-trade">Trade</th>
							</tr>
						</thead>
						<tbody>
							{filtered.map((item, index) => {
								return (
									<tr key={index}>
										<td className="table-serial">{index + 1}</td>
										<Link to={`/prices/${item.id}`}>
											<td colSpan="2" className="crypto-name flex">
												<div className="">
													<img src={item.logo_url} alt={`${item.name} logo`} />
												</div>
												<div className="hidden-flex">
													{item.name} &nbsp;&nbsp; <span>{item.id}</span>
												</div>
											</td>
										</Link>

										<td className="table-empty"></td>

										<td className="table-empty"></td>
										<td className="crypto-price" colSpan="2">
											{userData.currency.symbol}{" "}
											{`${addCommasToNumber(
												Math.round(item.price * 100) / 100
											)}`}
										</td>
										{cryptos[index] ? (
											<td
												className={
													item[`${selectOption}`].price_change_pct * 100 >= 0
														? "gains"
														: "loss"
												}
											>
												{item[`${selectOption}`].price_change_pct * 100 > 0
													? `+${
															Math.round(
																item[`${selectOption}`].price_change_pct * 1000
															) / 10
													  }%`
													: `${
															Math.round(
																item[`${selectOption}`].price_change_pct * 1000
															) / 10
													  }%`}
											</td>
										) : (
											""
										)}
										<td className="crypto-volume">
											{userData.currency.symbol} {`${abbr(item.market_cap)}`}
										</td>
										<td className="table-trade">
											<button className="btn">Trade</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

export default PricesTable;
