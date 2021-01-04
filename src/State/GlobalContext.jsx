import React, { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
// import { globalState } from "./GlobalState";

export const CryptosContext = createContext();
export const SparklineContext = createContext();
export const LanguageContext = createContext();

export const GlobalProvider = (props) => {
	const [cryptos, setCryptos] = useState([]);
	const [sparkline, setSparkline] = useState({});
	const [languages, setLanguages] = useState({});
	// const [state, dispatch] = useReducer(globalState, { cryptos: "" });

	return (
		<CryptosContext.Provider value={[cryptos, setCryptos]}>
			<SparklineContext.Provider value={[sparkline, setSparkline]}>
				<LanguageContext.Provider value={[languages, setLanguages]}>
					{props.children}
				</LanguageContext.Provider>
			</SparklineContext.Provider>
		</CryptosContext.Provider>
	);
};
