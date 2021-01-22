/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [mouseOver, setMouseOver] = useState(true);

	const handleMouseOver = () => {
		setMouseOver(!mouseOver);
	};

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
							<Link
								to="/company"
								className="company"
								onMouseOver={handleMouseOver}
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
									<div className="card">
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
