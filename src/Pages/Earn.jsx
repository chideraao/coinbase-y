import React, { useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { EarnContext } from "../State/EarnContext";
import { ReactComponent as Watch } from "../logos/icon-watch.svg";
import { ReactComponent as Earning } from "../logos/icon-earn.svg";
import { ReactComponent as Quiz } from "../logos/icon-quiz.svg";
import { ReactComponent as Start } from "../logos/icon-start.svg";

function Earn() {
	const [earn, setEarn] = useContext(EarnContext);

	const { courses, views } = earn;

	return (
		<div className="earn">
			<div className="header-container">
				<Header />
				<section className="showcase">
					<div className="container flex">
						<h1>Earn crypto while learning about crypto</h1>
						<p>
							Discover how specific cryptocurrencies work — and get a bit of
							each crypto to try out for yourself.
						</p>
						<a href="#" className="btn">
							Start earning
						</a>
					</div>
				</section>
				<section className="cryptos-list">
					<div className="container">
						{courses.map((course) => {
							return (
								<a href="">
									<div className="course-container card grid">
										<div className="course-img-wrapper">
											<img src={course.img} alt={`${course.name} img`} />
										</div>
										<div className="course-text-wrapper flex-column">
											<course.logo className="course-logo" />
											<div className="main-text">
												<div className="flex">
													{" "}
													<h3>{course.name}</h3>
													<h4>{course.abbr}</h4>
												</div>

												<p> {course.text}</p>

												<div className="flex flex-between">
													<a href="#" className="btn">
														Start Course
													</a>
													<p>
														Earn ${course.earn} {course.abbr}
													</p>
												</div>
											</div>
										</div>
									</div>
								</a>
							);
						})}
						{views.map((view) => {
							return (
								<a href="">
									<div className="course-container card grid">
										<div className="course-img-wrapper">
											<img src={view.img} alt={`${view.name} img`} />
										</div>
										<div className="course-text-wrapper flex-column">
											<view.logo className="course-logo" />
											<div className="main-text">
												<div className="flex">
													<h3>{view.name}</h3>
													<h4>{view.abbr}</h4>
												</div>

												<p> {view.text}</p>
												<div className="flex flex-between">
													<a href="#" className="view btn">
														View
													</a>
												</div>
											</div>
										</div>
									</div>
								</a>
							);
						})}
					</div>
				</section>
				<hr />
				<section className="getstarted">
					<div className="container">
						<h1>How does Basecoin Earn work?</h1>
						<div className="icon-container grid">
							<div className="icon-item-container">
								<Watch />
								<h2>Watch videos</h2>
								<p>
									We’ve created educational videos to teach you about different
									cryptocurrencies.
								</p>
							</div>
							<div className="icon-item-container">
								<Quiz />
								<h2>Complete a quiz</h2>
								<p>
									After each video you’ll receive a simple quiz testing what
									you’ve learned.
								</p>
							</div>
							<div className="icon-item-container">
								<Earning />
								<h2>Earn</h2>
								<p>
									You’ll receive crypto in your Basecoin wallet for every quiz
									you complete.
								</p>
							</div>
							<div className="icon-item-container">
								<Start />
								<h2>Start today</h2>
								<p>
									Earn opportunities are only available for a limited time to a
									small set of customers.
								</p>
							</div>
						</div>
					</div>
				</section>
				<hr />
			</div>

			<Footer />
		</div>
	);
}

export default Earn;
