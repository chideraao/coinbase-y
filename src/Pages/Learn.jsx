/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Learnimg from "../logos/Learn_Illustration_What_is_a_Crypto_Wallet.png";
import Blockchain from "../logos/Learn_Illustration_Ultimate_Guide_Blockchain.png";
import Bitcoin from "../logos/Learn_Illustration_Ultimate_Guide_Bitcoin.png";
import ReadnWatch from "../logos/Learn_Illustration_Ultimate_Guide_Essential_Reading.png";
import MarketCap from "../logos/Learn_Illustration_What_is_Marketcap.png";
import DeFi from "../logos/Learn_Illustration_What_is_DeFi.png";
import Protocol from "../logos/Learn_Illustration_What_is_a_Protocol.png";
import Cryptobasics from "../logos/crypto-basics.png";
import Marketupdates from "../logos/market-update.png";
import TipsandTuts from "../logos/tips-and-tutorials.png";
import SendCrypto from "../logos/Sending_Crypto___1207png.png";
import Setupwallet from "../logos/Video_02.png";
import ThisWeek from "../logos/ThisWeekInBitcoinPrice_03__1_.png";
import AroundBlock from "../logos/Around-The-Block_Blue.png";
import EarnPNG from "../logos/earn-full.png";
import { HeaderContext } from "../State/HeaderContext";
import HeaderMenu from "../Components/HeaderMenu";

