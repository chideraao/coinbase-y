import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { UserDataContext } from "../State/GlobalContext";
import { PriceItemsCryptosContext } from "../State/PriceItemsContext";

function BuyAsset() {
	const [userData, setUserData] = useContext(UserDataContext);
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
	const [mouseOver, setmouseOver] = useState(false);

	const handleMouseOver = () => {
		setmouseOver(true);
	};

	const handleMouseLeave = () => {
		setmouseOver(false);
	};

	return (
		<div className="buy-asset card">
			{cryptos.length ? (
				<div
					className={mouseOver ? "opaque-bg" : ""}
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}
				>
					<h2>Buy</h2>
					<div className="buy-main flex">
						<h3>{userData.currency.code}</h3> &nbsp;
						<h2>0</h2>
					</div>
					{mouseOver ? (
						<div
							className=""
							onMouseOver={handleMouseOver}
							onMouseLeave={handleMouseLeave}
						>
							1+1
						</div>
					) : (
						""
					)}
					<div className="buy-btn btn">Buy {cryptos[0].name}</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default BuyAsset;
