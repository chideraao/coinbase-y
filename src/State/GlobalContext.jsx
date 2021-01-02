import React, { createContext } from "react";
import { useReducer } from "react";
import { globalState } from "./GlobalState";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(globalState, { cryptos: "" });

	return (
		<GlobalContext.Provider value={[state, dispatch]}>
			{props.children}
		</GlobalContext.Provider>
	);
};
