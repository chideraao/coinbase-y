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
			{!cryptos.length ? (
				""
			) : (
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
							<a href="/prices/priceitems">&nbsp; {cryptos[0].name} price</a>
						</div>
					</div>
				</section>
			)}
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
									{cryptos[0].name} price&nbsp;
									<span>({cryptos[0].id})</span>
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
			<section className="legal">
				<div className="container legal-disclaimer">
					<p>
						This content and any information contained therein is being provided
						to you for informational purposes only, does not constitute a
						recommendation by Basecoin to buy, sell, or hold any security,
						financial product, or instrument referenced in the content, and does
						not constitute investment advice, financial advice, trading advice,
						or any other sort of advice. Data presented may reflect assets
						traded on Basecoin’s exchange and select other cryptocurrency
						exchanges. Certain content has been prepared by third parties not
						affiliated with Basecoin Inc. or any of its affiliates and Basecoin
						is not responsible for such content. Basecoin is not liable for any
						errors or delays in content, or for any actions taken in reliance on
						any content.
					</p>
				</div>
			</section>

			<Banner />
			<Footer />
		</div>
	);
}

export default PriceItems;
