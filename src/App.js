import "./CSS/App.css";
import "./CSS/Utilities.css";
import Header from "./Components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<section className="showcase">
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
			</section>
			<section className="banner">
				<div className="banner-text">
					<h2>Earn up to $164 worth of crypto</h2>
					<p>
						Discover how specific cryptocurrencies work — and get a bit of each
						crypto to try out for yourself.
					</p>
					<a href="" className="btn btn-outline">
						Start earning
					</a>
				</div>
				<div className="banner-icons">
					<div className="icon-item">
						<i>band</i>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
