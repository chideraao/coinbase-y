import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
	CryptosContext,
	SparklineContext,
	UserDataContext,
} from "../State/GlobalContext";
import {
	BCHChart,
	BTCChart,
	ETHChart,
	LTCChart,
} from "../Components/CoinsSparkline";

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

function ChartTable() {
	const [cryptos, setCryptos] = useContext(CryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(SparklineContext);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				console.log(response);
				setUserData(response.data);
				Axios.all([
					Axios.get(
						`${api.sparklineBase}key=${
							api.key
						}&ids=BTC,ETH,BCH,LTC&start=${year}-${
							month < 10 ? `0${month}` : month
						}-${day < 10 ? `0${day}` : day}T${
							hour < 10 ? `0${hour}` : hour
						}%3A${minute < 10 ? `0${minute}` : minute}%3A${
							seconds < 10 ? `0${seconds}` : seconds
						}Z&convert=${response.data.currency.code}`
					),
					Axios.get(
						`${api.base}key=${api.key}&ids=BTC,ETH,LTC,BCH&convert=${response.data.currency.code}&interval=1d`
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
	}, []);
	console.log(cryptos);
	console.log(sparkline);

	/** memoization of table values and prevention of rendering before the components are redy for render */

	const tableData = React.useMemo(
		() =>
			!crypto.length && !sparkline.length
				? []
				: [
						{
							imgSrc:
								"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
							name: `${cryptos[0].name} `,
							id: `${cryptos[0].symbol}`,
							price: cryptos[0].price,
							change: `${cryptos[0]["1d"].price_change_pct * 100}%`,
							chart: <BTCChart />,
						},
						{
							imgSrc:
								"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg",
							name: `${cryptos[1].name}`,
							id: `${cryptos[1].symbol}`,
							price: cryptos[1].price,
							change: `${cryptos[1]["1d"].price_change_pct * 100}%`,
							chart: <ETHChart />,
						},
						{
							imgSrc:
								"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg",
							name: `${cryptos[2].name} `,
							id: `${cryptos[2].symbol}`,
							price: cryptos[2].price,
							change: `${cryptos[2]["1d"].price_change_pct * 100}%`,
							chart: <LTCChart />,
						},
						{
							imgSrc:
								"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bch.svg",
							name: `${cryptos[3].name} `,
							id: `${cryptos[3].symbol}`,
							price: cryptos[3].price,
							change: `${cryptos[3]["1d"].price_change_pct * 100}%`,
							chart: <BCHChart />,
						},
				  ],
		[cryptos, sparkline]
	);

	const tableHeader = ["#", `Name`, "Price", "Change", "Chart", "Trade"];

	return (
		<div className="home-table">
			{!crypto.length && !sparkline.length ? (
				""
			) : (
				<table role="table">
					<thead>
						<tr role="row">
							{tableHeader.map((item, index) => {
								return (
									<th colSpan="1" role="columnheader" key={index}>
										{item}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody role="rowgroup">
						{tableData.map((item, index) => {
							return (
								<tr role="row" key={index}>
									<td role="cell">{index + 1}</td>
									<td role="cell" className="flex">
										<div className="">
											<img src={item.imgSrc} alt="" />
										</div>
										<div className="">
											{item.name} <span>{item.id}</span>
										</div>
									</td>
									<td role="cell">
										{userData.currency.symbol} {item.price}
									</td>
									{
										<td
											role="cell"
											className={
												cryptos[3]["1d"].price_change_pct * 100 > 1
													? "gains"
													: "loss"
											}
										>
											{item.change}
										</td>
									}
									<td role="cell" className="table-chart">
										{item.chart}
									</td>
									<td role="cell">
										<button className="btn">Buy</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default ChartTable;
