import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Learnimg from "../logos/Learn_Illustration_What_is_a_Crypto_Wallet.png";

function Learn() {
	return (
		<div className="learn">
			<Header />
			<section className="learn-showcase">
				<div className="container">
					<div className="learn-showcase-text">
						<h1>Crypto questions, answered</h1>
						<p>
							Beginner guides, practical tips, and market updates for
							first-timers, experienced investors, and everyone in between
						</p>
					</div>
				</div>
			</section>
			<section className="learn-features">
				<div className="container">
					<div className="features-container grid">
						<div className="beginners-guide flex-column">
							<h3 className="features-heading">Featured</h3>
							<a href="#">
								<div className="learn-img">
									<img src={Learnimg} alt="learn image illustration" />
								</div>
								<p className="link-heading">BEGINNER'S GUIDE</p>
								<h2>What is cryptocurrency?</h2>
								<p>
									Bitcoin, Ethereum, and other crypto are revolutionizing how we
									invest, bank, and use money. Learn more in this beginner's
									guide.
								</p>
							</a>
						</div>
						<div className="popular flex-column">
							<h3 className="features-heading">Popular</h3>
							<a href="">
								<p className="link-heading">BEGINNER'S GUIDE</p>
								<h3>What is Bitcoin</h3>
							</a>
							<a href="">
								<p className="link-heading">VIDEO TUTORIAL</p>
								<h3>How to set up a crypto wallet</h3>
							</a>
							<a href="">
								<p className="link-heading">KEY TERM</p>
								<h3>What is a Bitcoin halving</h3>
							</a>
							<a href="">
								<p className="link-heading">BEGINNER'S GUIDE</p>
								<h3>What is a blockchain</h3>
							</a>
							<a href="">
								<p className="link-heading">CRYPTO RESOURCES</p>
								<h3>What to read, watch, and stream</h3>
							</a>
							<a href="">
								<p className="link-heading">VIDEO TUTORIAL</p>
								<h3>How to send crypto</h3>
							</a>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Learn;
