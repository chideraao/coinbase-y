import Axios from "axios";
import React, { useCallback, useContext, useEffect } from "react";
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
import { Link } from "react-router-dom";

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

/** Main table component */

function ChartTable() {
	const [cryptos, setCryptos] = useContext(CryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(SparklineContext);

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
					`${api.sparklineBase}key=${
						api.key
					}&ids=BTC,ETH,BCH,LTC&start=${year}-${
						month < 10 ? `0${month}` : month
					}-${day < 10 ? `0${day}` : day}T${hour < 10 ? `0${hour}` : hour}%3A${
						minute < 10 ? `0${minute}` : minute
					}%3A${seconds < 10 ? `0${seconds}` : seconds}Z&convert=${
						response.data.currency.code
					}`,
					setSparkline
				);
				fetchCalls(
					`${api.base}key=${api.key}&ids=BTC,ETH,LTC,BCH&convert=${response.data.currency.code}&interval=1d`,
					setCryptos
				);
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {};
	}, [setCryptos, setSparkline, setUserData, fetchCalls]);

	/** memoization of table values and prevention of rendering before the components are ready for render */

	const tableData = React.useMemo(
		() =>
			!cryptos.length ||
			!sparkline.length ||
			cryptos === undefined ||
			sparkline === undefined
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
			{cryptos.length && sparkline.length ? (
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
									<Link to={`/prices/${item.id}`}>
										<td colSpan="2" className="flex">
											<div className="">
												<img src={item.imgSrc} alt={`${item.name} logo`} />
											</div>
											<div className="hidden-flex">
												{item.name} &nbsp;&nbsp; <span>{item.id}</span>
											</div>
										</td>
									</Link>

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
											{cryptos[index]["1d"].price_change_pct * 100 >= 0
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
			) : (
				""
			)}
		</div>
	);
}

export default ChartTable;
