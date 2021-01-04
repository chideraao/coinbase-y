/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
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
import { CryptosContext } from "../State/GlobalContext";
import { useTable } from "react-table";

const api = {
	api:
		"https://api.nomics.com/v1/currencies/ticker?key=f120f033bda2bb941c1e6925f7ecfbe1&ids=BTC&convert=EUR&interval=1d,7d&per-page=100&page=1",
	base: "https://api.openweathermap.org/data/2.5/weather?q=",
	key: "39aa931e9188dadb3acc2ee4645d72c5",
	timeKey: "d65e37f4206340d188baba3c12561f09",
	timeBase: "https://api.ipgeolocation.io/timezone?",
};

function Home() {
	const [cryptos, setCryptos] = useContext(CryptosContext);

	const data = React.useMemo(
		() => [
			{
				col1: "Hello",
				col2: "World",
			},
			{
				col1: "react-table",
				col2: "rocks",
			},
			{
				col1: "whatever",
				col2: "you want",
			},
		],
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: "Column 1",
				accessor: "col1", // accessor is the "key" in the data
			},
			{
				Header: "Column 2",
				accessor: "col2",
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

	useEffect(() => {
		// Axios.get(
		// 	"https://api.nomics.com/v1/currencies/ticker?key=f120f033bda2bb941c1e6925f7ecfbe1&ids=BTC,ETH,LTC,BCH&interval=1d,7d&per-page=100&page=1"
		// )
		Axios.get(
			"https://api.ipgeolocation.io/ipgeo?apiKey=d65e37f4206340d188baba3c12561f09&include=useragent"
		)
			.then((response) => {
				Axios.get(
					`https://api.nomics.com/v1/currencies/ticker?key=f120f033bda2bb941c1e6925f7ecfbe1&ids=BTC,ETH,LTC,BCH&convert=${response.data.currency.code}&interval=1d,7d&per-page=100&page=1`
				)
					.then((res) => {
						console.log(res.data);
						setCryptos(res.data);
					})
					.catch((error) => {
						console.log(error);
					});
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	console.log(cryptos);

	return (
		<div>
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
						{/* <table>
							<thead>
								<tr className="flex">
									<div className="flex">
										<th>#</th>
										<th>Name</th>
									</div>
									<div className="flex end">
										<th>Price</th>
										<th>Volume</th>
									</div>
								</tr>
							</thead>
							<tbody>
								{cryptos.map((crypto, index) => {
									return (
										<tr key={crypto.id} className="flex">
											<div className="flex">
												<td>{index + 1}</td>
												<td className="flex">
													<div className="">
														<img
															src={crypto.logo_url}
															alt={`${crypto.name} icon`}
														/>
													</div>
													{crypto.name} {crypto.symbol}
												</td>
											</div>
											<div className="flex end">
												{" "}
												<td>{crypto.price}</td>
												<td>{crypto["1d"].volume}</td>
											</div>
										</tr>
									);
								})}
							</tbody>
						</table> */}
					</div>
				</section>
			</div>
			{/* <table
				className="card"
				{...getTableProps()}
				style={{ border: "solid 1px blue" }}
			>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps()}
									style={{
										borderBottom: "solid 3px red",
										background: "aliceblue",
										color: "black",
										fontWeight: "bold",
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
												padding: "10px",
												border: "solid 1px gray",
												background: "papayawhip",
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
								<img src={band} alt="band crypto svg" />
								<h2>Band</h2>
								<h3>BAND</h3>
								<span>Earn $43 BAND</span>
							</div>
						</a>
						<a href="/">
							{" "}
							<div className="icon-item flex">
								<img src={maker} alt="maker crypto svg" />
								<h2>Maker</h2>
								<h3>MKR</h3>
								<span>Earn $6 MKR</span>
							</div>
						</a>
						<a href="/">
							<div className="icon-item flex">
								<img src={celo} alt="celo crypto svg" />
								<h2>Celo</h2>
								<h3>CGLD</h3>
								<span>Earn $6 CGLD</span>
							</div>
						</a>
						<a href="/">
							{" "}
							<div className="icon-item flex">
								<img src={comp} alt="comp crypto svg" />
								<h2>Compound</h2>
								<h3>COMP</h3>
								<span className="comp-span">Earn $43 COMP</span>
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
							<Secure className="features-svg" />
							<h2>Secure storage</h2>
							<p>
								We store the vast majority of the digital assets in secure
								offline storage.
							</p>
							<a href="/">
								Learn how Basecoin keeps your funds safe and secure {">"}
							</a>
						</div>
						<div className="features-text ">
							<Insurance className="features-svg" />
							<h2>Protected by insurance</h2>
							<p>
								Cryptocurrency stored on our servers is covered by our insurance
								policy.
							</p>
							<a href="/">
								Learn how your crypto is covered by our insurance policy {">"}
							</a>
						</div>
						<div className="features-text ">
							<BestPractice className="features-svg" />
							<h2>Industry best practices</h2>
							<p>
								Basecoin supports a variety of the most popular digital
								currencies.
							</p>
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
