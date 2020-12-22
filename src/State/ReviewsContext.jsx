import React, { useState } from "react";
import Sid from "../logos/sidcoelhoprabhu.566943ea6b5454b3e9ff80b1e9ee9a79.webp";
import Priyanka from "../logos/priyankasood.02ea40b434473d0b165691d7f9e38672.webp";
import Jesse from "../logos/jessepollak.2a5bb1e592e456f28495b6227822d4cb.webp";
import Carly from "../logos/carlyemmer.54f2c08ca93550c2494789f7588ec8b5.webp";
import Reuben from "../logos/reubenbramanathan.c9c98c78a127200e6b673069a41c79a0.webp";
import Dianne from "../logos/dianneaskew.dfcb026ce8ea9dfad5571c6bf515966a.webp";
import Dee from "../logos/deegoens.2310923cabf68be8fd2ad4b9656dbbdd.webp";

export const ReviewsContext = React.createContext();

export const ReviewsProvider = (props) => {
	const [career, setCareer] = useState({
		review: [
			{
				id: 1,
				name: "Sid Coelho-Prabhu",
				title: "Product Lead",
				img: Sid,
				text:
					"I’ve worked on Wall Street, I’ve worked in government, and as an entrepreneur. With cryptocurrency, we’re doing something totally new that could change the world. That sets us apart, not just from other financial services companies, but from almost any other organization.",
			},
			{
				id: 2,
				name: "Priyanka Sood",
				title: "Consumer Advocate",
				img: Priyanka,
				text:
					"People here don’t just care about what you know, they care about you as a person. When you interview here, it’s not about just whether you’ll be good for Coinbase, but if Coinbase will be good for you.",
			},
			{
				id: 3,
				name: "Jesse Pollak",
				title: "Engineering Manager",
				img: Jesse,
				text:
					"Coinbase is growing fast, but there are still more challenges than there are people. So if finding and solving problems lights you up, you’ll have fun here.",
			},
			{
				id: 4,
				name: "Carly Emmer",
				title: "Business Ops and Strategy",
				img: Carly,
				text:
					"I love that while people care about our mission for a variety of reasons, we all come together as a high-performing culture. As with any job, there are times when it’s hard, but it's easy to stay motivated working with passionate people.",
			},
			{
				id: 5,
				name: "Reuben Bramanathan",
				title: "Product Manager",
				img: Reuben,
				text:
					"There are really good friendships here. Coinbase people are driven, passionate, generous with their time—it’s unbelievable how kind everyone is.",
			},
			{
				id: 6,
				name: "Dianne Askew",
				title: "Software Engineer",
				img: Dianne,
				text:
					"Especially in our engineering culture, we deliver on our value of continuous learning. There are tons of internal presentations and work shares, which is awesome when so many groups are working to solve really interesting problems.",
			},
			{
				id: 7,
				name: "Dee Goens",
				title: "Risk Management Specialist",
				img: Dee,
				text:
					"There are so few barriers to good ideas and opportunities here—you can create change regardless of your role. It’s inspiring to know that we want to maintain that culture as we grow.",
			},
		],
		openings: [],
	});
	return (
		<ReviewsContext.Provider value={[career, setCareer]}>
			{props.children}
		</ReviewsContext.Provider>
	);
};
