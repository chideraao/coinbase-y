import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faBars,
	faChevronDown,
	faChevronLeft,
	faChevronRight,
	faCircleNotch,
	faFileAlt,
	faGlobe,
	faInfoCircle,
	faSearch,
	faStar,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";

import "./CSS/App.css";
import "./CSS/Utilities.css";
import About from "./Pages/About";
import Earn from "./Pages/Earn";
import { AboutProvider } from "./State/AboutContext";
import { EarnProvider } from "./State/EarnContext";
import Careers from "./Pages/Careers";
import Home from "./Pages/Home";
import { ReviewsProvider } from "./State/ReviewsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Press from "./Pages/Press";
import Learn from "./Pages/Learn";
import Prices from "./Pages/Prices";
import { GlobalProvider } from "./State/GlobalContext";
import { PricesProvider } from "./State/PricesContext";
import PriceItems from "./Pages/PriceItems";
import { PriceItemsProvider } from "./State/PriceItemsContext";
import { far } from "@fortawesome/free-regular-svg-icons";
import { HeaderProvider } from "./State/HeaderContext";

library.add(
	faChevronLeft,
	faChevronRight,
	faCircleNotch,
	faSearch,
	faChevronDown,
	faStar,
	far,
	faInfoCircle,
	faGlobe,
	faFileAlt,
	faBars,
	faTimes
);

function App() {
	return (
		<Router>
			<HeaderProvider>
				<GlobalProvider>
					<PricesProvider>
						<PriceItemsProvider>
							<EarnProvider>
								<AboutProvider>
									<ReviewsProvider>
										<div className="App">
											<Switch>
												<Route path="/" component={Home} exact />
												<Route path="/about" component={About} />
												<Route path="/careers" component={Careers} />
												<Route path="/earn" component={Earn} />
												<Route path="/press" component={Press} />
												<Route path="/learn" component={Learn} />
												<Route path="/prices" component={Prices} exact />
												<Route path="/prices/:id" component={PriceItems} />
											</Switch>
										</div>
									</ReviewsProvider>
								</AboutProvider>
							</EarnProvider>
						</PriceItemsProvider>
					</PricesProvider>
				</GlobalProvider>
			</HeaderProvider>
		</Router>
	);
}

export default App;

// const badBoys = [
// 	{
// 		name: "donald",
// 		strokeGame: "rubbish",
// 		dickGame: "rubbish",
// 		tongueGame: "absent",
// 	},
// 	{
// 		name: "jude",
// 		strokeGame: "rubbish",
// 		dickGame: "rubbish",
// 		tongueGame: "rubbish",
// 	},
// 	{
// 		name: "jerry",
// 		strokeGame: "rubbish",
// 		dickGame: "rubbish",
// 		tongueGame: "rubbish",
// 	},
// 	{
// 		name: "chidera",
// 		strokeGame: "awesome",
// 		dickGame: "magnificent",
// 		tongueGame: "heavenly",
// 	},
// ];

// <div>
// 	{badBoys.map((badBoy,index) => {
// 		return (
// 			<div key={index}> {/** this is actually one of the best ways to write your keys.
// 			 *  cause its never gonna mutate, it's sort of perfect.
// 			 * the only exception could be when you're working with an API and there's an 'id' property.
// 			 *  so you know that each value actually has a unique id.
// 			 * */}

// 				<p>{badBoy.name}</p>
// 				<p>{badBoy.strokeGame}</p>
// 				<p>{badBoy.tongueGame}</p>
// 				<p>{badBoy.dickGame}</p>
// 			</div>
// 		);
// 	})}
// </div>;
