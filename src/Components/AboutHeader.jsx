/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../customHook/UseMediaQuery";

function AboutHeader() {
	let isPageSmall = useMediaQuery("(max-width: 800px)");

	return (
		<div className="about-header">
			{isPageSmall && (
				<div className="narrow-header flex">
					<div className="">
						<Link to="/">
							<h1 className="logo">basecoin</h1>
						</Link>
					</div>
					<div className="menu-bar">
						<FontAwesomeIcon
							className="font-awesome"
							fontWeight="light"
							icon="bars"
							size="2x"
						/>
					</div>
				</div>
			)}
			{!isPageSmall && (
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
			)}
		</div>
	);
}

export default AboutHeader;
