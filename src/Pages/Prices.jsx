import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PricesTable from "../Components/PricesTable";

function Prices() {
	return (
		<div className="prices">
			<Header />
			<section className="price-cryptos">
				<div className="card container">
					<PricesTable />
				</div>
			</section>

			<Banner />
			<Footer />
		</div>
	);
}

export default Prices;
