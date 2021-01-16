import Axios from "axios";
import React, { useContext, useEffect } from "react";
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
						console.log(res.data);
						setCryptos(res.data);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	}, [setCryptos, setUserData]);

	console.log(cryptos);

	// const trial = ()=>{
	//     cryptos.forEach(crypto => {
	//         [{imgSrc: crypto.logo_url, name: crypto.name, id: crypto.id, price:`${addCommasToNumber(
	//                             Math.round(cryptos.price * 100) / 100
	//                         )}`}]
	//     })
	// }

	const tableData = React.useMemo(
		() =>
			!crypto.length
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
							change: "",
						},
				  ],
		[cryptos]
	);

	return <div></div>;
}

export default PricesTable;
