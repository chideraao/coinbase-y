import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loader() {
	return (
		<div className="loader">
			<FontAwesomeIcon
				className="font-awesome"
				fontWeight="light"
				icon="spinner"
				size="2x"
				spin
			/>
		</div>
	);
}

export default Loader;
