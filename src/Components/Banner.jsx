/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import bannerimg from "../logos/earn-upsell-desktop.852a74929173d0974480694525be02ab.jpg";

function Banner() {
	return (
		<>
			<section className="banner-footer">
				<div className=" grid">
					{" "}
					<div className="banner-footer-text">
						<h2>Earn up to $164 worth of crypto</h2>
						<p>
							Discover how specific cryptocurrencies work — and get a bit of
							each crypto to try out for yourself.
						</p>
						<Link to="/earn" className="btn">
							Start earning
						</Link>
					</div>
					<div>
						<img src={bannerimg} alt="astronauts in space" />
					</div>
				</div>
			</section>
		</>
	);
}

export default Banner;
