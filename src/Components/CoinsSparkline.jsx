import Axios from "axios";
import React, { useEffect, useState } from "react";

function ChartTable() {
	const [data, setdata] = useState("");
	useEffect(() => {
		Axios.get(
			// `https://api.nomics.com/v1/currencies/ticker?key=f120f033bda2bb941c1e6925f7ecfbe1&ids=BTC&convert=EUR&interval=1d,7d&per-page=100&page=1`
			//`https://api.nomics.com/v1/currencies/ticker?key=f120f033bda2bb941c1e6925f7ecfbe1&ids&ids=BTC,ETH,XRP&convert=NGN&interval=1d,30d&per-page=10&page=1`
			`https://api.nomics.com/v1/currencies/sparkline?key=f120f033bda2bb941c1e6925f7ecfbe1&ids=BTC,ETH,XRP&start=2020-12-01T00%3A00%3A00Z&end=2020-12-17T00%3A00%3A00Z`
		).then((res) => {
			setdata(res.data);
			console.log(res.data);
		});
	}, []);
	return (
		<div>
			<h1>from ChartTable</h1>
			<p>{JSON.stringify(data)}</p>
		</div>
	);
}

export default ChartTable;
