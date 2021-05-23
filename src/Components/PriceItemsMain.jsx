/* eslint-disable no-unused-vars */
import React from "react";
import PriceItemsAssets from "./PriceItemsAssets";
import PriceItemsSparkline from "./PriceItemsSparkline";

function PriceItemsMain({ match }) {
	return (
		<div className="container grid">
			{/* <PriceItemsSparkline match={match} /> */}
			<PriceItemsAssets />
		</div>
	);
}

export default PriceItemsMain;
