/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../customHook/UseMediaQuery";

function Header() {
	const [mouseOver, setMouseOver] = useState(false);

	const handleMouseOver = () => {
		setMouseOver(true);
	};

	const handleMouseLeave = () => {
		setMouseOver(false);
	};

	let isPageSmall = useMediaQuery("(max-width: 800px)");

	return (
		<div className="header">
			{isPageSmall && (
				<div className="narrow-header flex">
					<div className="flex">
						<Link to="/">
							<h1 className="logo">basecoin</h1>
						</Link>
					</div>
					<div className="menu-bar flex">
						<Link to="/earn" className="btn green-btn">
							Get $40+
						</Link>
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
								<Link
									to="#"
									className="company"
									onMouseOver={handleMouseOver}
									onMouseLeave={handleMouseLeave}
								>
									<li>
										Company &nbsp;
										<FontAwesomeIcon
											className="font-awesome-header"
											icon="chevron-down"
											size="2x"
										/>
									</li>
									{mouseOver ? (
										<div
											className="mouse-over card"
											onMouseOver={handleMouseOver}
										>
											<ul className="flex-column">
												<Link to="/about">
													<li>About us</li>
												</Link>
												<Link to="/press">
													<li>Press</li>
												</Link>
												<Link to="/careers">
													<li>Careers</li>
												</Link>
											</ul>
										</div>
									) : (
										""
									)}
								</Link>
								<Link to="/earn" className="crypto">
									<li>Earn crypto</li>
								</Link>
							</ul>
						</nav>
						<Link to="/earn" className="btn green-btn">
							Get $40+
						</Link>
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
			)}
		</div>
	);
}

export default Header;
