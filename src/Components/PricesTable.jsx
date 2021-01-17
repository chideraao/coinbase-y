import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { CryptosContext, UserDataContext } from "../State/GlobalContext";

/**Defining API endpoints */
const api = {
	base: "https://api.nomics.com/v1/currencies/ticker?",
	key: "f120f033bda2bb941c1e6925f7ecfbe1",
	sparklineBase: "https://api.nomics.com/v1/currencies/sparkline?",
	zoneKey: "d65e37f4206340d188baba3c12561f09",
	zoneBase: "https://api.ipgeolocation.io/ipgeo?",
};

/**Regex for commas after every three digits */
const addCommasToNumber = (num) => {
	return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

function PricesTable() {
	const [cryptos, setCryptos] = useContext(CryptosContext);
	const [userData, setUserData] = useContext(UserDataContext);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				setUserData(response.data);
				Axios.get(
					`${api.base}key=${api.key}&per-page=75&page=1&convert=${response.data.currency.code}&interval=1d`
				)
					.then((res) => {
						setCryptos(res.data);
						console.log(res.data[2].name);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {
			setCryptos([]);
			console.log("cleaned up");
		};
	}, [setCryptos, setUserData]);
	// console.log(cryptos[1].name);

	const tableArr = React.useMemo(() => [], []);

	// cryptos.forEach((crypto) => {
	// 	tableArr.push({
	// 		imgSrc: crypto.logo_url,
	// 		name: crypto.name,
	// 		id: crypto.id,
	// 		price: `${addCommasToNumber(Math.round(crypto.price * 100) / 100)}`,
	// 		marketCap: crypto.market_cap,
	// 	});
	// });

	console.log(tableArr);

	const tableData = React.useMemo(() => (!cryptos.length ? [] : tableArr), [
		cryptos,
		tableArr,
	]);
	console.log(tableData);

	console.log(cryptos.length);
	console.log(tableData.length);
	console.log(cryptos);
	// console.log(cryptos[1].currency);
	// console.log(cryptos[1].currency);
	console.log(tableData[1]);
	console.log(tableData);

	return (
		<div className="prices-table">
			{!crypto.length ? (
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
						{
							// console.log(tableData)
							// console.log(tableArr)
							tableData.map((item, index) => {
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
													cryptos[index]["1d"].price_change_pct * 100 > 1
														? "gains"
														: "loss"
												}
											>
												{cryptos[index]["1d"].price_change_pct * 100 > 1
													? `+${item.change}`
													: `${item.change}`}
											</td>
										}
										<td className="table-trade">
											<button className="btn">Buy</button>
										</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default PricesTable;
