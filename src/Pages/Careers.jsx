import React, { useContext, useState } from "react";
import office from "../logos/office.799832e7d5b5d376988f93e2e8ba006e.webp";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ReviewsContext } from "../State/ReviewsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-bootstrap/Carousel";

function Careers() {
	const [career, setCareer] = useContext(ReviewsContext);
	const [index, setIndex] = useState(0);
	const [slideIn, setSlideIn] = useState(false);

	const { reviews, openings, locations } = career;

	console.log(locations);

	const increment = () => {
		if (index <= 5) {
			setSlideIn(true);
			setIndex(index + 1);

			setTimeout(() => {
				setSlideIn(null);
			}, 1000);
		}
	};

	const decrement = () => {
		if (index >= 1) {
			setSlideIn(false);
			setIndex(index - 1);

			setTimeout(() => {
				setSlideIn(null);
			}, 1000);
		}
	};

	console.log(career);
	return (
		<div className="careers">
			<Header />
			<div className="header-container">
				<section className="showcase">
					<div className="container">
						<h1>We saved a seat for you</h1>
					</div>
				</section>
				<section className="video-container">
					<div className="container flex">
						<div className="video">
							<iframe
								title="Basecoin mission and strategy"
								width="720"
								height="405"
								src="https://www.youtube.com/embed/HQaegigv6jU"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
						<div className="button-div">
							<a href="#" className="btn btn-outline">
								View all positions
							</a>
							<a href="#" className="btn btn-outline">
								Visit our blog
							</a>
						</div>
					</div>
				</section>
			</div>
			<hr />
			<section className="info">
				<div className="container">
					<div className="grid">
						<div className="info-media">
							<img src={office} alt="colleagues having a discussion" />
						</div>
						<div className="info-text">
							<h2>Working at Basecoin</h2>
							<p>
								We’ve taken a huge challenge and made it into our mission: To
								create an open financial system for the world. To achieve this,
								we are building a team of smart, creative, passionate optimists,
								the kind of people who see opportunity where others see
								roadblocks. If this sounds like you,{" "}
								<a href="#">check out our open roles.</a>
							</p>
						</div>
					</div>

					<div className="grid">
						<div className="info-text">
							<h2>Our values</h2>
							<p>
								Our values inform our behavior and the choices we make every
								day. As a result, our culture is a model of the world we’re
								trying to build: transparent, joyful, curious, and fast-moving.{" "}
								<a href="#">Our values</a> are a large part of why Basecoin is a
								great place to work, and why we’ve been successful. They are
								much more than words to us (and we have the emojis to prove it).
							</p>
						</div>
						<div className="info-media">
							<iframe
								id="mid-frame"
								title="Basecoin values"
								width="535"
								height="301"
								src="https://www.youtube.com/embed/Ixo93EaaIy0"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
					<div className="grid">
						<div className="info-media">
							<iframe
								title="Basecoin careers: working at Basecoin"
								width="535"
								height="301"
								src="https://www.youtube.com/embed/iWA1eLgSmfM"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
						<div className="info-text">
							<h2>Our mission</h2>
							<p>
								We think achieving <a href="#">our mission </a> is the highest
								leverage way to bring about more economic freedom, innovation,
								efficiency, and equality of opportunity in the world. Each
								member of our team—every engineer, designer, kitchen team
								member, lawyer, writer, support coordinator, recruiter, and
								product manager—plays an important role in helping us achieve
								our mission.
							</p>
						</div>
					</div>
				</div>
			</section>
			<hr />

			<section className="testimonials">
				<div className="container">
					{/* <div className="testimonials-container">
						<div className="testimonials-header">
							<h1>What people say</h1>
						</div>
						<Carousel>
							{reviews.map((review) => {
								return (
									<Carousel.Item>
										<div className="testimonials-quote">
											<h1>" {review.text} "</h1>
										</div>
										<div className="testimonials-details flex">
											<img src={review.img} alt={`${review.name} img`} />
											<div className="testimonials-credentials">
												<h3>{review.name}</h3>
												<p>{review.title} </p>
											</div>
										</div>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</div> */}

					<div className="flex">
						{index >= 1 ? (
							<FontAwesomeIcon
								className="font-awesome"
								fontWeight="light"
								icon="chevron-left"
								onClick={decrement}
								size="3x"
							/>
						) : (
							""
						)}
						<div className="testimonials-container">
							<div className="testimonials-header">
								<h1>What people say</h1>
							</div>
							<div className={slideIn ? "slide-in" : "slide-out"}>
								<div className="testimonials-quote">
									<h1>" {reviews[index].text} "</h1>
								</div>
								<div className="testimonials-details flex">
									<img
										src={reviews[index].img}
										alt={`${reviews[index].name} img`}
									/>
									<div className="testimonials-credentials flex">
										<h3>{reviews[index].name}</h3>
										<p>{reviews[index].title} </p>
									</div>
								</div>
							</div>
						</div>

						{index <= 5 ? (
							<FontAwesomeIcon
								className="font-awesome"
								fontWeight="light"
								icon="chevron-right"
								onClick={increment}
								size="3x"
							/>
						) : (
							""
						)}
					</div>
					<div className="testimonials-dots flex">
						<div
							className={
								index === 0 ? "testimonials-dot-active" : "testimonials-dot"
							}
						></div>
						<div
							className={
								index === 1 ? "testimonials-dot-active" : "testimonials-dot"
							}
						></div>
						<div
							className={
								index === 2 ? "testimonials-dot-active" : "testimonials-dot"
							}
						></div>
						<div
							className={
								index === 3 ? "testimonials-dot-active" : "testimonials-dot"
							}
						></div>
						<div
							className={
								index === 4 ? "testimonials-dot-active" : "testimonials-dot"
							}
						></div>
						<div
							className={
								index === 5 ? "testimonials-dot-active" : "testimonials-dot"
							}
						></div>
						<div
							className={
								index === 6 ? "testimonials-dot-active" : "testimonials-dot"
							}
						></div>
					</div>
				</div>
			</section>
			<hr />
			<section className="locations">
				<div className="container">
					<div className="locations-heading">
						<h1>Choose your office</h1>
					</div>
					<div className="locations-container grid">
						{locations.map((location) => {
							console.log(location.svg);
							return (
								<a href="#">
									{" "}
									<div className="locations-card card">
										<location.svg />
										<h2>{location.city}</h2>
										<p>{location.number} openings</p>
									</div>
								</a>
							);
						})}
					</div>
				</div>
			</section>

			<section className="openings">
				<div className="container">
					<div className="openings-heading">
						<h1>Choose your team</h1>
					</div>

					{openings.map((opening) => {
						return (
							<a href="#">
								<div className="openings-items flex">
									<h2> {opening.title}</h2>
									<div className="openings-number flex">
										<h2>{opening.num} </h2>
										<FontAwesomeIcon
											className="font-awesome"
											fontWeight="light"
											icon="chevron-right"
											size="2x"
										/>
									</div>
								</div>
							</a>
						);
					})}
				</div>
			</section>

			<section className="legal">
				<div className="container">
					<h1>Commitment</h1>
					<p>
						Basecoin is committed to diversity in its workforce and is proud to
						be an equal opportunity employer. Basecoin does not make hiring or
						employment decisions on the basis of race, color, religion, creed,
						gender, national origin, age, disability, veteran status, marital
						status, pregnancy, sex, gender expression or identity, sexual
						orientation, citizenship, or any other basis protected by applicable
						local, state or federal law. Basecoin will also consider for
						employment qualified applicants with arrest and conviction records
						in a manner consistent with San Francisco’s Fair Chance Ordinance
						and similar local laws.
					</p>
					<p>
						Basecoin is also committed to providing reasonable accommodations to
						individuals with disabilities. If you need a reasonable
						accommodation because of a disability for any part of the employment
						process, please send an e-mail to{" "}
						<a href="#">accommodations@basecoin.com</a> and let us know the
						nature of your request and your contact information.
					</p>
					<p>
						For quick access to screen reading technology compatible with this
						site click here to download a free compatible screen reader (
						<a href="#">free step by step tutorial can be found here</a>).
						Please contact accommodations@basecoin.com for additional
						information or to request accommodations.
					</p>

					<h1>E-Verify</h1>
					<p>
						Basecoin participates in the <a href="">E-Verify program</a> in
						certain locations, as required by law.
					</p>
					<h1>Global Data Privacy Notice for Job Candidates and Applicants</h1>
					<p>
						Depending on your location, the General Data Protection Regulation
						(GDPR) and California Consumer Privacy Act (CCPA) may regulate the
						way we manage the data of job applicants. Our full notice outlining
						how data will be processed as part of the application procedure for
						applicable locations is available here: <a href="#">Ireland/EU</a>,{" "}
						<a href="#">United Kingdom</a>, and <a href="#">California</a>. By
						submitting your application, you are agreeing to our use and
						processing of your data as required.
					</p>
				</div>
			</section>

			<Banner />
			<Footer />
		</div>
	);
}

export default Careers;
