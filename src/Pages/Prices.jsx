import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PricesTable from "../Components/PricesTable";
import { PricesTicker } from "../Components/PricesTicker";

function Prices() {
	return (
		<div className="prices">
			<Header />
			<PricesTicker />
			<section className="price-cryptos">
				<div className="container card">
					<PricesTable />
				</div>
			</section>

			<Banner />
			<Footer />
		</div>
	);
}

export default Prices;
