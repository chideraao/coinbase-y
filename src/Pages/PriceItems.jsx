/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useCallback, useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderMenu from "../Components/HeaderMenu";
import Loader from "../Components/Loader";
import PriceItemsMain from "../Components/PriceItemsMain";
import { UserDataContext } from "../State/GlobalContext";
import { HeaderContext } from "../State/HeaderContext";
import {
	PriceItemsCryptosContext,
	PriceItemsSparklineContext,
} from "../State/PriceItemsContext";

/**Defining API endpoints */
const api = {
	base: "https://api.nomics.com/v1/currencies/ticker?",
	key: process.env.REACT_APP_NOMICS_KEY,
	sparklineBase: "https://api.coingecko.com/api/v3/coins/",
	zoneKey: process.env.REACT_APP_LOCATION_KEY,
	zoneBase: "https://api.ipgeolocation.io/ipgeo?",
};

/** SETTING UP SPARKLINE DATA FOR THE PAST 24 HOURS */
//Get today's date using the JavaScript Date object.
let currentDate = new Date();
let currentUNIX = Math.floor(currentDate.getTime() / 1000);

let WeekDate = new Date();

//get the exact date for the past week
let past7 = WeekDate.getDate() - 7;
WeekDate.setDate(past7);
let weekUNIX = Math.floor(WeekDate.getTime() / 1000);

let date24hr = new Date();

//get the exact date the previous day
let past24 = date24hr.getDate() - 1;
date24hr.setDate(past24);
let dayUNIX = Math.floor(date24hr.getTime() / 1000);

let dateMonth = new Date();

//get the exact date the previous day
let pastMonth = dateMonth.getDate() - 30;
dateMonth.setDate(pastMonth);
let monthUNIX = Math.floor(dateMonth.getTime() / 1000);

let date365 = new Date();

//Change it so that it is the previous year
let past365 = date365.getDate() - 366;
date365.setDate(past365);
let yearUNIX = Math.floor(date365.getTime() / 1000);

const formatFirstTrade = (str) => {
	let firstTrade = new Date(`${str.slice(0, -1)}.000Z`);
	return Math.floor(firstTrade.getTime() / 1000);
};

/**set lowercase and replace spaces */

const setLowerCase = (str) => {
	return str.toLowerCase().replaceAll(" ", "-");
};

function PriceItems({ match }) {
	const [menuClick, setMenuClick] = useContext(HeaderContext);
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(PriceItemsSparklineContext);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				setUserData(response.data);
				// fetchCalls(
				// 	`${api.sparklineBase}key=${
				// 		api.key
				// 	}&ids=BTC,ETH,BCH,LTC&start=${year}-${
				// 		month < 10 ? `0${month}` : month
				// 	}-${day < 10 ? `0${day}` : day}T${hour < 10 ? `0${hour}` : hour}%3A${
				// 		minute < 10 ? `0${minute}` : minute
				// 	}%3A${seconds < 10 ? `0${seconds}` : seconds}Z&convert=${
				// 		response.data.currency.code
				// 	}`,
				// 	setSparkline
				// );
				// fetchCalls(
				// 	`${api.base}key=${api.key}&ids=BTC,ETH,LTC,BCH&convert=${response.data.currency.code}&interval=1d`,
				// 	setCryptos
				// );
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {};
	}, [setCryptos, setSparkline, setUserData]);

	return (
		<div>
			{/* {cryptos.length || sparkline.length ? ( */}
			<div className="price-items">
				{menuClick ? (
					<HeaderMenu />
				) : (
					<>
						<Header />
						{cryptos.length ? (
							<section className="priceitems-breadcrumbs">
								<div className="container">
									<div className="breadcrumbs">
										<a href="/prices">Price charts &nbsp;</a>
										<FontAwesomeIcon
											className="font-awesome"
											fontWeight="light"
											icon="chevron-right"
											size="3x"
										/>
										<a href={`/prices/${match.params.id}`}>
											&nbsp; {cryptos[0].name} price
										</a>
									</div>
								</div>
							</section>
						) : (
							""
						)}
						<section className="price-items-main">
							<PriceItemsMain match={match} />
						</section>
						<section className="legal">
							<div className="container legal-disclaimer">
								<p>
									This content and any information contained therein is being
									provided to you for informational purposes only, does not
									constitute a recommendation by Basecoin to buy, sell, or hold
									any security, financial product, or instrument referenced in
									the content, and does not constitute investment advice,
									financial advice, trading advice, or any other sort of advice.
									Data presented may reflect assets traded on Basecoin’s
									exchange and select other cryptocurrency exchanges. Certain
									content has been prepared by third parties not affiliated with
									Basecoin Inc. or any of its affiliates and Basecoin is not
									responsible for such content. Basecoin is not liable for any
									errors or delays in content, or for any actions taken in
									reliance on any content.
								</p>
							</div>
						</section>

						<Banner />
						<Footer />
					</>
				)}
			</div>
			{/* ) : (
				<Loader />
			)} */}
		</div>
	);
}

export default PriceItems;
