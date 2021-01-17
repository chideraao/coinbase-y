import Axios from "axios";
import React, { useContext, useEffect } from "react";
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

/** Main table component */

function ChartTable() {
	const [cryptos, setCryptos] = useContext(CryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(SparklineContext);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
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
		return () => {
			// setCryptos([]);
			// setSparkline([]);
			// console.log("cleaned up");
		};
	}, [setCryptos, setSparkline, setUserData]);

	/** memoization of table values and prevention of rendering before the components are ready for render */

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
							price: `${addCommasToNumber(
								Math.round(cryptos[0].price * 100) / 100
							)}`,
							change: `${
								Math.round(cryptos[0]["1d"].price_change_pct * 10000) / 100
							}%`,
							chart: <BTCChart />,
						},
						{
							imgSrc:
								"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg",
							name: `${cryptos[1].name}`,
							id: `${cryptos[1].symbol}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[1].price * 100) / 100
							)}`,
							change: `${
								Math.round(cryptos[1]["1d"].price_change_pct * 10000) / 100
							}%`,
							chart: <ETHChart />,
						},
						{
							imgSrc:
								"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg",
							name: `${cryptos[2].name}   `,
							id: `${cryptos[2].symbol}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[2].price * 100) / 100
							)}`,
							change: `${
								Math.round(cryptos[2]["1d"].price_change_pct * 10000) / 100
							}%`,
							chart: <LTCChart />,
						},
						{
							imgSrc:
								"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bch.svg",
							name: `${cryptos[3].name} `,
							id: `${cryptos[3].symbol}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[3].price * 100) / 100
							)}`,
							change: `${
								Math.round(cryptos[3]["1d"].price_change_pct * 10000) / 100
							}%`,
							chart: <BCHChart />,
						},
				  ],
		[cryptos, sparkline]
	);

	return (
		<div className="home-table">
			{!cryptos.length && !sparkline.length ? (
				""
			) : (
				<table role="table">
					<thead>
						<tr>
							<th className="table-serial">#</th>
							<th colSpan="2">Name</th>
							<th className="table-empty"></th>
							<th className="table-empty"></th>
							<th className="table-empty"></th>
							<th>Price</th>
							<th>Change</th>
							<th className="table-chart">Chart</th>
							<th className="table-trade">Trade</th>
						</tr>
					</thead>

					<tbody>
						{tableData.map((item, index) => {
							return (
								<tr key={index}>
									<td className="table-serial">{index + 1}</td>
									<a href="#">
										<td colSpan="2" className="flex">
											<div className="">
												<img src={item.imgSrc} alt="" />
											</div>
											<div className="hidden-flex">
												{item.name} &nbsp;&nbsp; <span>{item.id}</span>
											</div>
										</td>
									</a>

									<td className="table-empty"></td>
									<td className="table-empty"></td>
									<td className="table-empty"></td>
									<td className="table-empty"></td>
									<td className="crypto-price">
										{userData.currency.symbol} {item.price}
									</td>
									{
										<td
											className={
												cryptos[index]["1d"].price_change_pct * 100 >= 0
													? "gains"
													: "loss"
											}
										>
											{cryptos[index]["1d"].price_change_pct * 100 >= 1
												? `+${item.change}`
												: `${item.change}`}
										</td>
									}
									<td className="table-chart">{item.chart}</td>
									<td className="table-trade">
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
