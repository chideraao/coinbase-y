import React, { useState } from "react";
import { createContext } from "react";

export const PricesCryptoContext = createContext();

export const PricesProvider = (props) => {
	const [pricesCrypto, setPricesCrypto] = useState([]);

	return (
		<PricesCryptoContext.Provider value={[pricesCrypto, setPricesCrypto]}>
			{props.children}
		</PricesCryptoContext.Provider>
	);
};
