import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Careers() {
	return (
		<div className="careers">
			<Header />
			<div className="header-container">
				<section className="showcase">
					<div className="container">
						<h1>We saved a seat for you</h1>
					</div>
				</section>
				<section className="video-container">
					<div className="container flex"></div>
					<div className="video">
						<iframe
							title="Coinbase mission and strategy"
							width="720"
							height="405"
							src="https://www.youtube.com/embed/HQaegigv6jU"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
					<div className="button-div">
						<a href="#" className="btn btn-outline">
							View all positions
						</a>
						<a href="#" className="btn btn-outline">
							Visit out blog
						</a>
					</div>
				</section>
			</div>

			<Banner />
			<Footer />
		</div>
	);
}

export default Careers;
