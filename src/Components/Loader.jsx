import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loader() {
	return (
		<div className="loader">
			<div>
				<FontAwesomeIcon
					className="font-awesome"
					fontWeight="light"
					icon="spinner"
					size="2x"
					spin
				/>
				<div>Powered by CoinGecko API, Nomics API and ipgeolocation API</div>
			</div>
		</div>
	);
}

export default Loader;
