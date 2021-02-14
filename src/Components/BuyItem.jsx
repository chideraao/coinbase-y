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
		<div
			className="buy-asset"
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
		>
			{cryptos.length ? (
				<div className={mouseOver ? "opaque-bg card" : "card"}>
					<h2>Buy</h2>
					<div className="buy-main flex">
						<h3>{userData.currency.code}</h3> &nbsp;
						<h2>0</h2>
					</div>
					<div className="buy-btn btn">Buy {cryptos[0].name}</div>
				</div>
			) : (
				""
			)}
			{mouseOver ? (
				<div className="card hover-div" onMouseOver={handleMouseOver}>
					<h3>Ready to buy {cryptos[0].id}?</h3>
					<div className="hover-btn flex-column">
						<div className="btn flex">Continue</div>
						<p>or</p>
						<div className="btn btn-outline">Log in</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default BuyAsset;
