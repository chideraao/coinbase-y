import React, { useReducer, useState } from "react";
import { createContext } from "react";
import { PricesReducer } from "./PricesReducer";

export const PricesCryptoContext = createContext();
export const PricesSparklineContext = createContext();
export const PricesContext = createContext();
export const ShowcaseCryptosContext = createContext();

export const PricesProvider = (props) => {
	const [pricesCrypto, setPricesCrypto] = useState([]);
	const [pricesSparkline, setPricesSparkline] = useState([
		{ prices: "", timestamps: "" },
		{ prices: "", timestamps: "" },
		{ prices: "", timestamps: "" },
		{ prices: "", timestamps: "" },
	]);
	const [state, dispatch] = useReducer(PricesReducer, [
		{ onAllAssets: true },
		{ onTopGainers: false },
		{ onTopLosers: false },
	]);
	const [showcaseCryptos, setShowcaseCryptos] = useState([]);

	return (
		<PricesContext.Provider value={[state, dispatch]}>
			<ShowcaseCryptosContext.Provider
				value={[showcaseCryptos, setShowcaseCryptos]}
			>
				<PricesCryptoContext.Provider value={[pricesCrypto, setPricesCrypto]}>
					<PricesSparklineContext.Provider
						value={[pricesSparkline, setPricesSparkline]}
					>
						{props.children}
					</PricesSparklineContext.Provider>
				</PricesCryptoContext.Provider>
			</ShowcaseCryptosContext.Provider>
		</PricesContext.Provider>
	);
};
