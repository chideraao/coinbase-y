import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BuyAsset from "./BuyItem";
import TrendingAssets from "./TrendingAssets";

function PriceItemsAssets() {
	return (
		<aside>
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
			<BuyAsset />
			<TrendingAssets />
		</aside>
	);
}

export default PriceItemsAssets;
