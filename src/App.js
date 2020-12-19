import "./CSS/App.css";
import "./CSS/Utilities.css";
import band from "./logos/band.svg";
import comp from "./logos/compound-comp-logo.svg";
import celo from "./logos/celo-celo-logo.svg";
import maker from "./logos/maker-mkr-logo.svg";
import { ReactComponent as Portfolio } from "./logos/manage-portfolio.svg";
import { ReactComponent as Vault } from "./logos/vault-protection.svg";
import { ReactComponent as Recurring } from "./logos/recurring-buys.svg";
import { ReactComponent as Mobile } from "./logos/mobile-apps.svg";
import Header from "./Components/Header";
import overlay from "./logos/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp";
import ChartTable from "./Components/ChartTable";

function App() {
	return (
		<div className="App">
			<Header />
			<section className="showcase">
				<div className="container">
					<div className="showcase-text">
						<h1>Buy and sell cryptocurrency</h1>
						<p>
							Basecoin is the easiest place to buy, sell, and manage your
							cryptocurrency portfolio.
						</p>
					</div>
					<div className="showcase-form">
						<form className="email-form flex">
							<label htmlFor="email">
								<input type="email" placeholder="Email address"></input>
							</label>
							<label htmlFor="submit-button">
								<button className="btn btn-outline">Get Started</button>
							</label>
						</form>
					</div>
				</div>
			</section>

			<section className="banner ">
				<div className="container grid">
					{" "}
					<div className="banner-text">
						<h2>Earn up to $164 worth of crypto</h2>
						<p>
							Discover how specific cryptocurrencies work — and get a bit of
							each crypto to try out for yourself.
						</p>
						<a href="" className="btn btn-outline">
							Start earning
						</a>
					</div>
					<div className="banner-icons">
						<a href="/">
							<div className="icon-item flex">
								<img src={band} alt="band crypto svg" />
								<h2>Band</h2>
								<h3>BAND</h3>
								<span>Earn $43 BAND</span>
							</div>
						</a>
						<a href="/">
							{" "}
							<div className="icon-item flex">
								<img src={maker} alt="maker crypto svg" />
								<h2>Maker</h2>
								<h3>MKR</h3>
								<span>Earn $6 MKR</span>
							</div>
						</a>
						<a href="/">
							<div className="icon-item flex">
								<img src={celo} alt="celo crypto svg" />
								<h2>Celo</h2>
								<h3>CGLD</h3>
								<span>Earn $6 CGLD</span>
							</div>
						</a>
						<a href="/">
							{" "}
							<div className="icon-item flex">
								<img src={comp} alt="comp crypto svg" />
								<h2>Compound</h2>
								<h3>COMP</h3>
								<span className="comp-span">Earn $43 COMP</span>
							</div>
						</a>

						<a className="banner-btn" href="/">
							{"View More >"}
						</a>
					</div>
				</div>
			</section>
			<section className="overlay">
				<div className="container">
					{" "}
					<div className="overlay-head">
						<h1>Create your cryptocurrency portfolio today</h1>
						<p>
							Coinbase has a variety of features that make it the best place to
							start trading
						</p>
					</div>
					<div className="overlay-icons grid">
						<div className="overlay-text-container">
							<div className="overlay-text flex">
								{" "}
								<Portfolio className="overlay-svg" />
								<div>
									{" "}
									<h2>Manage your portfolio</h2>
									<p>
										Buy and sell popular digital currencies, keep track of them
										in the one place.
									</p>
								</div>
							</div>
							<div className="overlay-text flex">
								{" "}
								<Recurring className="overlay-svg" />
								<div>
									<h2>Recurring buys</h2>
									<p>
										Invest in cryptocurrency slowly over time by scheduling buys
										daily, weekly, or monthly.
									</p>
								</div>
							</div>
							<div className="overlay-text flex">
								{" "}
								<Vault className="overlay-svg" />
								<div>
									<h2>Vault protection</h2>
									<p>
										For added security, store your funds in a vault with time
										delayed withdrawals.
									</p>
								</div>
							</div>
							<div className="overlay-text flex">
								{" "}
								<Mobile className="overlay-svg" />
								<div>
									<h2>Mobile apps</h2>
									<p>
										Stay on top of the markets with the Coinbase app for Android
										or iOS.
									</p>
								</div>
							</div>
						</div>
						<div className="overlay-img">
							{" "}
							<img src={overlay} alt="coinbase overlay" />
						</div>
					</div>
				</div>
			</section>
			<ChartTable />
		</div>
	);
}

export default App;