function Learn() {
	const [menuClick, setMenuClick] = useContext(HeaderContext);

	return (
		<div className="learn">
			{menuClick ? (
				<HeaderMenu />
			) : (
				<>
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
											<img src={Learnimg} alt="learn illustration" />
										</div>
										<p className="link-heading">BEGINNER'S GUIDE</p>
										<h2>What is cryptocurrency?</h2>
										<p>
											Bitcoin, Ethereum, and other crypto are revolutionizing
											how we invest, bank, and use money. Learn more in this
											beginner's guide.
										</p>
									</a>
								</div>
								<div className="popular flex-column">
									<h3 className="features-heading">Popular</h3>
									<a href="">
										<p className="link-heading">BEGINNER'S GUIDE</p>
										<h3>What is Bitcoin?</h3>
									</a>
									<a href="">
										<p className="link-heading">VIDEO TUTORIAL</p>
										<h3>How to set up a crypto wallet</h3>
									</a>
									<a href="">
										<p className="link-heading">KEY TERM</p>
										<h3>What is a Bitcoin halving?</h3>
									</a>
									<a href="">
										<p className="link-heading">BEGINNER'S GUIDE</p>
										<h3>What is a blockchain?</h3>
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
							<div className="learn-features-icons grid">
								<a href="#crypto-basics">
									<div className="flex">
										<div className="learn-features-icon">
											<img src={Cryptobasics} alt="crypto basics png" />
										</div>
										<div className="learn-features-text">
											<h3>Crypto basics</h3>
											<p>See more {">"}</p>
										</div>
									</div>
								</a>
								<a href="#tips-and-tutorials">
									<div className="flex">
										<div className="learn-features-icon">
											<img src={TipsandTuts} alt="tips and tutorials png" />
										</div>
										<div className="learn-features-text">
											<h3>Tips and tutorials</h3>
											<p>See more {">"}</p>
										</div>
									</div>
								</a>
								<a href="#market-updates">
									<div className="flex">
										<div className="learn-features-icon">
											<img src={Marketupdates} alt="market updates png" />
										</div>
										<div className="learn-features-text">
											<h3>Market updates</h3>
											<p>See more {">"}</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</section>
					<hr />
					<section className="crypto-basics" id="crypto-basics">
						<div className="container">
							<h1>Crypto basics</h1>
							<p>
								New to crypto? Not for long — start with these guides and
								explainers
							</p>
							<div className="grid">
								<a href="#">
									<div className="img-container">
										<img src={Blockchain} alt="blockchain illustration" />
										<p className="link-heading">BEGINNER'S GUIDE</p>
										<h3>What is a blockchain?</h3>
										<p>
											Cryptocurrencies like Bitcoin and Ethereum are powered by
											a technology called the blockchain.
										</p>
									</div>
								</a>
								<a href="#">
									<div className="img-container">
										<img src={Bitcoin} alt="bitcoin illustration" />
										<p className="link-heading">BEGINNER'S GUIDE</p>
										<h3>What is a Bitcoin?</h3>
										<p>
											Bitcoin is the world's first widely adopted cryptocurrency
											— it allows for secure and seamless peer-to-peer
											transactions on the internet.
										</p>
									</div>
								</a>
							</div>
							<div className="grid-4">
								<a href="#">
									<div className="img-container">
										<img
											src={ReadnWatch}
											alt="ultimate guide essential reading illustration"
										/>
										<p className="link-heading">CRYPTO RESOURCES</p>
										<h3>What to read, watch, and stream </h3>
									</div>
								</a>
								<a href="#">
									<div className="img-container">
										<img src={MarketCap} alt="market cap illustration" />
										<p className="link-heading">KEY TERM</p>
										<h3>What is market cap?</h3>
									</div>
								</a>
								<a href="#">
									<div className="img-container">
										<img src={DeFi} alt="DeFi illustration" />
										<p className="link-heading">KEY TERM</p>
										<h3>What is DeFi?</h3>
									</div>
								</a>

								<a href="#">
									{" "}
									<div className="img-container">
										<img src={Protocol} alt="protocol illustration" />
										<p className="link-heading">KEY TERM</p>
										<h3>What is a protocol?</h3>
									</div>
								</a>
							</div>
							<a href="#" className="btn">
								See more crypto basics {">"}
							</a>
						</div>
					</section>
					<section className="tips-and-tutorials" id="tips-and-tutorials">
						<div className="container">
							<h1>Tips and Tutorials</h1>
							<p>Get practical, step-by-step answers to all things crypto</p>
							<div className="grid">
								<a href="#">
									<div className="img-container">
										<img src={SendCrypto} alt="blockchain illustration" />
										<p className="link-heading">VIDEO TUTORIAL</p>
										<h3>How to send crypto</h3>
									</div>
								</a>
								<a href="">
									<div className="img-container">
										<img src={Setupwallet} alt="bitcoin illustration" />
										<p className="link-heading">VIDEO TUTORIAL</p>
										<h3>How to set up a crypto wallet</h3>
									</div>
								</a>
							</div>
							<a href="#" className="btn">
								See more tips and tutorials {">"}
							</a>
						</div>
					</section>
					<section className="learn-earn">
						<div className="container">
							<div className="grid">
								<div className="learn-earn-text">
									<h2>Earn free crypto</h2>
									<p>
										Discover how specific cryptocurrencies work — and get a bit
										of each crypto to try out for yourself.
									</p>
									<a href="/earn" className="btn">
										Start earning {">"}
									</a>
								</div>
								<div className="learn-earn-img">
									<img
										src={EarnPNG}
										alt=" scattered illustration of various crypto logos"
									/>
								</div>
							</div>
						</div>
					</section>
					<hr />
					<section className="market-updates" id="market-updates">
						<div className="container">
							<h1>Market updates</h1>
							<p>
								Understand the news and events behind the latest market moves
							</p>
							<hr />
							<div className="grid">
								<div className="">
									<h2>Around the block</h2>
									<p>Advanced insights on the crypto ecosystem</p>
									<a href="#">
										<div className="img-container">
											<img src={AroundBlock} alt="blockchain illustration" />
											<h3>Issue 10: “ETH killers” and new chains</h3>
											<p>
												Smart contract platforms and emerging competitors vie to
												challenge Ethereum’s dominance.
											</p>
										</div>
									</a>
									<a href="#">
										<h3>Issue 9: Dawn of the DeFi protocol wars</h3>
									</a>
									<a href="#">
										<h3>
											Issue 8: The promise and potential of synthetic assets
										</h3>
									</a>
								</div>
								<div className="">
									<h2>This week in Bitcoin price</h2>
									<p>Weekly deep dives on the latest crypto news</p>
									<a href="#">
										<div className="img-container">
											<img src={ThisWeek} alt="bitcoin illustration" />
											<h3>This week in Bitcoin price: Dec 22-28</h3>
											<p>
												With just a few days left in the year, Bitcoin hit
												another all-time high this week, briefly cracking the
												$28,000 mark on December 27th.
											</p>
										</div>
									</a>
									<a href="#">
										<h3>This week in Bitcoin price: Dec 15-21</h3>
									</a>
									<a href="#">
										<h3>This week in Bitcoin price: Dec 7-14</h3>
									</a>
								</div>
							</div>
							<a href="#" className="btn">
								See more market updates {" >"}
							</a>
						</div>
					</section>
					<section className="get-started">
						<div className="container">
							<h2>Buy Bitcoin in just a few minutes</h2>
							<p>
								Start with as little as $25 and pay with your bank account or
								debit card.
							</p>
							<a href="/prices" className="btn">
								Get started {">"}
							</a>
						</div>
					</section>
					<Footer />
				</>
			)}
		</div>
	);
}

export default Learn;
