import React, { useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { EarnContext } from "../State/EarnContext";

function Earn() {
	const [earn, setEarn] = useContext(EarnContext);

	const { courses, views, anoms } = earn;

	console.log(courses);
	console.log(views);

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
			</div>
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
			<Footer />
		</div>
	);
}

export default Earn;
