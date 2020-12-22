import React, { useContext, useState } from "react";
import office from "../logos/office.799832e7d5b5d376988f93e2e8ba006e.webp";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ReviewsContext } from "../State/ReviewsContext";

function Careers() {
	const [review, setReview] = useContext(ReviewsContext);
	const [index, setIndex] = useState(0);

	const increment = () => {
		setIndex(index + 1);
	};
	console.log(index);
	const decrement = () => {
		setIndex(index - 1);
	};

	console.log(review);
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
								title="Coinbase mission and strategy"
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
								Visit out blog
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
							<h2>Working at Coinbase</h2>
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
								<a href="#">Our values</a> are a large part of why Coinbase is a
								great place to work, and why we’ve been successful. They are
								much more than words to us (and we have the emojis to prove it).
							</p>
						</div>
						<div className="info-media">
							<iframe
								id="mid-frame"
								title="coinbase values"
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
								title="coinbase careers: working at coinbase"
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
					<div className="testimonials-header">
						<h1>What people say</h1>
					</div>
					<div className="testimonials-quote">
						<h1>{review[index].text}</h1>
					</div>
				</div>
				<div className="testimonials-details flex">
					<img src={review[index].img} alt={`${review[index].name} img`} />
					<div className="testimonials-credentials">
						<h2>{review[index].name}</h2>
						<p>{review[index].title} </p>
					</div>
				</div>
				<button onClick={increment}>increment</button>
				<button onClick={decrement}>decrement</button>
			</section>

			<Banner />
			<Footer />
		</div>
	);
}

export default Careers;
