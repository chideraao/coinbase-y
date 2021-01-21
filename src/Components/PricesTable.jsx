import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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

const intlFormat = (num) => {
	return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
};
const abbr = (num) => {
	if (num >= 1000000000000) return intlFormat(num / 1000000000000) + "T";
	if (num >= 1000000000) return intlFormat(num / 1000000000) + "B";
	if (num >= 1000000) return intlFormat(num / 1000000) + "M";
	if (num >= 1000) return intlFormat(num / 1000) + "K";
	return intlFormat(num);
};

function PricesTable() {
	const [cryptos, setCryptos] = useContext(PricesCryptoContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [onOption, setOnOption] = useState(true);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				setUserData(response.data);
				Axios.get(
					`${api.base}key=${api.key}&per-page=100&page=1&convert=${response.data.currency.code}&interval=1h,1d,7d,30d,365d`
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
			console.log("cleaned up");
		};
	}, [setCryptos, setUserData]);

	const handleClick = () => {
		setOnOption(!onOption);
	};

	console.log(cryptos);

	return (
		<div className="prices-table">
			<div className="prices-nav">
				<div className="order-options grid">
					<ul className="flex">
						<li className={onOption ? "on-option" : ""} onClick={handleClick}>
							All assets
						</li>
						<li
							className={onOption ? "on-option" : ""} /*onClick={handleClick1}*/
						>
							Top gainers
						</li>
						<li
							className={onOption ? "on-option" : ""} /*onClick={handleClick2}*/
						>
							Top losers
						</li>
					</ul>
					<div className="">
						<select name="length" id="length">
							24hr
						</select>
					</div>
				</div>
			</div>
			{!cryptos.length ? (
				""
			) : (
				<table role="table" className="card">
					<thead>
						<tr>
							<th className="table-serial">#</th>
							<th colSpan="2">Name</th>
							<th className="table-empty"></th>
							<th className="table-empty"></th>
							<th className="table-empty"></th>
							<th colSpan="2">Price</th>
							<th>Change</th>
							<th>Volume</th>
							<th className="table-trade">Trade</th>
						</tr>
					</thead>
					<tbody>
						{cryptos.map((item, index) => {
							return (
								<tr key={index}>
									<td className="table-serial">{index + 1}</td>
									<a href="#">
										<td colSpan="2" className="flex">
											<div className="">
												<img src={item.logo_url} alt={`${item.name} logo`} />
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
									<td className="crypto-price" colSpan="2">
										{userData.currency.symbol}{" "}
										{`${addCommasToNumber(Math.round(item.price * 100) / 100)}`}
									</td>
									{cryptos[index] ? (
										<td
											className={
												cryptos[index]["1d"].price_change_pct * 100 >= 0
													? "gains"
													: "loss"
											}
										>
											{cryptos[index]["1d"].price_change_pct * 100 > 0
												? `+${
														Math.round(item["1d"].price_change_pct * 10000) /
														100
												  }%`
												: `${
														Math.round(item["1d"].price_change_pct * 10000) /
														100
												  }%`}
										</td>
									) : (
										""
									)}
									<td className="crypto-volume">
										{userData.currency.symbol} {`${abbr(item.market_cap)}`}
									</td>
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
