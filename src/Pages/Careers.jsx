import React, { useState } from "react";
import office from "../logos/office.799832e7d5b5d376988f93e2e8ba006e.webp";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Careers() {
	const [review, setReview] = useState([
		{
			id: 1,
			name: "Sid Coelho-Prabhu",
			title: "Product Lead",
			img: "",
			text:
				"I’ve worked on Wall Street, I’ve worked in government, and as an entrepreneur. With cryptocurrency, we’re doing something totally new that could change the world. That sets us apart, not just from other financial services companies, but from almost any other organization.",
		},
		{
			id: 2,
			name: "Priyanka Sood",
			title: "Consumer Advocate",
			img: "",
			text:
				"People here don’t just care about what you know, they care about you as a person. When you interview here, it’s not about just whether you’ll be good for Coinbase, but if Coinbase will be good for you.",
		},
		{
			id: 3,
			name: "Jesse Pollak",
			title: "Engineering Manager",
			img: "",
			text:
				"Coinbase is growing fast, but there are still more challenges than there are people. So if finding and solving problems lights you up, you’ll have fun here.",
		},
		{
			id: 4,
			name: "Carly Emmer",
			title: "Business Ops and Strategy",
			img: "",
			text:
				"I love that while people care about our mission for a variety of reasons, we all come together as a high-performing culture. As with any job, there are times when it’s hard, but it's easy to stay motivated working with passionate people.",
		},
		{
			id: 5,
			name: "Reuben Bramanathan",
			title: "Product Manager",
			img: "",
			text:
				"There are really good friendships here. Coinbase people are driven, passionate, generous with their time—it’s unbelievable how kind everyone is.",
		},
		{
			id: 6,
			name: "Dianne Askew",
			title: "Software Engineer",
			img: "",
			text:
				"Especially in our engineering culture, we deliver on our value of continuous learning. There are tons of internal presentations and work shares, which is awesome when so many groups are working to solve really interesting problems.",
		},
		{
			id: 7,
			name: "Dee Goens",
			title: "Risk Management Specialist",
			img: "",
			text:
				"There are so few barriers to good ideas and opportunities here—you can create change regardless of your role. It’s inspiring to know that we want to maintain that culture as we grow.",
		},
	]);
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

			<Banner />
			<Footer />
		</div>
	);
}

export default Careers;
