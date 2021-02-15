import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const api = {
	base: "https://api.nomics.com/v1/currencies/ticker?",
	key: "f120f033bda2bb941c1e6925f7ecfbe1",
	zoneKey: "d65e37f4206340d188baba3c12561f09",
	zoneBase: "https://api.ipgeolocation.io/ipgeo?",
};

const addCommasToNumber = (num) => {
	return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

function TrendingAssets() {
	const [userData, setUserData] = useState([]);
	const [cryptos, setCryptos] = useState([]);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
				setUserData(response.data);
				Axios.get(
					`${api.base}key=${api.key}&ids=XTZ,REP,FIL,DASH,ETH,AAVE&convert=${response.data.currency.code}&interval=1d`
				)
					.then((res) => {
						setCryptos(res.data);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((errr) => {
				console.log(errr);
			});
	}, []);

	const memoizedAssets = React.useMemo(
		() =>
			!cryptos.length
				? []
				: [
						{
							name: `${cryptos[2].name}`,
							id: `${cryptos[2].id}`,
							img_url: `${cryptos[2].logo_url}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[2].price * 100) / 100
							)}`,
							views: "420.69",
						},
						{
							name: `${cryptos[1].name}`,
							id: `${cryptos[1].id}`,
							img_url: `${cryptos[1].logo_url}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[1].price * 100) / 100
							)}`,
							views: "295.25",
						},
						{
							name: `${cryptos[3].name}`,
							id: `${cryptos[3].id}`,
							img_url: `${cryptos[3].logo_url}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[3].price * 100) / 100
							)}`,
							views: "207.83",
						},
						{
							name: `${cryptos[0].name}`,
							id: `${cryptos[0].id}`,
							img_url: `${cryptos[0].logo_url}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[0].price * 100) / 100
							)}`,
							views: "153.65",
						},
						{
							name: `${cryptos[4].name}`,
							id: `${cryptos[4].id}`,
							img_url: `${cryptos[4].logo_url}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[4].price * 100) / 100
							)}`,
							views: "77.75",
						},
						{
							name: `${cryptos[5].name}`,
							id: `${cryptos[5].id}`,
							img_url: `${cryptos[5].logo_url}`,
							price: `${addCommasToNumber(
								Math.round(cryptos[5].price * 100) / 100
							)}`,
							views: "20.75",
						},
				  ],
		[cryptos]
	);

	return (
		<section className="trending-assets card">
			<h2>Trending assets</h2>
			<p>
				Assets with the biggest change in unique page views on Basecoin.com over
				the past 24 hours
			</p>

			<div className="assets-main">
				{memoizedAssets.map((asset) => {
					return (
						<div className="flex">
							<div className="asset-id flex">
								<div className="img-container">
									<img src={asset.img_url} alt={`${asset.name} logo`} />
								</div>
								<div className="asset-name flex-column">
									<h3>{asset.name}</h3>
									<h5>{asset.id}</h5>
								</div>
							</div>
							<div className="asset-text flex-column">
								<h3>
									{userData.currency.code}&nbsp;
									{asset.price}
								</h3>
								<h5 className="gains">+{asset.views} views</h5>
							</div>
						</div>
					);
				})}
			</div>
			<Link to="/prices">View all</Link>
		</section>
	);
}

export default TrendingAssets;
