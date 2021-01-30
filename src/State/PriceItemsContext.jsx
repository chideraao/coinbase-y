import React, { createContext, useState } from "react";

export const PriceItemsCryptosContext = createContext();
export const PriceItemsSparklineContext = createContext();

export const PriceItemsProvider = (props) => {
	const [PriceItemsCryptos, setPriceItemsCryptos] = useState([]);
	const [priceItemsSparkline, setpriceItemsSparkline] = useState([]);
	return (
		<PriceItemsCryptosContext.Provider
			value={[PriceItemsCryptos, setPriceItemsCryptos]}
		>
			<PriceItemsSparklineContext.Provider
				value={[priceItemsSparkline, setpriceItemsSparkline]}
			>
				{props.children}
			</PriceItemsSparklineContext.Provider>
		</PriceItemsCryptosContext.Provider>
	);
};
