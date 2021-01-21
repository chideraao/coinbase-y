import React, { useReducer, useState } from "react";
import { createContext } from "react";
import { PricesReducer } from "./PricesReducer";

export const PricesCryptoContext = createContext();
export const PricesSparklineContext = createContext();
export const PricesContext = createContext();

export const PricesProvider = (props) => {
	const [pricesCrypto, setPricesCrypto] = useState([]);
	const [pricesSparkline, setPricesSparkline] = useState([]);
	const [state, dispatch] = useReducer(PricesReducer, [
		{ onAllAssets: true },
		{ onTopGainers: false },
		{ onTopLosers: false },
	]);
	return (
		<PricesContext.Provider value={[state, dispatch]}>
			<PricesCryptoContext.Provider value={[pricesCrypto, setPricesCrypto]}>
				<PricesSparklineContext.Provider
					value={[pricesSparkline, setPricesSparkline]}
				>
					{props.children}
				</PricesSparklineContext.Provider>
			</PricesCryptoContext.Provider>
		</PricesContext.Provider>
	);
};
