import React from "react";

function AboutHeader() {
	return (
		<div className="about-header">
			<div className="navbar flex container">
				<div className="flex">
					<a href="/">
						{" "}
						<h1 className="logo">basecoin</h1>
					</a>
				</div>
				<div className="auth">
					<nav className="nav">
						<ul>
							<li>
								<a className="products" href="/products">
									Products
								</a>
							</li>
							<li>
								<a className="help" href="/help">
									Help
								</a>
							</li>
							<li>
								<a className="prices" href="/prices">
									Prices
								</a>
							</li>
						</ul>
					</nav>
					<a href="" className="btn">
						Sign In
					</a>
					<a href="" className="btn btn-outline">
						Sign Up
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutHeader;
