import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Prices() {
	//Get today's date using the JavaScript Date object.
	let ourDate = new Date();

	//Change it so that it is 7 days in the past.
	let pastDate = ourDate.getDate() - 30;
	ourDate.setDate(pastDate);
	let days30 = ourDate.getMonth + 1;

	//Log the date to our web console.
	console.log(ourDate);
	console.log(ourDate.getMonth() + 1);
	console.log(ourDate.getDate());
	console.log(ourDate.getFullYear());

	return (
		<div className="prices">
			<Header />
			<Banner />
			<Footer />
		</div>
	);
}

export default Prices;
