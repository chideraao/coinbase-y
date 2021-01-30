import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PriceItemsMain from "../Components/PriceItemsMain";

function PriceItems() {
	return (
		<div className="price-items">
			<Header />
			<section className="priceitems-breadcrumbs">
				<div className="container">
					<div className="breadcrumbs">
						<a href="/prices">Price charts</a>
						<FontAwesomeIcon
							className="font-awesome"
							fontWeight="light"
							icon="chevron-right"
							size="3x"
						/>
						<a href="/prices/priceitems">Bitcoin price</a>
					</div>
				</div>
			</section>
			<div className="header-bar">
				<div className="container flex">
					<div className="crypto-name">
						<div className="img-container">
							<img src="" alt="bitcoin logo" />
						</div>
						<div className="text-container">
							<h1>
								Bitcoin price &nbsp; <span>(BTC)</span>
							</h1>
						</div>
					</div>
					<div className="crypto-actions flex">
						<div className="crypto-share">
							<h3>Share</h3>
						</div>
						<div className="crypto-watchlist">
							<h3>Add to Watchlist</h3>
						</div>
					</div>
				</div>
			</div>
			<section className="price-items-main">
				<PriceItemsMain />
			</section>
			<Banner />
			<Footer />
		</div>
	);
}

export default PriceItems;
