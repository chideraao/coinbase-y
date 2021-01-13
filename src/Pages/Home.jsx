/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import band from "../logos/band.svg";
import comp from "../logos/compound-comp-logo.svg";
import celo from "../logos/celo-celo-logo.svg";
import maker from "../logos/maker-mkr-logo.svg";
import { ReactComponent as Portfolio } from "../logos/manage-portfolio.svg";
import { ReactComponent as Vault } from "../logos/vault-protection.svg";
import { ReactComponent as Recurring } from "../logos/recurring-buys.svg";
import { ReactComponent as Mobile } from "../logos/mobile-apps.svg";
import { ReactComponent as Secure } from "../logos/secure-storage.svg";
import { ReactComponent as Insurance } from "../logos/insurance.svg";
import { ReactComponent as CreateAccount } from "../logos/create-account.svg";
import { ReactComponent as BestPractice } from "../logos/best-practices.svg";
import { ReactComponent as LinkAccount } from "../logos/link-bank-account.svg";
import { ReactComponent as Buying } from "../logos/start-buying.svg";
import overlay from "../logos/coinbase-app.51b8f3dbe406092d16845f3e74870061.jpg";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Axios from "axios";
import { CryptosContext, SparklineContext } from "../State/GlobalContext";
import { useTable } from "react-table";
import {
	BCHChart,
	BTCChart,
	ETHChart,
	LTCChart,
} from "../Components/CoinsSparkline";

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

/** MAIN HOME COMPONENT */

