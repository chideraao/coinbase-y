import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useContext, useEffect } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
	CryptosContext,
	SparklineContext,
	UserDataContext,
} from "../State/GlobalContext";

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

function PriceItems() {
	const [cryptos, setCryptos] = useContext(CryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(SparklineContext);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				setUserData(response.data);
				Axios.all([
					Axios.get(
						`${api.sparklineBase}key=${api.key}&ids=BTC&start=${year}-${
							month < 10 ? `0${month}` : month
						}-${day < 10 ? `0${day}` : day}T${
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
						setCryptos(res[1].data);
						setSparkline(res[0].data);
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
	return (
		<div className="price-items">
			<Header />
			<section className="priceitems-breadcrumbs">
				<div className="container">
					<div className="breadcrumbs">
						<a href="/prices">Price charts</a>
						<FontAwesomeIcon
							className="font-awesome"
							fontWeight="light"
							icon="chevron-right"
							size="3x"
						/>
						<a href="/prices/priceitems">Bitcoin price</a>
					</div>
				</div>
			</section>
			<div className="header-bar">
				<div className="container flex">
					<div className="crypto-name">
						<div className="img-container">
							<img src="" alt="bitcoin logo" />
						</div>
						<div className="text-container">
							<h1>
								Bitcoin price &nbsp; <span>(BTC)</span>
							</h1>
						</div>
					</div>
					<div className="crypto-actions flex">
						<div className="crypto-share">
							<h3>Share</h3>
						</div>
						<div className="crypto-watchlist">
							<h3>Add to Watchlist</h3>
						</div>
					</div>
				</div>
			</div>
			<section className="price-items-main">
				<div className="container grid"></div>
			</section>
			<Banner />
			<Footer />
		</div>
	);
}

export default PriceItems;
