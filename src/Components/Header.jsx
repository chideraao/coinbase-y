import React from "react";

function Header() {
	return (
		<div className="header">
			<div className="navbar flex container">
				<div className="flex">
					<a href="/">
						{" "}
						<h1 className="logo">basecoin</h1>
					</a>
					<nav className="nav">
						<ul>
							<li>
								<a className="prices" href="/prices">
									Prices
								</a>
							</li>
							<li>
								<a className="products" href="/products">
									Products
								</a>
							</li>
							<li>
								<a className="company" href="/company">
									Company
								</a>
							</li>
							<li>
								<a className="crypto" href="/crypto">
									Earn crypto
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="auth">
					<a href="" className="btn">
						Sign In
					</a>
					<a href="" className="btn btn-outline">
						Get Started
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
