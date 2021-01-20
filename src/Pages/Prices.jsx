import React, { useContext } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PricesTable from "../Components/PricesTable";
import PricesTicker from "../Components/PricesTicker";
import { PricesCryptoContext } from "../State/PricesContext";

function Prices() {
	const [cryptos, setCryptos] = useContext(PricesCryptoContext);

	const market = React.useMemo(() => {
		return !cryptos.length
			? ""
			: `${Math.round(cryptos[0]["1d"].price_change_pct * 15000) / 100}`;
	}, [cryptos]);

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
				</div>
				<PricesTicker />
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
