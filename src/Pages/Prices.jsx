import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PricesTable from "../Components/PricesTable";

function Prices() {
	return (
		<div className="prices">
			<Header />
			<PricesTable />
			<Banner />
			<Footer />
		</div>
	);
}

export default Prices;
