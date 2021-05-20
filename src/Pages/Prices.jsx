/* eslint-disable no-unused-vars */
import React, { useCallback, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
	PricesRUNE,
	PricesBTC,
	PricesGRT,
	PricesXTZ,
	PricesBAND,
} from "../Components/PricesSparkline";
import PricesTable from "../Components/PricesTable";
import { UserDataContext } from "../State/GlobalContext";
import {
	PricesCryptoContext,
	PricesSparklineContext,
	ShowcaseCryptosContext,
} from "../State/PricesContext";
import LearnIllustration from "../logos/Learn_Illustration_Ultimate_Guide_Bitcoin.png";
import { HeaderContext } from "../State/HeaderContext";
import HeaderMenu from "../Components/HeaderMenu";
import Loader from "../Components/Loader";
import Axios from "axios";

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
	return Intl.NumberFormat().format(num);
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

function Prices() {
	const [cryptos, setCryptos] = useContext(PricesCryptoContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(PricesSparklineContext);
	const [showcaseCryptos, setShowcaseCryptos] = useContext(
		ShowcaseCryptosContext
	);
	const [menuClick, setMenuClick] = useContext(HeaderContext);

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

	const market = React.useMemo(() => {
		return !cryptos.length
			? ""
			: `${Math.round(cryptos[0]["1d"].price_change_pct * 12000) / 100}`;
	}, [cryptos]);

	/**memoizing crypto values, rendering breaks otherwise */
	const marketHealth = React.useMemo(
		() =>
			!sparkline.length ||
			!showcaseCryptos.length ||
			sparkline === undefined ||
			showcaseCryptos === undefined
				? []
				: [
						{
							img: showcaseCryptos[2].logo_url,
							name: showcaseCryptos[2].name,
							price: showcaseCryptos[2].price,
							chart: <PricesGRT />,
						},
						{
							img: `${showcaseCryptos[3].logo_url}`,
							name: `${showcaseCryptos[3].name}`,
							price: `${showcaseCryptos[3].price}`,
							chart: <PricesRUNE />,
						},

						{
							img: showcaseCryptos[1].logo_url,
							name: showcaseCryptos[1].name,
							price: showcaseCryptos[1].price,
							chart: <PricesXTZ />,
						},
						{
							img: showcaseCryptos[0].logo_url,
							name: showcaseCryptos[0].name,
							price: showcaseCryptos[0].price,
							volume: showcaseCryptos[0].market_cap,
							chart: <PricesBTC />,
						},
						{
							img: showcaseCryptos[4].logo_url,
							name: showcaseCryptos[4].name,
							price: showcaseCryptos[4].price,
							volume: showcaseCryptos[4].market_cap,
							chart: <PricesBAND />,
						},
				  ],
		[showcaseCryptos, sparkline]
	);

	return (
		<div>
			{cryptos.length && sparkline.length ? (
				<div className="prices">
					{menuClick ? (
						<HeaderMenu />
					) : (
						<>
							{" "}
							<Header />
							<main className="prices-main">
								<div className="market-health">
									<div className="container">
										<h1 className="flex-column">
											<span className="link-heading">In the last 24 hours</span>

											<span>
												Market is {market > 0 ? "up" : "down"}
												<span className={market >= 0 ? "gains" : "loss"}>
													{"  "}
													{market}%
												</span>
											</span>
										</h1>
									</div>
									{showcaseCryptos.length && sparkline.length ? (
										<div className="container">
											<div className="box-container flex">
												<Link to="prices/GRT">
													<div className="prices-box">
														<h2>Top gainer (24h)</h2>
														<div className="sparkline-container flex">
															<div className="crypto-profile flex">
																<div className="box-img">
																	<img
																		src={marketHealth[1].img}
																		alt={`${marketHealth[1].name} icon`}
																	/>
																</div>
																<div className="box-title">
																	<h3>{marketHealth[1].name}</h3>
																	<p className="gains">+40.59%</p>
																</div>
															</div>

															<div className="sparkline-main">
																<p>
																	{userData.currency.symbol}{" "}
																	{`${addCommasToNumber(
																		Math.round(marketHealth[1].price * 100) /
																			100
																	)}`}
																</p>
																{marketHealth[1].chart}
															</div>
														</div>
													</div>
												</Link>
												<Link to="prices/RUNE">
													<div className="prices-box">
														<h2>New listing</h2>
														<div className="sparkline-container flex">
															<div className="crypto-profile flex">
																<div className="box-img">
																	<img
																		src={marketHealth[0].img}
																		alt={`${marketHealth[0].name} icon`}
																	/>
																</div>
																<div className="box-title">
																	<h3>{marketHealth[0].name}</h3>
																	<p>Added Dec 17</p>
																</div>
															</div>

															<div className="sparkline-main">
																<p>
																	{userData.currency.symbol}{" "}
																	{`${addCommasToNumber(
																		Math.round(marketHealth[0].price * 100) /
																			100
																	)}`}
																</p>
																{marketHealth[0].chart}
															</div>
														</div>
													</div>
												</Link>
												<Link to="/learn">
													<div className="prices-box learn-box flex">
														<div className="prices-box-text flex-column">
															<h2 className="flex-column">
																Crypto questions, <span>answered</span>
															</h2>
															<p>Learn with Basecoin</p>
														</div>
														<div className="learn-img flex">
															<img
																src={LearnIllustration}
																alt="learn illustration img"
															/>
														</div>
													</div>
												</Link>
											</div>
											<div className="box-container box-container-ii flex">
												<Link to="prices/BTC">
													<div className="prices-box">
														<h2>Highest volume (24h)</h2>
														<div className="sparkline-container flex">
															<div className="crypto-profile flex">
																<div className="box-img">
																	<img
																		src={marketHealth[3].img}
																		alt={`${marketHealth[3].name} icon`}
																	/>
																</div>
																<div className="box-title">
																	<h3>{marketHealth[3].name}</h3>
																	<p>
																		{userData.currency.symbol}{" "}
																		{`${abbr(marketHealth[3].volume)}`}
																	</p>
																</div>
															</div>

															<div className="sparkline-main">
																<p>
																	{userData.currency.symbol}{" "}
																	{`${addCommasToNumber(
																		Math.round(marketHealth[3].price * 100) /
																			100
																	)}`}
																</p>
																{marketHealth[3].chart}
															</div>
														</div>
													</div>
												</Link>
												<Link to="prices/XTZ">
													<div className="prices-box">
														<h2>Most visited (24h)</h2>
														<div className="sparkline-container flex">
															<div className="crypto-profile flex">
																<div className="box-img">
																	<img
																		src={marketHealth[2].img}
																		alt={`${marketHealth[2].name} icon`}
																	/>
																</div>
																<div className="box-title">
																	<h3>{marketHealth[2].name}</h3>
																	<p className="gains">+420.69% views</p>
																</div>
															</div>

															<div className="sparkline-main">
																<p>
																	{userData.currency.symbol}{" "}
																	{`${addCommasToNumber(
																		Math.round(marketHealth[2].price * 100) /
																			100
																	)}`}
																</p>
																{marketHealth[2].chart}
															</div>
														</div>
													</div>
												</Link>
												<Link to="prices/BAND">
													<div className="prices-box">
														<h2>Earn free crypto</h2>
														<div className="sparkline-container flex">
															<div className="crypto-profile flex">
																<div className="box-img">
																	<img
																		src={marketHealth[4].img}
																		alt={`${marketHealth[4].name} icon`}
																	/>
																</div>
																<div className="box-title">
																	<h3>{marketHealth[4].name}</h3>
																	<p>Earn $3 in BAND</p>
																</div>
															</div>

															<div className="sparkline-main">
																<p>
																	{userData.currency.symbol}{" "}
																	{`${addCommasToNumber(
																		Math.round(marketHealth[4].price * 100) /
																			100
																	)}`}
																</p>
																{marketHealth[4].chart}
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									) : (
										""
									)}
								</div>
								<section className="price-cryptos">
									<div className="container">
										<PricesTable />
									</div>
								</section>
							</main>
							<Banner />
							<Footer />
						</>
					)}
				</div>
			) : (
				<Loader />
			)}
		</div>
	);
}

export default Prices;
