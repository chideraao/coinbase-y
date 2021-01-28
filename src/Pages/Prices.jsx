import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
	PricesRUNE,
	PricesBTC,
	PricesGRT,
	PricesXTZ,
	PricesBAND,
} from "../Components/PricesSparkline";
import PricesTable from "../Components/PricesTable";
import PricesTicker from "../Components/PricesTicker";
import { UserDataContext } from "../State/GlobalContext";
import {
	PricesCryptoContext,
	PricesSparklineContext,
	ShowcaseCryptosContext,
} from "../State/PricesContext";
import LearnIllustration from "../logos/Learn_Illustration_Ultimate_Guide_Bitcoin.png";

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

function Prices() {
	const [cryptos, setCryptos] = useContext(PricesCryptoContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [sparkline, setSparkline] = useContext(PricesSparklineContext);
	const [showcaseCryptos, setShowcaseCryptos] = useContext(
		ShowcaseCryptosContext
	);

	const market = React.useMemo(() => {
		return !cryptos.length
			? ""
			: `${Math.round(cryptos[0]["1d"].price_change_pct * 12000) / 100}`;
	}, [cryptos]);

	const marketHealth = React.useMemo(
		() =>
			!sparkline.length && !showcaseCryptos.length
				? []
				: [
						{
							img: `${showcaseCryptos[3].logo_url}`,
							name: `${showcaseCryptos[3].name}`,
							price: `${showcaseCryptos[3].price}`,
							chart: <PricesRUNE />,
						},
						{
							img: showcaseCryptos[2].logo_url,
							name: showcaseCryptos[2].name,
							price: showcaseCryptos[2].price,
							chart: <PricesGRT />,
						},
						{
							img: showcaseCryptos[1].logo_url,
							name: showcaseCryptos[1].name,
							price: showcaseCryptos[1].price,
							chart: <PricesXTZ />,
						},
						{
							img: showcaseCryptos[0].logo_url,
							name: showcaseCryptos[0].name,
							price: showcaseCryptos[0].price,
							volume: showcaseCryptos[0].market_cap,
							chart: <PricesBTC />,
						},
						{
							img: showcaseCryptos[4].logo_url,
							name: showcaseCryptos[4].name,
							price: showcaseCryptos[4].price,
							volume: showcaseCryptos[4].market_cap,
							chart: <PricesBAND />,
						},
				  ],
		[showcaseCryptos, sparkline]
	);

	return (
		<div className="prices">
			<Header />
			<main className="prices-main">
				<div className="market-health">
					<div className="container">
						<h1 className="flex-column">
							<span className="link-heading">In the last 24 hours</span>

							<span>
								Market is {market > 0 ? "up" : "down"}
								<span className={market >= 0 ? "gains" : "loss"}>
									{"  "}
									{market}%
								</span>
							</span>
						</h1>
					</div>
					{!showcaseCryptos.length && !sparkline.length ? (
						""
					) : (
						<div className="container">
							<div className="box-container flex">
								<Link to="#">
									<div className="prices-box">
										<h2>Top gainer (24h)</h2>
										<div className="sparkline-container flex">
											<div className="crypto-profile flex">
												<div className="box-img">
													<img
														src={marketHealth[0].img}
														alt={`${marketHealth[0].name} icon`}
													/>
												</div>
												<div className="box-title">
													<h3>{marketHealth[0].name}</h3>
													<p className="gains">+40.59%</p>
												</div>
											</div>

											<div className="sparkline-main">
												<p>
													{userData.currency.symbol}{" "}
													{`${addCommasToNumber(
														Math.round(marketHealth[0].price * 100) / 100
													)}`}
												</p>
												{marketHealth[0].chart}
											</div>
										</div>
									</div>
								</Link>
								<Link to="#">
									<div className="prices-box">
										<h2>New listing</h2>
										<div className="sparkline-container flex">
											<div className="crypto-profile flex">
												<div className="box-img">
													<img
														src={marketHealth[1].img}
														alt={`${marketHealth[1].name} icon`}
													/>
												</div>
												<div className="box-title">
													<h3>{marketHealth[1].name}</h3>
													<p>Added Dec 17</p>
												</div>
											</div>

											<div className="sparkline-main">
												<p>
													{userData.currency.symbol}{" "}
													{`${addCommasToNumber(
														Math.round(marketHealth[1].price * 100) / 100
													)}`}
												</p>
												{marketHealth[1].chart}
											</div>
										</div>
									</div>
								</Link>
								<Link to="/learn">
									<div className="prices-box learn-box flex">
										<div className="prices-box-text flex-column">
											<h2 className="flex-column">
												Crypto questions, <span>answered</span>
											</h2>
											<p>Learn with Basecoin</p>
										</div>
										<div className="learn-img flex">
											<img
												src={LearnIllustration}
												alt="learn illustration img"
											/>
										</div>
									</div>
								</Link>
							</div>
							<div className="box-container box-container-ii flex">
								<Link to="#">
									<div className="prices-box">
										<h2>Highest volume (24h)</h2>
										<div className="sparkline-container flex">
											<div className="crypto-profile flex">
												<div className="box-img">
													<img
														src={marketHealth[3].img}
														alt={`${marketHealth[3].name} icon`}
													/>
												</div>
												<div className="box-title">
													<h3>{marketHealth[3].name}</h3>
													<p>
														{userData.currency.symbol}{" "}
														{`${abbr(marketHealth[3].volume)}`}
													</p>
												</div>
											</div>

											<div className="sparkline-main">
												<p>
													{userData.currency.symbol}{" "}
													{`${addCommasToNumber(
														Math.round(marketHealth[3].price * 100) / 100
													)}`}
												</p>
												{marketHealth[3].chart}
											</div>
										</div>
									</div>
								</Link>
								<Link to="#">
									<div className="prices-box">
										<h2>Most visited (24h)</h2>
										<div className="sparkline-container flex">
											<div className="crypto-profile flex">
												<div className="box-img">
													<img
														src={marketHealth[2].img}
														alt={`${marketHealth[2].name} icon`}
													/>
												</div>
												<div className="box-title">
													<h3>{marketHealth[2].name}</h3>
													<p className="gains">+220.69% views</p>
												</div>
											</div>

											<div className="sparkline-main">
												<p>
													{userData.currency.symbol}{" "}
													{`${addCommasToNumber(
														Math.round(marketHealth[2].price * 100) / 100
													)}`}
												</p>
												{marketHealth[2].chart}
											</div>
										</div>
									</div>
								</Link>
								<Link to="#">
									<div className="prices-box">
										<h2>Earn free crypto</h2>
										<div className="sparkline-container flex">
											<div className="crypto-profile flex">
												<div className="box-img">
													<img
														src={marketHealth[4].img}
														alt={`${marketHealth[4].name} icon`}
													/>
												</div>
												<div className="box-title">
													<h3>{marketHealth[4].name}</h3>
													<p>Earn $3 in GRT</p>
												</div>
											</div>

											<div className="sparkline-main">
												<p>
													{userData.currency.symbol}{" "}
													{`${addCommasToNumber(
														Math.round(marketHealth[4].price * 100) / 100
													)}`}
												</p>
												{marketHealth[4].chart}
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					)}
				</div>
				{/* <PricesTicker /> */}
				<section className="price-cryptos">
					<div className="container">
						<PricesTable />
					</div>
				</section>
			</main>

			<Banner />
			<Footer />
		</div>
	);
}

export default Prices;
