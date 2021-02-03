import React, { createContext, useReducer, useState } from "react";
import { PriceItemsReducer } from "./PriceItemsReducer";

export const PriceItemsCryptosContext = createContext();
export const PriceItemsSparklineContext = createContext();
export const PriceItemsContext = createContext();

export const PriceItemsProvider = (props) => {
	const [PriceItemsCryptos, setPriceItemsCryptos] = useState([]);
	const [priceItemsSparkline, setpriceItemsSparkline] = useState([]);
	const [state, dispatch] = useReducer(PriceItemsReducer, [
		{ onDaily: true },
		{ onWeekly: false },
		{ onMonthly: false },
		{ onYearly: false },
		{ onAll: false },
	]);

	return (
		<PriceItemsContext.Provider value={[state, dispatch]}>
			<PriceItemsCryptosContext.Provider
				value={[PriceItemsCryptos, setPriceItemsCryptos]}
			>
				<PriceItemsSparklineContext.Provider
					value={[priceItemsSparkline, setpriceItemsSparkline]}
				>
					{props.children}
				</PriceItemsSparklineContext.Provider>
			</PriceItemsCryptosContext.Provider>
		</PriceItemsContext.Provider>
	);
};
