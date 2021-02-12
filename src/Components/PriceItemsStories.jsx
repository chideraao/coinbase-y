import React from "react";
import { ReactComponent as ArticleLogo } from "../logos/price-item-article.svg";

function PriceItemsStories() {
	return (
		<div className="price-items-stories">
			<div className="card">
				<h2>Top Stories</h2>
				<div className="articles">
					<article className="article">
						<h3>The Intangible Reasons Ethereum and Bitcoin Lead</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
							dolorem exercitationem eveniet consectetur voluptatibus est nisi
							illo in magnam quaerat?
						</p>
						<div className="article-details flex">
							<p>Coindesk</p>
							<p>2 hours ago</p>
							<a href="#" className="flex">
								<div className="bitcoin-polka"></div>
								<p>Bitcoin</p>
							</a>
							<a href="#" className="flex">
								<div className="eth-polka"></div>
								<p>Ethereum</p>
							</a>
						</div>
					</article>
					<hr />
					<article className="article">
						<h3>The 9 Public Companies With the Biggest Bitcoin Portfolios</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
							dolorem exercitationem eveniet consectetur voluptatibus est nisi
							illo in magnam quaerat?
						</p>
						<div className="article-details flex">
							<p>Decrypt</p>
							<p>2 hours ago</p>
							<a href="#" className="flex">
								<div className="bitcoin-polka"></div>
								<p>Bitcoin</p>
							</a>
						</div>
					</article>
					<hr />
					<article className="article grid">
						<div className="article-text flex">
							<ArticleLogo className="article-logo" />
							<div className="article-text">
								<h3>Don’t miss out on breaking news</h3>
								<p>
									Get the latest headlines on your favorite cryptocurrencies.
								</p>
							</div>
						</div>
						<div className="article-btn flex-column">
							<div className="btn flex">Continue</div>
							<div className="btn btn-outline">Log in</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}

export default PriceItemsStories;
