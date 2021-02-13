import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserDataContext } from "../State/GlobalContext";
import { PriceItemsCryptosContext } from "../State/PriceItemsContext";

function BuyAsset() {
	const [userData, setUserData] = useContext(UserDataContext);
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
	return (
		<div className="buy-asset card">
			{cryptos.length ? (
				<div className="">
					<h2>Buy</h2>
					<div className="buy-main flex">
						<h3>{userData.currency.code}</h3>
						<h2>0</h2>
					</div>

					<div className="buy-btn btn">Buy {cryptos[0].name}</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default BuyAsset;
