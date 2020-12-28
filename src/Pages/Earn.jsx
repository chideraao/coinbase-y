import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Earn() {
	return (
		<div className="earn">
			<div className="header-container">
				<Header />
				<div className="showcase">
					<div className="container flex">
						<h1>Earn crypto while learning about crypto</h1>
						<p>
							Discover how specific cryptocurrencies work — and get a bit of
							each crypto to try out for yourself.
						</p>
						<a href="#" className="btn">
							Start earning
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Earn;
