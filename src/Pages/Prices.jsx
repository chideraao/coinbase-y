import React, { useContext } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {
	PricesBAT,
	PricesBTC,
	PricesGRT,
	PricesXTZ,
} from "../Components/PricesSparkline";
import PricesTable from "../Components/PricesTable";
import PricesTicker from "../Components/PricesTicker";
import { UserDataContext } from "../State/GlobalContext";
import {
	PricesCryptoContext,
	ShowcaseCryptosContext,
} from "../State/PricesContext";

function Prices() {
	const [cryptos, setCryptos] = useContext(PricesCryptoContext);
	const [userData, setUserData] = useContext(UserDataContext);
	const [showcaseCryptos, setShowcaseCryptos] = useContext(
		ShowcaseCryptosContext
	);

	const market = React.useMemo(() => {
		return !cryptos.length
			? ""
			: `${Math.round(cryptos[0]["1d"].price_change_pct * 12000) / 100}`;
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
					<div className="box-container container"></div>
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
