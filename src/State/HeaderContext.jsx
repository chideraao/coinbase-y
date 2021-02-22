import { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = (props) => {
	const [menuClick, setMenuClick] = useState(false);
	return (
		<HeaderContext.Provider value={[menuClick, setMenuClick]}>
			{props.children}
		</HeaderContext.Provider>
	);
};
