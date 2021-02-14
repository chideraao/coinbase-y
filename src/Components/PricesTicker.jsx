// import Axios from "axios";
// import React, { useEffect, useState } from "react";
// import Ticker from "react-ticker";

// /**Defining API endpoints */
// const api = {
// 	base: "https://api.nomics.com/v1/currencies/ticker?",
// 	key: "f120f033bda2bb941c1e6925f7ecfbe1",
// 	sparklineBase: "https://api.nomics.com/v1/currencies/sparkline?",
// 	zoneKey: "d65e37f4206340d188baba3c12561f09",
// 	zoneBase: "https://api.ipgeolocation.io/ipgeo?",
// };

// /**Regex for commas after every three digits */
// const addCommasToNumber = (num) => {
// 	return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
// };

// export default function Trial() {
// 	const [tickerList, setTickerList] = useState([]);

// 	useEffect(() => {
// 		Axios.get(
// 			`${api.base}key=${api.key}&per-page=25&page=1&convert=EUR&interval=1d`
// 		)
// 			.then((res) => {
// 				console.log(res.data);
// 				setTickerList(res.data);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 		return () => {
// 			// setCryptos([]);
// 			// setSparkline([]);
// 			console.log("cleaned up");
// 		};
// 	}, [setTickerList]);

// 	const tickerArr = React.useMemo(() => [], []);

// 	tickerList.forEach((crypto) => {
// 		tickerArr.push({
// 			imgSrc: crypto.logo_url,
// 			name: crypto.name,
// 			id: crypto.id,
// 			price: `${addCommasToNumber(Math.round(crypto.price * 100) / 100)}`,
// 			change: `${Math.round(crypto["1d"].price_change_pct * 10000) / 100}%`,
// 		});
// 	});

// 	console.log(tickerArr);

// 	const tickerData = React.useMemo(
// 		() => (!tickerList.length ? [] : tickerArr),
// 		[tickerArr, tickerList]
// 	);

// 	return (
// 		<div className="ticker">
// 			{/* {arr.map((num) => {
// 				return <div>{num}</div>;
// 			})} */}
// 			{!tickerList.length ? (
// 				""
// 			) : (
// 				<div className="ticker-container">
// 					{tickerData.map((item, index) => {
// 						return (
// 							<div className="ticker-main" key={index}>
// 								<div className="flex">
// 									{`EUR/${item.id}`} <span>{`${item.change}`}</span>
// 								</div>
// 								<p>${`${item.price}`}</p>
// 							</div>
// 						);
// 					})}{" "}
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export function PricesTicker() {
// 	return (
// 		<div>
// 			{/* <Trial /> */}
// 			<Ticker offset="run-in" speed={10}>
// 				{/* {({ index }) => (
// 					<>
// 						<h1>This is the Headline of element #{index}!</h1>
// 						<img src="www.my-image-source.com/" alt="" />
// 					</>
// 				)} */}
// 				{() => <Trial />}
// 			</Ticker>
// 		</div>
// 	);
// }
