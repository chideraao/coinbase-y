import React from "react";

function AboutFooter() {
	return (
		<>
			<section className="about-footer">
				<div className="container grid">
					<div className="selectbox">
						<h3>basecoin</h3>
						<p>&copy; 2020 Basecoin</p>
					</div>
					<div className="products flex">
						<h2>Products</h2>
						<a href="#">Buy/Sell Cryptocurrency</a>
						<a href="#">Basecoin Pro</a>
						<a href="#">Basecoin Prime</a>
						<a href="#">Developer Platform</a>
						<a href="#">Basecoin Commerce</a>
					</div>
					<div className="learn flex">
						<h2>Learn</h2>
						<a href="#">Buy Bitcoin</a>
						<a href="#">Buy Bitcoin Cash</a>
						<a href="#">Buy Ethereum</a>
						<a href="#">Buy Litecoin</a>
						<a href="#">Supported Countries</a>
						<a href="#">Status</a>
					</div>
					<div className="company flex">
						<h2>Company</h2>
						<a href="/about">About</a>
						<a href="/careers">Careers</a>
						<a href="#">Press</a>
						<a href="#">Legal & Privacy</a>
						<a href="#">Support</a>
					</div>
					<div className="social flex">
						<h2>Social</h2>
						<a href="https://blog.basecoin.com">Blog</a>
						<a href="https://twitter.com">Twitter</a>
						<a href="https://facebook.com">Facebook</a>
					</div>
					<div className="language-select">
						<h2>Language</h2>
						<option
							name="language"
							id="language"
							disabled="disabled"
							value="English"
						></option>
					</div>
				</div>
				<div className="signout">
					Made with &#x2764;&#xfe0f; by Okeke Chidera
				</div>
			</section>
		</>
	);
}

export default AboutFooter;
