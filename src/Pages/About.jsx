import React from "react";
import AboutFooter from "../Components/AboutFooter";
import AboutHeader from "../Components/AboutHeader";

function About() {
	return (
		<div className="about">
			<AboutHeader />
			<section className="showcase">
				<div className="container">
					<h1>About Basecoin</h1>
				</div>
			</section>
			<section className="subnav">
				<div className="container">
					<nav className="nav">
						<ul className="flex">
							<li>
								<a className="about" href="/about">
									About
								</a>
							</li>
							<li>
								<a className="careers" href="/careers">
									Careers
								</a>
							</li>
							<li>
								<a className="mission" href="/prices">
									Mission
								</a>
							</li>
							<li>
								<a className="press" href="/press">
									Press
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<hr />
			</section>
			<section className="main">
				<div className="container">
					<div className="main-text">
						<h2>Basecoin is how the world uses crypto</h2>
						<p>
							In 2012, Coinbase had the radical idea that anyone — anywhere —
							should be able to easily and securely access Bitcoin. We see
							cryptocurrency as the future of money and a catalyst for creating
							an open financial system around the world.
						</p>
						<p>
							Today, more than 35 million people in over 100 countries trust
							Basecoin to buy, sell, store, use and earn cryptocurrency.
						</p>
					</div>
					<div className="main-stats">
						<h2>
							Stats
							<h3></h3>
							<h3></h3>
							<h3></h3>
							<h3></h3>
							<h3></h3>
						</h2>
					</div>
				</div>
			</section>
			<AboutFooter />
		</div>
	);
}

export default About;
