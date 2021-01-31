import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../State/GlobalContext";
import {
	PriceItemsCryptosContext,
	PriceItemsSparklineContext,
} from "../State/PriceItemsContext";

/**Defining API endpoints */
const api = {
	base: "https://api.nomics.com/v1/currencies/ticker?",
	key: "f120f033bda2bb941c1e6925f7ecfbe1",
	sparklineBase: "https://api.nomics.com/v1/currencies/sparkline?",
	zoneKey: "d65e37f4206340d188baba3c12561f09",
	zoneBase: "https://api.ipgeolocation.io/ipgeo?",
};
/** SETTING UP SPARKLINE DATA FOR THE PAST 24 HOURS */
//Get today's date using the JavaScript Date object.
let WeekDate = new Date();

//get the exact date for the past week
let past7 = WeekDate.getDate() - 7;
WeekDate.setDate(past7);
let weekMonth = WeekDate.getMonth() + 1;
let weekYear = WeekDate.getFullYear();
let weekDay = WeekDate.getDate();
let hour = WeekDate.getHours();
let minute = WeekDate.getMinutes();
let seconds = WeekDate.getSeconds();
let whatever = WeekDate.getTime();
console.log(whatever);

let date24hr = new Date();

//get the exact date the previous year
let past24 = date24hr.getDate() - 1;
date24hr.setDate(past24);
let dayMonth = date24hr.getMonth() + 1;
let dayYear = date24hr.getFullYear();
let dayDay = date24hr.getDate();

let date365 = new Date();

//Change it so that it is the previous day
let past365 = date365.getDate() - 365;
date365.setDate(past365);
let yearMonth = date365.getMonth() + 1;
let yearYear = date365.getFullYear();
let yearDay = date365.getDate();
let whatever1 = date365.getTime();
console.log(whatever1);

/**Regex for commas after every three digits */

const addCommasToNumber = (num) => {
	return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

function PriceItemsMain() {
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(PriceItemsSparklineContext);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				setUserData(response.data);
				Axios.all([
					Axios.get(
						`${api.sparklineBase}key=${api.key}&ids=BTC&start=${weekYear}-${
							weekMonth < 10 ? `0${weekMonth}` : weekMonth
						}-${weekDay < 10 ? `0${weekDay}` : weekDay}T${
							hour < 10 ? `0${hour}` : hour
						}%3A${minute < 10 ? `0${minute}` : minute}%3A${
							seconds < 10 ? `0${seconds}` : seconds
						}Z&convert=${response.data.currency.code}`
					),
					Axios.get(
						`${api.sparklineBase}key=${api.key}&ids=BTC&start=${dayYear}-${
							dayMonth < 10 ? `0${dayMonth}` : dayMonth
						}-${dayDay < 10 ? `0${dayDay}` : dayDay}T${
							hour < 10 ? `0${hour}` : hour
						}%3A${minute < 10 ? `0${minute}` : minute}%3A${
							seconds < 10 ? `0${seconds}` : seconds
						}Z&convert=${response.data.currency.code}`
					),
					Axios.get(
						`${api.sparklineBase}key=${api.key}&ids=BTC&start=${yearYear}-${
							yearMonth < 10 ? `0${yearMonth}` : yearMonth
						}-${yearDay < 10 ? `0${yearDay}` : yearDay}T${
							hour < 10 ? `0${hour}` : hour
						}%3A${minute < 10 ? `0${minute}` : minute}%3A${
							seconds < 10 ? `0${seconds}` : seconds
						}Z&convert=${response.data.currency.code}`
					),
					Axios.get(
						`${api.base}key=${api.key}&ids=BTC&convert=${response.data.currency.code}&interval=1d`
					),
				])
					.then((res) => {
						setCryptos(res[3].data);
						setSparkline((prevState) => {
							return [...prevState, res[0].data];
						});
						setSparkline((prevState) => {
							return [...prevState, res[1].data];
						});
						setSparkline((prevState) => {
							return [...prevState, res[2].data];
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
	console.log(cryptos);
	console.log(sparkline);
	return <div className="container grid"></div>;
}

export default PriceItemsMain;
