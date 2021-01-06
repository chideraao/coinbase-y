/* eslint-disable jsx-a11y/anchor-is-valid */
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
							<Link className="prices" to="/prices">
								<li>Prices</li>
							</Link>
							<Link className="learn-head" to="/learn">
								<li>Learn</li>
							</Link>
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
