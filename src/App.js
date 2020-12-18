import "./CSS/App.css";
import "./CSS/Utilities.css";
import band from "./logos/band.svg";
import comp from "./logos/compound-comp-logo.svg";
import celo from "./logos/celo-celo-logo.svg";
import maker from "./logos/maker-mkr-logo.svg";
import Header from "./Components/Header";
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
							Coinbase is the easiest place to buy, sell, and manage your
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
						<div className="icon-item flex">
							<img src={band} alt="band crypto svg" />
							<h2>Band</h2>
							<h3>BAND</h3>
							<span>Earn $43 BAND</span>
						</div>
						<div className="icon-item flex">
							<img src={maker} alt="maker crypto svg" />
							<h2>Maker</h2>
							<h3>MKR</h3>
							<span>Earn $6 MKR</span>
						</div>
						<div className="icon-item flex">
							<img src={celo} alt="celo crypto svg" />
							<h2>Celo</h2>
							<h3>CGLD</h3>
							<span>Earn $6 CGLD</span>
						</div>
						<div className="icon-item flex">
							<img src={comp} alt="comp crypto svg" />
							<h2>Compound</h2>
							<h3>COMP</h3>
							<span>Earn $43 COMP</span>
						</div>
					</div>
				</div>
			</section>
			<ChartTable />
		</div>
	);
}

export default App;
