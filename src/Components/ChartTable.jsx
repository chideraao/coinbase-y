/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
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

/**Regex for commas after every three digits */

const addCommasToNumber = (num) => {
	return Intl.NumberFormat().format(num);
};

/** Main table component */

function ChartTable() {
	const [cryptos, setCryptos] = useContext(CryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(SparklineContext);

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
