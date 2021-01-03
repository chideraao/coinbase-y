import React, { useState } from "react";
import Sid from "../logos/sidcoelhoprabhu.60bcc51f9108e8abaf78de4525874472.png";
import Priyanka from "../logos/priyankasood.ec60aa3aae4336d939d42704a87a6379.png";
import Jesse from "../logos/jessepollak.c96316ea7cafae6de036e2527e3ef1ce.png";
import Carly from "../logos/carlyemmer.b0f43bc4395d3a75a73e68128af68847.png";
import Reuben from "../logos/reubenbramanathan.a646e7f318117d80abd946064919a0fc.png";
import Dianne from "../logos/dianneaskew.d16ff82b78f82768afaaf4398c6100d6.png";
import Dee from "../logos/deegoens.773292cd5ed31bc603eae84f7b30c8e3.png";
import { ReactComponent as Manila } from "../logos/manila.svg";
import { ReactComponent as Dublin } from "../logos/dublin.svg";
import { ReactComponent as London } from "../logos/london.svg";
import { ReactComponent as NewYork } from "../logos/newyork.svg";
import { ReactComponent as Portland } from "../logos/portland.svg";
import { ReactComponent as Remote } from "../logos/remote.svg";
import { ReactComponent as Redwood } from "../logos/redwood.svg";
import { ReactComponent as Singapore } from "../logos/singapore.svg";
import { ReactComponent as Tokyo } from "../logos/tokyo.svg";
import { ReactComponent as SanFrancisco } from "../logos/sanfrancisco.svg";

export const ReviewsContext = React.createContext();

export const ReviewsProvider = (props) => {
	const [career, setCareer] = useState({
		/**state for carousel in Careers*/
		reviews: [
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
					"People here don’t just care about what you know, they care about you as a person. When you interview here, it’s not about just whether you’ll be good for Basecoin, but if Basecoin will be good for you.",
			},
			{
				id: 3,
				name: "Jesse Pollak",
				title: "Engineering Manager",
				img: Jesse,
				text:
					"Basecoin is growing fast, but there are still more challenges than there are people. So if finding and solving problems lights you up, you’ll have fun here.",
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
					"There are really good friendships here. Basecoin people are driven, passionate, generous with their time—it’s unbelievable how kind everyone is.",
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

		/* state for the joblist items*/
		openings: [
			{ title: "Business Development & Sales", num: 4 },
			{ title: "Business Operations & Startegy", num: 7 },
			{ title: "Corporate Development", num: 2 },
			{ title: "Customer Experience", num: 15 },
			{ title: "Data", num: 4 },
			{ title: "Design", num: 17 },
			{ title: "Engineering - Backend", num: 19 },
			{ title: "Engineering - Data", num: 4 },
			{ title: "Engineering - Frontend", num: 4 },
			{ title: "Engineering - Infrastructure", num: 1 },
			{ title: "Engineering - Leadership", num: 4 },
			{ title: "Engineering - Mobile", num: 7 },
			{ title: "Engineering - Security", num: 10 },
			{ title: "Finance & Accounting", num: 9 },
			{ title: "HR & Recruiting", num: 63 },
			{ title: "Internships & University Grad Positions", num: 1 },
			{ title: "IT", num: 3 },
			{ title: "Legal & Compliance", num: 25 },
			{ title: "Marketing & Communications", num: 4 },
			{ title: "Product", num: 18 },
			{ title: "Security & Privacy", num: 9 },
			{ title: "Unlisted", num: 1 },
		],

		/**state for locations container */
		locations: [
			{ svg: SanFrancisco, city: "San Francisco, CA", number: 54 },
			{ svg: Redwood, city: "Redwood City, CA", number: 1 },
			{ svg: NewYork, city: " New York, NY", number: 17 },
			{ svg: Portland, city: "Portland, OR", number: 10 },
			{ svg: London, city: "London, UK", number: 4 },
			{ svg: Tokyo, city: "Tokyo, Japan", number: 6 },
			{ svg: Dublin, city: "Dublin, Ireland", number: 6 },
			{ svg: Manila, city: "Manila, Phillipines", number: 1 },
			{ svg: Singapore, city: "Singapore", number: 0 },
			{ svg: Remote, city: "Remote", number: 76 },
		],
	});
	return (
		<ReviewsContext.Provider value={[career, setCareer]}>
			{props.children}
		</ReviewsContext.Provider>
	);
};
