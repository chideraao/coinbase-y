import React from "react";
import { Link } from "react-router-dom";
import AboutFooter from "../Components/AboutFooter";
import AboutHeader from "../Components/AboutHeader";
import BlueSquare from "../logos/square-blue-5d2184a32860bee22d0f30233233afa2e1a58c16072fd244684232454e66a114.png";
import WhiteSquare from "../logos/square-white-362d267603b5e5f225f7b78d227e2ffb27cd74d07e48496ccd7ad69da9e24c03.png";

function Press() {
	return (
		<div className="press">
			<div className="header-container">
				<AboutHeader />
				<section className="showcase">
					<div className="container">
						<h1>Press & Media</h1>
					</div>
				</section>
			</div>
			<section className="subnav">
				<div className="container">
					<nav className="nav">
						<ul className="flex">
							<li>
								<Link to="/about" className="about">
									About
								</Link>
							</li>

							<li>
								<Link to="/careers" className="careers">
									Careers
								</Link>
							</li>

							<li>
								<Link to="/mission" className="mission">
									Mission
								</Link>
							</li>

							<li>
								<Link to="/press" className="press">
									Press{" "}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<hr />
			</section>
			<section className="press-main">
				<div className="container">
					<h3>PRESS</h3>
					<hr />
					<p>
						Announcements can be found in our <a href="#">blog</a>. Press
						contact: <a href="mailto:press@coinbase.com">press@coinbase.com</a>
					</p>
					<div className="press-main-img flex">
						<div className="flex-column">
							<img src={BlueSquare} alt="coinbase white bg" />
							<div className="flex">
								{" "}
								<a href="">PNG</a>
								<a href="">EPS</a>
							</div>
						</div>
						<div className="">
							<div className="flex-column">
								<img src={WhiteSquare} alt="coinbase bule bg" />
								<div className="flex">
									<a href="">PNG</a>
									<a href="">EPS</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<AboutFooter />
		</div>
	);
}

export default Press;
