import React, { createContext } from "react";
import { useState } from "react";

export const CryptosContext = createContext();
export const SparklineContext = createContext();
export const LanguageContext = createContext();
export const UserDataContext = createContext();

export const GlobalProvider = (props) => {
	const [cryptos, setCryptos] = useState([]);
	const [sparkline, setSparkline] = useState([]);
	const [languages, setLanguages] = useState({});
	const [userData, setUserData] = useState([]);

	return (
		<CryptosContext.Provider value={[cryptos, setCryptos]}>
			<UserDataContext.Provider value={[userData, setUserData]}>
				<SparklineContext.Provider value={[sparkline, setSparkline]}>
					<LanguageContext.Provider value={[languages, setLanguages]}>
						{props.children}
					</LanguageContext.Provider>
				</SparklineContext.Provider>
			</UserDataContext.Provider>
		</CryptosContext.Provider>
	);
};
