import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../State/GlobalContext";
import { PricesCryptoContext } from "../State/PricesContext";

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
	const [cryptos, setCryptos] = useContext(PricesCryptoContext);
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
	}, [setCryptos, setUserData]);

	const tableArr = React.useMemo(() => [], []);

	cryptos.forEach((crypto) => {
		tableArr.push({
			imgSrc: crypto.logo_url,
			name: crypto.name,
			id: crypto.id,
			price: `${addCommasToNumber(Math.round(crypto.price * 100) / 100)}`,
			change: `${Math.round(crypto["1d"].price_change_pct * 10000) / 100}%`,
			marketCap: crypto.market_cap,
		});
	});

	console.log(tableArr);

	const tableData = React.useMemo(() => (!cryptos.length ? [] : tableArr), [
		cryptos,
		tableArr,
	]);

	return (
		<div className="prices-table">
			{!cryptos.length ? (
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
							<th>Volume</th>
							<th>Change</th>

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
									<td className="crypto-volume">
										{userData.currency.symbol} {item.marketCap}
									</td>
									{cryptos[index] ? (
										<td
											className={
												cryptos[index]["1d"].price_change_pct * 100 >= 0
													? "gains"
													: "loss"
											}
										>
											{cryptos[index]["1d"].price_change_pct * 100 > 1
												? `+${item.change}`
												: `${item.change}`}
										</td>
									) : (
										""
									)}
									<td className="table-trade">
										<button className="btn">Trade</button>
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

export default PricesTable;