function Home() {
	const [cryptos, setCryptos] = useContext(CryptosContext);
	const [sparkline, setSparkline] = useContext(SparklineContext);

	useEffect(() => {
		Axios.get(`${api.zoneBase}apiKey=${api.zoneKey}&include=useragent`)
			.then((response) => {
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
	}, []);
	console.log(cryptos);
	console.log(sparkline);

	/** memoization of table values and prevention of rendering before the components are redy for render */
	const data = React.useMemo(
		() =>
			!crypto.length && !sparkline.length
				? []
				: [
						{
							col0: 1,
							col1: `${cryptos[0].name} ${cryptos[0].symbol}`,
							col2: cryptos[0].price,
							col3: `${cryptos[0]["1d"].price_change_pct * 100}%`,
							col4: <BTCChart />,
						},
						{
							col0: 2,
							col1: `${cryptos[1].name} ${cryptos[1].symbol}`,
							col2: cryptos[1].price,
							col3: `${cryptos[1]["1d"].price_change_pct * 100}%`,
							col4: <ETHChart />,
						},
						{
							col0: 3,
							col1: `${cryptos[2].name} ${cryptos[2].symbol}`,
							col2: cryptos[2].price,
							col3: `${cryptos[2]["1d"].price_change_pct * 100}%`,
							col4: <LTCChart />,
						},
						{
							col0: 4,
							col1: `${cryptos[3].name} ${cryptos[3].symbol}`,
							col2: cryptos[3].price,
							col3: `${cryptos[3]["1d"].price_change_pct * 100}%`,
							col4: <BCHChart className="sparkline" />,
						},
				  ],
		[cryptos, sparkline]
	);

	const columns = React.useMemo(
		() => [
			{ Header: "#", accessor: "col0" },
			{
				Header: "Name",
				accessor: "col1", // accessor is the "key" in the data
			},
			{
				Header: "Price",
				accessor: "col2",
			},
			{
				Header: "Change",
				accessor: "col3",
			},
			{
				Header: "Chart",
				accessor: "col4",
			},
			{
				Header: "Trade",
				accessor: "col5",
			},
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data });

	return (
		<div>
			<div className="gbEsE_ConTAinER">
				<Header />
				<div className="showcase-container">
					<section className="showcase">
						<div className="container">
							<div className=""></div>
							<div className="showcase-text">
								<h1>Buy and sell cryptocurrency</h1>
								<p>
									Basecoin is the easiest place to buy, sell, and manage your
									cryptocurrency portfolio.
								</p>
							</div>
							<div className="showcase-form">
								<form className="email-form flex">
									<label htmlFor="email">
										<input type="email" placeholder="Email address"></input>
									</label>
									<label htmlFor="submit-button">
										<button className="btn btn-outline">Get Started</button>
									</label>
								</form>
							</div>
						</div>
					</section>
					<section className="tables">
						<div className="container card">
							<table
								className=""
								{...getTableProps()}
								style={{ border: "none" }}
							>
								<thead>
									{headerGroups.map((headerGroup) => (
										<tr {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map((column) => (
												<th
													{...column.getHeaderProps()}
													style={{
														borderBottom: "none",
														background: "white",
														color: "black",
													}}
												>
													{column.render("Header")}
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody {...getTableBodyProps()}>
									{rows.map((row) => {
										prepareRow(row);
										return (
											<tr {...row.getRowProps()}>
												{row.cells.map((cell) => {
													return (
														<td
															{...cell.getCellProps()}
															style={{
																border: "none",
																background: "white",
																color: " black",
															}}
														>
															{cell.render("Cell")}
														</td>
													);
												})}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</div>
			{/* <table class="" role="table" style="border: none;">
				<thead>
					<tr role="row">
						<th
							colspan="1"
							role="columnheader"
							style="border-bottom: none; background: white; color: black;"
						>
							#
						</th>
						<th
							colspan="1"
							role="columnheader"
							style="border-bottom: none; background: white; color: black;"
						>
							Name
						</th>
						<th
							colspan="1"
							role="columnheader"
							style="border-bottom: none; background: white; color: black;"
						>
							Price
						</th>
						<th
							colspan="1"
							role="columnheader"
							style="border-bottom: none; background: white; color: black;"
						>
							Change
						</th>
					</tr>
				</thead>
				<tbody role="rowgroup">
					<tr role="row">
						<td
							role="cell"
							style="border: none; background: white; color: black;"
						>
							1
						</td>
						<td
							role="cell"
							style="border: none; background: white; color: black;"
						>
							Bitcoin BTC
						</td>
						<td
							role="cell"
							style="border: none; background: white; color: black;"
						>
							13202739.02605790
						</td>
						<td
							role="cell"
							style="border: none; background: white; color: black;"
						>
							1.04%
						</td>
						<td
							role="cell"
							style="border: none; background: white; color: black;"
						>
							<div class="container">
								<div class="chartjs-size-monitor">
									<div class="chartjs-size-monitor-expand">
										<div class=""></div>
									</div>
									<div class="chartjs-size-monitor-shrink">
										<div class=""></div>
									</div>
								</div>
								<canvas
									height="150"
									width="300"
									class="chartjs-render-monitor"
									style="display: block;"
								></canvas>
							</div>
						</td>
						<td
							role="cell"
							style="border: none; background: white; color: black;"
						></td>
					</tr>
				</tbody>
			</table> */}

			<section className="banner ">
				<div className="container grid">
					{" "}
					<div className="banner-text">
						<h2>Earn up to $164 worth of crypto</h2>
						<p>
							Discover how specific cryptocurrencies work — and get a bit of
							each crypto to try out for yourself.
						</p>
						<Link to="/earn" className="btn">
							Start earning
						</Link>
					</div>
					<div className="banner-icons">
						<a href="/">
							<div className="icon-item flex">
								<div className="flex">
									<img src={band} alt="band crypto svg" />
									<h2>Band</h2>
									<h3>BAND</h3>
								</div>
								<span>Earn $7 BAND</span>
							</div>
						</a>
						<a href="/">
							{" "}
							<div className="icon-item flex">
								<div className="flex">
									<img src={maker} alt="maker crypto svg" />
									<h2>Maker</h2>
									<h3>MKR</h3>
								</div>
								<span>Earn $6 MKR</span>
							</div>
						</a>
						<a href="/">
							<div className="icon-item flex">
								<div className="flex">
									<img src={celo} alt="celo crypto svg" />
									<h2>Celo</h2>
									<h3>CGLD</h3>
								</div>
								<span>Earn $6 CGLD</span>
							</div>
						</a>
						<a href="/">
							{" "}
							<div className="icon-item flex">
								<div className="flex">
									<img src={comp} alt="comp crypto svg" />
									<h2>Graph</h2>
									<h3>GRT</h3>
								</div>
								<span className="">Earn $9 GRT</span>
							</div>
						</a>
						<Link to="/earn" className="banner-btn">
							View more {">"}
						</Link>
					</div>
				</div>
			</section>
			<section className="overlay">
				<div className="container">
					{" "}
					<div className="overlay-head">
						<h2>Create your cryptocurrency portfolio today</h2>
						<p>
							Basecoin has a variety of features that make it the best place to
							start trading
						</p>
					</div>
					<div className="overlay-icons grid">
						<div className="overlay-text-container">
							<div className="overlay-text flex">
								{" "}
								<Portfolio className="overlay-svg" />
								<div>
									{" "}
									<h2>Manage your portfolio</h2>
									<p>
										Buy and sell popular digital currencies, keep track of them
										in the one place.
									</p>
								</div>
							</div>
							<div className="overlay-text flex">
								<Recurring className="overlay-svg" />
								<div>
									<h2>Recurring buys</h2>
									<p>
										Invest in cryptocurrency slowly over time by scheduling buys
										daily, weekly, or monthly.
									</p>
								</div>
							</div>
							<div className="overlay-text flex">
								{" "}
								<Vault className="overlay-svg" />
								<div>
									<h2>Vault protection</h2>
									<p>
										For added security, store your funds in a vault with time
										delayed withdrawals.
									</p>
								</div>
							</div>
							<div className="overlay-text flex">
								{" "}
								<Mobile className="overlay-svg" />
								<div>
									<h2>Mobile apps</h2>
									<p>
										Stay on top of the markets with the Basecoin app for{" "}
										<a href="#">Android</a> or <a href="#">iOS</a>.
									</p>
								</div>
							</div>
						</div>
						<div className="overlay-img">
							{" "}
							<img src={overlay} alt="Basecoin overlay" />
						</div>
					</div>
				</div>
			</section>
			<hr />
			<section className="features">
				<div className="container">
					<div className="features-head">
						<h2>The most trusted cryptocurrency platform</h2>
						<p>Here are a few reasons why you should choose Basecoin</p>
					</div>
					<div className="features-icons grid">
						<div className="features-text ">
							<div className="features-svg-container">
								<Secure className="features-svg" />
							</div>

							<div className="">
								<h2>Secure storage</h2>
								<p>
									We store the vast majority of the digital assets in secure
									offline storage.
								</p>
							</div>

							<a href="/">
								Learn how Basecoin keeps your funds safe and secure {">"}
							</a>
						</div>
						<div className="features-text flex-column">
							<div className="features-svg-container">
								<Insurance className="features-svg" />
							</div>

							<div className="">
								<h2>Protected by insurance</h2>

								<p>
									Cryptocurrency stored on our servers is covered by our
									insurance policy.
								</p>
							</div>

							<a href="/">
								Learn how your crypto is covered by our insurance policy {">"}
							</a>
						</div>
						<div className="features-text ">
							<div className="features-svg-container">
								<BestPractice className="features-svg" />
							</div>

							<div className="">
								<h2>Industry best practices</h2>
								<p>
									Basecoin supports a variety of the most popular digital
									currencies.
								</p>
							</div>

							<a href="/">
								Learn how we implement industry best practices for account
								security {">"}{" "}
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="stats">
				<div className="container grid">
					<div className="stats-text">
						<h2>$300B+</h2>
						<p>Total Volume Traded</p>
					</div>
					<div className="stats-text">
						<h2>100+</h2>
						<p>Countries supported</p>
					</div>
					<div className="stats-text">
						<h2>35M+</h2>
						<p>Verified Users</p>
					</div>
				</div>
			</section>
			<section className="quickstart">
				<div className="container">
					<div className="quickstart-head">
						<h2>Get started in a few minutes</h2>
						<p>
							Basecoin supports a variety of the most popular digital
							currencies.
						</p>
					</div>
					<div className="quickstart-icons grid">
						<div className="quickstart-text flex">
							<div>
								<CreateAccount className="quickstart-svg" />
								<h2>Create an account</h2>
							</div>
							<div className="quickstart-line">_______________</div>
						</div>
						<div className="quickstart-text flex">
							<div>
								<LinkAccount className="quickstart-svg" />
								<h2>Link your bank account</h2>
							</div>
							<div className="quickstart-line">_______________</div>
						</div>
						<div className="quickstart-text flex">
							<div>
								<Buying className="quickstart-svg" />
								<h2>Start buying & selling</h2>
							</div>
							<div className="quickstart-line hidden">_______________</div>
						</div>
					</div>
				</div>
			</section>
			<Banner />
			<Footer />
		</div>
	);
}

export default Home;
