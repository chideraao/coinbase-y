import React from "react";
import Ticker from "react-ticker";

export function trial() {
	const arr = [
		1,
		1,
		1,
		2,
		2,
		3,
		4,
		4,
		5,
		6,
		6,
		7,
		7,
		7,
		8,
		8,
		9,
		9,
		9,
		9,
		7,
		6,
		5,
		5,
		4,
		3,
		3,
		2,
		2,
		2,
		3,
		44,
		5,
		6,
		6,
		6,
		7,
		7,
		7,
		8,
		8,
		8,
		8,
		8,
		8,
		65,
		4,
		3,
		3,
		45,
		6,
		7,
		7,
		7,
		7,
		7,
		7,
		7,
		8,
		8,
		89,
		9,
		9,
	];

	return (
		<div>
			<p>
				abcdefshjsdhfvujghgn.gnm,gjvljndfsljnvdjsgnvngvkjnfgjnfgjnfghjngdhbngdhbnfdghnfdghbnjfdhbndfgjnfgjnfgbnjfgjbnfgjnfgjn
			</p>
			;
		</div>
	);
}

export function PricesTicker() {
	return (
		<div>
			<Ticker offset="run-in" speed={10}>
				{/* {({ index }) => (
					<>
						<h1>This is the Headline of element #{index}!</h1>
						<img src="www.my-image-source.com/" alt="" />
					</>
				)} */}
				{() => <trial />}
			</Ticker>
		</div>
	);
}
