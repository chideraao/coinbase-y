import React, { useContext } from "react";
import AboutFooter from "../Components/AboutFooter";
import AboutHeader from "../Components/AboutHeader";
import { AboutContext } from "../State/AboutContext";
import office from "../logos/office2-51b6aa31b086d8bd194fee5b57fd0102d85f172ed587790fe1a154223a4dc6ef.jpg";

function About() {
	const [about, , setAbout] = useContext(AboutContext);

	const { execs, boards, investors } = about;

	console.log(execs);
	console.log(boards);
	console.log(investors);

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
								<a className="about" href="/about">
									About
								</a>
							</li>
							<li>
								<a className="careers" href="/careers">
									Careers
								</a>
							</li>
							<li>
								<a className="mission" href="/prices">
									Mission
								</a>
							</li>
							<li>
								<a className="press" href="/press">
									Press
								</a>
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
			<section>
				<div className=" grid">
					<div>
						<img src={office} alt="astronauts in space" />
					</div>
					<div className="banner-footer-text">
						<h2>Earn up to $164 worth of crypto</h2>
						<p>
							Discover how specific cryptocurrencies work — and get a bit of
							each crypto to try out for yourself.
						</p>
						<a href="" className="btn btn-outline">
							Start earning
						</a>
					</div>
				</div>
			</section>
			<AboutFooter />
		</div>
	);
}

export default About;
