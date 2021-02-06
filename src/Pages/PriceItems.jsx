/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PriceItemsMain from "../Components/PriceItemsMain";
import { PriceItemsCryptosContext } from "../State/PriceItemsContext";

function PriceItems() {
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);

	return (
		<div className="price-items">
			<Header />
			<section className="priceitems-breadcrumbs">
				<div className="container">
					<div className="breadcrumbs">
						<a href="/prices">Price charts &nbsp;</a>
						<FontAwesomeIcon
							className="font-awesome"
							fontWeight="light"
							icon="chevron-right"
							size="3x"
						/>
						<a href="/prices/priceitems">&nbsp; Bitcoin price</a>
					</div>
				</div>
			</section>
			<div className="header-bar">
				{!cryptos.length ? (
					""
				) : (
					<div className="container flex">
						<div className="crypto-name flex">
							<div className="img-container">
								<img src={cryptos[0].logo_url} alt="bitcoin logo" />
							</div>

							<div className="text-container">
								<h1>
									{cryptos[0].name} price&nbsp;<span>({cryptos[0].id})</span>
								</h1>
							</div>
						</div>
						<div className="crypto-actions flex">
							<div className="crypto-share">
								<h3>Share</h3>
							</div>
							<div className="crypto-watchlist flex">
								<FontAwesomeIcon
									className="font-awesome"
									fontWeight="light"
									icon={["far", "star"]}
									size="2x"
								/>
								<h3>Add to Watchlist</h3>
							</div>
						</div>
					</div>
				)}
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
