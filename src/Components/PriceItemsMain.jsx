/* eslint-disable no-unused-vars */
import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../State/GlobalContext";
import {
	PriceItemsCryptosContext,
	PriceItemsSparklineContext,
} from "../State/PriceItemsContext";
import PriceItemsSparkline from "./PriceItemsSparkline";

/**Defining API endpoints */
const api = {
	base: "https://api.nomics.com/v1/currencies/ticker?",
	key: "f120f033bda2bb941c1e6925f7ecfbe1",
	sparklineBase: "https://api.coingecko.com/api/v3/coins/",
	zoneKey: "d65e37f4206340d188baba3c12561f09",
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

const setLowerCase = (str) => {
	return str.toLowerCase();
};

function PriceItemsMain() {
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(PriceItemsSparklineContext);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				setUserData(response.data);

				Axios.get(
					`${api.base}key=${api.key}&ids=BTC&convert=${response.data.currency.code}&interval=1d,7d,30d,365d`
				)
					.then((res) => {
						setCryptos(res.data);
						Axios.all([
							Axios.get(
								`${api.sparklineBase}${setLowerCase(
									res.data[0].name
								)}/market_chart/range?vs_currency=${
									response.data.currency.code
								}&from=${dayUNIX}&to=${currentUNIX}`
							),
							Axios.get(
								`${api.sparklineBase}${setLowerCase(
									res.data[0].name
								)}/market_chart/range?vs_currency=${
									response.data.currency.code
								}&from=${weekUNIX}&to=${currentUNIX}`
							),
							Axios.get(
								`${api.sparklineBase}${setLowerCase(
									res.data[0].name
								)}/market_chart/range?vs_currency=${
									response.data.currency.code
								}&from=${monthUNIX}&to=${currentUNIX}`
							),
							Axios.get(
								`${api.sparklineBase}${setLowerCase(
									res.data[0].name
								)}/market_chart/range?vs_currency=${
									response.data.currency.code
								}&from=${yearUNIX}&to=${currentUNIX}`
							),
							Axios.get(
								`${api.sparklineBase}${setLowerCase(
									res.data[0].name
								)}/market_chart/range?vs_currency=${
									response.data.currency.code
								}&from=${formatFirstTrade(
									res.data[0].first_trade
								)}&to=${currentUNIX}`
							),
						])

							.then((ress) => {
								setSparkline((prevState) => {
									return [...prevState, ress[0].data];
								});
								setSparkline((prevState) => {
									return [...prevState, ress[1].data];
								});
								setSparkline((prevState) => {
									return [...prevState, ress[2].data];
								});
								setSparkline((prevState) => {
									return [...prevState, ress[3].data];
								});
								setSparkline((prevState) => {
									return [...prevState, ress[4].data];
								});
							})
							.catch((errr) => {
								console.log(errr);
							});
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	}, [setCryptos, setSparkline, setUserData]);

	return (
		<div className="container grid">
			<PriceItemsSparkline />
		</div>
	);
}

export default PriceItemsMain;
