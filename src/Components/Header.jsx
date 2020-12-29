import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<div className="navbar flex container">
				<div className="flex">
					<Link to="/">
						<h1 className="logo">basecoin</h1>
					</Link>

					<nav className="nav">
						<ul>
							<li>
								<a className="prices" href="/prices">
									Prices
								</a>
							</li>
							<li>
								<a className="learn" href="/learn">
									Learn
								</a>
							</li>
							<li>
								<a className="products" href="/products">
									Products
								</a>
							</li>
							<Link to="/company" className="company">
								<li>Company</li>
							</Link>

							<Link to="/earn" className="crypto">
								<li>Earn crypto</li>
							</Link>
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
