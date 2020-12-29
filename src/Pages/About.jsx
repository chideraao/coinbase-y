import React, { useContext } from "react";
import AboutFooter from "../Components/AboutFooter";
import AboutHeader from "../Components/AboutHeader";
import { AboutContext } from "../State/AboutContext";
import { ReactComponent as Support } from "../logos/question.svg";
import { ReactComponent as Press } from "../logos/press.svg";
import { ReactComponent as Mailing } from "../logos/mailing.svg";
import { Link } from "react-router-dom";

function About() {
	const [about, , setAbout] = useContext(AboutContext);

	const { execs, boards, investors } = about;

	return (
		<div className="about">
			<AboutHeader />
			<section className="showcase">
				<div className="container">
					<h1>About Basecoin</h1>
				</div>
			</section>
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
			<section className="main">
				<div className="container grid">
					<div className="main-text">
						<h2>Basecoin is how the world uses crypto</h2>
						<p>
							In 2012, Basecoin had the radical idea that anyone — anywhere —
							should be able to easily and securely access Bitcoin. We see
							cryptocurrency as the future of money and a catalyst for creating
							an open financial system around the world.
						</p>
						<p>
							Today, more than 35 million people in over 100 countries trust
							Basecoin to buy, sell, store, use and earn cryptocurrency.
						</p>
					</div>
					<div className="main-stats">
						<h2>Stats</h2>
						<h3>
							35M+
							<h4>VERIFIED USERS</h4>
						</h3>
						<h3>
							$320B+
							<h4>TOTAL VOLUME TRADED</h4>
						</h3>
						<h3>
							$25B+
							<h4>ASSETS ON PLATFORM</h4>
						</h3>
						<h3>
							100+
							<h4>COUNTRIES</h4>
						</h3>
						<h3>
							1000+
							<h4>EMPLOYEES</h4>
						</h3>
					</div>
				</div>
			</section>
			<hr />
			<section className="executives">
				<div className="container grid">
					<div className="execs">
						<h3>Our Executive Team</h3>
						<div className="grid">
							{execs.map((exec) => {
								return (
									<div className="execs-wrapper">
										<img src={exec.img} alt="" />
										<p>
											<a href="#">{exec.name}</a>
											<br />
											<h5>{exec.position}</h5>
										</p>
									</div>
								);
							})}
						</div>
					</div>
					<div className="vertical-line"></div>
					<div className="board">
						<h3>Our Board of Directors</h3>
						<div className="grid">
							{boards.map((board) => {
								return (
									<div className="board-wrapper">
										<img src={board.img} alt="" />
										<p>
											<a href="#">{board.name}</a>
											<br />
											<h5>{board.position}</h5>
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			<hr />
			<section className="investors">
				<div className="container">
					<h3>$500M+ raised from world's leading investors</h3>
					<div className="grid">
						{investors.map((investor) => {
							return (
								<div className="inverstors-wrapper">
									<img src={investor} alt="" />
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className="office">
				<div className="grid">
					<div className="fake-wrapper"></div>
					<div className="footer-text">
						<h2>Working at Basecoin</h2>
						<p>
							We believe cryptocurrency is the future of money, and that
							building a robust, trusted, and accessible cryptoeconomy will
							create a more equitable and open financial system around the
							world. If you are interested in helping us work toward this
							mission, we saved a seat for you.
						</p>
						<Link to="/careers"> View open positions {">"}</Link>
					</div>
				</div>
			</section>
			<section className="contact">
				<div className="container">
					<h3>Contact Us</h3>
				</div>
				<div className="icon-wrapper grid">
					<div className="help-center flex">
						<Support className="contact-svg" />
						<div className="icon-wrapper-text">
							<p>Support</p>
							<a href="#">Help Center</a>
						</div>
					</div>
					<div className="press flex">
						<Press className="contact-svg" />
						<div className="icon-wrapper-text">
							<p>Press</p>
							<a href="#">press@basecoin.com</a> <br />
							<a href="#">Press page {">"} </a>
						</div>
					</div>
					<div className="mailing flex">
						<Mailing className="contact-svg" />
						<div className="icon-wrapper-text">
							<p>Mailing Address</p>
							<p className="mailing-address">
								Basecoin, Inc. <br />
								100 Pine Street <br />
								Suite 1250 <br />
								San Francisco, CA 94111
							</p>
						</div>
					</div>
				</div>
			</section>
			<AboutFooter />
		</div>
	);
}

export default About;
