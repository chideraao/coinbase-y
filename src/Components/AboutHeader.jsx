/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function AboutHeader() {
	return (
		<div className="about-header">
			<div className="navbar flex container">
				<div className="flex">
					<Link to="/">
						{" "}
						<h1 className="logo">basecoin</h1>
					</Link>
				</div>
				<div className="auth">
					<nav className="nav">
						<ul>
							<li>
								<Link className="products" to="/products">
									Products
								</Link>
							</li>
							<li>
								<Link className="help" to="/help">
									Help
								</Link>
							</li>
							<li>
								<Link className="prices" to="/prices">
									Prices
								</Link>
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
